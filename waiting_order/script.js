// 时间节点配置（秒）- 提前2秒播报
const TIME_NODES = {
    '10分钟': 602,  // 600 + 2
    '5分钟': 302,   // 300 + 2
    '4分钟': 242,   // 240 + 2
    '3分钟': 182,   // 180 + 2
    '2分钟': 122,   // 120 + 2
    '1分53秒': 113, // 113 + 2
    '1分钟': 62,    // 60 + 2
    '30秒': 32,     // 30 + 2
    '15秒': 17      // 15 + 2
};

// API配置
const API_CONFIG = {
    baseUrl: 'http://110.42.111.82:9880'
};

// 角色模型配置
const CHARACTER_MODELS = {
    'hutao': {
        gptWeights: 'GPT_weights_v2/胡桃-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/胡桃_e10_s210.pth'
    },
    'klee': {
        gptWeights: 'GPT_weights_v2/可莉-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/可莉_e10_s210.pth'
    },
    'nahida': {
        gptWeights: 'GPT_weights_v2/纳西妲-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/纳西妲_e10_s400.pth'
    },
    'zhongli': {
        gptWeights: 'GPT_weights_v2/钟离-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/钟离_e10_s1120.pth'
    },
    'LuoTianyi': {
        gptWeights: 'GPT_weights_v2/luotianyi-e50.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/luotianyi_e50_s800.pth'
    },
    'Charlotte': {
        gptWeights: 'GPT_weights_v2/夏洛蒂-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/夏洛蒂_e10_s510.pth'
    },
    'keqing': {
        gptWeights: 'GPT_weights_v2/刻晴-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/刻晴_e10_s190.pth'
    },
    'chevreuse': {
        gptWeights: 'GPT_weights_v2/夏沃蕾-e10.ckpt',
        sovitsWeights: 'SoVITS_weights_v2/夏沃蕾_e10_s460.pth'
    }
};

// 角色情感配置（参考音频路径和prompt文本）
const CHARACTER_EMOTIONS = {
    'hutao': {
        'happy': { refAudioPath: 'E:\\参考音频\\胡桃\\认真\\不过本堂主为了讨个好彩头，现编了一个！.wav', promptText: '不过本堂主为了讨个好彩头，现编了一个！' },
        'tanoshii': { refAudioPath: 'D:\\Voice\\原神角色语音\\璃月\\胡桃\\需要帮手吗？需要帮手吗？我来啦！若你需要帮助，胡桃我定当全力以赴，绝不推辞。.wav', promptText: '需要帮手吗？需要帮手吗？我来啦！若你需要帮助，胡桃我定当全力以赴，绝不推辞。' },
        'sigh': { refAudioPath: 'D:\\Voice\\原神角色语音\\璃月\\胡桃\\哎呀…麻烦喽。.wav', promptText: '哎呀…麻烦喽。' },
        'huh': { refAudioPath: 'D:\\胡桃\\vo_HTLQ001_4_hutao_10.wav', promptText: '有什么不愿意面对的，都是迟早的事啊。' },
        'serious': { refAudioPath: 'E:\\参考音频\\胡桃\\认真\\我说白术，你不会看不出来吧？难不成你师父，忘了教你这门功夫？.wav', promptText: '我说白术，你不会看不出来吧？难不成你师父，忘了教你这门功夫？' },
        'Normal': { refAudioPath: 'E:\\参考音频\\胡桃\\Normal\\那个游戏机我倒是知道。这个好像有点复杂，可能需要软路由吧，我没研究过，反正油管上有教程。.wav', promptText: '那个游戏机我倒是知道。这个好像有点复杂，可能需要软路由吧，我没研究过，反正油管上有教程。' },
        'serious2': { refAudioPath: 'E:\\参考音频\\胡桃\\认真\\受人之托，忠人之事。我们往生堂性质特殊，肩负着双倍责任，所以，一定要让两个世界的人都满意才行。.wav', promptText: '受人之托，忠人之事。我们往生堂性质特殊，肩负着双倍责任，所以，一定要让两个世界的人都满意才行。' },
        'wara': { refAudioPath: 'D:\\胡桃\\vo_HTLQ004_1_hutao_18.wav', promptText: '哈哈哈，没有啦。看你们这个样子我就放心了，果然普通人是没办法轻易进去的。' },
        'chat': { refAudioPath: 'E:\\参考音频\\胡桃\\闲聊\\所以对普通人来说，最好的状态就是不知道幽灵鬼怪的事，或者认为它们根本不存在。.wav', promptText: '所以对普通人来说，最好的状态就是不知道幽灵鬼怪的事，或者认为它们根本不存在。' },
        'chat2': { refAudioPath: 'D:\\胡桃\\vo_HTLQ001_3_hutao_05.wav', promptText: '我是胡桃，往生堂的当代堂主，具体掌管的…嗯，就是些生离死别的小事。' },
        'chat3': { refAudioPath: 'D:\\胡桃\\vo_BZLQ001_6_hutao_08.wav', promptText: '听爷爷说，他们俩年轻的时候，曾经一起外出游历，在沉玉谷遇到了一名药师。' },
        'justice': { refAudioPath: 'D:\\Voice\\原神角色语音\\璃月\\胡桃\\吃饱喝饱，一路走好！.wav', promptText: '吃饱喝饱，一路走好！' },
        'aiya': { refAudioPath: 'D:\\胡桃\\vo_SGEQ001_2_hutao_09.wav', promptText: '哎呀，凡事总有第一次。谁不是从「地上一根草，树上两只鸟」开始的呢？' },
        'Angry': { refAudioPath: 'E:\\参考音频\\胡桃\\生气\\喂！！你们几个有完没完！！都别再闹了，给我停下！！.wav', promptText: '喂！！你们几个有完没完！！都别再闹了，给我停下！！' },
        'Surprised': { refAudioPath: 'D:\\胡桃\\vo_HTLQ001_14_hutao_15.wav', promptText: '欸欸——？！难道你在指望往生堂堂主去治病救人吗？' },
        'Anxious': { refAudioPath: 'D:\\胡桃\\vo_HTLQ001_4_hutao_07.wav', promptText: '喂喂，等等！那、那再打个折怎么样！如果一次满十个人可以有七折优惠！' }
    },
    'klee': {
        'Normal': { refAudioPath: 'E:\\参考音频\\可莉\\Normal\\这件事说起来是很有道理的。但我不得不说使用机场是要看部分地区和运营商的情况。.wav', promptText: '这件事说起来是很有道理的。但我不得不说使用机场是要看部分地区和运营商的情况。' },
        'normal2': { refAudioPath: 'E:\\参考音频\\可莉\\买东西那天还有一个人也一起帮着看了款式，那个人好像叫.wav', promptText: '买东西那天还有一个人也一起帮着看了款式，那个人好像叫……' },
        'happy': { refAudioPath: 'E:\\参考音频\\可莉\\开心\\今天也吃到了好吃的东西，可莉好开心！谢谢你！.wav', promptText: '今天也吃到了好吃的东西，可莉好开心！谢谢你！' },
        'tanoshii': { refAudioPath: 'E:\\参考音频\\可莉\\活跃\\早安！带可莉出去玩吧！我们一起来冒险！.wav', promptText: '早安！带可莉出去玩吧！我们一起来冒险！' },
        'ambivalent': { refAudioPath: 'E:\\参考音频\\可莉\\唔，不过要…等明天？可莉稍微有点累哦….wav', promptText: '唔，不过要…等明天？可莉稍微有点累哦…' },
        'excited': { refAudioPath: 'E:\\参考音频\\可莉\\好呀好呀！跟可莉去炸鱼！.wav', promptText: '好呀好呀！跟可莉去炸鱼！' },
        'serious': { refAudioPath: 'E:\\参考音频\\可莉\\认真\\每一只蜥蜴的花纹都是不同的，有些蜥蜴的尾巴干燥以后磨成粉，可以当做炸药的材料哦。.wav', promptText: '每一只蜥蜴的花纹都是不同的，有些蜥蜴的尾巴干燥以后磨成粉，可以当做炸药的材料哦。' },
        'bother': { refAudioPath: 'E:\\参考音频\\可莉\\烦\\讨厌蒙德蟹——什么蟹都讨厌——可莉要出去玩——不要坐在餐桌前慢慢剥壳——.wav', promptText: '讨厌蒙德蟹——什么蟹都讨厌——可莉要出去玩——不要坐在餐桌前慢慢剥壳——' },
        'Anxious': { refAudioPath: 'E:\\可莉\\vo_EQYQ003_8_klee_03.wav', promptText: '不会失败的，不要说这种话啦！' },
        'proud': { refAudioPath: 'E:\\参考音频\\可莉\\骄傲\\优菈姐姐是能劈开一切的「魔剑士」，还有亮闪闪的、好看的披风呢！.wav', promptText: '优菈姐姐是能劈开一切的「魔剑士」，还有亮闪闪的、好看的披风呢！' },
        'leisure': { refAudioPath: 'E:\\参考音频\\可莉\\闲\\可莉喜欢毛茸茸的东西。比如嘟嘟可、蒲公英，还有雷泽的头发。.wav', promptText: '可莉喜欢毛茸茸的东西。比如嘟嘟可、蒲公英，还有雷泽的头发。' },
        'angry': { refAudioPath: 'E:\\参考音频\\可莉\\生气\\够了！可莉生气了！你们这些人烦不烦？！.wav', promptText: '够了！可莉生气了！你们这些人烦不烦？！' },
        'doubt': { refAudioPath: 'E:\\可莉\\vo_JNJEQ003_6_klee_06.wav', promptText: '怎么会这样，雷泽，风神大人没有回来，是不是他不喜欢我们准备的酒？' }
    },
    'nahida': {
        'Normal': { refAudioPath: 'E:\\参考音频\\纳西妲\\normal\\好啦，就先聊到这里吧。以后如果你们想我的话，说不定我会在你们的梦里出现哦？.wav', promptText: '好啦，就先聊到这里吧。以后如果你们想我的话，说不定我会在你们的梦里出现哦？' },
        'happy': { refAudioPath: 'E:\\参考音频\\纳西妲\\Happy\\昨晚真叫人愉快啊，我到现在还像漂浮在水面上的蜡烛那样徜徉在幸福和喜悦中呢。.wav', promptText: '昨晚真叫人愉快啊，我到现在还像漂浮在水面上的蜡烛那样徜徉在幸福和喜悦中呢。' },
        'emo': { refAudioPath: 'E:\\参考音频\\纳西妲\\感动\\…谢谢，各位，太感谢了。.wav', promptText: '…谢谢，各位，太感谢了。' },
        'thanks': { refAudioPath: 'E:\\纳西妲\\纳西妲\\vo_nahida_spice_event_pref_01.wav', promptText: '像这样的好味道，应该被世界永久记录下来。谢谢你。' },
        'thanks_2': { refAudioPath: 'E:\\纳西妲\\纳西妲\\vo_nahida_spice_event_normal_01.wav', promptText: '呵呵，你的心意我收到了，味道也可圈可点。' },
        'thinking': { refAudioPath: 'E:\\参考音频\\纳西妲\\连你都这么说，看来，世界树不会记录降临者。来自世界之外的个体，均不属于提瓦特。.wav', promptText: '连你都这么说，看来，世界树不会记录降临者。来自世界之外的个体，均不属于提瓦特。' },
        'Angry1': { refAudioPath: 'E:\\参考音频\\纳西妲\\生气\\可你只把最安逸的东西展示给了他们，你的梦境建立在更多看不见的痛苦之上。.wav', promptText: '可你只把最安逸的东西展示给了他们，你的梦境建立在更多看不见的痛苦之上。' },
        'Angry2': { refAudioPath: 'E:\\参考音频\\纳西妲\\生气\\你还会选择现在的位置吗？到那时，你觉得自己又会是什么呢？.wav', promptText: '你还会选择现在的位置吗？到那时，你觉得自己又会是什么呢？' }
    },
    'zhongli': {
        'Normal': { refAudioPath: 'E:\\参考音频\\钟离\\无事逢客休，席上校两棋…我们开局吧。.wav', promptText: '无事逢客休，席上校两棋…我们开局吧。' }
    },
    'LuoTianyi': {
        'Normal': { refAudioPath: 'D:\\quark\\参考音频\\大家好，我是虚拟歌手洛天依.wav', promptText: '大家好，我是虚拟歌手洛天依，欢迎来到我的十周年生日会直播。' }
    },
    'Charlotte': {
        'Normal': { refAudioPath: 'E:\\参考音频\\夏洛蒂\\您不介意的话，可以讲给我们听听，一般说出来会好很多。.wav', promptText: '您不介意的话，可以讲给我们听听，一般说出来会好很多。' },
        'normal2': { refAudioPath: 'E:\\夏洛蒂\\vo_EQHDJ303_11_charlotte_03.wav', promptText: '嗯，可以这么理解。我们枫丹人也是很爱喝茶的嘛。' },
        'chat': { refAudioPath: 'E:\\夏洛蒂\\vo_charlotte_character_idle_01.wav', promptText: '只要眼睛够尖，脑子够快，每天都能找到好新闻。' },
        'chat2': { refAudioPath: 'E:\\夏洛蒂\\vo_charlotte_friendship_02.wav', promptText: '刚做记者的时候，我对写报道文章一窍不通，只能通过阅读其他报道来学习。除了蒸汽鸟报之外，还有一些在小范围印发的私人刊物。比如专门报道枫丹廷内各种明星八卦的观窥者报、持续关注各种娱乐活动和赛事的娱乐家周刊、评论美食的主厨、只会胡说八道和造谣传谣的惊奇！等等。这些报纸都给了我很大的启发，让我学会了…嗯，驾驭许多不同的行文风格。' },
        'chat3': { refAudioPath: 'E:\\夏洛蒂\\vo_charlotte_friendship_04.wav', promptText: '在小时候，我还没入记者这行的时候，我的好奇心特别重，总觉得万事万物后都隐藏着秘密。对我来说，这个世界是一片巨大的藏宝地，藏匿着无数不为人知的故事等待发掘。每当遇见那些我觉得藏匿有秘密的事物，就会拿出留影机拍下一张画片，放在我的画片集里。这些画片都是只属于我的藏宝图…而我也一直不断用各种方法解读着它们，试图揭示出隐藏在画片中的真相。' },
        'enthusiasm': { refAudioPath: 'E:\\夏洛蒂\\vo_DPEQ001_16_charlotte_01.wav', promptText: '您客气了。早就听闻蒙德是自由与诗歌之城，这里的氛围也如传言一般，弥漫着惬意的味道。' },
        'vivid': { refAudioPath: 'E:\\夏洛蒂\\vo_charlotte_teamJoin_03.wav', promptText: '靠得越近，报道越真实。' },
        'Happy': { refAudioPath: 'E:\\夏洛蒂\\vo_card_charlotte_inGame_easy_01.wav', promptText: '果然有用。' },
        'angry': { refAudioPath: 'E:\\夏洛蒂\\vo_QZLQ002_9_charlotte_02.wav', promptText: '这都是谁干的？告诉我名字，我明天就让他登报！' },
        'angry2': { refAudioPath: 'E:\\夏洛蒂\\vo_QZLQ002_3_charlotte_03.wav', promptText: '是吧？我也被气得够呛！' },
        'anxious': { refAudioPath: 'E:\\夏洛蒂\\vo_SLLQ001_13_charlotte_11.wav', promptText: '什么？有人想对可爱的美露莘下手？' },
        '111': { refAudioPath: 'E:\\夏洛蒂\\vo_dialog_DPEQ002_charlotte_01.wav', promptText: '您好您好，我是来自枫丹「蒸汽鸟报社」的记者夏洛蒂。' },
        'News': { refAudioPath: 'E:\\夏洛蒂\\vo_dialog_DPEQ002_charlotte_03.wav', promptText: '您一路过关斩将，最后关头不敌往生堂的胡桃胡堂主，与冠军失之交臂，看起来相当遗憾。' },
        'ask': { refAudioPath: 'E:\\夏洛蒂\\vo_dialog_DPEQ002_charlotte_02.wav', promptText: '请问方便抽点时间吗？我想对您做个简单采访。' }
    },
    'keqing': {
        'Normal': { refAudioPath: 'E:\\刻晴\\vo_keqing_draw_appear.wav', promptText: '我是刻晴，璃月七星中的「玉衡」。变革的时机已经到来，维持了千年的秩序即将被改写。这历史性的时刻，你愿意和我一起见证吗？' },
        'Normal2': { refAudioPath: 'E:\\刻晴\\vo_dialog_SHLQ002_keqing_02.wav', promptText: '有什么事吗？我现在很忙，恐怕聊不了太久。' },
        'alah': { refAudioPath: 'E:\\刻晴\\vo_EQZYJ001_17_keqing_06.wav', promptText: '帝君向来注重传统…可惜从今往后，传承传统的事只能由我们这些后人来完成了。' },
        'prevent': { refAudioPath: 'E:\\刻晴\\vo_LYAQ201_8_keqing_01.wav', promptText: '住手！何事喧哗？' },
        'momentum': { refAudioPath: 'E:\\刻晴\\vo_LYAQ205_4_keqing_01.wav', promptText: '能行动的千岩军，都跟我上！' },
        'ambivalent': { refAudioPath: 'E:\\刻晴\\vo_EQZYJ002_17_keqing_06.wav', promptText: '香菱是我朋友，于情于理，我都该跟她坦白这件事。' },
        'chat': { refAudioPath: 'E:\\刻晴\\vo_keqing_explore_idle_01.wav', promptText: '耽误太多时间，事情可就做不完了。' }
    },
    'chevreuse': {
        'Normal': { refAudioPath: 'D:\\夏沃蕾\\vo_chevreuse_character_idle_02.wav', promptText: '我们特巡队并不参与枫丹廷的日常巡视工作，我们追捕的人，也不可能在大街上露面。' }
    }
};

// 角色情感选项配置
const EMOTION_OPTIONS = {
    'hutao': [
        { value: 'Normal', text: 'Normal' },
        { value: 'happy', text: '快乐' },
        { value: 'tanoshii', text: '活跃' },
        { value: 'sigh', text: '叹气' },
        { value: 'huh', text: '思考' },
        { value: 'serious', text: '认真' },
        { value: 'serious2', text: '认真2' },
        { value: 'wara', text: '笑' },
        { value: 'chat', text: '闲聊' },
        { value: 'chat2', text: '闲聊2' },
        { value: 'chat3', text: '闲聊3' },
        { value: 'justice', text: '正义' },
        { value: 'aiya', text: '哎呀' },
        { value: 'Angry', text: '生气' },
        { value: 'Surprised', text: '惊了' },
        { value: 'Anxious', text: '急了' }
    ],
    'klee': [
        { value: 'Normal', text: 'Normal' },
        { value: 'normal2', text: 'normal 2' },
        { value: 'happy', text: '快乐' },
        { value: 'tanoshii', text: '活跃' },
        { value: 'ambivalent', text: '纠结' },
        { value: 'excited', text: '兴奋' },
        { value: 'serious', text: '认真' },
        { value: 'doubt', text: '无奈' },
        { value: 'bother', text: '烦' },
        { value: 'Anxious', text: '急了' },
        { value: 'angry', text: '生气' },
        { value: 'proud', text: '骄傲' },
        { value: 'leisure', text: '闲' }
    ],
    'nahida': [
        { value: 'Normal', text: 'Normal' },
        { value: 'happy', text: '快乐' },
        { value: 'emo', text: '感动' },
        { value: 'thanks', text: '收到赠礼' },
        { value: 'thanks_2', text: '收到赠礼2' },
        { value: 'thinking', text: '思考' },
        { value: 'Angry1', text: '生气1' },
        { value: 'Angry2', text: '生气2' }
    ],
    'zhongli': [
        { value: 'Normal', text: 'Normal' }
    ],
    'LuoTianyi': [
        { value: 'Normal', text: 'Normal' }
    ],
    'Charlotte': [
        { value: 'Normal', text: 'Normal' },
        { value: 'normal2', text: 'Normal 2' },
        { value: 'chat', text: '闲聊' },
        { value: 'chat2', text: '闲聊2' },
        { value: 'chat3', text: '闲聊3' },
        { value: 'enthusiasm', text: '热情' },
        { value: 'vivid', text: '活跃' },
        { value: 'Happy', text: '兴奋' },
        { value: 'angry', text: '生气' },
        { value: 'angry2', text: '生气2' },
        { value: 'anxious', text: '急了' },
        { value: '111', text: '自我介绍' },
        { value: 'News', text: '新闻采访' },
        { value: 'ask', text: '询问' }
    ],
    'keqing': [
        { value: 'Normal', text: 'Normal' },
        { value: 'Normal2', text: 'Normal2' },
        { value: 'alah', text: '唉' },
        { value: 'prevent', text: '阻止' },
        { value: 'momentum', text: '气势' },
        { value: 'ambivalent', text: '纠结' },
        { value: 'chat', text: '闲聊' }
    ],
    'chevreuse': [
        { value: 'Normal', text: 'Normal' }
    ]
};

// 全局状态
let timer = null;
let remainingSeconds = 0;
let isRunning = false;
let isPaused = false;
let audioFiles = {};
let triggeredNodes = new Set();
let currentAudio = null; // 当前播放的音频对象，用于防止重叠
let isWaitingForAudio = false; // 是否正在等待音频播放完成
let synthesizedAudio = null; // 合成的语音音频对象
let isSynthesizing = false; // 是否正在合成语音

// DOM元素（延迟初始化）
let timeDisplay, statusDisplay, startBtn, pauseBtn, resetBtn;
let actualReadyBtn, earlyReadyBtn, audioList;
let actualReadyPreviewBtn, actualReadyUploadBtn;
let earlyReadyPreviewBtn, earlyReadyUploadBtn;
let platformSelect, orderNumber, ttsStatus, characterSelect, emotionSelect;
let timeSelector, timeSelectorSec; // 时间选择器容器
let selectedMinutes = 10; // 默认10分钟
let selectedSeconds = 0; // 默认0秒
let sidebarToggle, sidebar, sidebarClose, sidebarOverlay, clearCacheBtn, forceReloadBtn; // 侧边栏相关元素

// 初始化
function init() {
    console.log('开始初始化...');
    
    // 获取DOM元素
    timeDisplay = document.getElementById('timeDisplay');
    statusDisplay = document.getElementById('statusDisplay');
    startBtn = document.getElementById('startBtn');
    pauseBtn = document.getElementById('pauseBtn');
    resetBtn = document.getElementById('resetBtn');
    actualReadyBtn = document.getElementById('actualReadyBtn');
    earlyReadyBtn = document.getElementById('earlyReadyBtn');
    audioList = document.getElementById('audioList');
    timeSelector = document.getElementById('timeSelector');
    timeSelectorSec = document.getElementById('timeSelectorSec');
    actualReadyPreviewBtn = document.getElementById('actualReadyPreviewBtn');
    actualReadyUploadBtn = document.getElementById('actualReadyUploadBtn');
    earlyReadyPreviewBtn = document.getElementById('earlyReadyPreviewBtn');
    earlyReadyUploadBtn = document.getElementById('earlyReadyUploadBtn');
    platformSelect = document.getElementById('platformSelect');
    orderNumber = document.getElementById('orderNumber');
    ttsStatus = document.getElementById('ttsStatus');
    characterSelect = document.getElementById('characterSelect');
    emotionSelect = document.getElementById('emotionSelect');
    sidebarToggle = document.getElementById('sidebarToggle');
    sidebar = document.getElementById('sidebar');
    sidebarClose = document.getElementById('sidebarClose');
    sidebarOverlay = document.getElementById('sidebarOverlay');
    clearCacheBtn = document.getElementById('clearCacheBtn');
    forceReloadBtn = document.getElementById('forceReloadBtn');
    
    // 检查关键元素
    const missingElements = [];
    if (!timeDisplay) missingElements.push('timeDisplay');
    if (!statusDisplay) missingElements.push('statusDisplay');
    if (!startBtn) missingElements.push('startBtn');
    if (!pauseBtn) missingElements.push('pauseBtn');
    if (!resetBtn) missingElements.push('resetBtn');
    if (!actualReadyBtn) missingElements.push('actualReadyBtn');
    if (!earlyReadyBtn) missingElements.push('earlyReadyBtn');
    if (!timeSelector) missingElements.push('timeSelector');
    if (!audioList) missingElements.push('audioList');
    
    if (missingElements.length > 0) {
        console.error('无法找到以下DOM元素:', missingElements);
        // 即使缺少一些元素，也尝试继续初始化
        if (!audioList) {
            console.error('audioList元素未找到，无法显示音频设置');
            return;
        }
    }
    
    console.log('DOM元素加载完成，开始加载数据...');
    loadAudioFiles();
    console.log('开始渲染音频设置...');
    renderAudioSettings();
    console.log('设置场景音频...');
    setupScenarioAudios();
    console.log('初始化角色和情感选择...');
    setupCharacterEmotionSelect();
    console.log('初始化时间选择器...');
    setupTimeSelector();
    setupTimeSelectorSec();
    console.log('初始化侧边栏...');
    setupSidebar();
    console.log('设置事件监听器...');
    setupEventListeners();
    
    // 设置初始时间
    remainingSeconds = selectedMinutes * 60 + selectedSeconds;
    updateDisplay();
    console.log('初始化完成');
}

// 从localStorage加载音频文件
function loadAudioFiles() {
    const saved = localStorage.getItem('waitingOrderAudios');
    if (saved) {
        try {
            const loaded = JSON.parse(saved);
            // 验证加载的数据结构
            if (typeof loaded === 'object' && loaded !== null) {
                audioFiles = loaded;
                console.log('音频文件已从本地存储加载，共', Object.keys(audioFiles).length, '个音频');
                
                // 验证每个音频数据是否完整
                let validCount = 0;
                for (const [nodeName, audioData] of Object.entries(audioFiles)) {
                    if (audioData && audioData.data) {
                        validCount++;
                    } else {
                        console.warn(`音频 "${nodeName}" 数据不完整，已移除`);
                        delete audioFiles[nodeName];
                    }
                }
                
                // 如果有无效数据被移除，重新保存
                if (validCount < Object.keys(audioFiles).length) {
                    saveAudioFiles();
                }
            } else {
                console.warn('本地存储的数据格式不正确，已重置');
                audioFiles = {};
            }
        } catch (e) {
            console.error('加载音频文件失败:', e);
            audioFiles = {};
            // 如果加载失败，清除损坏的数据
            try {
                localStorage.removeItem('waitingOrderAudios');
            } catch (clearError) {
                console.error('清除损坏数据失败:', clearError);
            }
        }
    } else {
        console.log('本地存储中没有音频文件');
        audioFiles = {};
    }
}

// 保存音频文件到localStorage
function saveAudioFiles() {
    try {
        const dataStr = JSON.stringify(audioFiles);
        localStorage.setItem('waitingOrderAudios', dataStr);
        
        // 验证保存是否成功
        const saved = localStorage.getItem('waitingOrderAudios');
        if (saved !== dataStr) {
            console.warn('保存验证失败，数据可能未正确保存');
            return false;
        }
        
        console.log('音频文件已成功保存到本地存储');
        return true;
    } catch (e) {
        console.error('保存音频文件失败:', e);
        if (e.name === 'QuotaExceededError') {
            alert('本地存储空间不足，无法保存音频文件。请删除一些旧的音频文件或使用更小的音频文件。');
        } else {
            alert('保存音频文件失败：' + e.message);
        }
        return false;
    }
}

// 渲染音频设置列表
function renderAudioSettings() {
    if (!audioList) {
        console.error('audioList元素未找到，无法渲染音频设置');
        return;
    }
    
    console.log('清空audioList，准备渲染', Object.keys(TIME_NODES).length, '个时间节点');
    audioList.innerHTML = '';
    
    const nodeNames = Object.keys(TIME_NODES).filter(nodeName => nodeName !== '1分53秒'); // 排除1分53秒，因为使用语音合成
    console.log('时间节点列表:', nodeNames);
    
    nodeNames.forEach((nodeName, index) => {
        const audioItem = document.createElement('div');
        audioItem.className = 'audio-item';
        
        const hasAudio = audioFiles[nodeName] && audioFiles[nodeName].data;
        const audioStatus = hasAudio ? 'has-audio' : '';
        
        audioItem.innerHTML = `
            <div class="audio-item-header">
                <span class="audio-item-label">${nodeName}</span>
                <div class="audio-item-controls">
                    <button class="audio-preview-btn" ${!hasAudio ? 'disabled' : ''} 
                            data-node-index="${index}">
                        试听
                    </button>
                    <button class="audio-upload-btn" data-node-index="${index}">
                        ${hasAudio ? '更换音频' : '选择音频'}
                    </button>
                </div>
            </div>
            <div class="audio-status ${audioStatus}">
                ${hasAudio ? '✓ 已设置音频' : '未设置音频'}
            </div>
        `;
        
        // 使用事件监听器
        const previewBtn = audioItem.querySelector('.audio-preview-btn');
        const uploadBtn = audioItem.querySelector('.audio-upload-btn');
        
        if (previewBtn) {
            previewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                previewAudio(nodeName);
            });
        }
        
        if (uploadBtn) {
            uploadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                uploadAudio(nodeName);
            });
        }
        
        audioList.appendChild(audioItem);
        console.log(`已添加音频设置项: ${nodeName}`);
    });
    
    console.log('音频设置渲染完成，共', audioList.children.length, '项');
}

// 上传音频文件
function uploadAudio(nodeName) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'audio/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // 检查文件大小（localStorage 通常限制在 5-10MB）
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                alert(`音频文件太大（${(file.size / 1024 / 1024).toFixed(2)}MB），请使用小于5MB的文件。`);
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (event) => {
                // 保存旧数据（用于回滚）
                const oldData = audioFiles[nodeName];
                
                // 更新音频数据
                audioFiles[nodeName] = {
                    data: event.target.result,
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    timestamp: Date.now() // 添加时间戳，便于调试
                };
                
                // 尝试保存到 localStorage
                const saveSuccess = saveAudioFiles();
                
                if (saveSuccess) {
                    // 保存成功，更新界面
                    renderAudioSettings();
                    updateScenarioAudioButtons(); // 更新场景音频按钮状态
                    console.log(`音频 "${nodeName}" 已成功更新`);
                } else {
                    // 保存失败，回滚到旧数据
                    if (oldData) {
                        audioFiles[nodeName] = oldData;
                    } else {
                        delete audioFiles[nodeName];
                    }
                    console.error(`音频 "${nodeName}" 保存失败，已回滚`);
                }
            };
            
            reader.onerror = () => {
                alert('读取音频文件失败，请重试。');
                console.error('FileReader 错误');
            };
            
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// 预览音频
function previewAudio(nodeName) {
    if (audioFiles[nodeName] && audioFiles[nodeName].data) {
        const audio = new Audio(audioFiles[nodeName].data);
        audio.play().catch(e => {
            console.error('播放音频失败:', e);
            alert('播放音频失败，请检查音频文件');
        });
    }
}

// 播放音频
function playAudio(nodeName) {
    if (audioFiles[nodeName] && audioFiles[nodeName].data) {
        // 如果是15秒音频，不要停止当前音频（因为可能是倒计时结束前的最后一个音频）
        // 其他音频正常停止当前音频，防止重叠
        if (currentAudio && nodeName !== '15秒') {
            try {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            } catch (e) {
                console.warn('停止音频时出错:', e);
            }
        }
        
        // 创建并播放新音频
        const audio = new Audio(audioFiles[nodeName].data);
        audio.volume = 1.0;
        currentAudio = audio;
        
        // 如果是15秒音频，标记为正在等待音频播放完成
        if (nodeName === '15秒') {
            isWaitingForAudio = true;
        }
        
        // 音频播放结束后清除引用
        audio.addEventListener('ended', () => {
            if (currentAudio === audio) {
                currentAudio = null;
                // 如果是15秒音频播放完成，且倒计时已结束，现在可以完全停止了
                if (nodeName === '15秒' && isWaitingForAudio) {
                    isWaitingForAudio = false;
                    // 确保倒计时已完全停止
                    if (remainingSeconds <= 0) {
                        finalStopTimer();
                    }
                }
            }
        });
        
        audio.addEventListener('error', () => {
            if (currentAudio === audio) {
                currentAudio = null;
                // 如果15秒音频播放出错，也要清除等待标志
                if (nodeName === '15秒' && isWaitingForAudio) {
                    isWaitingForAudio = false;
                    if (remainingSeconds <= 0) {
                        finalStopTimer();
                    }
                }
            }
        });
        
        audio.play().catch(e => {
            console.error('播放音频失败:', e);
            currentAudio = null;
            // 如果15秒音频播放失败，也要清除等待标志
            if (nodeName === '15秒' && isWaitingForAudio) {
                isWaitingForAudio = false;
                if (remainingSeconds <= 0) {
                    finalStopTimer();
                }
            }
        });
    }
}

// 生成合成文本
function generateTTSText() {
    const platform = platformSelect ? platformSelect.value : '美团外卖';
    const orderNum = orderNumber ? orderNumber.value.trim() : '';
    
    if (!orderNum) {
        return null;
    }
    
    return `${platform}${orderNum}号订单出餐慢，未出餐。请加紧出餐，避免被骑手催单哦~`;
}

// 更新情感选项
function updateEmotionOptions(character) {
    if (!emotionSelect) return;
    
    emotionSelect.innerHTML = '';
    
    const emotions = EMOTION_OPTIONS[character] || [];
    emotions.forEach(emotion => {
        const option = document.createElement('option');
        option.value = emotion.value;
        option.textContent = emotion.text;
        emotionSelect.appendChild(option);
    });
    
    // 默认选择第一个选项
    if (emotions.length > 0) {
        emotionSelect.value = emotions[0].value;
    }
}

// 获取当前选择的参考音频路径和prompt文本
function getRefAudioConfig() {
    const character = characterSelect ? characterSelect.value : 'hutao';
    const emotion = emotionSelect ? emotionSelect.value : 'serious';
    
    const characterEmotions = CHARACTER_EMOTIONS[character];
    if (characterEmotions && characterEmotions[emotion]) {
        return characterEmotions[emotion];
    }
    
    // 如果没有找到对应的情感，使用第一个可用的情感
    const firstEmotion = Object.keys(characterEmotions || {})[0];
    if (firstEmotion && characterEmotions[firstEmotion]) {
        return characterEmotions[firstEmotion];
    }
    
    // 默认值
    return {
        refAudioPath: 'E:\\参考音频\\胡桃\\认真\\不过本堂主为了讨个好彩头，现编了一个！.wav',
        promptText: '不过本堂主为了讨个好彩头，现编了一个！'
    };
}

// 设置API模型
async function setupAPIModels() {
    const character = characterSelect ? characterSelect.value : 'hutao';
    const modelConfig = CHARACTER_MODELS[character];
    
    if (!modelConfig) {
        console.error('未找到角色模型配置:', character);
        return false;
    }
    
    try {
        // 设置GPT模型
        const gptUrl = `${API_CONFIG.baseUrl}/set_gpt_weights?weights_path=${encodeURIComponent(modelConfig.gptWeights)}`;
        await fetch(gptUrl);
        
        // 设置SoVITS模型
        const sovitsUrl = `${API_CONFIG.baseUrl}/set_sovits_weights?weights_path=${encodeURIComponent(modelConfig.sovitsWeights)}`;
        await fetch(sovitsUrl);
        
        console.log('API模型设置完成:', character);
        return true;
    } catch (error) {
        console.error('设置API模型失败:', error);
        return false;
    }
}

// 合成语音
async function synthesizeSpeech(text) {
    if (!text || isSynthesizing) {
        return null;
    }
    
    isSynthesizing = true;
    updateTTSStatus('正在合成语音...');
    
    try {
        // 先设置模型
        await setupAPIModels();
        
        // 获取参考音频配置
        const refAudioConfig = getRefAudioConfig();
        
        // 构建合成URL
        const params = new URLSearchParams({
            text: text,
            text_lang: 'auto',
            ref_audio_path: refAudioConfig.refAudioPath,
            prompt_lang: 'zh',
            prompt_text: refAudioConfig.promptText,
            text_split_method: 'cut0',
            batch_size: '10',
            media_type: 'wav'
        });
        
        const url = `${API_CONFIG.baseUrl}/?${params.toString()}`;
        console.log('合成语音URL:', url);
        
        // 调用API合成语音
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 获取音频数据
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // 创建音频对象
        const audio = new Audio(audioUrl);
        synthesizedAudio = audio;
        
        updateTTSStatus('语音合成完成');
        console.log('语音合成成功');
        
        return audio;
    } catch (error) {
        console.error('合成语音失败:', error);
        updateTTSStatus('语音合成失败: ' + error.message);
        return null;
    } finally {
        isSynthesizing = false;
    }
}

// 更新TTS状态显示
function updateTTSStatus(message) {
    if (ttsStatus) {
        ttsStatus.textContent = message;
        ttsStatus.className = 'tts-status ' + (message.includes('失败') ? 'error' : 'success');
    }
}

// 播放合成的语音
function playSynthesizedAudio() {
    if (synthesizedAudio) {
        // 停止当前播放的音频
        if (currentAudio && currentAudio !== synthesizedAudio) {
            try {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            } catch (e) {
                console.warn('停止音频时出错:', e);
            }
        }
        
        currentAudio = synthesizedAudio;
        synthesizedAudio.volume = 1.0;
        
        synthesizedAudio.play().catch(e => {
            console.error('播放合成语音失败:', e);
            updateTTSStatus('播放语音失败');
        });
        
        updateStatus('播报: 1分53秒（合成语音）');
    } else {
        console.warn('没有可播放的合成语音');
        updateTTSStatus('未找到合成语音');
    }
}

// 检查并触发时间节点
function checkTimeNodes() {
    // 提前2秒播报：节点时间已经包含了提前的2秒
    // 例如：30秒节点设置为32秒，应该在剩余32秒时播报（提前2秒）
    // 例如：15秒节点设置为17秒，应该在剩余17秒时播报（提前2秒）
    
    // 按时间从大到小排序，确保先检查大节点
    const sortedNodes = Object.entries(TIME_NODES)
        .sort((a, b) => b[1] - a[1]);
    
    for (const [nodeName, nodeSeconds] of sortedNodes) {
        // 精确匹配：剩余时间必须刚好等于节点时间（不允许提前或延后）
        // 因为倒计时每秒递减，所以当剩余时间刚好等于节点时间时触发
        if (remainingSeconds === nodeSeconds && !triggeredNodes.has(nodeName)) {
            triggeredNodes.add(nodeName);
            
            // 特殊处理1分53秒节点，播放合成语音
            if (nodeName === '1分53秒') {
                playSynthesizedAudio();
            } else {
                playAudio(nodeName);
            }
            
            updateStatus(`播报: ${nodeName}`);
            // 只触发一个节点，避免同时触发多个
            break;
        }
    }
}

// 设置场景音频
function setupScenarioAudios() {
    // 更新场景音频按钮状态
    updateScenarioAudioButtons();
    
    // 实际出餐音频
    if (actualReadyPreviewBtn) {
        actualReadyPreviewBtn.addEventListener('click', () => {
            previewAudio('实际出餐');
        });
    }
    
    if (actualReadyUploadBtn) {
        actualReadyUploadBtn.addEventListener('click', () => {
            uploadAudio('实际出餐');
        });
    }
    
    // 提前点出餐音频
    if (earlyReadyPreviewBtn) {
        earlyReadyPreviewBtn.addEventListener('click', () => {
            previewAudio('提前点出餐');
        });
    }
    
    if (earlyReadyUploadBtn) {
        earlyReadyUploadBtn.addEventListener('click', () => {
            uploadAudio('提前点出餐');
        });
    }
}

// 更新场景音频按钮状态
function updateScenarioAudioButtons() {
    const hasActualAudio = audioFiles['实际出餐'] && audioFiles['实际出餐'].data;
    const hasEarlyAudio = audioFiles['提前点出餐'] && audioFiles['提前点出餐'].data;
    
    if (actualReadyPreviewBtn) {
        actualReadyPreviewBtn.disabled = !hasActualAudio;
    }
    if (earlyReadyPreviewBtn) {
        earlyReadyPreviewBtn.disabled = !hasEarlyAudio;
    }
}

// 设置角色和情感选择
function setupCharacterEmotionSelect() {
    // 初始化情感选项（默认使用胡桃）
    if (characterSelect && emotionSelect) {
        const defaultCharacter = characterSelect.value || 'hutao';
        updateEmotionOptions(defaultCharacter);
        
        // 角色改变时更新情感选项
        characterSelect.addEventListener('change', (e) => {
            updateEmotionOptions(e.target.value);
        });
    }
}

// 设置侧边栏
function setupSidebar() {
    // 打开侧边栏
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            if (sidebar) sidebar.classList.add('open');
            if (sidebarOverlay) sidebarOverlay.classList.add('show');
        });
    }
    
    // 关闭侧边栏
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // 清除缓存
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', () => {
            if (confirm('确定要清除所有缓存吗？这将删除所有保存的音频文件和设置。')) {
                clearAllCache();
                closeSidebar();
            }
        });
    }

    // 清除页面缓存并重载
    if (forceReloadBtn) {
        forceReloadBtn.addEventListener('click', async () => {
            if (!confirm('清除页面缓存并强制刷新？')) return;

            try {
                // 尝试清除 Cache Storage（含 Service Worker 缓存）
                if (window.caches && caches.keys) {
                    const keys = await caches.keys();
                    await Promise.all(keys.map(key => caches.delete(key)));
                    console.log('Cache Storage 已清理');
                }
            } catch (err) {
                console.warn('清理 Cache Storage 失败:', err);
            }

            try {
                // 触发强制刷新
                window.location.reload(true);
            } catch (err) {
                console.warn('强制刷新失败，改用普通刷新:', err);
                window.location.reload();
            }
        });
    }
}

// 关闭侧边栏
function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
}

// 清除所有缓存
function clearAllCache() {
    try {
        // 清除localStorage中的音频文件
        localStorage.removeItem('waitingOrderAudios');
        
        // 清除内存中的音频文件
        audioFiles = {};
        
        // 重新渲染音频设置
        renderAudioSettings();
        updateScenarioAudioButtons();
        
        // 清除合成的音频
        if (synthesizedAudio) {
            try {
                synthesizedAudio.pause();
                synthesizedAudio = null;
            } catch (e) {
                console.warn('清除合成音频时出错:', e);
            }
        }
        
        alert('缓存已清除！');
        console.log('所有缓存已清除');
    } catch (e) {
        console.error('清除缓存失败:', e);
        alert('清除缓存失败：' + e.message);
    }
}

// 设置时间选择器
function setupTimeSelector() {
    if (!timeSelector) return;
    
    timeSelector.innerHTML = '';
    
    // 创建10个方形按钮（1-10分钟）
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'time-selector-btn';
        btn.type = 'button';
        btn.dataset.minutes = i;
        
        // 默认选中10分钟
        if (i === selectedMinutes) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', () => {
            // 移除所有选中状态
            timeSelector.querySelectorAll('.time-selector-btn').forEach(b => {
                b.classList.remove('selected');
            });
            
            // 添加选中状态
            btn.classList.add('selected');
            selectedMinutes = i;
            
            // 如果倒计时未运行，更新显示
            if (!isRunning && !isPaused) {
                remainingSeconds = selectedMinutes * 60 + selectedSeconds;
                updateDisplay();
            }
        });
        
        timeSelector.appendChild(btn);
    }
}

// 设置秒数选择器
function setupTimeSelectorSec() {
    if (!timeSelectorSec) return;
    
    timeSelectorSec.innerHTML = '';
    
    // 创建4个方形按钮（0、15、30、45秒）
    const secondsOptions = [0, 15, 30, 45];
    
    secondsOptions.forEach(sec => {
        const btn = document.createElement('button');
        btn.className = 'time-selector-btn';
        btn.type = 'button';
        btn.dataset.seconds = sec;
        
        // 默认选中0秒
        if (sec === selectedSeconds) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', () => {
            // 移除所有选中状态
            timeSelectorSec.querySelectorAll('.time-selector-btn').forEach(b => {
                b.classList.remove('selected');
            });
            
            // 添加选中状态
            btn.classList.add('selected');
            selectedSeconds = sec;
            
            // 如果倒计时未运行，更新显示
            if (!isRunning && !isPaused) {
                remainingSeconds = selectedMinutes * 60 + selectedSeconds;
                updateDisplay();
            }
        });
        
        timeSelectorSec.appendChild(btn);
    });
}

// 设置事件监听器
function setupEventListeners() {
    try {
        if (startBtn) {
            startBtn.addEventListener('click', startTimer);
            console.log('已绑定startBtn事件');
        }
        if (pauseBtn) {
            pauseBtn.addEventListener('click', pauseTimer);
            console.log('已绑定pauseBtn事件');
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', resetTimer);
            console.log('已绑定resetBtn事件');
        }
        if (actualReadyBtn) {
            actualReadyBtn.addEventListener('click', handleActualReady);
            console.log('已绑定actualReadyBtn事件');
        }
        if (earlyReadyBtn) {
            earlyReadyBtn.addEventListener('click', handleEarlyReady);
            console.log('已绑定earlyReadyBtn事件');
        }
        // 时间选择器的事件监听已在setupTimeSelector中设置
    } catch (error) {
        console.error('设置事件监听器时出错:', error);
    }
}

// 开始倒计时
function startTimer() {
    if (!isRunning && remainingSeconds === 0) {
        remainingSeconds = selectedMinutes * 60 + selectedSeconds;
    }
    
    if (remainingSeconds <= 0) {
        alert('请先设置初始倒计时时间');
        return;
    }
    
    isRunning = true;
    isPaused = false;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    triggeredNodes.clear();
    updateStatus('倒计时进行中...');
    
    // 预先合成语音（如果设置了订单号）
    const ttsText = generateTTSText();
    if (ttsText) {
        synthesizeSpeech(ttsText).then(audio => {
            if (audio) {
                console.log('语音预先合成完成');
            }
        });
    } else {
        updateTTSStatus('未设置订单号，跳过语音合成');
    }
    
    timer = setInterval(() => {
        remainingSeconds--;
        checkTimeNodes();
        updateDisplay();
        
        if (remainingSeconds <= 0) {
            // 停止倒计时，但保持运行状态，等待15秒音频播放完成
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            remainingSeconds = 0;
            updateDisplay();
            
            // 检查是否有15秒音频正在播放
            if (currentAudio && isWaitingForAudio) {
                // 正在播放15秒音频，等待播放完成
                updateStatus('倒计时结束，等待音频播放完成...');
            } else {
                // 没有音频播放，直接完全停止
                finalStopTimer();
                updateStatus('倒计时结束！');
            }
        }
    }, 1000);
}

// 暂停倒计时
function pauseTimer() {
    isRunning = false;
    isPaused = true;
    isWaitingForAudio = false; // 暂停时清除等待标志
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    updateStatus('已暂停');
    
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 重置倒计时
function resetTimer() {
    stopTimer();
    remainingSeconds = selectedMinutes * 60 + selectedSeconds;
    triggeredNodes.clear();
    updateDisplay();
    updateStatus('准备开始');
    updateTTSStatus(''); // 清除TTS状态
}

// 停止倒计时（完全停止，包括音频）
function stopTimer() {
    isRunning = false;
    isPaused = false;
    isWaitingForAudio = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    
    // 停止当前播放的音频
    if (currentAudio) {
        try {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        } catch (e) {
            console.warn('停止音频时出错:', e);
        }
    }
    
    // 清除合成音频
    if (synthesizedAudio) {
        try {
            synthesizedAudio.pause();
            synthesizedAudio = null;
        } catch (e) {
            console.warn('清除合成音频时出错:', e);
        }
    }
    
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 最终停止倒计时（在音频播放完成后调用）
function finalStopTimer() {
    isRunning = false;
    isPaused = false;
    isWaitingForAudio = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    
    // 不停止音频，让它自然播放完成（如果还在播放）
    // 音频会在播放完成后自动清除引用
    
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 处理实际出餐
function handleActualReady() {
    if (isRunning || isPaused) {
        stopTimer();
        // 播放实际出餐音频
        if (audioFiles['实际出餐'] && audioFiles['实际出餐'].data) {
            playAudio('实际出餐');
        }
        updateStatus('商家已实际出餐，倒计时已结束');
    } else {
        alert('倒计时尚未开始');
    }
}

// 处理提前点出餐
function handleEarlyReady() {
    if (isRunning || isPaused) {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        const timeStr = minutes > 0 ? `${minutes}分${seconds}秒` : `${seconds}秒`;
        
        // 找到最接近的时间节点
        let closestNode = null;
        let minDiff = Infinity;
        
        Object.keys(TIME_NODES).forEach(nodeName => {
            const nodeSeconds = TIME_NODES[nodeName];
            const diff = Math.abs(remainingSeconds - nodeSeconds);
            if (diff < minDiff && remainingSeconds <= nodeSeconds) {
                minDiff = diff;
                closestNode = nodeName;
            }
        });
        
        // 播放提前点出餐场景音频（如果设置了）
        if (audioFiles['提前点出餐'] && audioFiles['提前点出餐'].data) {
            playAudio('提前点出餐');
            updateStatus(`提前点出餐 (剩余${timeStr})`);
        } else if (closestNode) {
            // 如果没有设置场景音频，则播放最接近的时间节点音频
            playAudio(closestNode);
            updateStatus(`提前点出餐，播报: ${closestNode} (剩余${timeStr})`);
        } else {
            updateStatus(`提前点出餐 (剩余${timeStr})`);
        }
        
        // 不停止倒计时，继续倒计时
        // 不显示弹窗，只更新状态和播放音频
    } else {
        alert('倒计时尚未开始');
    }
}

// 更新显示
function updateDisplay() {
    if (!timeDisplay) return;
    
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // 根据剩余时间改变颜色
    if (remainingSeconds <= 15) {
        timeDisplay.style.color = '#ff4757';
    } else if (remainingSeconds <= 60) {
        timeDisplay.style.color = '#ffa502';
    } else {
        timeDisplay.style.color = 'white';
    }
}

// 更新状态显示
function updateStatus(status) {
    if (statusDisplay) {
        statusDisplay.textContent = status;
    }
}

// 页面加载完成后初始化
console.log('脚本开始执行，document.readyState:', document.readyState);

if (document.readyState === 'loading') {
    console.log('等待DOMContentLoaded事件...');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded事件触发');
        setTimeout(init, 100); // 延迟一点确保所有元素都已渲染
        registerServiceWorker();
    });
} else {
    // DOM已经加载完成
    console.log('DOM已加载完成，立即初始化');
    setTimeout(init, 100); // 延迟一点确保所有元素都已渲染
    registerServiceWorker();
}

// 注册 Service Worker（用于 PWA）
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker 注册成功');
        }).catch((err) => {
            console.warn('Service Worker 注册失败:', err);
        });
    }
}

// 将函数暴露到全局作用域（备用）
window.previewAudio = previewAudio;
window.uploadAudio = uploadAudio;
window.renderAudioSettings = renderAudioSettings;
window.init = init;

