/**
 * ==========================================================================
 * BCZ TV PREMIUM - CORE IPTV LOGIC ENGINE
 * Pure JS Engine - Zero Framework Dependencies
 * ==========================================================================
 */

// 1. BRAND ASSETS MANAGEMENT CONFIGURATION
const APP_LOGO_URL = "https://i.postimg.cc/85KprBhW/Gemini-Generated-Image-ffy9icffy9icffy9.png"; 
const DEFAULT_CHANNEL_LOGO = "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=150&auto=format&fit=crop";

// 2. CHANNELS STORAGE DATA MATRIX (Dynamically parsed from global playlists)
const PLAYLISTS = [
    "https://raw.githubusercontent.com/bdtechexpert/live-tv-playlist/refs/heads/main/live-tv-playlist.m3u",
    "https://iptv-org.github.io/iptv/index.m3u",
    "https://raw.githubusercontent.com/abusaeeidx/Mrgify-Tv/refs/heads/main/playlist.m3u",
    "https://raw.githubusercontent.com/abusaeeidx/Ayna-BDIX-IPTV-Playlist/refs/heads/main/ayna-playlist.m3u",
    "https://raw.githubusercontent.com/abusaeeidx/T-Sports-Playlist-Auto-Update/refs/heads/main/combine_playlist.m3u",
    "https://raw.githubusercontent.com/sydul104/main04/refs/heads/main/my",
    "https://raw.githubusercontent.com/v5on/filoox-bdix-selected/refs/heads/main/playlist.m3u",
    "https://raw.githubusercontent.com/Koshwefull/Koshwefull/refs/heads/main/infosat.m3u"
];

let channels = [];
let failedStreams = {};

// 3. UI APPLICATION STATE VARIABLES
let activeCategory = "All";
let activeChannel = null;
let hlsInstance = null;
let renderTimeout = null;

// 4. DOM ELEMENT CACHING SELECTORS
const dom = {
    loadingScreen: document.getElementById('loading-screen'),
    progressBar: document.getElementById('progress-bar'),
    loadingLogo: document.getElementById('loading-logo'),
    appLogoImg: document.getElementById('app-logo-img'),
    appContainer: document.getElementById('app-container'),
    totalChannelsCount: document.getElementById('total-channels-count'),
    categoryTabs: document.getElementById('category-tabs'),
    channelsGrid: document.getElementById('channels-grid'),
    searchInput: document.getElementById('search-input'),
    clearSearch: document.getElementById('clear-search'),
    searchSuggestions: document.getElementById('search-suggestions'),
    emptyState: document.getElementById('empty-state'),
    player: document.getElementById('iptv-player'),
    playerPlaceholder: document.getElementById('player-placeholder'),
    playerLoader: document.getElementById('player-loader'),
    playerError: document.getElementById('player-error'),
    currentChannelName: document.getElementById('current-channel-name'),
    currentChannelCategory: document.getElementById('current-channel-category'),
    backToTop: document.getElementById('back-to-top'),
    gridScrollContainer: document.querySelector('.grid-container')
};

// ==========================================================================
// 5. APPLICATION INITIALIZATION & LOADING ENGINE
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Inject Dynamic Brand Asset Elements
    dom.loadingLogo.src = APP_LOGO_URL;
    dom.appLogoImg.src = APP_LOGO_URL;
    
    runLoadingSequence(() => {
        initIPTVApp();
    });
});

function runLoadingSequence(callback) {
    let progress = 0;
    let playlistsLoaded = false;

    // Load playists asynchronously during loading sequence
    loadPlaylists().then(() => {
        playlistsLoaded = true;
    });

    const interval = setInterval(() => {
        if (playlistsLoaded) {
            progress += Math.floor(Math.random() * 20) + 15;
        } else {
            if (progress < 85) {
                progress += Math.floor(Math.random() * 6) + 2;
            } else {
                progress += (90 - progress) * 0.1;
            }
        }

        if (progress >= 100 && playlistsLoaded) {
            progress = 100;
            clearInterval(interval);
            dom.progressBar.style.width = '100%';
            setTimeout(() => {
                dom.loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    dom.loadingScreen.classList.add('hidden');
                    dom.appContainer.classList.remove('hidden');
                    callback();
                }, 500);
            }, 400);
        } else {
            dom.progressBar.style.width = `${Math.min(Math.floor(progress), 99)}%`;
        }
    }, 100);
}

// ==========================================================================
// 6. IPTV CORE ENGINE ARCHITECTURE & PARSER
// ==========================================================================
async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 15000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}

function parseM3U(m3uText) {
    const parsedChannels = [];
    const lines = m3uText.split(/\r?\n/);
    let currentChannel = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        if (line.startsWith('#EXTINF:')) {
            currentChannel = {};
            const tvgNameMatch = line.match(/tvg-name="([^"]+)"/i);
            const tvgLogoMatch = line.match(/tvg-logo="([^"]+)"/i);
            const groupTitleMatch = line.match(/group-title="([^"]+)"/i);
            
            const commaIndex = line.lastIndexOf(',');
            let displayName = "";
            if (commaIndex !== -1) {
                displayName = line.substring(commaIndex + 1).trim();
            }

            const fallbackName = tvgNameMatch ? tvgNameMatch[1].trim() : displayName;
            
            currentChannel.name = fallbackName;
            currentChannel.logo = tvgLogoMatch ? tvgLogoMatch[1].trim() : "";
            currentChannel.category = groupTitleMatch ? groupTitleMatch[1].trim() : "Live TV";
        } else if (line.startsWith('#')) {
            continue;
        } else if (currentChannel) {
            currentChannel.stream = line;
            
            if (currentChannel.name && currentChannel.stream && isValidUrl(currentChannel.stream)) {
                parsedChannels.push(currentChannel);
            }
            currentChannel = null;
        }
    }
    return parsedChannels;
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function normalizeCategory(category) {
    if (!category) return "Live TV";
    let cat = category.trim().toLowerCase();
    
    if (cat.includes("sport")) return "Sports";
    if (cat.includes("news")) return "News";
    if (cat.includes("kids") || cat.includes("child") || cat.includes("cartoon")) return "Kids";
    if (cat.includes("movie") || cat.includes("cinema")) return "Movie";
    if (cat.includes("music") || cat.includes("song")) return "Music";
    if (cat.includes("religion") || cat.includes("islam") || cat.includes("bhakti") || cat.includes("peace")) return "Religion";
    if (cat.includes("entertainment") || cat.includes("general") || cat.includes("এন্টারটেইনমেন্ট")) return "Entertainment";
    if (cat.includes("bangla") || cat.includes("bengali") || cat.includes("বাংলা")) return "Bangla";
    if (cat.includes("documentary") || cat.includes("info")) return "Documentary";
    
    return category.split(' ')
                   .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                   .join(' ');
}

function deduplicateAndFilter(rawChannels) {
    const seenNames = new Set();
    const seenStreams = new Set();
    const uniqueChannels = [];

    rawChannels.forEach(ch => {
        if (!ch.name || !ch.stream) return;

        const normName = ch.name.trim().toLowerCase();
        const normStream = ch.stream.trim().toLowerCase();

        if (seenNames.has(normName) || seenStreams.has(normStream)) {
            return; 
        }

        seenNames.add(normName);
        seenStreams.add(normStream);

        const logo = ch.logo && isValidUrl(ch.logo) ? ch.logo : DEFAULT_CHANNEL_LOGO;
        const category = normalizeCategory(ch.category);

        uniqueChannels.push({
            name: ch.name.trim(),
            category: category,
            logo: logo,
            stream: ch.stream.trim()
        });
    });

    return uniqueChannels;
}

async function loadPlaylists(isBackground = false) {
    const cachedData = localStorage.getItem("bcz_iptv_channels");
    const cachedTime = localStorage.getItem("bcz_iptv_timestamp");
    const now = Date.now();

    if (!isBackground && cachedData && cachedTime && (now - parseInt(cachedTime, 10) < 43200000)) {
        try {
            channels = JSON.parse(cachedData);
            if (channels && channels.length > 0) {
                console.log("Loaded channels from cache. Total:", channels.length);
                return;
            }
        } catch (e) {
            console.error("Error reading cache, fetching fresh:", e);
        }
    }

    const fetchPromises = PLAYLISTS.map(async (url) => {
        try {
            const response = await fetchWithTimeout(url, { timeout: 15000 });
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            const text = await response.text();
            return parseM3U(text);
        } catch (err) {
            console.warn(`Failed to fetch/parse playlist ${url}:`, err);
            return [];
        }
    });

    const results = await Promise.allSettled(fetchPromises);
    let rawChannels = [];
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            rawChannels = rawChannels.concat(result.value);
        }
    });

    if (rawChannels.length > 0) {
        channels = deduplicateAndFilter(rawChannels);
        try {
            localStorage.setItem("bcz_iptv_channels", JSON.stringify(channels));
            localStorage.setItem("bcz_iptv_timestamp", now.toString());
        } catch (e) {
            console.error("Failed to write channels to cache:", e);
        }
    }
}

function startSmartRefresh() {
    setInterval(async () => {
        const cachedTime = localStorage.getItem("bcz_iptv_timestamp");
        const now = Date.now();
        if (!cachedTime || (now - parseInt(cachedTime, 10) > 43200000)) {
            await loadPlaylists(true); 
            updateChannelCounters();
            generateDynamicCategories();
            renderChannels();
        }
    }, 3600000); 
}

function initIPTVApp() {
    updateChannelCounters();
    generateDynamicCategories();
    renderChannels();
    setupEventHandlers();
    startSmartRefresh();
}

function updateChannelCounters() {
    dom.totalChannelsCount.textContent = channels.length;
}

function generateDynamicCategories() {
    const categorySet = new Set(channels.map(channel => channel.category));
    const sortedCategories = ["All", ...Array.from(categorySet).sort()];
    
    dom.categoryTabs.innerHTML = "";
    sortedCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${cat === activeCategory ? 'active' : ''}`;
        btn.textContent = cat;
        btn.dataset.category = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = cat;
            renderChannels();
        });
        
        dom.categoryTabs.appendChild(btn);
    });
}

function renderChannels(filteredChannels = null) {
    if (renderTimeout) clearTimeout(renderTimeout);
    dom.channelsGrid.innerHTML = "";
    
    let sourceChannels = filteredChannels ? filteredChannels : channels;
    if (!filteredChannels && activeCategory !== "All") {
        sourceChannels = channels.filter(c => c.category === activeCategory);
    }

    // Filter out suspect dead streams from current view
    sourceChannels = sourceChannels.filter(c => (failedStreams[c.stream] || 0) < 3);

    if (sourceChannels.length === 0) {
        dom.emptyState.classList.remove('hidden');
        return;
    } else {
        dom.emptyState.classList.add('hidden');
    }

    const chunkSize = 60;
    let currentIndex = 0;

    function renderNextChunk() {
        const fragment = document.createDocumentFragment();
        const limit = Math.min(currentIndex + chunkSize, sourceChannels.length);
        
        for (let i = currentIndex; i < limit; i++) {
            const channel = sourceChannels[i];
            const card = document.createElement('div');
            card.className = `channel-card ${activeChannel && activeChannel.name === channel.name ? 'active-playing' : ''}`;
            
            const logoImg = channel.logo ? channel.logo : DEFAULT_CHANNEL_LOGO;
            
            card.innerHTML = `
                <div class="card-logo-container">
                    <img src="${logoImg}" alt="${channel.name} Logo" onerror="this.src='${DEFAULT_CHANNEL_LOGO}'">
                    <span class="card-live-badge">LIVE</span>
                </div>
                <div class="card-info">
                    <div class="card-title">${channel.name}</div>
                    <div class="card-category">${channel.category}</div>
                </div>
            `;
            
            card.addEventListener('click', () => playChannel(channel));
            fragment.appendChild(card);
        }

        dom.channelsGrid.appendChild(fragment);
        currentIndex += chunkSize;

        if (currentIndex < sourceChannels.length) {
            renderTimeout = setTimeout(renderNextChunk, 16); 
        }
    }

    renderNextChunk();
}

// ==========================================================================
// 7. HTML5 & HLS MEDIA PLAYER SYSTEM CONTROLLER
// ==========================================================================
function playChannel(channel) {
    activeChannel = channel;
    
    document.querySelectorAll('.channel-card').forEach(card => {
        if (card.querySelector('.card-title').textContent === channel.name) {
            card.classList.add('active-playing');
        } else {
            card.classList.remove('active-playing');
        }
    });

    dom.playerPlaceholder.classList.add('hidden');
    dom.playerError.classList.add('hidden');
    dom.playerLoader.classList.remove('hidden');
    
    dom.currentChannelName.textContent = channel.name;
    dom.currentChannelCategory.textContent = channel.category;

    if (hlsInstance) {
        hlsInstance.destroy();
        hlsInstance = null;
    }

    if (Hls.isSupported()) {
        hlsInstance = new Hls({
            maxMaxBufferLength: 10,
            enableWorker: true
        });
        hlsInstance.loadSource(channel.stream);
        hlsInstance.attachMedia(dom.player);
        
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
            dom.playerLoader.classList.add('hidden');
            dom.player.play().catch(handlePlaybackBlocked);
        });

        hlsInstance.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                console.error("HLS Live Stream Error Encountered:", data);
                handlePlaybackFailure();
            }
        });
    } 
    else if (dom.player.canPlayType('application/vnd.apple.mpegurl')) {
        dom.player.src = channel.stream;
        dom.player.addEventListener('loadedmetadata', () => {
            dom.playerLoader.classList.add('hidden');
            dom.player.play().catch(handlePlaybackBlocked);
        });
        dom.player.addEventListener('error', () => {
            handlePlaybackFailure();
        });
    } else {
        dom.playerLoader.classList.add('hidden');
        dom.playerError.classList.remove('hidden');
    }
}

function handlePlaybackBlocked() {
    dom.playerLoader.classList.add('hidden');
    dom.player.muted = true;
    dom.player.play();
    console.warn("Autoplay muted to fulfill security policy metrics.");
}

function handlePlaybackFailure() {
    dom.playerLoader.classList.add('hidden');
    dom.playerError.classList.remove('hidden');
    
    if (activeChannel) {
        failedStreams[activeChannel.stream] = (failedStreams[activeChannel.stream] || 0) + 1;
        if (failedStreams[activeChannel.stream] >= 3) {
            console.warn(`Marking dead/suspect stream: ${activeChannel.name}`);
            setTimeout(() => renderChannels(), 1000);
        }
    }
    
    if (hlsInstance) hlsInstance.destroy();
}

// ==========================================================================
// 8. LUXURY LIVE QUERY & SEARCH SYSTEMS ENGINE
// ==========================================================================
function setupEventHandlers() {
    // Reset playback errors if video plays successfully
    dom.player.addEventListener('playing', () => {
        if (activeChannel) {
            failedStreams[activeChannel.stream] = 0;
        }
    });

    // Search input listener
    dom.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length > 0) {
            dom.clearSearch.style.display = 'block';
            processRealTimeSearch(query);
        } else {
            dom.clearSearch.style.display = 'none';
            dom.searchSuggestions.classList.add('hidden');
            renderChannels();
        }
    });

    // Clear search event button click
    dom.clearSearch.addEventListener('click', () => {
        dom.searchInput.value = "";
        dom.clearSearch.style.display = 'none';
        dom.searchSuggestions.classList.add('hidden');
        renderChannels();
    });

    // Close suggestions dropdown automatically when clicking anywhere outside
    document.addEventListener('click', (e) => {
        if (!dom.searchInput.contains(e.target) && !dom.searchSuggestions.contains(e.target)) {
            dom.searchSuggestions.classList.add('hidden');
        }
    });

    // Back-to-top scroll detection trigger
    dom.gridScrollContainer.addEventListener('scroll', () => {
        if (dom.gridScrollContainer.scrollTop > 300) {
            dom.backToTop.style.display = 'flex';
        } else {
            dom.backToTop.style.display = 'none';
        }
    });

    dom.backToTop.addEventListener('click', () => {
        dom.gridScrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function processRealTimeSearch(query) {
    const matchedChannels = channels.filter(channel => 
        channel.name.toLowerCase().includes(query) || 
        channel.category.toLowerCase().includes(query)
    );

    renderChannels(matchedChannels);
    renderSuggestions(matchedChannels, query);
}

function renderSuggestions(matchedChannels, query) {
    // Exclude suspect dead channels from suggestions
    const validMatches = matchedChannels.filter(c => (failedStreams[c.stream] || 0) < 3);

    if (validMatches.length === 0) {
        dom.searchSuggestions.classList.add('hidden');
        return;
    }

    dom.searchSuggestions.innerHTML = "";
    dom.searchSuggestions.classList.remove('hidden');

    validMatches.slice(0, 5).forEach(channel => {
        const div = document.createElement('div');
        div.className = "suggestion-item";
        div.innerHTML = `
            <span>${channel.name}</span>
            <span class="item-cat">${channel.category}</span>
        `;
        div.addEventListener('click', () => {
            dom.searchInput.value = channel.name;
            dom.searchSuggestions.classList.add('hidden');
            playChannel(channel);
        });
        dom.searchSuggestions.appendChild(div);
    });
}