// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "心爱的小可爱",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "今天是你的生日",  // 同上...
        "咱俩一起上桥",
        "一起合影",
        "你住院了",
        "快快好起来啊",
        "河边的你",
        "河边的我俩",
        "河边的我俩一起放风筝",
        "你给我做的礼物哦",
        "还有红帽子",
        "在三福试衣服",
        "记得和我一起到老",
        
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        "今天是你的生日": "./imgs/qqs.png",
        "咱俩一起上桥":"./imgs/qiao.png",
        "一起合影":"./imgs/hz.png",
        "你住院了":"./imgs/yk1.png",
        "快快好起来啊":"./imgs/yk.png",
        "河边的你":"./imgs/河边.png",
        "河边的我俩":"./imgs/womenlia.png",
        "河边的我俩一起放风筝":"./imgs/fangfengzheng.png",
        "你给我做的礼物哦":"./imgs/liwu.png",
        "还有红帽子":"./imgs/hongmaozi.png",
        "在三福试衣服":"./imgs/shiyifu.png",
        "记得和我一起到老":"./imgs/yiqidaolao.png",

    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "来点音乐",
        bannar_coming: "少点颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
