var shops = {
	
	a01: {name_ja: 'TEA & CO.', left: 263.5, top: 658, width: 68.5, height: 120},
	a02: {name_ja: 'あべフローリスト', left: 332, top: 677, width: 69, height: 101.5, text_ja: 'お花屋さん。花束・アレンジメント・鉢物・観葉植物など各種イベント・開店祝いなど生花お届けいたします。', twitter_id: 'abeflorist'},
	a03: {name_ja: 'ラ・ビアン土手町', left: 403, top: 680, width: 52.5, height: 98, text_ja: '婦人靴店。3E・4Eの靴も取り扱っております。ポイントカードもあります。'},
	a04: {name_ja: '照明堂', left: 455.5, top: 683.5, width: 51.5, height: 93.5, text_ja: '電球・家電用専門店。電球の種類は東北でもトップクラス。レトロな家電なども見れることがあります。'},
	a05: {name_ja: 'スタジオドゥ', left: 501, top: 645.5, width: 75, height: 79.5},
	a06: {name_ja: 'ビノビジョン', left: 513.5, top: 716.5, width: 69, height: 60.5, text_ja: '眼鏡の専門店。フランス、アランミクリ、ベルギー　テオ、日本のフォーナインズなど取り扱い。視力検査、他店のメガネも無料で調整します。', url: 'http://binovision.jp/'},
	a07: {name_ja: '暮らしの衣料ストー', left: 577, top: 684.5, width: 66.5, height: 88.5, text_ja: 'エブリディーロープライス！良い品をどんどん安く売る店。婦人服・紳士用品・靴・雑貨いろいろあります。'},
	a08: {name_ja: '利研刃物店', left: 652, top: 673, width: 56, height: 97},
	a09: {name_ja: 'ホームワークス', left: 711, top: 700, width: 79, height: 72, url: 'http://www.home-works.co.jp/', twitter_id: 'homeworks1st'},
	a10: {name_ja: '', left: 714.5, top: 640.5, width: 59.5, height: 52},
	a11: {name_ja: '新星美容室', left: 703, top: 582.5, width: 78.5, height: 54.5},
	a12: {name_ja: '弘美堂', left: 708, top: 524, width: 74, height: 55.5},
	a13: {name_ja: '菊富士', left: 695, top: 451, width: 85.5, height: 70, text_ja: '津軽の旬の食材を生かした創作郷土料理・そば・厳選した地酒、是非ご賞味ください。'},
	a14: {name_ja: 'ひまわり', left: 686.5, top: 353, width: 81, height: 94},
	
	b01: {name_ja: 'きものセンター', left: 840.5, top: 357.5, width: 103, height: 105},
	b02: {name_ja: 'ホームワークス', left: 845.5, top: 479.5, width: 57.5, height: 76},
	b03: {name_ja: 'ヘアースペース彩', left: 911.5, top: 475.5, width: 52.5, height: 77.5},
	b04: {name_ja: 'age', left: 970, top: 478, width: 59, height: 81.5},
	b05: {name_ja: 'りゅう美容室', left: 837, top: 662.5, width: 52.5, height: 107},
	b06: {name_ja: '', left: 887.5, top: 656, width: 93.5, height: 69},
	b07: {name_ja: '', left: 980, top: 667.5, width: 44, height: 99.5},
	b08: {name_ja: '開雲堂', left: 1025, top: 667, width: 70.5, height: 100, text_ja: '明治12年創業。千乃梅・有明など和菓子の他、ロシアケーキ等洋菓子も有り。藩祖津軽為信公没後三百年に発売され百年続く「卍最中」はお土産に最適。'},
	b09: {name_ja: '弘前中央食品市場', left: 1096.5, top: 663, width: 83, height: 105, text_ja: '10店舗からなる町の台所。お惣菜・果物・鮮魚・野菜や津軽そば・中華そばなどお召し上がりください。市場丸ごと食堂として、市場内のお好きな具材を乗せて作るどんぶり実施中。'},
	b10: {name_ja: '一戸時計店', left: 1186, top: 512, width: 121.5, height: 257, text_ja: '明治39年創業。屋根の上の時計台は町のシンボル的存在。時計の修理・販売。', bubble_vert_adjust: 17},
	b11: {name_ja: '', left: 1306.5, top: 695, width: 32, height: 69.5},
	b12: {name_ja: 'メガネの山田', left: 1338, top: 691, width: 57, height: 74.5},
	b13: {name_ja: '山田商店', left: 1079.5, top: 87, width: 92, height: 37, text_ja: '焼き鳥・お惣菜。自家製たれの焼き鳥や手作り惣菜は津軽の母の味。弘前のソウルフード「やまだの大學芋」は10月～3月の期間限定。'},
	b14: {name_ja: '工藤惣菜店', left: 1079.5, top: 127.5, width: 130, height: 32.5},
	b15: {name_ja: '藤本鮮魚店', left: 1079.5, top: 164.5, width: 133.5, height: 36, text_ja: '地物の鮮魚の卸・小売。毎週月・火・金、青森県日本海側で獲れた「白神の魚」入荷します。お好み定食で是非お召し上がり下さい。'},
	b16: {name_ja: '横山商店', left: 1079.5, top: 202.5, width: 98.5, height: 30.5},
	b17: {name_ja: '棟方青果店', left: 1079.5, top: 234, width: 125.5, height: 32.5},
	b18: {name_ja: 'くどうおかずや', left: 1079.5, top: 273, width: 161.5, height: 28},
	b19: {name_ja: 'BONHEUR', left: 1079.5, top: 310, width: 134.5, height: 27, text_ja: 'マルシェスタイルの売り場には地場産野菜が並び、地場産品で作ったお弁当・お惣菜が人気。JAZZが流れる店内でお食事も出来ます。'},
	b20: {name_ja: '果実直売所', left: 1079.5, top: 341, width: 126, height: 31.5, text_ja: '地場産の季節の果物を提供する店。果実情報を聞きながら購入できるのがポイント。'},
	b21: {name_ja: '小川鮮魚店', left: 1079.5, top: 373.5, width: 146, height: 31},
	b22: {name_ja: '中華そば山田', left: 1079.5, top: 411.5, width: 161.5, height: 31.5, text_ja: '弘前桜まつりで育てられた中華そばの味を楽しめる店。昔ながらの津軽そば・うどん・カレーなど昭和の雰囲気が味わえます。'},
	b23: {name_ja: '入五閣', left: 890.5, top: 726, width: 46, height: 42},
	b24: {name_ja: 'アカシヤ', left: 935, top: 724.5, width: 46, height: 44},

	c01: {name_ja: 'ブレス（ブナコショールーム）', left: 1568.5, top: 530.5, width: 156, height: 80.5, text_ja: 'ブナ材を独自のエコ製法で加工した弘前生まれの「ブナコ」。デザイン性の高いインテリア・照明・テーブルウェアなど海外からも注目の商品です。', url: 'http://bunaco.jp/'},
	c02: {name_ja: 'HANAKIYA', left: 1572.5, top: 607, width: 107, height: 60.5, text_ja: '婦人服、アクセサリー、バックの店。ハナエ・モリ　ヒロコ・コシノなど国内外のトップブランド婦人服をお取り扱いしております。'},
	c03: {name_ja: '', left: 1580.5, top: 689.5, width: 58, height: 86},
	c04: {name_ja: '平山萬年堂', left: 1645.5, top: 691.5, width: 60.5, height: 84.5, text_ja: '創業大正2年。万年筆、書道用具の専門店。オリジナルの津軽塗り万年筆や弘前市マスコットキャラクターたか丸くんグッズも販売。裏通りに姉妹店久三郎あります。'},
	c05: {name_ja: '', left: 1706, top: 698.5, width: 51.5, height: 73.5},
	c06: {name_ja: '', left: 1774.5, top: 716, width: 28, height: 58.5},
	c07: {name_ja: 'ハーモニック', left: 1879.5, top: 663.5, width: 102, height: 63},
	c08: {name_ja: 'ファンキースタジアム', left: 1881, top: 723, width: 101, height: 54.5},
	c09: {name_ja: '岩舟アイクリニック', left: 1787.5, top: 646.5, width: 86.5, height: 73.5},
	c10: {name_ja: 'アイコン', left: 1801.5, top: 719.5, width: 71, height: 56},
	c11: {name_ja: '', left: 1890.5, top: 597, width: 64, height: 53.5},
	c12: {name_ja: 'デザイン工房エスパス', left: 1886, top: 540, width: 82, height: 52},
	c13: {name_ja: 'ホルモン家もつべえ', left: 1888.5, top: 472.5, width: 77.5, height: 62},
	c14: {name_ja: 'ポテチーノ', left: 1896.2, top: 400.5, width: 63, height: 59.5},
	c15: {name_ja: '久三郎', left: 1686.5, top: 409.5, width: 60.5, height: 65.5},
	
	d01: {name_ja: 'サイクルショップあべ', left: 2019, top: 508.5, width: 88, height: 82},
	d02: {name_ja: 'つきや', left: 2041.5, top: 676.2, width: 69.5, height: 105, text_ja: '手芸用品専門店。津軽の伝統的デザイン刺繍「こぎん刺し」の材料、和、洋裁、毛糸、レザークラフト用品など取り扱いしています。'},
	d03: {name_ja: '弘前パークホテル', left: 2112, top: 633, width: 105, height: 151.5, text_ja: '本格チャペルと3つのウェディングステージがゲストを温かくお迎えします。各種会合にもお使いいただけます。', url: 'http://www.imgnjp.com/hiro_park/'},
	d04: {name_ja: 'Resto Cafe Refuge', left: 2222, top: 682, width: 73, height: 85.5},
	d05: {name_ja: 'めがねの天賞堂', left: 2224, top: 576, width: 66, height: 99},
	d06: {name_ja: '津軽三味線ダイニング響', left: 2183, top: 98.5, width: 165.5, height: 63.5, text_ja: 'パークホテル3F津軽三味線を聴きながらお食事を楽しめます。郷土料理や青森の地酒をご堪能下さい。営業時間18時から/毎週月曜定休'},
	d07: {name_ja: '串や酔や六や', left: 2183, top: 177, width: 165.5, height: 26},
	d08: {name_ja: '美容室ベルノ', left: 2183, top: 202, width: 165.5, height: 30.5},
	d09: {name_ja: '居酒屋保志月', left: 2183, top: 238, width: 165.5, height: 27},
	d10: {name_ja: 'アルファ', left: 2183, top: 273, width: 165.5, height: 23.5},
	d11: {name_ja: 'ジャパンツアーシステムみちのく', left: 2183, top: 296, width: 165.5, height: 49},
	d12: {name_ja: '居酒屋わらび', left: 2183, top: 352, width: 165.5, height: 30},
	d13: {name_ja: 'Cafe DO', left: 2183, top: 387.5, width: 165.5, height: 25.5},
	d14: {name_ja: '紀伊国屋書店弘前店', left: 2183, top: 431, width: 165.5, height: 62},
	
	e01: {name_ja: '蓬莱堂', left: 370, top: 1001, width: 64.5, height: 97.5},
	e02: {name_ja: '青い花のスウィートポテト', left: 438, top: 1012, width: 63, height: 85.5, text_ja: '県産りんごの紅玉を使ったりんご入りスィートポテトや自家製カスタードを使用したナチュラルスィートポテトが大人気。ご試食もございます。'},
	e03: {name_ja: 'VISION', left: 502.5, top: 1010, width: 66.5, height: 89, text_ja: 'ダンス衣装・パーティードレスの専門店。社交ダンスをはじめ結婚式・各種パーティー・接客など幅広いドレスをご用意。'},
	e04: {name_ja: '朝日堂', left: 569, top: 1005.5, width: 70, height: 89},
	e05: {name_ja: '弘前国際ホテル', left: 640, top: 1000, width: 109.5, height: 122, text_ja: '全客室　テンピュール社製の寝具を完備。朝食は津軽の郷土料理をバイキングスタイルでご用意しております。', url: 'http://www.hirosaki-kokusai.co.jp/', facebook_id: '238483146180555'},
	e06: {name_ja: 'RENAISSE AVENUE', left: 753.5, top: 1010, width: 131.5, height: 110, text_ja: '最新のファッション・雑貨・宝飾などのお店が並ぶファッションビルです。ランチからディナーまでご利用できる飲食店や弘前で人気のスウィーツショップもあります。', url: 'http://renaisse.jp/', facebook_id: '351391531556192', twitter_id: 'renaisse'},
	e07: {name_ja: '東奥信用金庫本店', left: 891, top: 1009, width: 87, height: 103.5, text_ja: '銀行。営業時間AM9時～PM15時。ATM平日8時～21時/土日祝8時～19時'},
	e08: {name_ja: '', left: 982.5, top: 998.5, width: 56, height: 81},
	e09: {name_ja: 'ボーシのマルヤマ', left: 1039.5, top: 1001.5, width: 60, height: 95},
	e10: {name_ja: '弘前ドライクリーニング', left: 1097, top: 1002, width: 60, height: 95.5},
	e11: {name_ja: 'レミックス', left: 1160.5, top: 1001.5, width: 75.5, height: 85.5},
	e12: {name_ja: '中土手魚菜センター', left: 1236.5, top: 1001, width: 67.5, height: 87.5, text_ja: '新鮮な野菜・精肉類やエビフライ・角煮・刺身・焼き魚などお惣菜もあります。'},
	e13: {name_ja: '吉井酒造煉瓦倉庫', left: 1163, top: 1458, width: 129.5, height: 128.5},
	e14: {name_ja: 'リーガルシューズ', left: 453, top: 1137, width: 158.5, height: 36},
	e15: {name_ja: '居酒屋つがる', left: 453, top: 1177.5, width: 158.5, height: 31.5},
	e16: {name_ja: '食彩酒房 萌暖', left: 453, top: 1210.5, width: 158.5, height: 40.5},
	e17: {name_ja: 'プレ こころ育て', left: 744, top: 1155, width: 164.5, height: 27},
	e18: {name_ja: 'A.select HOMEY', left: 744, top:1182.5 , width: 212.5, height: 26},
	e19: {name_ja: '楽市楽座', left: 744, top: 1208.5, width: 104.5, height: 33.5},
	e20: {name_ja: 'BOSCH Balleny', left: 744, top: 1267, width: 172, height: 30},
	e21: {name_ja: 'HANAE MORI Deux', left: 744, top: 1302, width: 215.5, height: 27},
	e22: {name_ja: 'field/dream SPICE MIX', left: 744, top: 1331, width: 265, height: 28},
	e23: {name_ja: 'classe 天然宝石の店 丸啓', left: 744, top: 1361, width: 265, height: 31},
	//e24: {name_ja: 'Fair Ness', left: 744, top: 1398.5, width: 115, height: 26},
	e25: {name_ja: 'HARAJUKU PLAZA', left: 744, top: 1429.5, width: 226.5, height: 27},
	e26: {name_ja: 'Coco Ange 桜n坊庵', left: 744, top: 1460, width: 241.5, height: 35.5},
	e27: {name_ja: 'Skip HEART', left: 744, top: 1497, width: 156, height: 29},
	e28: {name_ja: 'KANDY SPICE', left: 744, top: 1551.5, width: 169.5, height: 31.5},
	e29: {name_ja: 'RUNKING', left: 744, top: 1583.5, width: 123, height: 28.5},
	e30: {name_ja: '秋田や青果', left: 1112, top: 1238, width: 153, height: 29.5},
	e31: {name_ja: '佐藤精肉店', left: 1112, top: 1267.5, width: 153, height: 37},
	e32: {name_ja: 'カサイ刺身店', left: 1112, top: 1304, width: 153, height: 34},
	e33: {name_ja: 'さくら惣菜店', left: 1112, top: 1342.5, width: 153, height: 37},
	e34: {name_ja: '大高商店', left: 1112, top: 1380, width: 153, height: 37},
	
	f01: {name_ja: 'まちなか情報センター', left: 1375, top: 1028, width: 89, height: 115.5, text_ja: '各種情報・交流・休憩が出来るまちなか観光拠点。弘前のお土産・りんご・さくら・たか丸くんのグッズがあります。ソフトクリーム（4月～10月）が人気です。', url: 'http://www.ring-o.jp/'},
	
	g01: {name_ja: '弘前昇天教会', left: 1378, top: 1201.5, width: 125.5, height: 186, text_ja: '1920年（大正9年）に建設。西洋式の礼拝堂を和式の襖で仕切る興味深い建築スタイル。1882年頃製造されたリードオルガンは現役で使用されています。', bubble_vert_adjust: 17},
	
	h01: {name_ja: '石井果実店', left: 1642.5, top: 1007, width: 83, height: 86, text_ja: '明治創業のりんご販売店。ご贈答用の季節の果物や盛かごもお作りします。りんごは10月～2月頃が旬。地方発送有り。'},
	h02: {name_ja: 'どて箱', left: 1739, top: 1000, width: 88.5, height: 86, text_ja: '地域の隠れた名品と出会えるショップ。人ともの、人と人の交流の場として利用できます。喫茶もあり。'},
	h03: {name_ja: '', left: 1833.5, top: 1033, width: 40.5, height: 58},
	h04: {name_ja: '', left: 1879.5, top: 1036.5, width: 32.5, height: 47},
	h05: {name_ja: 'レストラントミタ', left: 1904.5, top: 995, width: 98, height: 51},
	h06: {name_ja: '富田牛肉店', left: 1897, top: 1044.5, width: 98.5, height: 78.5, text_ja: '牛肉販売100年余。すき焼きなどに是非どうぞ。店頭販売のカツサンドは土手町のファーストフード。'},
	h07: {name_ja: '呉服 梅原', left: 2004.5, top: 1007.5, width: 57.5, height: 85.5, text_ja: '弘前の街を彩る老舗の着物店。染み抜き・洗い張り・仕立て直し承ります。'},
	h08: {name_ja: '梅原歯科医院', left: 2000, top: 1099.5, width: 59.5, height: 82.5},
	h09: {name_ja: '青森銀行土手町支店', left: 2102.5, top: 1008, width: 102, height: 142.5, text_ja: '銀行。平日9時～15時'},
	h10: {name_ja: 'ブルーエイト', left: 2212.5, top: 1010.5, width: 86.5, height: 83.5},
	h11: {name_ja: 'ガレージパラダイス', left: 2204, top: 1089, width: 111, height: 75},
	h12: {name_ja: 'カリマハラジャ', left: 2211, top: 1167, width: 72, height: 55.5, text_ja: '弘前が全国に誇る本格スパイスカレーの店。天然薬効スパイスを無農薬食材とアルカリイオン水で3週間掛けて仕上げます。コンセプトは安心・安全。'}
	
}