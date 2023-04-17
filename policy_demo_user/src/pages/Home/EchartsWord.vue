<template>
  <div class="charts">
     <div
        class="charts"
        ref="wordCloud"
        style="width: 1000px;height:700px;"
      ></div>
  </div>
</template>

<script>
// import {getWordList} from '../../api/user'
export default {
  name: 'PolicyDemoManagerEchartsWord',

  data() {
    return {
      wordList: [
      {
        "name": "老河口",
        "value": 77
      },
      {
        "name": "二道江",
        "value": 218
      },
      {
        "name": "庆云",
        "value": 343
      },
      {
        "name": "端州",
        "value": 231
      },
      {
        "name": "香坊",
        "value": 343
      },
      {
        "name": "高邮",
        "value": 451
      },
      {
        "name": "凤阳",
        "value": 359
      },
      {
        "name": "清丰",
        "value": 325
      },
      {
        "name": "秦淮",
        "value": 156
      },
      {
        "name": "来安",
        "value": 328
      },
      {
        "name": "澄迈",
        "value": 323
      },
      {
        "name": "郊",
        "value": 949
      },
      {
        "name": "汉台",
        "value": 499
      },
      {
        "name": "罗甸",
        "value": 222
      },
      {
        "name": "郏",
        "value": 193
      },
      {
        "name": "开远",
        "value": 337
      },
      {
        "name": "江华瑶族自治",
        "value": 310
      },
      {
        "name": "临颍",
        "value": 204
      },
      {
        "name": "芦溪",
        "value": 355
      },
      {
        "name": "榕城",
        "value": 430
      },
      {
        "name": "贡觉",
        "value": 442
      },
      {
        "name": "青川",
        "value": 148
      },
      {
        "name": "永昌",
        "value": 356
      },
      {
        "name": "永嘉",
        "value": 512
      },
      {
        "name": "利川",
        "value": 282
      },
      {
        "name": "万柏林",
        "value": 143
      },
      {
        "name": "青州",
        "value": 165
      },
      {
        "name": "利州",
        "value": 473
      },
      {
        "name": "永春",
        "value": 287
      },
      {
        "name": "定襄",
        "value": 98
      },
      {
        "name": "大田",
        "value": 502
      },
      {
        "name": "屏南",
        "value": 129
      },
      {
        "name": "东安",
        "value": 263
      },
      {
        "name": "鄂伦春自治",
        "value": 383
      },
      {
        "name": "闵行",
        "value": 455
      },
      {
        "name": "禹王台",
        "value": 300
      },
      {
        "name": "九原",
        "value": 532
      },
      {
        "name": "香格里拉",
        "value": 223
      },
      {
        "name": "东宁",
        "value": 366
      },
      {
        "name": "龙海",
        "value": 610
      },
      {
        "name": "巨野",
        "value": 219
      },
      {
        "name": "镇赉",
        "value": 270
      },
      {
        "name": "岳普湖",
        "value": 357
      },
      {
        "name": "莲湖",
        "value": 199
      },
      {
        "name": "宁江",
        "value": 93
      },
      {
        "name": "回民",
        "value": 467
      },
      {
        "name": "古塔",
        "value": 331
      },
      {
        "name": "达尔罕茂明安联合",
        "value": 522
      },
      {
        "name": "南票",
        "value": 359
      },
      {
        "name": "峨山彝族自治",
        "value": 321
      },
      {
        "name": "二七",
        "value": 182
      },
      {
        "name": "晋州",
        "value": 309
      },
      {
        "name": "杜尔伯特蒙古族自治",
        "value": 436
      },
      {
        "name": "镇海",
        "value": 291
      },
      {
        "name": "乌兰浩特",
        "value": 420
      },
      {
        "name": "始兴",
        "value": 183
      },
      {
        "name": "武侯",
        "value": 359
      },
      {
        "name": "武陵源",
        "value": 384
      },
      {
        "name": "江城哈尼族彝族自治",
        "value": 25
      },
      {
        "name": "东宝",
        "value": 268
      },
      {
        "name": "新邵",
        "value": 230
      },
      {
        "name": "隆回",
        "value": 180
      },
      {
        "name": "建邺",
        "value": 129
      },
      {
        "name": "响水",
        "value": 237
      },
      {
        "name": "新邱",
        "value": 232
      },
      {
        "name": "通川",
        "value": 312
      },
      {
        "name": "察哈尔右翼后",
        "value": 199
      },
      {
        "name": "广德",
        "value": 276
      },
      {
        "name": "安宁",
        "value": 762
      },
      {
        "name": "通州",
        "value": 707
      },
      {
        "name": "府谷",
        "value": 91
      },
      {
        "name": "鼎湖",
        "value": 121
      },
      {
        "name": "门源回族自治",
        "value": 322
      },
      {
        "name": "和林格尔",
        "value": 455
      },
      {
        "name": "沈河",
        "value": 68
      },
      {
        "name": "红安",
        "value": 226
      },
      {
        "name": "措美",
        "value": 314
      },
      {
        "name": "张家港",
        "value": 216
      },
      {
        "name": "碑林",
        "value": 30
      },
      {
        "name": "会泽",
        "value": 499
      },
      {
        "name": "德令哈",
        "value": 356
      },
      {
        "name": "静海",
        "value": 395
      },
      {
        "name": "尉氏",
        "value": 335
      },
      {
        "name": "新郑",
        "value": 413
      },
      {
        "name": "甘南",
        "value": 189
      },
      {
        "name": "共和",
        "value": 313
      },
      {
        "name": "政府",
        "value": 722
      },
      {
        "name": "天镇",
        "value": 373
      },
      {
        "name": "北关",
        "value": 201
      },
      {
        "name": "武进",
        "value": 32
      },
      {
        "name": "九台",
        "value": 488
      },
      {
        "name": "安定",
        "value": 353
      },
      {
        "name": "泽库",
        "value": 235
      },
      {
        "name": "滦南",
        "value": 336
      },
      {
        "name": "秀英",
        "value": 142
      },
      {
        "name": "邵武",
        "value": 330
      },
      {
        "name": "新都",
        "value": 405
      },
      {
        "name": "通渭",
        "value": 611
      },
      {
        "name": "万年",
        "value": 182
      },
      {
        "name": "化隆回族自治",
        "value": 282
      },
      {
        "name": "玉环",
        "value": -23
      },
      {
        "name": "昌江黎族自治",
        "value": 320
      },
      {
        "name": "船山",
        "value": 228
      },
      {
        "name": "广信",
        "value": 493
      },
      {
        "name": "循化撒拉族自治",
        "value": 158
      },
      {
        "name": "郓城",
        "value": 412
      },
      {
        "name": "当阳",
        "value": 237
      },
      {
        "name": "哈巴河",
        "value": 358
      },
      {
        "name": "永登",
        "value": 217
      },
      {
        "name": "遵化",
        "value": 495
      },
      {
        "name": "商州",
        "value": 179
      },
      {
        "name": "临夏",
        "value": 670
      },
      {
        "name": "宁河",
        "value": 232
      },
      {
        "name": "巴林右",
        "value": 130
      },
      {
        "name": "惠阳",
        "value": 229
      },
      {
        "name": "泾源",
        "value": 407
      },
      {
        "name": "万源",
        "value": 253
      },
      {
        "name": "大新",
        "value": 284
      },
      {
        "name": "云州",
        "value": 188
      },
      {
        "name": "铁东",
        "value": 363
      },
      {
        "name": "文昌",
        "value": 8
      },
      {
        "name": "谯城",
        "value": 302
      },
      {
        "name": "白沙黎族自治",
        "value": 270
      },
      {
        "name": "兴",
        "value": 231
      },
      {
        "name": "龙州",
        "value": 289
      },
      {
        "name": "龙川",
        "value": 253
      },
      {
        "name": "白塔",
        "value": 441
      },
      {
        "name": "大方",
        "value": 81
      },
      {
        "name": "潼关",
        "value": 238
      },
      {
        "name": "天长",
        "value": 275
      },
      {
        "name": "资阳",
        "value": 446
      },
      {
        "name": "景宁畲族自治",
        "value": 291
      },
      {
        "name": "松桃苗族自治",
        "value": 292
      },
      {
        "name": "黄埔",
        "value": 278
      },
      {
        "name": "千山",
        "value": 295
      },
      {
        "name": "嘉陵",
        "value": -5
      },
      {
        "name": "盐湖",
        "value": 341
      },
      {
        "name": "儿童",
        "value": 303414
      },
      {
        "name": "舒兰",
        "value": 423
      },
      {
        "name": "兴和",
        "value": 80
      },
      {
        "name": "友谊",
        "value": 266
      },
      {
        "name": "牙克石",
        "value": 257
      },
      {
        "name": "陈仓",
        "value": 153
      },
      {
        "name": "虎丘",
        "value": 447
      },
      {
        "name": "集美",
        "value": 179
      },
      {
        "name": "叶集",
        "value": 448
      },
      {
        "name": "漠河",
        "value": 375
      },
      {
        "name": "番禺",
        "value": 389
      },
      {
        "name": "镇巴",
        "value": 271
      },
      {
        "name": "冠",
        "value": 280
      },
      {
        "name": "沈北新",
        "value": 91
      },
      {
        "name": "蛟河",
        "value": 100
      },
      {
        "name": "潮南",
        "value": 198
      },
      {
        "name": "龙港",
        "value": 554
      },
      {
        "name": "晋源",
        "value": 223
      },
      {
        "name": "龙游",
        "value": 268
      },
      {
        "name": "长阳土家族自治",
        "value": 488
      },
      {
        "name": "射洪",
        "value": 122
      },
      {
        "name": "宜秀",
        "value": 338
      },
      {
        "name": "都匀",
        "value": 491
      },
      {
        "name": "邯山",
        "value": 491
      },
      {
        "name": "乐昌",
        "value": 387
      },
      {
        "name": "寻乌",
        "value": 388
      },
      {
        "name": "渝水",
        "value": 189
      },
      {
        "name": "崇州",
        "value": 427
      },
      {
        "name": "崇川",
        "value": 354
      },
      {
        "name": "拉孜",
        "value": 109
      },
      {
        "name": "敖汉",
        "value": 178
      },
      {
        "name": "沾益",
        "value": 547
      },
      {
        "name": "临西",
        "value": 444
      },
      {
        "name": "祥云",
        "value": 377
      },
      {
        "name": "栖霞",
        "value": 653
      },
      {
        "name": "盖州",
        "value": 256
      },
      {
        "name": "新兴",
        "value": 572
      },
      {
        "name": "衡东",
        "value": 152
      },
      {
        "name": "元宝山",
        "value": 569
      },
      {
        "name": "洛宁",
        "value": 363
      },
      {
        "name": "确山",
        "value": 392
      },
      {
        "name": "龙湖",
        "value": 280
      },
      {
        "name": "镇宁布依族苗族自治",
        "value": 284
      },
      {
        "name": "盐源",
        "value": 300
      },
      {
        "name": "伊美",
        "value": 510
      },
      {
        "name": "迁西",
        "value": 411
      },
      {
        "name": "宁津",
        "value": 398
      },
      {
        "name": "丹棱",
        "value": 398
      },
      {
        "name": "盐亭",
        "value": 526
      },
      {
        "name": "呈贡",
        "value": 251
      },
      {
        "name": "天门",
        "value": 147
      },
      {
        "name": "安居",
        "value": 58
      },
      {
        "name": "文登",
        "value": 387
      },
      {
        "name": "东乡族自治",
        "value": 216
      },
      {
        "name": "东山",
        "value": 590
      },
      {
        "name": "广灵",
        "value": 308
      },
      {
        "name": "当雄",
        "value": 301
      },
      {
        "name": "樟树",
        "value": 302
      },
      {
        "name": "鹿邑",
        "value": 338
      },
      {
        "name": "凤",
        "value": 394
      },
      {
        "name": "景东彝族自治",
        "value": 421
      },
      {
        "name": "西乌珠穆沁",
        "value": 307
      },
      {
        "name": "武邑",
        "value": 246
      },
      {
        "name": "岐山",
        "value": 304
      },
      {
        "name": "饶河",
        "value": 156
      },
      {
        "name": "清河门",
        "value": 178
      },
      {
        "name": "华安",
        "value": 378
      },
      {
        "name": "大武口",
        "value": 200
      },
      {
        "name": "平舆",
        "value": 373
      },
      {
        "name": "华宁",
        "value": 226
      },
      {
        "name": "西安",
        "value": 726
      },
      {
        "name": "红山",
        "value": 269
      },
      {
        "name": "静乐",
        "value": 285
      },
      {
        "name": "盘州",
        "value": 295
      },
      {
        "name": "花溪",
        "value": 247
      },
      {
        "name": "青龙满族自治",
        "value": 546
      },
      {
        "name": "岳塘",
        "value": 257
      },
      {
        "name": "龙井",
        "value": 522
      },
      {
        "name": "成",
        "value": 368
      },
      {
        "name": "新野",
        "value": 455
      },
      {
        "name": "青白江",
        "value": 265
      },
      {
        "name": "永靖",
        "value": 263
      },
      {
        "name": "莒南",
        "value": 281
      },
      {
        "name": "灵台",
        "value": 397
      },
      {
        "name": "长垣",
        "value": 475
      },
      {
        "name": "龙湾",
        "value": 482
      },
      {
        "name": "水城",
        "value": 115
      },
      {
        "name": "肥东",
        "value": 277
      },
      {
        "name": "琼结",
        "value": 402
      },
      {
        "name": "固始",
        "value": 344
      },
      {
        "name": "平利",
        "value": 434
      },
      {
        "name": "宁海",
        "value": 223
      },
      {
        "name": "镇平",
        "value": 138
      },
      {
        "name": "东河",
        "value": 128
      },
      {
        "name": "房山",
        "value": 192
      },
      {
        "name": "环翠",
        "value": 288
      },
      {
        "name": "华容",
        "value": 399
      },
      {
        "name": "沁源",
        "value": 280
      },
      {
        "name": "清徐",
        "value": 341
      },
      {
        "name": "平房",
        "value": 63
      },
      {
        "name": "龙亭",
        "value": 159
      },
      {
        "name": "崇义",
        "value": 303
      },
      {
        "name": "潍城",
        "value": 232
      },
      {
        "name": "鸠江",
        "value": 67
      },
      {
        "name": "五常",
        "value": 473
      },
      {
        "name": "铜官",
        "value": 545
      },
      {
        "name": "和田",
        "value": 488
      },
      {
        "name": "乐陵",
        "value": 335
      },
      {
        "name": "云溪",
        "value": 329
      },
      {
        "name": "策勒",
        "value": 430
      },
      {
        "name": "易门",
        "value": 238
      },
      {
        "name": "管城回族",
        "value": -49
      },
      {
        "name": "和政",
        "value": 230
      },
      {
        "name": "桦川",
        "value": 187
      },
      {
        "name": "红岗",
        "value": 173
      },
      {
        "name": "武胜",
        "value": 471
      },
      {
        "name": "陕州",
        "value": 445
      },
      {
        "name": "封丘",
        "value": 321
      },
      {
        "name": "新宾满族自治",
        "value": 331
      },
      {
        "name": "宾阳",
        "value": 274
      },
      {
        "name": "郧阳",
        "value": 336
      },
      {
        "name": "房",
        "value": 478
      },
      {
        "name": "安岳",
        "value": 368
      },
      {
        "name": "镇康",
        "value": 139
      },
      {
        "name": "沂源",
        "value": 308
      },
      {
        "name": "杭锦后",
        "value": 238
      },
      {
        "name": "苏尼特左",
        "value": 449
      },
      {
        "name": "中站",
        "value": 285
      },
      {
        "name": "会东",
        "value": 241
      },
      {
        "name": "坪山",
        "value": 351
      },
      {
        "name": "昭苏",
        "value": 172
      },
      {
        "name": "城步苗族自治",
        "value": 329
      },
      {
        "name": "奉节",
        "value": 309
      },
      {
        "name": "黄梅",
        "value": 549
      },
      {
        "name": "轮台",
        "value": 611
      },
      {
        "name": "肥乡",
        "value": 306
      },
      {
        "name": "榆次",
        "value": 234
      },
      {
        "name": "和布克赛尔蒙古自治",
        "value": 174
      },
      {
        "name": "枞阳",
        "value": 181
      },
      {
        "name": "武都",
        "value": 258
      },
      {
        "name": "桥东",
        "value": 376
      },
      {
        "name": "涞水",
        "value": 244
      },
      {
        "name": "万载",
        "value": 385
      },
      {
        "name": "红河",
        "value": 349
      },
      {
        "name": "麒麟",
        "value": 538
      },
      {
        "name": "溧水",
        "value": 173
      },
      {
        "name": "凤城",
        "value": 265
      },
      {
        "name": "潘集",
        "value": 147
      },
      {
        "name": "额尔古纳",
        "value": 305
      },
      {
        "name": "谷城",
        "value": -10
      },
      {
        "name": "尼木",
        "value": 151
      },
      {
        "name": "突泉",
        "value": 280
      },
      {
        "name": "青羊",
        "value": 250
      },
      {
        "name": "双河",
        "value": 279
      },
      {
        "name": "莫力达瓦达斡尔族自治",
        "value": 497
      },
      {
        "name": "文圣",
        "value": 331
      },
      {
        "name": "霍城",
        "value": 252
      },
      {
        "name": "恩施",
        "value": 284
      },
      {
        "name": "涟水",
        "value": 237
      },
      {
        "name": "浦北",
        "value": 359
      },
      {
        "name": "昌图",
        "value": 476
      },
      {
        "name": "前郭尔罗斯蒙古族自治",
        "value": 212
      },
      {
        "name": "昭化",
        "value": 361
      },
      {
        "name": "微山",
        "value": 363
      },
      {
        "name": "泰兴",
        "value": 195
      },
      {
        "name": "惠来",
        "value": 324
      },
      {
        "name": "萝北",
        "value": 373
      },
      {
        "name": "沧源佤族自治",
        "value": 197
      },
      {
        "name": "逊克",
        "value": 59
      },
      {
        "name": "崇仁",
        "value": 290
      },
      {
        "name": "芒",
        "value": 319
      },
      {
        "name": "叶城",
        "value": 183
      },
      {
        "name": "昔阳",
        "value": 307
      },
      {
        "name": "江北",
        "value": 693
      },
      {
        "name": "汝南",
        "value": 486
      },
      {
        "name": "缙云",
        "value": 208
      },
      {
        "name": "太白",
        "value": 262
      },
      {
        "name": "利辛",
        "value": 58
      },
      {
        "name": "兴文",
        "value": 377
      },
      {
        "name": "康马",
        "value": 343
      },
      {
        "name": "新平彝族傣族自治",
        "value": 321
      },
      {
        "name": "雨山",
        "value": 317
      },
      {
        "name": "永城",
        "value": 148
      },
      {
        "name": "站前",
        "value": 145
      },
      {
        "name": "疏附",
        "value": 456
      },
      {
        "name": "沈丘",
        "value": 401
      },
      {
        "name": "东洲",
        "value": 130
      },
      {
        "name": "安泽",
        "value": 331
      },
      {
        "name": "准格尔",
        "value": 153
      },
      {
        "name": "济阳",
        "value": 260
      },
      {
        "name": "共青城",
        "value": 394
      },
      {
        "name": "洛江",
        "value": 252
      },
      {
        "name": "赣县",
        "value": 424
      },
      {
        "name": "双峰",
        "value": 344
      },
      {
        "name": "图解",
        "value": 268395
      },
      {
        "name": "元宝",
        "value": 520
      },
      {
        "name": "石屏",
        "value": 465
      },
      {
        "name": "宣威",
        "value": 562
      },
      {
        "name": "阿拉山口",
        "value": 137
      },
      {
        "name": "德安",
        "value": 279
      },
      {
        "name": "温宿",
        "value": 240
      },
      {
        "name": "朝阳",
        "value": 1053
      },
      {
        "name": "马龙",
        "value": -83
      },
      {
        "name": "旅顺口",
        "value": 349
      },
      {
        "name": "澜沧拉祜族自治",
        "value": 63
      },
      {
        "name": "柳江",
        "value": 314
      },
      {
        "name": "西山",
        "value": 328
      },
      {
        "name": "邻水",
        "value": 532
      },
      {
        "name": "额济纳",
        "value": 299
      },
      {
        "name": "调兵山",
        "value": 378
      },
      {
        "name": "勉",
        "value": 458
      },
      {
        "name": "玉田",
        "value": 197
      },
      {
        "name": "浏阳",
        "value": 227
      },
      {
        "name": "长顺",
        "value": 580
      },
      {
        "name": "亚东",
        "value": 280
      },
      {
        "name": "宜章",
        "value": 53
      },
      {
        "name": "海兴",
        "value": 483
      },
      {
        "name": "湘阴",
        "value": 347
      },
      {
        "name": "富锦",
        "value": 315
      },
      {
        "name": "东海",
        "value": 227
      },
      {
        "name": "黎城",
        "value": 290
      },
      {
        "name": "江南",
        "value": 257
      },
      {
        "name": "普安",
        "value": 457
      },
      {
        "name": "华池",
        "value": 285
      },
      {
        "name": "灵璧",
        "value": 428
      },
      {
        "name": "竹溪",
        "value": 371
      },
      {
        "name": "普宁",
        "value": 441
      },
      {
        "name": "普定",
        "value": 256
      },
      {
        "name": "米脂",
        "value": 474
      },
      {
        "name": "惠城",
        "value": 237
      },
      {
        "name": "瑞安",
        "value": 495
      },
      {
        "name": "恩阳",
        "value": 270
      },
      {
        "name": "奉化",
        "value": 426
      },
      {
        "name": "新抚",
        "value": 249
      },
      {
        "name": "龙潭",
        "value": 262
      },
      {
        "name": "盐边",
        "value": 320
      },
      {
        "name": "西岗",
        "value": 372
      },
      {
        "name": "泌阳",
        "value": 580
      },
      {
        "name": "五指山",
        "value": -5
      },
      {
        "name": "鸡泽",
        "value": 125
      },
      {
        "name": "武冈",
        "value": 578
      },
      {
        "name": "巴里坤哈萨克自治",
        "value": 337
      },
      {
        "name": "杨浦",
        "value": 186
      },
      {
        "name": "库伦",
        "value": 199
      },
      {
        "name": "增城",
        "value": 331
      },
      {
        "name": "枣阳",
        "value": 545
      },
      {
        "name": "中宁",
        "value": 161
      },
      {
        "name": "双流",
        "value": 291
      },
      {
        "name": "峨边彝族自治",
        "value": 52
      },
      {
        "name": "将乐",
        "value": 223
      },
      {
        "name": "茂",
        "value": 377
      },
      {
        "name": "范",
        "value": 453
      },
      {
        "name": "威宁彝族回族苗族自治",
        "value": 138
      },
      {
        "name": "汉阴",
        "value": 232
      },
      {
        "name": "汉阳",
        "value": 173
      },
      {
        "name": "铜山",
        "value": 200
      },
      {
        "name": "秭归",
        "value": 412
      },
      {
        "name": "宁乡",
        "value": 511
      },
      {
        "name": "墨竹工卡",
        "value": 384
      },
      {
        "name": "兰陵",
        "value": 191
      },
      {
        "name": "尖山",
        "value": 168
      },
      {
        "name": "保靖",
        "value": 232
      },
      {
        "name": "封开",
        "value": 369
      },
      {
        "name": "姑苏",
        "value": 344
      },
      {
        "name": "南安",
        "value": 181
      },
      {
        "name": "路北",
        "value": 249
      },
      {
        "name": "利通",
        "value": 459
      },
      {
        "name": "岚山",
        "value": 78
      },
      {
        "name": "合阳",
        "value": 459
      },
      {
        "name": "河西",
        "value": 357
      },
      {
        "name": "元谋",
        "value": 331
      },
      {
        "name": "云龙",
        "value": 293
      },
      {
        "name": "钦北",
        "value": 347
      },
      {
        "name": "富蕴",
        "value": 348
      },
      {
        "name": "定安",
        "value": 515
      },
      {
        "name": "蓝山",
        "value": 269
      },
      {
        "name": "元氏",
        "value": 129
      },
      {
        "name": "达拉特",
        "value": 255
      },
      {
        "name": "岳西",
        "value": 335
      },
      {
        "name": "清原满族自治",
        "value": 175
      },
      {
        "name": "韶山",
        "value": 130
      },
      {
        "name": "田家庵",
        "value": 150
      },
      {
        "name": "达坂城",
        "value": 268
      },
      {
        "name": "柳河",
        "value": 103
      },
      {
        "name": "临高",
        "value": 256
      },
      {
        "name": "献",
        "value": 235
      },
      {
        "name": "浦口",
        "value": 493
      },
      {
        "name": "靖边",
        "value": 380
      },
      {
        "name": "道外",
        "value": 412
      },
      {
        "name": "成华",
        "value": 254
      },
      {
        "name": "屏边苗族自治",
        "value": 208
      },
      {
        "name": "阿克陶",
        "value": 366
      },
      {
        "name": "朔城",
        "value": 393
      },
      {
        "name": "沙河",
        "value": 400
      },
      {
        "name": "石泉",
        "value": 402
      },
      {
        "name": "斗门",
        "value": 278
      },
      {
        "name": "容城",
        "value": 644
      },
      {
        "name": "南宫",
        "value": 337
      },
      {
        "name": "余杭",
        "value": 195
      },
      {
        "name": "揭西",
        "value": 67
      },
      {
        "name": "库车",
        "value": 282
      },
      {
        "name": "沐川",
        "value": 429
      },
      {
        "name": "西峰",
        "value": 320
      },
      {
        "name": "吉阳",
        "value": 416
      },
      {
        "name": "卓尼",
        "value": 370
      },
      {
        "name": "东川",
        "value": 455
      },
      {
        "name": "荆州",
        "value": 129
      },
      {
        "name": "塔什库尔干塔吉克自治",
        "value": -33
      },
      {
        "name": "京山",
        "value": 291
      },
      {
        "name": "铁门关",
        "value": 182
      },
      {
        "name": "二道",
        "value": 161
      },
      {
        "name": "平南",
        "value": 421
      },
      {
        "name": "永顺",
        "value": 472
      },
      {
        "name": "达孜",
        "value": 264
      },
      {
        "name": "浔阳",
        "value": 398
      },
      {
        "name": "西峡",
        "value": 308
      },
      {
        "name": "修文",
        "value": 387
      },
      {
        "name": "石峰",
        "value": 276
      },
      {
        "name": "靖远",
        "value": 192
      },
      {
        "name": "张湾",
        "value": 388
      },
      {
        "name": "单",
        "value": 233
      },
      {
        "name": "潼南",
        "value": 240
      },
      {
        "name": "南",
        "value": 167
      },
      {
        "name": "观山湖",
        "value": 206
      },
      {
        "name": "太子河",
        "value": 298
      },
      {
        "name": "路南",
        "value": 228
      },
      {
        "name": "上思",
        "value": 315
      },
      {
        "name": "温江",
        "value": 444
      },
      {
        "name": "绿色",
        "value": 319515
      },
      {
        "name": "婺源",
        "value": 478
      },
      {
        "name": "钦南",
        "value": 373
      },
      {
        "name": "鄠邑",
        "value": -58
      },
      {
        "name": "荣",
        "value": 284
      },
      {
        "name": "佛坪",
        "value": 124
      },
      {
        "name": "镇远",
        "value": 353
      },
      {
        "name": "旌德",
        "value": 479
      },
      {
        "name": "江口",
        "value": 243
      },
      {
        "name": "麟游",
        "value": 329
      },
      {
        "name": "新化",
        "value": 273
      },
      {
        "name": "新北",
        "value": 371
      },
      {
        "name": "城关",
        "value": 731
      },
      {
        "name": "玉门",
        "value": 400
      },
      {
        "name": "岑巩",
        "value": 230
      },
      {
        "name": "申扎",
        "value": 263
      },
      {
        "name": "叙永",
        "value": 200
      },
      {
        "name": "辽宁",
        "value": 78
      },
      {
        "name": "庆元",
        "value": 385
      },
      {
        "name": "爱辉",
        "value": 525
      },
      {
        "name": "綦江",
        "value": 167
      },
      {
        "name": "张店",
        "value": 211
      },
      {
        "name": "安州",
        "value": 246
      },
      {
        "name": "苏家屯",
        "value": 331
      },
      {
        "name": "峄城",
        "value": 352
      },
      {
        "name": "奇台",
        "value": 368
      },
      {
        "name": "崖州",
        "value": 182
      },
      {
        "name": "德江",
        "value": 281
      },
      {
        "name": "大埔",
        "value": 480
      },
      {
        "name": "宝安",
        "value": 333
      },
      {
        "name": "平原",
        "value": 209
      },
      {
        "name": "大城",
        "value": 486
      },
      {
        "name": "五家渠",
        "value": 369
      },
      {
        "name": "曲水",
        "value": 280
      },
      {
        "name": "淳化",
        "value": 170
      },
      {
        "name": "玉屏侗族自治",
        "value": 241
      },
      {
        "name": "孝南",
        "value": 498
      },
      {
        "name": "莒",
        "value": 287
      },
      {
        "name": "新华",
        "value": 1120
      },
      {
        "name": "喀喇沁左翼蒙古族自治",
        "value": 390
      },
      {
        "name": "宿松",
        "value": 282
      },
      {
        "name": "四会",
        "value": 240
      },
      {
        "name": "槐荫",
        "value": 436
      },
      {
        "name": "麻章",
        "value": 32
      },
      {
        "name": "吉隆",
        "value": 396
      },
      {
        "name": "弥渡",
        "value": 247
      },
      {
        "name": "兴隆",
        "value": 373
      },
      {
        "name": "莘",
        "value": 282
      },
      {
        "name": "邳州",
        "value": 362
      },
      {
        "name": "东港",
        "value": 445
      },
      {
        "name": "莲都",
        "value": 313
      },
      {
        "name": "东丰",
        "value": 291
      },
      {
        "name": "建华",
        "value": 329
      },
      {
        "name": "沙洋",
        "value": 156
      },
      {
        "name": "即墨",
        "value": 357
      },
      {
        "name": "连城",
        "value": 124
      },
      {
        "name": "曲江",
        "value": 305
      },
      {
        "name": "垣曲",
        "value": 288
      },
      {
        "name": "安丘",
        "value": 498
      },
      {
        "name": "洛浦",
        "value": 439
      },
      {
        "name": "东丽",
        "value": 166
      },
      {
        "name": "温岭",
        "value": 303
      },
      {
        "name": "美兰",
        "value": 344
      },
      {
        "name": "环",
        "value": 165
      },
      {
        "name": "饶平",
        "value": 442
      },
      {
        "name": "崇信",
        "value": 379
      },
      {
        "name": "治多",
        "value": 350
      },
      {
        "name": "南谯",
        "value": 155
      },
      {
        "name": "东湖",
        "value": 268
      },
      {
        "name": "双清",
        "value": 250
      },
      {
        "name": "汤原",
        "value": 206
      },
      {
        "name": "拱墅",
        "value": 313
      },
      {
        "name": "宽城",
        "value": 353
      },
      {
        "name": "临武",
        "value": 21
      },
      {
        "name": "渝中",
        "value": 235
      },
      {
        "name": "新荣",
        "value": 412
      },
      {
        "name": "固安",
        "value": 210
      },
      {
        "name": "石柱土家族自治",
        "value": 134
      },
      {
        "name": "康定",
        "value": 328
      },
      {
        "name": "灞桥",
        "value": 315
      },
      {
        "name": "秀山土家族苗族自治",
        "value": 450
      },
      {
        "name": "金安",
        "value": 59
      },
      {
        "name": "吴兴",
        "value": 406
      },
      {
        "name": "东乡",
        "value": 217
      },
      {
        "name": "温泉",
        "value": 373
      },
      {
        "name": "盘龙",
        "value": 501
      },
      {
        "name": "荷塘",
        "value": 122
      },
      {
        "name": "察哈尔右翼前",
        "value": 273
      },
      {
        "name": "宁强",
        "value": 109
      },
      {
        "name": "福安",
        "value": 271
      },
      {
        "name": "伊金霍洛",
        "value": 337
      },
      {
        "name": "秦都",
        "value": 340
      },
      {
        "name": "延吉",
        "value": 142
      },
      {
        "name": "珙",
        "value": 169
      },
      {
        "name": "兴隆台",
        "value": 52
      },
      {
        "name": "中江",
        "value": 345
      },
      {
        "name": "临安",
        "value": 226
      },
      {
        "name": "曲沃",
        "value": 157
      },
      {
        "name": "阳原",
        "value": 161
      },
      {
        "name": "东平",
        "value": 232
      },
      {
        "name": "绥阳",
        "value": 383
      },
      {
        "name": "都安瑶族自治",
        "value": 264
      },
      {
        "name": "南江",
        "value": 360
      },
      {
        "name": "天柱",
        "value": 133
      },
      {
        "name": "古",
        "value": 152
      },
      {
        "name": "宿城",
        "value": 216
      },
      {
        "name": "巴南",
        "value": 236
      },
      {
        "name": "安义",
        "value": 327
      },
      {
        "name": "富阳",
        "value": 171
      },
      {
        "name": "中山",
        "value": 244
      },
      {
        "name": "南山",
        "value": 574
      },
      {
        "name": "孙吴",
        "value": 68
      },
      {
        "name": "安乡",
        "value": 264
      },
      {
        "name": "武功",
        "value": 316
      },
      {
        "name": "叶",
        "value": 307
      },
      {
        "name": "隆林各族自治",
        "value": 350
      },
      {
        "name": "迁安",
        "value": 156
      },
      {
        "name": "东源",
        "value": 270
      },
      {
        "name": "双湖",
        "value": 328
      },
      {
        "name": "安平",
        "value": 212
      },
      {
        "name": "兴国",
        "value": 433
      },
      {
        "name": "理",
        "value": 411
      },
      {
        "name": "鸡东",
        "value": 301
      },
      {
        "name": "吉",
        "value": 291
      },
      {
        "name": "濮阳",
        "value": 365
      },
      {
        "name": "高台",
        "value": 433
      },
      {
        "name": "改则",
        "value": 111
      },
      {
        "name": "蓬安",
        "value": 300
      },
      {
        "name": "周宁",
        "value": 301
      },
      {
        "name": "大渡口",
        "value": 329
      },
      {
        "name": "夷陵",
        "value": 355
      },
      {
        "name": "邵东",
        "value": 292
      },
      {
        "name": "南岔",
        "value": 370
      },
      {
        "name": "梁山",
        "value": 346
      },
      {
        "name": "开化",
        "value": 401
      },
      {
        "name": "荔波",
        "value": 395
      },
      {
        "name": "望城",
        "value": 159
      },
      {
        "name": "盐都",
        "value": 212
      },
      {
        "name": "皇姑",
        "value": 122
      },
      {
        "name": "子长",
        "value": 304
      },
      {
        "name": "于都",
        "value": 268
      },
      {
        "name": "金寨",
        "value": 107
      },
      {
        "name": "蔡甸",
        "value": 282
      },
      {
        "name": "五通桥",
        "value": 215
      },
      {
        "name": "萧",
        "value": 511
      },
      {
        "name": "南沙",
        "value": 424
      },
      {
        "name": "振兴",
        "value": 360
      },
      {
        "name": "南岗",
        "value": 242
      },
      {
        "name": "安源",
        "value": 244
      },
      {
        "name": "洛川",
        "value": 223
      },
      {
        "name": "泗阳",
        "value": 92
      },
      {
        "name": "岑溪",
        "value": 569
      },
      {
        "name": "民丰",
        "value": 44
      },
      {
        "name": "岢岚",
        "value": 339
      },
      {
        "name": "南岳",
        "value": 139
      },
      {
        "name": "岗巴",
        "value": 327
      },
      {
        "name": "本溪满族自治",
        "value": 425
      },
      {
        "name": "潞城",
        "value": 427
      },
      {
        "name": "光山",
        "value": 38
      },
      {
        "name": "常宁",
        "value": 375
      },
      {
        "name": "和静",
        "value": 365
      },
      {
        "name": "雷山",
        "value": 393
      },
      {
        "name": "万全",
        "value": 143
      },
      {
        "name": "向阳",
        "value": 892
      },
      {
        "name": "安溪",
        "value": 330
      },
      {
        "name": "特克斯",
        "value": 340
      },
      {
        "name": "南岸",
        "value": 289
      },
      {
        "name": "民乐",
        "value": 284
      },
      {
        "name": "黄骅",
        "value": 282
      },
      {
        "name": "三元",
        "value": 280
      },
      {
        "name": "安仁",
        "value": 320
      },
      {
        "name": "噶尔",
        "value": 332
      },
      {
        "name": "瓮安",
        "value": 260
      },
      {
        "name": "无为",
        "value": 293
      },
      {
        "name": "社旗",
        "value": 473
      },
      {
        "name": "天桥",
        "value": 364
      },
      {
        "name": "西工",
        "value": 217
      },
      {
        "name": "永福",
        "value": 491
      },
      {
        "name": "华州",
        "value": 462
      },
      {
        "name": "卓资",
        "value": 399
      },
      {
        "name": "博山",
        "value": 188
      },
      {
        "name": "梁河",
        "value": 363
      },
      {
        "name": "小店",
        "value": 339
      },
      {
        "name": "青冈",
        "value": 348
      },
      {
        "name": "梨树",
        "value": 794
      },
      {
        "name": "镜湖",
        "value": 310
      },
      {
        "name": "陵水黎族自治",
        "value": 312
      },
      {
        "name": "彭阳",
        "value": 423
      },
      {
        "name": "景泰",
        "value": 410
      },
      {
        "name": "凌河",
        "value": 165
      },
      {
        "name": "宁远",
        "value": 221
      },
      {
        "name": "西市",
        "value": 207
      },
      {
        "name": "平和",
        "value": 310
      },
      {
        "name": "嘉祥",
        "value": 465
      },
      {
        "name": "措勤",
        "value": 143
      },
      {
        "name": "相山",
        "value": 423
      },
      {
        "name": "梅江",
        "value": 423
      },
      {
        "name": "洪江",
        "value": 26
      },
      {
        "name": "积石山保安族东乡族撒拉族自治",
        "value": 137
      },
      {
        "name": "雨湖",
        "value": 384
      },
      {
        "name": "花都",
        "value": 447
      },
      {
        "name": "商都",
        "value": 287
      },
      {
        "name": "句容",
        "value": 482
      },
      {
        "name": "砀山",
        "value": 593
      },
      {
        "name": "宝山",
        "value": 946
      },
      {
        "name": "西丰",
        "value": 332
      },
      {
        "name": "荔浦",
        "value": 354
      },
      {
        "name": "仙桃",
        "value": 173
      },
      {
        "name": "石渠",
        "value": 480
      },
      {
        "name": "沙市",
        "value": 258
      },
      {
        "name": "新吴",
        "value": 93
      },
      {
        "name": "剑河",
        "value": 321
      },
      {
        "name": "洪山",
        "value": 239
      },
      {
        "name": "潮阳",
        "value": 358
      },
      {
        "name": "瓜州",
        "value": 490
      },
      {
        "name": "和",
        "value": 437
      },
      {
        "name": "克山",
        "value": 320
      },
      {
        "name": "双滦",
        "value": 273
      },
      {
        "name": "金水",
        "value": 309
      },
      {
        "name": "尼勒克",
        "value": 200
      },
      {
        "name": "王益",
        "value": 410
      },
      {
        "name": "马关",
        "value": 310
      },
      {
        "name": "开原",
        "value": 185
      },
      {
        "name": "景洪",
        "value": 251
      },
      {
        "name": "仪陇",
        "value": 91
      },
      {
        "name": "上党",
        "value": 292
      },
      {
        "name": "巩留",
        "value": 340
      },
      {
        "name": "扎赉特",
        "value": 391
      },
      {
        "name": "漳浦",
        "value": 204
      },
      {
        "name": "珠山",
        "value": 153
      },
      {
        "name": "全椒",
        "value": 40
      },
      {
        "name": "临江",
        "value": 183
      },
      {
        "name": "西湖",
        "value": 564
      },
      {
        "name": "天祝藏族自治",
        "value": 178
      },
      {
        "name": "烈山",
        "value": 384
      },
      {
        "name": "乌拉特前",
        "value": 359
      },
      {
        "name": "镇沅彝族哈尼族拉祜族自治",
        "value": 322
      },
      {
        "name": "蒙阴",
        "value": 373
      },
      {
        "name": "聂拉木",
        "value": 305
      },
      {
        "name": "松江",
        "value": 298
      },
      {
        "name": "勐海",
        "value": 317
      },
      {
        "name": "郯城",
        "value": 319
      },
      {
        "name": "蒲",
        "value": 327
      },
      {
        "name": "广南",
        "value": 389
      },
      {
        "name": "都昌",
        "value": 395
      },
      {
        "name": "涞源",
        "value": 130
      },
      {
        "name": "松山",
        "value": 337
      },
      {
        "name": "贞丰",
        "value": 66
      },
      {
        "name": "丰泽",
        "value": 130
      },
      {
        "name": "林西",
        "value": 290
      },
      {
        "name": "西平",
        "value": 273
      },
      {
        "name": "丹寨",
        "value": 352
      },
      {
        "name": "祁门",
        "value": 396
      },
      {
        "name": "邹平",
        "value": 262
      },
      {
        "name": "福山",
        "value": 312
      },
      {
        "name": "海南",
        "value": 327
      },
      {
        "name": "蓟州",
        "value": 486
      },
      {
        "name": "兴城",
        "value": 315
      },
      {
        "name": "新和",
        "value": 321
      },
      {
        "name": "如东",
        "value": 224
      },
      {
        "name": "金山",
        "value": 392
      },
      {
        "name": "西乡",
        "value": 236
      },
      {
        "name": "满洲里",
        "value": 475
      },
      {
        "name": "南浔",
        "value": 160
      },
      {
        "name": "雷波",
        "value": 484
      },
      {
        "name": "涟源",
        "value": 323
      },
      {
        "name": "光泽",
        "value": 330
      },
      {
        "name": "嘉禾",
        "value": 151
      },
      {
        "name": "阿克塞哈萨克族自治",
        "value": 275
      },
      {
        "name": "溪湖",
        "value": 257
      },
      {
        "name": "阿勒泰",
        "value": 354
      },
      {
        "name": "蓬江",
        "value": 317
      },
      {
        "name": "卢氏",
        "value": 322
      },
      {
        "name": "登封",
        "value": 238
      },
      {
        "name": "辰溪",
        "value": 339
      },
      {
        "name": "金口河",
        "value": 209
      },
      {
        "name": "临沭",
        "value": 491
      },
      {
        "name": "岳阳楼",
        "value": 405
      },
      {
        "name": "润州",
        "value": 425
      },
      {
        "name": "临河",
        "value": 477
      },
      {
        "name": "赞皇",
        "value": 344
      },
      {
        "name": "金沙",
        "value": 613
      },
      {
        "name": "陆良",
        "value": 346
      },
      {
        "name": "稻城",
        "value": 617
      },
      {
        "name": "辉南",
        "value": 234
      },
      {
        "name": "满城",
        "value": 520
      },
      {
        "name": "湘桥",
        "value": 454
      },
      {
        "name": "历城",
        "value": 424
      },
      {
        "name": "城北",
        "value": 278
      },
      {
        "name": "海原",
        "value": 589
      },
      {
        "name": "麻山",
        "value": 286
      },
      {
        "name": "沙湾",
        "value": 685
      },
      {
        "name": "裕华",
        "value": 395
      },
      {
        "name": "南海",
        "value": 294
      },
      {
        "name": "托克逊",
        "value": 490
      },
      {
        "name": "宣汉",
        "value": 269
      },
      {
        "name": "唐",
        "value": 102
      },
      {
        "name": "阿拉善右",
        "value": 416
      }

            ]
    };
  },

  mounted() {
    // getWordList().then(res=>{
    //   console.log(res)
    // })
    this.wordCloud()
  },

  methods: {
   
    wordCloud () {
      let imag = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAQECAQEBAgICAgICAgICAQICAgICAgICAgL/2wBDAQEBAQEBAQEBAQECAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCAMgAyADAREAAhEBAxEB/8QAHwABAAEDBQEBAAAAAAAAAAAAAAkICgsCAwQGBwUB/8QASBAAAQQCAQMCAwUFBgMFBgcAAAIDBAUBBgcIERIJEwoUIRUiMVGhIzJBYdEWUmJxcoEXJEIYM1OCwUNjkZKxsiU0VGSTovD/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAYF/8QANBEBAAIBAgIGCAUFAQAAAAAAAAECAxESBCIFEyExMmIGFEFCUnFy0iNRYcHwgYKRocLR/9oADAMBAAIRAxEAPwC/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOg33J+j6ze/2curpcW1br6+2nJbqrqbX0lZb2T1PUT9luoFc7C1eJLsos1qKuxkRUyVV8nLGXExn8th8iXzXxtAZ2WTNvJ0WJqcTbZ1tNkavtjUB6Noa/a29VBPXR4Z2xyvfS42+3VLmuYdYcaShTjTiUh9L/AIq6I3UTbubcvU0Ks+yVWrOx0t9rVtUNXslyJUSregv6uNPqoL8hmThEiRGbY7Qn1Zcwhh5SA7ZXXtTbS7+DXy0yJer2zVHfM4afbzX2j9HTbK1EWt1pKX85pNhp3/NrK0YxNwjKsOocQgOtVHJem3k1iDW2UxzMxxLVbPkUOwwKK5W43IfZ+wdjn1TVffodjxnnWVQpL6Xmk4dayttSVZD71HtFDsqrpNHZMWKtdu5Ou3WGUvJzX3USJCnPwHsOtp8nMQrKA7hSfJC25aFIUrCu4H2VPMpThSnW0pV4eKlLThKvcz2R2VnPbPlnPbH55/ADdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPE7/VN9hbfslvo9fpMuHvsLV4OwWO3W1sh2gzQLmwn5cPWIOuPo2ttdNPXluM7aVbeJMZKVKwh513AeYbhxDyhsEffKOoj6tr9DtNLyFCntR+Ut8l1u4SNmpLWspWF6dcaXNgcW97KwYsZ0ypzYrw/DUjEWcmW8psOxy+L9/wBxv7rbNyj6TTy7SXw5VN6vR39zstS3q3Gm93O53E2dfWOn1btjcz07FOjMw817caMiAjvMXmW9loOz6RxXZUdPzBrl9Pjv1G+bI7/Z+RXz7KRbRdPRxVoXHMFFzLksMuI2JH9lZiluNOv+acsyMyffcdQ0HmdZwbvDV3Y30yNosewrk39tROx7F+YvZNle2KBt+uM7FZZ0aNOotYZ2Wk1x1yPHkTnI0PWKyrYy/EhvKnB3zQ+Mt04selR9fuoW7Vk6i45rpbu3Ta/WZ6regt5NTtmwZjaXoSIjklzQZNfiKnLSXJUvU4UKU+wy+7ZMB5VF4o2Xa4T2wJ1HV9jrqzYtuoOPtH5NRfaZUwOOVVc+o1uws6l/U7CYxcw7Oz2huG25EhufYmwdm3I68IbcCsyCwuLBhxXFIW5Gix2HFt+/7a1ssobUpHzT7rvhlSc5x7jrjnbP33Fq7qyHKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="
      var maskImage = new Image();
      maskImage.src = imag;
      let myChart = this.$echarts.init(this.$refs.wordCloud)
      // 这个是返回的一个随机颜色，调用到了potion配置里
      
      const color = [
        '#2740BE',
        '#5A76E8'
      ];
      maskImage.onload = () => {
      myChart.setOption({
          tooltip: {
            show: true
          },
          series: [{
            name: '策查到底',
            type: 'wordCloud',
            maskImage: maskImage,
              top: "-21%",
              width: "100%",
              height: "100%",
            size: ['90%', '90%'],
            sizeRange:[10,28],
            gridSize:4,
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
             textStyle: {
		                 color: function() {
                  let index = Math.floor(Math.random() * color.length)
                  return color[index]
                }
             },
            data:this.wordList
          }]
        })
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.charts{
  width: 500px;
  height: 320px;
}
</style>