/**
 * ==========================================================================
 * BCZ TV PREMIUM - CORE IPTV LOGIC ENGINE
 * Pure JS Engine - Zero Framework Dependencies
 * ==========================================================================
 */

// 1. BRAND ASSETS MANAGEMENT CONFIGURATION
const APP_LOGO_URL = "https://i.postimg.cc/85KprBhW/Gemini-Generated-Image-ffy9icffy9icffy9.png"; 
const DEFAULT_CHANNEL_LOGO = "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=150&auto=format&fit=crop";

// 2. CHANNELS STORAGE DATA MATRIX (Manually Add Channels Seamlessly Here)
const channels = [
    {
        name: "Enter10 Bangla",
        category: "মহিলা এন্টারটেইনমেন্ট",
        logo: "https://i.postimg.cc/VNFSVZT9/images-(8).jpg",
        stream: "https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8"
    },
    {
        name: "Ekushe Tv ",
        category: "News",
        logo: "https://s4.gifyu.com/images/image534fa27d7683f33d.png",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ekusheytv-8-org.stream/tracks-v1a1/mono.m3u8"
    },
{
        name: "Deepto Tv",
        category: "Entertainment",
        logo: "https://i.postimg.cc/9fSDrc14/images-(9).jpg",
        stream: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8"
    },
{
        name: "Maasranga Tv",
        category: "News",
        logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/a/a3/Maasranga_TV_HD_logo.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8"
    },
{
        name: "Chanel 1",
        category: "News",
        logo: "https://i.postimg.cc/jq3F2mrq/images-(1).png",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel1bd.stream/tracks-v1a1/mono.m3u8"
    },
{
        name: "Somoy Tv",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560559088.png",
        stream: "https://live.thebosstv.com:30443/dwlive/Somoy-TV/chunks.m3u8"
    },
{
        name: "Jamuna Tv ",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560213832.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8"
    },
{
        name: "Chanel 24",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735556516924.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8"
    },
{
        name: "71 Tv",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739963327549.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8"
    },
{
        name: "Atn News",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739962961772.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8"
    },
{
        name: "Chanel 9",
        category: "Entertainment",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770188008067.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8"
    },
{
        name: "Chanel I",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1740567626692.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8"
    },
{
        name: "Bangla Vision",
        category: "Entertainment",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561344354.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8"
    },
{
        name: "N Tv",
        category: "Entertainment",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8"
    },
{
        name: "Independent Tv",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778087037971.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8"
    },
{
        name: "Chanel S",
        category: "Entertainment",
        logo: "https://i.postimg.cc/fbh89hL7/images-(2).png",
        stream: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/chsukoff.stream/live-orgin/chsukoff.stream/chunks.m3u8?nimblesessionid=1067583745"
    },
{
        name: "FIFA",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://37b4c228.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/6f5437c5-e015-4754-8476-c8c6d27d3a55/1.m3u8"
    },
{
        name: "SRK Tv",
        category: "Kids",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1746005940155.png",
        stream: "https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/playlist.m3u8"
    },
{
        name: "B Tv",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778082545894.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8"
    },{
        name: "Green Tv",
        category: "Entertainment",
        logo: "https://i.postimg.cc/h45W7fqX/images-(10).jpg",
        stream: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/playlist.m3u8"
    },
{
        name: "Mr. Bean",
        category: "Kids",
        logo: "https://i.postimg.cc/4x5Tyw43/images-(11).jpg",
        stream: "https://amg00627-amg00627c29-rakuten-it-3989.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanitcc-rakutenit/playlist.m3u8"
    },
{
        name: "Tom And Jerry ",
        category: "Kids",
        logo: "https://i.postimg.cc/Yq65D8W2/images-(14).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-208314/tracks-v1a1/mono.ts.m3u8"
    },
{
        name: "Gopal Bhar",
        category: "Kids",
        logo: "https://i.postimg.cc/K8NyjQcc/images-(13).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8"
    },
{
        name: "Motu Patlu",
        category: "Kids",
        logo: "https://i.postimg.cc/3xBHN9rJ/images-(12).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8"
    },
{
        name: "Doremon Tv",
        category: "Kids",
        logo: "https://i.postimg.cc/52jmQ2bX/images-(15).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8"
    },
{
        name: "Discovery Turbo",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/379/logo/240x240/mobile_logo_775127001673177876.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=discovery_turbo&chunks=9fd250f8d85afb51459043186fd49678ab4cfb94aedb57c322d3471af707d8ec9a1d2030197a71dd59b893dc604b65a688e437b97bbcbe2059e1fd3b8a3def99d99aa6c0085e03e614c27664b8510f68590aa683415326c1c56c18e1e87c1ea6214ff393c6ccc1a102ca34d863f098fe"
    },
{
        name: "Animal Planet",
        category: "News",
        logo: "https://i.postimg.cc/k4PZybgv/images-(17).jpg",
        stream: "https://tiger-hub.vercel.app@vodzong.mjunoon.tv:8087/streamtest/Animal-Planet-158-3/playlist.m3u8"
    },
{
        name: "Cartoon",
        category: "Kids",
        logo: "https://i.postimg.cc/63kvqCtG/images-(18).jpg",
        stream: "https://newidco-kidspangtv-1-us.roku.wurl.tv/1200.m3u8"
    },
{
        name: "Star Sports 1",
        category: "Sports",
        logo: "https://i.postimg.cc/3w6yf2yn/images-(19).jpg",
        stream: "http://41.205.93.154/STARSPORTS1/tracks-v1a1/mono.m3u8"
    },
{
        name: "Batul The Great",
        category: "Kids",
        logo: "https://i.postimg.cc/15H8hknt/images-(20).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209869/tracks-v1a1/mono.ts.m3u8"
    },
{
        name: "Colors Bangla",
        category: "মহিলা এন্টারটেইনমেন্ট",
        logo: "https://i.postimg.cc/brRwPnJr/images-(21).jpg",
        stream: "https://yupptvcatchupire.yuppcdn.net/preview/colorsbanglahd/800.m3u8"
    },
{
        name: "PBS Tv",
        category: "Kids",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778083145889.png",
        stream: "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/chunklist_b600000.m3u8"
    },
{
        name: "Music India",
        category: "Music",
        logo: "https://i.postimg.cc/nLQVzgzq/images-(22).jpg",
        stream: "http://103.175.73.12:8080/live/158/158_0.m3u8"
    },
{
        name: "Only Music",
        category: "Music",
        logo: "https://i.postimg.cc/Dyy2s802/images-(23).jpg",
        stream: "https://cdn-4.pishow.tv/live/1143/1143_0.m3u8"
    },
{
        name: "Ek Tv",
        category: "News",
        logo: "https://i.postimg.cc/FHwm2pZB/images-(24).jpg",
        stream: "http://103.175.73.12:8080/live/256/256_0.m3u8"
    },
{
        name: "Win Sports",
        category: "Sports",
        logo: "https://i.postimg.cc/SNjBk8jT/images-(25).jpg",
        stream: "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8"
    },
{
        name: "FIFA 2",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://prod-cdn01-live.toffeelive.com/live/FIFA-2026-4/0/master_2000.m3u8?hdntl=Expires=1782201879~_GO=Generated~URLPrefix=aHR0cHM6Ly9wcm9kLWNkbjAxLWxpdmUudG9mZmVlbGl2ZS5jb20~Signature=AduQTZ_7SoXu33Jl8WoX6_fbtjKetaNOH0HEGlimMzfQIbzmst2wUXr10OEziHQ4lh2dXZE9onnVDuguqusVRZAHbAUF"
    },
{
        name: "FIFA 3",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/1080p-vtt/index.m3u8"
    },
{
        name: "Other Sports",
        category: "Sports",
        logo: "https://i.postimg.cc/xCpcNMQw/images-(26).jpg",
        stream: "https://rakutenaa-mainstreammediafreesportsintl-rakuten-t7dc0.amagi.tv/ts-eu-w1-n2/playlist/rakutenAA-mainstreammediafreesportsintl-rakuten/cb543d1e786c648c9cd43d67d9ef42a5f9ac53fc087a8d6933fb4b926bc10f41f9e5af86a540ff1902cb5d81385e7d505d6cdb7ba31403c7dd7ab82371254b2085f9c91ad8871009b2da0f2334b37a1c48ee7f5590790645dceb31019172e02a525dbb5f2e1e19a58924d16a4299d951de6f5edefe863e206d2b05c01506faa440a3ef9205078731f4ae1d4c9d3145f98545cedc02b981d14be31cd42fad418df1a1dd8252db999460ae49b1624b1c717f98d47dca9a0efb8ccd6869d12079404f18bea5c3a9036a831e1709adad99ba35fa16fc6144eb145f2e94b135e612ae29c02ba6ef49acacbfda51494bcbae394014d02e2417994f579c75f2a393b61bc552de661d63c16cd323694ff8466525f6a236ecd8078db5621c78e49853928ebb8ce1f2e222268bfbb596c96e382b470c038d5ce8fc07bf788d28f89c5349583c916b83f28d5c8e7e492cbf46180f2e253bf3b1aa90d60f74ee681a51e95a6c3a6f96ad196366ec21f59b7339c7764acd1934f54d2ddb02ddb628e7a8d2e1466ae5858770d257bde55982b620bc64305d4d82d91d0e0b1e2d80bc36547e299317ad93ebf1670505dbf2cfd5c94777526a401c5fdda2af5bb3baed055156cd5a2d65343712950fd9209f21430f36c25187e25934a60e3322eba2700c0e34d898ffd6d081920ae72e868fd0362d325566fd0004206fc1bfc20cae6f052d2c2fed650362b303484de391bb87c8d01489f602983d63186ec08271730c537f6e0fe1f75afa66b0c34ee9d9a671c3ed841e40c50cab0e1e9bdabe39aa0de04493d721cc2c2eea39c949cdc2b46d3c41c1dc21a8/52/1920x1080_6046040/index.m3u8"
    },
{
        name: "FIFA 4",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://streams2.sofast.tv/sofast/goaltv/goaltv_3500k.m3u8"
    },
{
        name: "FIFA 5",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8"
    },
{
        name: "Star Jalsha",
        category: "মহিলা এন্টারটেইনমেন্ট",
        logo: "https://i.postimg.cc/267g07yT/images-(27).jpg",
        stream: "https://tvsen3.aynaott.com/n64PH4YL/tracks-v1a1/mono.ts.m3u8"
    },
{
        name: "Movie Club 2",
        category: "Movie",
        logo: "https://i.postimg.cc/Pqm7qQm7/images-(28).jpg",
        stream: "https://d3gnyty2vddhsg.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-ytipwjqub3kf8/ca61da0a-725a-470b-a611-da8c742e0ae1/3.m3u8"
    },
{
        name: "Movie Club",
        category: "Movie",
        logo: "https://i.postimg.cc/Pqm7qQm7/images-(28).jpg",
        stream: "https://pb-dkdpz5so0aqqr.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/pb-dkdpz5so0aqqr/TMC_IN.m3u8?ads.ads_cdn=ak&ads.cdn=ak&pb_type=pb-dkdpz5so0aqqr_akamai"
    },
{
        name: "Party Universe",
        category: "Music",
        logo: "https://i.postimg.cc/tgtrbCbY/images-(29).jpg",
        stream: "https://nomawnoijl.gpcdn.net/akash/partyuniverse/chunks.m3u8"
    },
{
        name: "Power Turk",
        category: "Music",
        logo: "https://i.postimg.cc/MT69p2ZR/images-(3).png",
        stream: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/chunklist_b2496000_sltur.m3u8?nimblesessionid=655585169"
    },
{
        name: "Zoom",
        category: "Music",
        logo: "https://i.postimg.cc/MT69p2ZR/images-(3).png",
        stream: "https://dai.google.com/linear/hls/pb/event/JCAm25qkRXiKcK1AJMlvKQ/stream/7e8b6869-7b8f-4438-8745-bf126d59a799:SIN2/variant/338b23ad2b353bf3f676c37b0bb6eb50/bandwidth/728000.m3u8"
    },
{
        name: "Nikky",
        category: "Kids",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778083459294.png",
        stream: "https://nomawnoijl.gpcdn.net/akash/nikky/chunks.m3u8"
    },
{
        name: "Sangeet Bangla",
        category: "Music",
        logo: "https://i.postimg.cc/fyP7mC1D/images-(30).jpg",
        stream: "https://cdn-4.pishow.tv/live/1143/master.m3u8"
    },
{
        name: "Cartoon Network ",
        category: "Kids",
        logo: "https://i.postimg.cc/ZKqkFxDv/images-(31).jpg",
        stream: "http://23.237.104.106:8080/USA_CARTOON_NETWORK/index.m3u8"
    },
{
        name: "Jago Bd",
        category: "Music",
        logo: "https://i.postimg.cc/DfBHZby7/images-(32).jpg",
        stream: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8"
    },
{
        name: "Mohona tv",
        category: "Entertainment",
        logo: "https://i.postimg.cc/NjrzpJ8C/images-2026-06-14T191204-164.jpg",
        stream: "https://bozztv.com/rongo/rongo-MohonaTV/index.m3u8"
    },
{
        name: "Movie Bangla",
        category: "Movie",
        logo: "https://i.postimg.cc/VsGZ1QD6/images-2026-06-14T191302-556.jpg",
        stream: "http://alvetv.com/moviebanglatv/8080/index.m3u8"
    },
{
        name: "R Tv",
        category: "Entertainment",
        logo: "https://i.postimg.cc/VLXwzR0S/images-2026-06-15T090015-887.jpg",
        stream: "https://bozztv.com/rongo/rongo-RTV/index.m3u8"
    },
{
        name: "ZB Music",
        category: "Music",
        logo: "https://i.postimg.cc/tgtrbCbY/images-(29).jpg",
        stream: "https://server.zillarbarta.com/zbmusic/index.m3u8"
    },
{
        name: "Music 🎵🎵🎵",
        category: "Music",
        logo: "https://i.postimg.cc/tgtrbCbY/images-(29).jpg",
        stream: "https://b.jsrdn.com/strm/channels/9xjalwa/master.m3u8"
    },
{
        name: "Music ❤️❤️",
        category: "Music",
        logo: "https://i.postimg.cc/tgtrbCbY/images-(29).jpg",
        stream: "https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8"
    },
{
        name: "ZB Cartoon",
        category: "Kids",
        logo: "https://i.postimg.cc/ZKqkFxDv/images-(31).jpg",
        stream: "https://server.zillarbarta.com/zbcatun/video.m3u8"
    },
{
        name: "Cartoon 2",
        category: "Kids",
        logo: "https://i.postimg.cc/ZKqkFxDv/images-(31).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209624/index.m3u8"
    },
{
        name: "FIFA 6",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://e3be9ac5.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfRklGQVBsdXNQb3J0dWd1ZXNlX0hMUw/9c1dd781-4ee3-4668-a957-fa1e6f81d613/3.m3u8"
    },
{
        name: "Superrix",
        category: "Movie",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770348388925.png",
        stream: "https://nomawnoijl.gpcdn.net/akash/superrix/playlist.m3u8"
    },
{
        name: "FIFA 7",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "http://ytoxw6un.ottclub.xyz/iptv/KCUHA6DGYYVA8ZZFUPQV3KZH/6408/index.m3u8"
    },
{
        name: "FIFA 8 😑😑",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://stmv6.voxtvhd.com.br/cnardeportes/cnardeportes/playlist.m3u8"
    },
{
        name: "FIFA🔥🔥🔥🔥🔥🔥",
        category: "Sports",
        logo: "https://i.postimg.cc/661Rm2z8/image.png",
        stream: "https://d1211whpimeups.cloudfront.net/smil:rtbgo/playlist.m3u8"
    },
{
        name: "T-SPORTS ",
        category: "Sports",
        logo: "https://i.postimg.cc/d3W6fK3y/images-2026-06-15T151831-747.jpg",
        stream: "http://198.195.239.50:8095/tsports/tracks-v1a1/mono.m3u8"
    },
{
        name: "Zee Bangla",
        category: "মহিলা এন্টারটেইনমেন্ট",
        logo: "https://i.postimg.cc/8cfh2JBw/zee-bangla-hd.jpg",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zee_bangla&chunks=06419077e197e0f3d844a0d30c17877af92fa1b429357d2badca7235918e33eb6c5bd32b621d653e91ff45872a4e1b2d561ee070698eda03de89ce3a5c7217459a8164b6ee8cc9904db90ed0cdea0db1410ee1d0f8566343acb5d3c2d695e6fd"
    },
{
        name: "Discovery",
        category: "Entertainment",
        logo: "https://i.postimg.cc/8cPcC2Hy/images-(5).png",
        stream: "https://stream.ottplus.bd/live/discovery_sd_abr/live/discovery_sd/chunks.m3u8"
    },
{
        name: "Goldmine Movies",
        category: "Movie",
        logo: "https://i.postimg.cc/mkwNTfFh/goldmines.jpg",
        stream: "https://cdn-2.pishow.tv/live/1459/master.m3u8"
    },
{
        name: "beIn Sports XTRA",
        category: "Sports",
        logo: "https://i.postimg.cc/g24bXn8K/be-IN-SPORTS-XTRA.jpg",
        stream: "https://bein-xtra-bein.amagi.tv/playlist.m3u8"
    },
{
        name: "Sports Legends",
        category: "Sports",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770377900139.png",
        stream: "https://nomawnoijl.gpcdn.net/akash/sportslegends/playlist.m3u8"
    },
{
        name: "🔥Fox Sports 🔥",
        category: "Sports",
        logo: "https://i.postimg.cc/zvxyfL4Z/foxsportshd-logo.jpg",
        stream: "https://d1jzu95oc8fgt3.cloudfront.net/FOX_Sports1080p.m3u8"
    },
{
        name: "Chanel 9",
        category: "Entertainment",
        logo: "https://s3.aynaott.com/storage/a959f06b4fc9e1421f867b6c1601fe43",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/1729-audio_113592_eng=113200-video=1692000.m3u8"
    },
{
        name: "WoW Kidz",
        category: "Kids",
        logo: "https://i.postimg.cc/rpZrTqxT/images-(6).png",
        stream: "https://yuppparoriglin.akamaized.net/181224/smil:wowkidzhindi.smil/playlist.m3u8?hdnts=st=1781517006~exp=1781517606~acl=!*/181224/smil:wowkidzhindi.smil/*!yuppTVCom_61_-1_f700f9f148fe4c0e_BD_103.126.219.25/payload/yuppTVCom_61_-1_f700f9f148fe4c0e_BD_103.126.219.25/*~hmac=e1b05b0d480f8ec3e3775142219c07eefcd5fc5811d9079204e5dff7811103a3&ads.app_bundle=&ads.app_store_url=&ads.content_livestream=1&ads.language=HIN&ads.content_genre=Kids&ads.channel=4002&ads.channel_name=WOWKidz-Hindi&ads.network_name=yupptv&ads.user=0"
    },
{
        name: "Caze Tv",
        category: "Sports",
        logo: "https://i.postimg.cc/bvYkqhZ9/caze-tv.jpg",
        stream: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/540p-vtt/index.m3u8"
    },
{
        name: "YRF Music Hd",
        category: "Music",
        logo: "https://i.postimg.cc/5tb4FhHc/nf15u1K12VXg-BLh5HTf0as-DF5Fc36Rs-UICRi8x-Y1Cs0Qh-AL-jm.jpg",
        stream: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8"
    },
{
        name: "Star News",
        category: "News",
        logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770189826301.png",
        stream: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/1710-audio_113402_eng=113200-video=1692000.m3u8"
    },
{
        name: "Z Bangla Sonar",
        category: "মহিলা এন্টারটেইনমেন্ট",
        logo: "https://i.postimg.cc/fTz7GcHp/images-2026-06-15T200318-679.jpg",
        stream: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/ColorsHD/default/ColorsHD.m3u8"
    },
{
        name: "Peace Tv",
        category: "Religion",
        logo: "https://i.postimg.cc/qMwpnbTd/peace-tv-bangla.jpg",
        stream: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8"
    },
{
        name: "ZB Bhakti",
        category: "Religion",
        logo: "https://i.imgur.com/MBaKNPC.jpeg",
        stream: "https://server.zillarbarta.com/zbbhakti/index.m3u8"
    },
{
        name: "Asian Tv",
        category: "Entertainment",
        logo: "https://www.asiantvonline.com/storage/project_files/logo/2022-08-15a_n16605669266864.gif",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/asian-test-sample-ok-d.stream/tracks-v1a1/mono.m3u8"
    },
{
        name: "B Tv",
        category: "News",
        logo: "http://198.195.239.50/img/channels/BTV.HD.png",
        stream: "http://198.195.239.50:8095/tsports/index.m3u8"
    },
{
        name: "Sony Atth",
        category: "Kids",
        logo: "http://198.195.239.50/img/channels/SONY%20AATH.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sonyaath&chunks=ea6a05b0811e4769508793d834cbf382b649f9553840edaf01ccf21e523f74852f61f393256b68a201a6c1ec2822847ba974ea9cbe472e487c900c4e39d5e5bce81505603dd8a364057ade86f449d038b69cc60814d233e686e18696b7580b5b"
    },
{
        name: "Star Sports 1",
        category: "Sports",
        logo: "http://198.195.239.50/img/channels/STAR%20SPORTS1%20HD.png",
        stream: "http://198.195.239.50:8095/colorsBanglaChinema/tracks-v1a1/mono.m3u8"
    },
{
        name: "B4U Movies",
        category: "Movie",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPB6G2WpciTN1fQX2j_jED0iVRF3SSh1kIa8AkAN9vA&s=10",
        stream: "https://amg00877-b4unew-amg00877c2-xiaomi-in-5489.playouts.now.amagi.tv/playlist.m3u8"
    },{
        name: "Sony Max Hd",
        category: "Movie",
        logo: "https://abusaeeidx.github.io/bd-tv-logo/logos/sony-max.jpg",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sony_max_hd&chunks=960059037106d2ebf16e0c97a552dc596f2687458d9ea3f40ce216e5c4d9898c0b2f903dae1075cf1d7e85af90a3a9032fe77d5090f9c09935196c6d02203548759fca385942a96de01bd3df70c06f4e76b68fd0be61d9d4b94fa5d58f28e30d"
    },{
        name: "Sony Max",
        category: "Movie",
        logo: "https://abusaeeidx.github.io/bd-tv-logo/logos/sony-max.jpg",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sony_max&chunks=960059037106d2ebf16e0c97a552dc59e97c1e8748821d3f5176cf63aa36261ccc71ec55c5e9cfe8cc57ef4a82e0d4ebf1deca330217917f49c150ecf8e2d68ff74ebf888d443b18098b3a8ec2b75bfadce0b11a568bc4a4a066d5fc45e6f733"
    },{
        name: "9x Jalwa",
        category: "Misic",
        logo: "https://abusaeeidx.github.io/bd-tv-logo/logos/9x-jalwa.jpg",
        stream: "https://wiselp.wiseplayout.com/9X_Jalwa/HD1080/HD1080.m3u8"
    },{
        name: "Sonic",
        category: "Kids",
        logo: "https://i.postimg.cc/R0DsRQM7/images-(30).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8"
    },{
        name: "Oggy And Cockroaches",
        category: "Kids",
        logo: "https://i.postimg.cc/TYMsF9nC/images-(31).jpg",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-210728/tracks-v1a1/mono.ts.m3u8"
    },{
        name: "Sony Max 2",
        category: "Movie",
        logo: "https://i.postimg.cc/3NpcW4QG/images-(32).jpg",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sonymax_2&chunks=2c2cc115a9662987f21f118e6c4aaf8349f9856010dbdb9acf9591a906615740faf524cc80bb1c31aa8e7237b4afee98ef798afdf9bb8eeda494d3058bb9565432e50aa334f3613f75a5974165d88b07f18e32cb7def1d21c614b9f52e3a36bd"
    },{
        name: "Toffee live FIFA",
        category: "Sports",
        logo: "https://i.postimg.cc/yd2GVht8/images-2026-06-22T221746-366.jpg",
        stream: "https://prod-cdn01-live.toffeelive.com/live/FIFA-2026-4/0/master_2000.m3u8"
    },{
        name: "Bengali Beats ",
        category: "Music",
        logo: "https://i.ibb.co.com/jPCD1N8z/Bengali-Beats.png",
        stream: "https://live20.bozztv.com/giatvplayout7/giatv-209587/tracks-v1a1/mono.ts.m3u8"
    },{
        name: "Pogo",
        category: "Kids",
        logo: "https://images.toffeelive.com/images/program/27159/logo/240x240/mobile_logo_740957001679201029.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=pogo_sd&chunks=faa1c4a9da7fb08f27d1160fb77473b03dd1eca40dd7efe69ed38c1533e039fe110bbfa326d33d7a7425761650b6202a6107507d5f71a36a0904121a09ab0c45bf20138cc35600d9bc9c1c469cfc919b"
    },{
        name: "Cartoon Network",
        category: "Kids",
        logo: "https://images.toffeelive.com/images/program/27232/logo/240x240/mobile_logo_320294001679201065.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=cartoon_network_sd&chunks=bd3d7339b417e2a63fe287a9bc546e910ad95126b84165222d52b6a7cef16bf1ab7b6377db05757741430f1711c6d5ec5a7ba343bac00838c82cd35e8d1d6336ba442288c6376e4a2174407f117a0c0ec501b0f1f91971fde61c04858069c2cb0e515ce7fd2ee715b3822fc1c724a2fd2253613041bf356c2594c8475e722493"
    },{
        name: "Discovery Kids",
        category: "Kids",
        logo: "https://images.toffeelive.com/images/program/611/logo/240x240/mobile_logo_430542001673177743.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=discovery_kids&chunks=9fd250f8d85afb51459043186fd496783a1ffbb16ee31382ee8222b7d9012264a8568124d6d678b2f597c4e16c369c659190f2d4e6504b0dae39a063b8d1e647c468ff38a87e5d4df20f2d9caf90100358b819f896966dab9998e45d6fdb8a54d13bac7b2397958f7344e974998f2897"
    },{
        name: "Sony YaY",
        category: "Kids",
        logo: "https://images.toffeelive.com/images/program/612/logo/240x240/mobile_logo_091186001666784752.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sonyyay&chunks=35cec405983dfbc652b1ecac7780aea47ede44f5a99c8e59ee603ffb1588e049ebc538e7833b74fb620bd9ce86ee102189d8147178e71b36825c4ddca22dfa54f80c75b47c8736f451d925c4f62bea2e8ff04fe3da04a4cc07bc25187f6d3b9c"
    },{
        name: "Sony Entertainment",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/57/logo/240x240/mobile_logo_149299001666780350.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sony_entertainment&chunks=5e214de55fe6e211bcd9bd5a2f544a04de03f480636a92d93053879265a87c1a6dc8d7b7a86b8c2af95554db390c30c929e15cccaf6f1bcaab0ed1d16c5f131c6f6e45c3acd33aaaa2141381f4aba8deb2cd62285aad8774c813cdfc8eeb13ec9861624b0b3d5d875372c55d154ec964c30a9b8af740d84aa32c4844bfc50650"
    },{
        name: "Zee Cinema",
        category: "Movie",
        logo: "https://images.toffeelive.com/images/program/804/logo/240x240/mobile_logo_370803001655891689.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zee_cinema_hd&chunks=11b14218bd165bbb5f58219a13a6c102ec68b335bd5c1bad0349143348801647c8cb94ee814898354afaba9defd14941ca565bf0fe2d50c59a65317912d0c838730bcc1e13b5a84a6a14d42aa304f6666ef31a073c1ed47da77bac69d7e9874d7e0d50d0a91a0cf4f0fa222a925fd49a"
    },{
        name: "& Tv ",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/801/logo/240x240/mobile_logo_974516001655891652.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=and_tv_hd&chunks=60dd1ef5b06fb2ea8a9f4a4a7ed811c81a0651434760c67046561fdebc2fa3cecbebbbbaa45a146d44730e47db99803f34e59a5194f282c91af8aa531b279b9493c80a5a363684545896649dc7fb04e056ab3c947ed0b8d0ebc5de14ca2eb465"
    },{
        name: "& Pictures",
        category: "Movie",
        logo: "https://images.toffeelive.com/images/program/4570/logo/240x240/mobile_logo_000080001675856893.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=andpicture_hd&chunks=c70439021e5cd61b8cc79e9909f507481c4f68d7d730b7dc2abbdbbfc5e00cb576861ad2fa356826e25094c6a4b3a36cad220284f49b8b3dd053895e56c9bf0113368a5be878749d96806fe980d65d7954f13c16bccda2682bf528ac0189cb6ff5193bd7f84b16de2f97a43f15a8e738"
    },{
        name: "Ekhon Tv",
        category: "News",
        logo: "https://i.postimg.cc/wv4L5kLX/images-2026-06-23T190722-458.jpg",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/globaltv.stream/tracks-v1a1/mono.m3u8"
    },{
        name: "My Tv",
        category: "Entertainment",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnRBex5tlWXh4IgaUDgnP3oPAZSC9GxvqBDcgUVGFLQ&s=10",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/mytv-up-off.stream/tracks-v1a1/mono.m3u8"
    },{
        name: "Ananda Tv",
        category: "Entertainment",
        logo: "https://i.postimg.cc/q7j30Gbq/images-2026-06-23T190701-274.jpg",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/anandatv.stream/tracks-v1a1/mono.m3u8"
    },{
        name: "G Tv",
        category: "News",
        logo: "https://i.postimg.cc/MHcR9jYq/images-2026-06-23T190711-736.jpg",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/gazibdz.stream/tracks-v1a1/mono.m3u8"
    },{
        name: "Ruposhi Bangla",
        category: "Entertainment",
        logo: "https://i.postimg.cc/pLs2ZYhz/20250529-111853.png",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ruposhibangla.stream/tracks-v1a1/mono.m3u8"
    },{
        name: "Z Tv",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/644/logo/240x240/mobile_logo_649814001655891557.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zee_tv_hd&chunks=3445ac8e0ad55da854fb7be24d04493503a0da1db57c1ab8ef4191aa6a37aa48f8a6724bd3c0a3edcd8f02cd80f5e59cbc82f59e30262e74f22ff32d5333859cd9de6dbb4f38455c25d02d4c5dde45164e3729822d0d0d66b7f44206428c84c5"
    },{
        name: "Zee classic",
        category: "Movie",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3o5r3Cd04EQy-bic_TI-9-aqhbNxtpfWtoMbIwS5DXg&s=10",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zee_anmol&chunks=871b237b1f772720273cadc875cfff4520aba64743a488f3d4b6d2779ea883d66c006f461cbdec99943745a6f4847d98fb51bf5a819244a06640c9727a70ebd6c03537bed721ca58e9416eeb464bd73a7f8ca3ac2590ac5ab1bc0a57c8ad2e50"
    },{
        name: "Zee Cafe",
        category: "Entertainment",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_hj3UEYUqPKq4EvOEEo2a82L_fyOlEvLmSjiYelf_w&s=10",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zee_cafe_hd&chunks=e6b89e438bc04c7a899576d1a9b410bb5059b0a5ed2c27ff7ce269d7c6cc2f6811f7ad2cc36faf5b57e3c45a22bacd0ba13bcea9c574d39f02313becb9492216a78407b20bb1c5be75942f23660e4cba55329df122b6a1a7256cd60c2a84ed84"
    },{
        name: "TLC",
        category: "News",
        logo: "https://images.toffeelive.com/images/program/358/logo/240x240/mobile_logo_048875001673178985.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=tlc_sd&chunks=74b036e640772af49cf777ebeb603aa36627b477bff9ae0ef6758dde02b49bb1825f048b2d9d0c9556162f4557287ba5e6f749192d532b88c97b2f80c19b858e7108bdc7aea11ac85d88087fa8843429"
    },{
        name: "B4U Music",
        category: "Music",
        logo: "https://images.toffeelive.com/images/program/367/logo/115x115/mobile_logo_886909001563629905.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=b4u_music&chunks=8ad23ee9519eceb103e18563ec280e303c62d6df2bec3602dd4cfb0442ebe7e921e63be13b2797861fa4ae01731f177e0152377a3e3894c2515d2c72688dae7d9d244f8365e96669b3a7153a3cafcee569e839f7b9939ec276f4ee5de0b8e319"
    },{
        name: "Zee Action",
        category: "Movie",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a4/Zee_Action_2023_logo.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zee_action&chunks=31c472d6900757a9196aeb35fae08d04aad7a24dcac246f3a6edd093a95575edcb64c45cad7cbcf6b716339ee6848e6d859e933dcbfe653ffa06430ed50d76809f0e62b70ca0280e94773e2c201e0c3d06ba000aab08cd87a8d7ab1c5407da53"
    },{
        name: "Discovery Investigation",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/18094/logo/240x240/mobile_logo_154805001673178308.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=discovary_investigation_hd&chunks=89ea7b9663a97fdffef8cbb30fd2808238c2cba3ff930544036b225620c5c139032cd7405524f84376adbc88c9c4ad5db91975aa5a4e84caa2fe8b8662dff6e936ba5f60d18d39722b87887c80dee81f802a41ca3cf549a50e0f0d79e0e08fc11a6e7db47c4633bf5d542b29b3d3ff0e4be65bd0cdc982c770e1c768c56b8ff62cc2b55c941201230263ba5f41c22820"
    },{
        name: "Jago News 24",
        category: "News",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXGk7rN-k7nWEFiFmxMMSynOiiHLjKRW1HzqijlIFhg&s=10",
        stream: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/jagonews24.stream/tracks-v1a1/mono.m3u8"
    },{
        name: "Euro Sports",
        category: "Sports",
        logo: "https://images.toffeelive.com/images/program/4388/logo/240x240/mobile_logo_422191001674119624.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=euro_sports_hd&chunks=c80806f436c1995953fd456a97305fa2c0282e45af1e9abbec5e4ba446233ae231aa74a900baf193eae557d2ab65fba593137767130719fa2ac9e720d4d32a17779bad021c2e21548fb3ec8f20d9cbb947e4cca3abbdb805a304d13822e2ede1b8eeb16a2ad8d180f9440ea3eac0fe8f"
    },{
        name: "CNN",
        category: "News",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AycBGGdbI7PbznX36eCm0hNu0eAuFrpKAi8c3LiAMA&s=10",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=cnn&chunks=c1f94b0c22c229e1d4dfdae9d4bf50a6331219ffbdb87c8440c72b2e3b8891b7e095d341e8f2105828acb7de421ab896a48914c75d2f102da8a322153bcff06b90da96ab9b19a520deae4d06eccec827"
    },{
        name: "Sony Sports 1",
        category: "Sports",
        logo: "https://images.toffeelive.com/images/program/603/logo/240x240/mobile_logo_237244001666780563.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sony_sports_1_hd&chunks=4776e8f8b535f4b0b1c814a38eeaa1fceb0d9aace5be090890bcc4cf76773318cf5456439e73b05e4c9fb9203117deb91475bdf6b7fecd3c4cd9f237a6a0d65ff12f0feb50b3787a1b10d30686f3cb9276e029e20401d7434aa2b2d3df42fdb47e8eb16352e433daa3f51c32de7af860"
    },{
        name: "Sony Sports 2",
        category: "Sports",
        logo: "https://images.toffeelive.com/images/program/604/logo/240x240/mobile_logo_093449001666780976.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sony_sports_2_hd&chunks=4776e8f8b535f4b0b1c814a38eeaa1fcadc7880caad34f0b9987d64c8c5df58f08ffa781b3c87f5cdeb84d822bcbbdc7cc6e8bb38903c35f27fe11e456450ef1d3d62a2b64f28a9aba71503d33e44de39b9f070d946f196792126a25392582df5a68d91aea81bae91ce9840a2e2ae430"
    },{
        name: "Sony Sports 5",
        category: "Sports",
        logo: "https://images.toffeelive.com/images/program/606/logo/240x240/mobile_logo_689539001672145843.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sony_sports_5_hd&chunks=4776e8f8b535f4b0b1c814a38eeaa1fca4ce2a39b79ff4c2fd487d7c97b613d1bd176b4fc2e23edf897c1538ee101d232c694766cd883574a303868278a783b8d8b8caa053094574fc811822acc2442769ffa20c7c08f8d18b19201c48b1a3742917e7f7b48de5919de2abe3be515396"
    },{
        name: "Ten Cricket",
        category: "Sports",
        logo: "https://images.toffeelive.com/images/program/301891/logo/240x240/mobile_logo_578686001735197654.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=ten_cricket&chunks=629c3b5cf9664bcb7de8b720eceaaed50bfee8299b0c917de5818c12d85b54ba11d755a5f5de5a9bd4d233da75163c92f678687ce280a4f08d5edf216d03397b661b512e954742d745760e294ecb02ec11dc8e332f6240fe146687a7311719ef"
    },{
        name: "Cartoon Network Hd",
        category: "Kids",
        logo: "https://images.toffeelive.com/images/program/26942/logo/240x240/mobile_logo_443429001678950505.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=cartoon_network_hd&chunks=bd3d7339b417e2a63fe287a9bc546e91065b82e223c81caba522345d0b6158ac94c9ab9ee5b12dc1d6ccbd85852267908dfd99d8fb399444b988459156939b41b3739014cc6fa5def2cbe65b5d0db1b229f93e8dc94cc0bdde0060815c6e096d75b47d5aa170c53e983e1478a5549ce7894ad9c4486285df64e0e093be7e23ab"
    },{
        name: "Dicovery Science",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/378/logo/240x240/mobile_logo_604754001673177502.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=discovery_science&chunks=9fd250f8d85afb51459043186fd49678b8bc1586e4516eba7fe8f38cdb05d1694756f3851b50d437336741b5eabd794fc17a1622a854514b36c592fadc196f0e196a84f67f09dbf49baccad581d59282f40a4c43478070d0a9727307a9e980b60f9fc776abd06a61fa5e52859d704f73"
    },{
        name: "Sony Pix",
        category: "Movie",
        logo: "https://images.toffeelive.com/images/program/2419/logo/240x240/mobile_logo_287412001666784602.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=sonypix_hd&chunks=0905b407e5d2a347267ba1b0a891851157fb55b1d6745fcefc2b12b427e1bdc960570913324cc63337937f0187b7ba5939accf27a0fe19129a44ac963278c67ed2e4a597600cf48dfc4c635380fb08297e901a7018811e5e7246077927ec9fb4"
    },{
        name: "Zing",
        category: "Entertainment ",
        logo: "https://logowik.com/content/uploads/images/4104-zing-tv-new.webp",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=zing_sd&chunks=07391d238584ddec211ab3e46ca0f859067c290bb052478dd4f6245ecbf8c62ec75319ea44207d6c626159ce99a304a038f10956204f07d685bde2bbbce1f86bc33edc1769950d76e5a0a695c2ca0ab6"
    },{
        name: "Hum Tv",
        category: "Entertainment",
        logo: "https://images.toffeelive.com/images/program/303937/logo/240x240/mobile_logo_880134001738072763.png",
        stream: "https://mflixott.com/tv/toffee-by-maruf/live.php?cid=hum_tv&chunks=42202edf937cf2c0630e0424b1e07194239008be3f212bec40b2362582865b2d69c220202b604af53006c647b92fcd338f1e841095ec8e0cd6593b070b495107fefc000247f16023d9363c2b4fb99821"
    }


];

// 3. UI APPLICATION STATE VARIABLES
let activeCategory = "All";
let activeChannel = null;
let hlsInstance = null;

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
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
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
            dom.progressBar.style.width = `${progress}%`;
        }
    }, 100);
}

// ==========================================================================
// 6. IPTV CORE ENGINE ARCHITECTURE
// ==========================================================================
function initIPTVApp() {
    updateChannelCounters();
    generateDynamicCategories();
    renderChannels();
    setupEventHandlers();
}

function updateChannelCounters() {
    dom.totalChannelsCount.textContent = channels.length;
}

function generateDynamicCategories() {
    // Extract unique categories cleanly from existing Channel Matrix arrays
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
    dom.channelsGrid.innerHTML = "";
    
    // Determine filter pipeline criteria
    let sourceChannels = filteredChannels ? filteredChannels : channels;
    if (!filteredChannels && activeCategory !== "All") {
        sourceChannels = channels.filter(c => c.category === activeCategory);
    }

    if (sourceChannels.length === 0) {
        dom.emptyState.classList.remove('hidden');
        return;
    } else {
        dom.emptyState.classList.add('hidden');
    }

    sourceChannels.forEach(channel => {
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
        dom.channelsGrid.appendChild(card);
    });
}

// ==========================================================================
// 7. HTML5 & HLS MEDIA PLAYER SYSTEM CONTROLLER
// ==========================================================================
function playChannel(channel) {
    activeChannel = channel;
    
    // Refresh visual active indicators inside grid matrix
    document.querySelectorAll('.channel-card').forEach(card => {
        if (card.querySelector('.card-title').textContent === channel.name) {
            card.classList.add('active-playing');
        } else {
            card.classList.remove('active-playing');
        }
    });

    // Reset Player Status Interface states
    dom.playerPlaceholder.classList.add('hidden');
    dom.playerError.classList.add('hidden');
    dom.playerLoader.classList.remove('hidden');
    
    dom.currentChannelName.textContent = channel.name;
    dom.currentChannelCategory.textContent = channel.category;

    // Destory existing active stream pipelines cleanly
    if (hlsInstance) {
        hlsInstance.destroy();
        hlsInstance = null;
    }

    // Process playback parsing dependent on HLS configuration setups
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
    // Handle Native Browsers deployment pipelines cleanly (Safari/iOS devices ecosystem setup)
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
    // Workaround for modern browsers auto-play interaction blockers block rules
    dom.player.muted = true;
    dom.player.play();
    console.warn("Autoplay muted to fulfill security policy metrics.");
}

function handlePlaybackFailure() {
    dom.playerLoader.classList.add('hidden');
    dom.playerError.classList.remove('hidden');
    if (hlsInstance) hlsInstance.destroy();
}

// ==========================================================================
// 8. LUXURY LIVE QUERY & SEARCH SYSTEMS ENGINE
// ==========================================================================
function setupEventHandlers() {
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
    // Filter criteria processing mapping engine setup
    const matchedChannels = channels.filter(channel => 
        channel.name.toLowerCase().includes(query) || 
        channel.category.toLowerCase().includes(query)
    );

    renderChannels(matchedChannels);
    renderSuggestions(matchedChannels, query);
}

function renderSuggestions(matchedChannels, query) {
    if (matchedChannels.length === 0) {
        dom.searchSuggestions.classList.add('hidden');
        return;
    }

    dom.searchSuggestions.innerHTML = "";
    dom.searchSuggestions.classList.remove('hidden');

    // Slice to top 5 recommendations max for performance layout cleanliness
    matchedChannels.slice(0, 5).forEach(channel => {
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