let col = [];

function send_GS(){
    GS = senNum;
    console.log(GS);

    //因為有六個比刷，所以跑六次
    for(let i = 0; i < 6; i++){
        col[i] = int(random(GSentence[GS].colorNum));
        if(i > 0 && col[i] == col[i-1]){
          col[i] = int(random(GSentence[GS].colorNum));
        }
    }
    // console.log(col);//看隨機選的顏色
}

//   0   "可惡啊...星期一又來了。",
//   1   "我不是在工作，我只是在賺錢。",
//   2   "禮拜一，火氣比較大拉。",
//   3   "這個時間，不是應該躺在床上嗎？",
//   4   "阿姨我不想努力了。",
//   5   "再ㄍㄧㄥ一下！領完年終再走。",
//   6   "讓你疲憊的不是工作，而是工作中遇到的人。",
//   7   "最大的不足，就是存款的餘額不足。"

const GSentence = [
    {
        word : "可惡啊...星期一又來了。",
        colorNum : 6,
        color : [
            {   //深灰色
                r : 117,
                g : 117,
                b : 117
            },
            {   //灰色
                r : 193,
                g : 193,
                b : 193
            },
            {   //淺藍色
                r : 168,
                g : 203,
                b : 236
            },
            {   //亮藍色
                r : 26,
                g : 121,
                b : 216
            },
            {   //灰藍
                r : 92,
                g : 142,
                b : 190
            },
            {   //黑色
                r : 0,
                g : 20,
                b : 39
            }
        ]
    },
    {
        word : "我不是在工作，\n我只是在賺錢。",
        colorNum : 6,
        color : [
            {
                //深藍色
                r : 45,
                g : 63,
                b : 144
            },
            {   //紫色
                r : 153,
                g : 94,
                b : 229
            },
            {   //咖啡色
                r : 110,
                g : 73,
                b : 41
            },
            {   //紅紫色
                r : 184,
                g : 71,
                b : 169
            },
            {   //檸檬黃
                r : 246,
                g : 199,
                b : 40
            },
            {   //淺黃色
                r : 251,
                g : 241,
                b : 103
            }
        ]
    },
    {
        word : "禮拜一，火氣比較大拉。",
        colorNum : 8,
        color : [
            {
                //淺黃
                r : 249,
                g : 249,
                b : 222
            },
            {
                //黃
                r : 255,
                g : 218,
                b : 64
            },
            {
                //淺橘
                r : 255,
                g : 183,
                b : 67
            },
            {
                //紅
                r : 206,
                g : 5,
                b : 5
            },
            {
                //橘
                r : 247,
                g : 108,
                b : 13
            },
            {
                //鮮紅
                r : 247,
                g : 47,
                b : 38
            },
            {
                //深紅
                r : 141,
                g : 8,
                b : 1
            },
            {
                //black
                r : 0,
                g : 20,
                b : 39
            }
        ]
    },
    {
        word : "這個時間，\n不是應該躺在床上嗎？",
        colorNum : 8,
        color : [
            {
                //咖啡黃
                r : 224,
                g : 205,
                b : 144
            },
            {
                //黃
                r : 255,
                g : 243,
                b : 194
            },
            {
                //淺藍
                r : 168,
                g : 203,
                b : 236
            },
            {
                //淺咖啡
                r : 204,
                g : 191,
                b : 184
            },
            {
                //灰藍
                r : 92,
                g : 142,
                b : 190
            },
            {
                //咖啡
                r : 153,
                g : 107,
                b : 77
            },
            {
                //深藍
                r : 45,
                g : 63,
                b : 144
            },
            {
                //深灰藍
                r : 75,
                g : 77,
                b : 105
            }
        ]
    },
    {
        word : "阿姨我不想努力了。",
        colorNum : 8,
        color : [
            {
                //深桃紅
                r : 184,
                g : 71,
                b : 169
            },
            {
                //深紫色
                r : 89,
                g : 62,
                b : 175
            },
            {
                //桃紅
                r : 216,
                g : 72,
                b : 202
            },
            {
                //粉桃紅
                r : 234,
                g : 85,
                b : 135
            },
            {
                //藍紫色
                r : 90,
                g : 92,
                b : 230
            },
            {
                //珍珠白
                r : 249,
                g : 243,
                b : 228
            },
            {
                //葉子綠
                r : 144,
                g : 197,
                b : 42
            },
            {
                //黃色
                r : 242,
                g : 183,
                b : 58
            }
        ]
    },
    {
        word : "再ㄍㄧㄥ一下！領完年終再走。",
        colorNum : 7,
        color : [
            {
                //深紅色
                r : 183,
                g : 32,
                b : 32
            },
            {
                //桃色
                r : 246,
                g : 75,
                b : 75
            },
            {
                //鮮紅色
                r : 247,
                g : 47,
                b : 38
            },
            {
                //深黃色
                r : 242,
                g : 183,
                b : 58
            },
            {
                //黃色
                r : 255,
                g : 214,
                b : 44
            },
            {
                //亮黃色
                r : 255,
                g : 238,
                b : 69
            },
            {
                //淡黃色
                r : 254,
                g : 221,
                b : 116
            }
        ]
    },
    {
        word : "讓你疲憊的不是工作，\n而是工作中遇到的人。",
        colorNum : 7,
        color : [
            {
                //深咖啡
                r : 110,
                g : 73,
                b : 41
            },
            {
                //淺咖啡
                r : 153,
                g : 107,
                b : 77
            },
            {
                //灰綠
                r : 61,
                g : 104,
                b : 91
            },
            {
                //綠色
                r : 110,
                g : 195,
                b : 136
            },
            {
                //深綠色
                r : 44,
                g : 79,
                b : 68
            },
            {
                //深灰色
                r : 73,
                g : 73,
                b : 73
            },
            {
                 //淺灰色
                r : 117,
                g : 117,
                b : 117
            }
        ]
    },
    {
        word : "最大的不足，\n就是存款的餘額不足。",
        colorNum : 7,
        color : [
            {
                //咖啡
                r : 153,
                g : 107,
                b : 77
            },
            {
                //淺咖啡
                r : 224,
                g : 205,
                b : 144
            },
            {
                //深灰藍
                r : 75,
                g : 77,
                b : 105
            },
            {
                //灰藍
                r : 92,
                g : 142,
                b : 190
            },
            {
                //米白
                r : 249,
                g : 241,
                b : 215
            },
            {
                //深灰色
                r : 73,
                g : 73,
                b : 73
            },
            {
                //灰色
                r : 117,
                g : 117,
                b : 117
            }
        ]
    }

]