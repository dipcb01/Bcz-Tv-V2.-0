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
        stream: "http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8"
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
        stream: "http://172.32.1.88:1935/tvprogram/SOMOY-TV/playlist.m3u8"
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
        name: "G-Serise",
        category: "Movie",
        logo: "https://i.postimg.cc/FRnrRpZs/images-(16).jpg",
        stream: "https://vods2.aynaott.com/gseriesDrama/tracks-v1a1/mono.ts.m3u8"
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
        stream: "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8"
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
        stream: "https://streams2.sofast.tv/sofastplayout/WiseM3U8_1/master.m3u8"
    },
{
        name: "Star Jalsha",
        category: "মহিলা এন্টারটেইনমেন্ট",
        logo: "https://i.postimg.cc/267g07yT/images-(27).jpg",
        stream: "https://yupptvcatchupire.yuppcdn.net/preview/starjalsha/1800.m3u8"
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
        name: "Duronto Tv",
        category: "Kids",
        logo: "https://i.postimg.cc/NjPXr3xK/images-(4).png",
        stream: "http://172.32.1.88:1935/tvprogram/Duronto-TV/playlist.m3u8"
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
        stream: "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8"
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
        stream: "https://yupptvcatchupire.yuppcdn.net/preview/zeebangla/2500.m3u8"
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
        stream: "https://mtlivestream.com/hls/asian/ytlive/index.m3u8"
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
        stream: "http://198.195.239.50:8095/sonyAath/tracks-v1a1/mono.m3u8"
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