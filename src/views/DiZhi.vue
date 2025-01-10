<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">十二地支</h1>
    
    <!-- 概述部分 -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">十二地支概述</h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p class="text-gray-600 leading-relaxed">
          十二地支源于木星围绕太阳运转对地球的影响，形成十二种不同的能量场，从而产生了各种生克制化的关系，这也是易学描述推演自然规律及事物和现象的依据。
        </p>
        <div class="mt-4 space-y-4">
          <div>
            <h3 class="font-medium text-gray-700">阴阳划分：</h3>
            <div class="mt-2 flex flex-wrap gap-4">
              <div class="bg-gray-50 p-3 rounded-lg">
                <span class="text-gray-700 font-medium">六阳：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-yellow-100 rounded">子</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">寅</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">辰</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">午</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">申</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">戌</span>
                </div>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg">
                <span class="text-gray-700 font-medium">六阴：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-blue-100 rounded">丑</span>
                  <span class="px-2 py-1 bg-blue-100 rounded">卯</span>
                  <span class="px-2 py-1 bg-blue-100 rounded">巳</span>
                  <span class="px-2 py-1 bg-blue-100 rounded">未</span>
                  <span class="px-2 py-1 bg-blue-100 rounded">酉</span>
                  <span class="px-2 py-1 bg-blue-100 rounded">亥</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="font-medium text-gray-700">五行划分：</h3>
            <div class="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div class="bg-green-50 p-3 rounded-lg">
                <span class="text-green-700 font-medium">木：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-green-100 rounded">寅</span>
                  <span class="px-2 py-1 bg-green-100 rounded">卯</span>
                </div>
              </div>
              <div class="bg-red-50 p-3 rounded-lg">
                <span class="text-red-700 font-medium">火：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-red-100 rounded">巳</span>
                  <span class="px-2 py-1 bg-red-100 rounded">午</span>
                </div>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg">
                <span class="text-yellow-700 font-medium">土：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-yellow-100 rounded">辰</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">戌</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">丑</span>
                  <span class="px-2 py-1 bg-yellow-100 rounded">未</span>
                </div>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg">
                <span class="text-gray-700 font-medium">金：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-gray-100 rounded">申</span>
                  <span class="px-2 py-1 bg-gray-100 rounded">酉</span>
                </div>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg">
                <span class="text-blue-700 font-medium">水：</span>
                <div class="flex space-x-2 mt-1">
                  <span class="px-2 py-1 bg-blue-100 rounded">亥</span>
                  <span class="px-2 py-1 bg-blue-100 rounded">子</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地支关系说明 -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">地支关系</h2>
        <p class="mt-2 text-sm text-gray-600">地支之间的生克冲合刑害关系说明</p>
      </div>

      <div class="border-t border-gray-200">
        <!-- 击刑关系 -->
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">击刑关系</h3>
          <div class="space-y-4">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-medium text-red-800 mb-2">无理之刑</h4>
              <p class="text-gray-700">子卯相刑：不讲道理，多因投资或桃色事件破财</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-medium text-red-800 mb-2">持势之刑</h4>
              <p class="text-gray-700">丑未戌三者相刑：依仗权势造成的伤害，多表现为窝火和赌气</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-medium text-red-800 mb-2">无恩之刑</h4>
              <p class="text-gray-700">寅巳申三者相刑：多恩将仇报，容易引起争斗、受伤</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-medium text-red-800 mb-2">自刑</h4>
              <p class="text-gray-700">辰、午、酉、亥自刑：因自己的原因而受到责罚，容易破财、犯错误</p>
            </div>
          </div>
        </div>

        <!-- 五行生克关系 -->
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">五行生克关系</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-medium text-green-800 mb-2">相生关系</h4>
              <ul class="space-y-2 text-gray-700">
                <li>木（寅卯）生火（巳午）</li>
                <li>火（巳午）生土（辰戌丑未）</li>
                <li>土（辰戌丑未）生金（申酉）</li>
                <li>金（申酉）生水（亥子）</li>
                <li>水（亥子）生木（寅卯）</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-medium text-yellow-800 mb-2">相克关系</h4>
              <ul class="space-y-2 text-gray-700">
                <li>金（申酉）克木（寅卯）</li>
                <li>木（寅卯）克土（辰戌丑未）</li>
                <li>土（辰戌丑未）克水（亥子）</li>
                <li>水（亥子）克火（巳午）</li>
                <li>火（巳午）克金（申酉）</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 六冲六害关系 -->
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">六冲六害关系</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-medium text-blue-800 mb-2">六冲</h4>
              <p class="text-gray-600 mb-2">相冲主身心不安、出行、变化、财产耗散</p>
              <ul class="space-y-2 text-gray-700">
                <li>子午相冲</li>
                <li>丑未相冲</li>
                <li>寅申相冲</li>
                <li>卯酉相冲</li>
                <li>辰戌相冲</li>
                <li>巳亥相冲</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-medium text-purple-800 mb-2">六害</h4>
              <p class="text-gray-600 mb-2">相害主感情不顺、婚姻不睦</p>
              <ul class="space-y-2 text-gray-700">
                <li>子未相害</li>
                <li>丑午相害</li>
                <li>寅巳相害</li>
                <li>卯辰相害</li>
                <li>申亥相害</li>
                <li>酉戌相害</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 三合关系 -->
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">三合关系</h3>
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <ul class="space-y-3 text-gray-700">
                <li>
                  <span class="font-medium text-indigo-800">水局三合：</span>
                  申子辰 → 寅（马星），主事业、财运、学业、考试
                </li>
                <li>
                  <span class="font-medium text-indigo-800">木局三合：</span>
                  亥卯未 → 巳（马星），主人际、感情、婚姻、子女
                </li>
                <li>
                  <span class="font-medium text-indigo-800">火局三合：</span>
                  寅午戌 → 申（马星），主事业、名誉、官运、权力
                </li>
                <li>
                  <span class="font-medium text-indigo-800">金局三合：</span>
                  巳酉丑 → 亥（马星），主财运、投资、生意、收益
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 相破关系 -->
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">相破关系</h3>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-600 mb-3">相破主事物破坏、关系破裂</p>
            <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              <li>子酉相破</li>
              <li>丑辰相破</li>
              <li>寅亥相破</li>
              <li>卯午相破</li>
              <li>巳申相破</li>
              <li>未戌相破</li>
            </ul>
          </div>
        </div>

        <!-- 马星关系 -->
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">马星关系</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-medium text-blue-800 mb-2">马星含义</h4>
              <p class="text-gray-700">{{ maXingRelations.meaning }}</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-medium text-blue-800 mb-2">特殊作用</h4>
              <ul class="space-y-2 text-gray-700">
                <li v-for="effect in maXingRelations.specialEffects" 
                    :key="effect">{{ effect }}</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-medium text-blue-800 mb-2">三合局马星</h4>
              <ul class="space-y-3 text-gray-700">
                <li v-for="relation in maXingRelations.sanHe" 
                    :key="relation.ma">
                  {{ relation.group.join('') }} → {{ relation.ma }}，{{ relation.desc }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地支详细内容 -->
    <div class="space-y-8">
      <div v-for="zhi in diZhiDetails" 
           :key="zhi.name"
           :id="zhi.name"
           class="transform transition-all duration-300 hover:scale-[1.01]">
        <div :class="['bg-white rounded-lg shadow-lg overflow-hidden', zhi.colorClass]">
          <!-- 标题栏 -->
          <div :class="['px-6 py-4', zhi.headerClass]">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <span class="text-3xl font-bold text-white">{{ zhi.name }}</span>
                <div class="flex flex-col">
                  <span class="text-white opacity-75 text-sm">{{ zhi.wuXing }}{{ zhi.yinYang }}</span>
                </div>
              </div>
              <div class="flex items-center space-x-4 text-white">
                <div class="text-center">
                  <div class="text-sm opacity-75">方位</div>
                  <div>{{ zhi.direction }}</div>
                </div>
                <div class="text-center">
                  <div class="text-sm opacity-75">时令</div>
                  <div>{{ zhi.weather }}</div>
                </div>
                <div class="text-center">
                  <div class="text-sm opacity-75">色彩</div>
                  <div>{{ zhi.color }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <!-- 主要内容分为两列 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- 左列：基本信息 -->
              <div class="space-y-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-lg mb-3">概念特征</h4>
                  <p class="text-gray-700 leading-relaxed">{{ zhi.concept }}</p>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-lg mb-3">形态特征</h4>
                  <p class="text-gray-700 leading-relaxed">{{ zhi.appearance }}</p>
                </div>

                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-lg mb-3">性格特点</h4>
                  <p class="text-gray-700 leading-relaxed">{{ zhi.personality }}</p>
                </div>
              </div>

              <!-- 右列：对应类别 -->
              <div class="space-y-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-lg mb-3">人物类型</h4>
                  <p class="text-gray-700 leading-relaxed">{{ zhi.people }}</p>
                </div>

                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-lg mb-3">人体部位</h4>
                  <p class="text-gray-700 leading-relaxed">{{ zhi.bodyParts }}</p>
                </div>
              </div>
            </div>

            <!-- 底部详细分类 -->
            <div class="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-lg mb-3">动物</h4>
                <p class="text-gray-700 leading-relaxed">{{ zhi.animals }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-lg mb-3">植物</h4>
                <p class="text-gray-700 leading-relaxed">{{ zhi.plants }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-lg mb-3">物品</h4>
                <p class="text-gray-700 leading-relaxed">{{ zhi.objects }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-lg mb-3">地理</h4>
                <p class="text-gray-700 leading-relaxed">{{ zhi.geography }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const diZhiDetails = [
  {
    name: '子',
    wuXing: '阳水',
    yinYang: '阳',
    direction: '正北',
    weather: '雨、雪、雾、霜',
    color: '黑色',
    colorClass: 'border-t-4 border-blue-500',
    headerClass: 'bg-blue-600',
    concept: '首领、名人、智慧、聪明、豪奢、阴私、奸邪、暗昧、色欲、悲泣、丢失',
    appearance: '面黑或眼大、大头、身体圆润、皮肤光滑',
    personality: '可圆可方、处事圆滑、上善若水、聪明吉祥',
    people: '女人、儿童、艺人、书画者、盗贼、好色之人、旅游之人、科学研究者、文化事业、化学行业、秘书、会计、水上工作者、运输者、从事液体物质经营者、黑衣人、混血人、淫乱人',
    bodyParts: '肾、膀胱、精神、血液、血管、大脑、卵子、脚趾、生殖系统、内分泌系统、精液、经血',
    animals: '老鼠、田鼠、鸟类、蝙蝠、鱼类、喜水动物',
    plants: '蔬菜、水果、水草、芦苇、荷花、棱角、水稻等一切水中生长的植物',
    objects: '书画、乐器、珠宝玉器、墨水、颜料、首饰、筐、笼、绳索、汤匙、碗、杯、桶、瓶、盆、瓮、液体物品、丝绸、布匹、大豆、茶、糖、盐、饮品、车、船、交通工具',
    geography: '江、河、湖、海、塘、沟渠、安河、道路、水管、厕所、厨房、水池、喷泉、水厂、饮料厂、化工厂'
  },
  {
    name: '丑',
    wuXing: '阴土',
    yinYang: '阴',
    direction: '北偏东',
    weather: '阴天、多云、雨天',
    color: '黄色',
    colorClass: 'border-t-4 border-yellow-500',
    headerClass: 'bg-yellow-600',
    concept: '忠厚、正直、贤良、福德、职称、难堪、丑陋、田宅、房屋、财产、院落、争斗、诅咒、冤仇、告状、官司、举荐',
    appearance: '丑陋、矮子、瘸子、驼背、大肚子、秃发人、眼睛有毛病者、鼻子有毛病者、嘴有毛病者、诅咒的人、受冤屈的人、精神病、言语瓮里瓮气',
    personality: '忠厚、贤良、说话不好听、爱骂人、告状',
    people: '领导、房地产经纪、种植者、采矿者、长者、父母、僧人、基督徒、教徒、个子矮、瘸子、驼背',
    bodyParts: '脾、胃、肠、血管、精神、大脑、神经、足、棉布、眼睛、子宫、结肠、脾脏、肛门、嘴唇',
    animals: '牛、马、驴、骡、羊、猪、龟、鳖、蜈蚣、鸭、鹅等',
    plants: '蔬菜、瓜果、桑树、地瓜、土豆、山药、植物的根',
    objects: '车、首饰、珠宝、柜子、尺子、食物、枯物、锁、钥匙、鞋子',
    geography: '桑园、河流、桥梁、宫殿、礼堂、寺庙、仓库、田园、菜地、监狱、死尸、坟墓'
  },
  {
    name: '寅',
    wuXing: '阳木',
    yinYang: '阳',
    direction: '东北',
    weather: '风、云',
    color: '绿色',
    colorClass: 'border-t-4 border-green-500',
    headerClass: 'bg-green-600',
    concept: '开始、发挥、实际、变化、进行、木器、文章、文艺、艺术、教育、管理、婚姻、喜庆',
    appearance: '方脸、面色青白、额头大、有胡须、身材魁梧',
    personality: '仁慈、虚伪、伪装、易怒',
    people: '官员、领导、管理员、朋友、家长、丈夫、女婿、文化人、医生、药品产销者、医疗器械产销者、教徒、木匠、艺人、教育工作者、采矿者',
    bodyParts: '肝、胆、发、口、眼、筋、手、指甲、腿',
    animals: '老虎、豹子、猫、狐狸、狗、啄木鸟',
    plants: '高大树木、竹子、果树、花木等',
    objects: '横梁、柱子、电杆、屏风、保健、炉灶、车后轮、香炉、盆、桌椅、桥梁、竹制品、蔬菜、食品、书籍、文件、袜子、鞋子、衣服、虎画、毛画、山水画',
    geography: '山林、桥梁、花园、草坪、果园、丘陵、房山、柱状建筑、办公室、寺院、塔等'
  },
  {
    name: '卯',
    wuXing: '阴木',
    yinYang: '阴',
    direction: '东方',
    weather: '风、云',
    color: '绿色',
    colorClass: 'border-t-4 border-green-500',
    headerClass: 'bg-green-600',
    concept: '逃亡、振动、摇摆、急促、消耗、失盗、流动、文化、艺术、欢乐、祥和',
    appearance: '面长、脸色青白、大脑门、身体细长',
    personality: '冲动、直白、说话不拐弯抹角、性急',
    people: '长子、富贵女子、丈夫、母亲、姑母、教徒、偷盗者、艺人',
    bodyParts: '十指、毛发、肝、胆、四肢、胆经、肝经、脖子、手腕、脚腕、膝盖、肩头',
    animals: '兔子、松鼠、羊、鹿、水獭、旱獭、蝴蝶、蜻蜓、蛐蛐、甲壳虫',
    plants: '花草、叶子、植物的茎、农作物',
    objects: '家具、床、柜、窗、茶几、船、车、被子、毯子、衣物、药材、书、报、材料、纸张',
    geography: '桥梁、道路、大街、车船、树木、森林、花园、艺苑'
  },
  {
    name: '辰',
    wuXing: '阳土',
    yinYang: '阳',
    direction: '东偏南',
    weather: '龙卷风、台风、飓风、浓云密布',
    color: '黄色',
    colorClass: 'border-t-4 border-yellow-500',
    headerClass: 'bg-yellow-600',
    concept: '斗争、死丧、困难、牢狱、官司、迟滞、玩恶、坚硬、凶怪、打架、动摇、辈分、惊恐、焦虑、孕育、恶梦、自缢',
    appearance: '圆脸、满脸严肃、冷酷、色黄、多须',
    personality: '心狠手辣、心情冷酷、思想顽固、邪恶多淫',
    people: '黑社会、流氓、无赖、公检法人员、军人、安全工作者、捕猎者、杀人犯、病人、医生、律师、寡妇、三狗者、将要死亡的人、孕妇、胖人',
    bodyParts: '肠、胃、胸、乳、眼睛斜视、视物昏花、臀、脾、作践、项背、坐骨神经',
    animals: '龙、蛟、鱼类、蜥蜴、蚯蚓、不带翅膀的虫、昆虫类的幼虫',
    plants: '蔬菜、瓜果、桑树、地瓜、土豆、山药、植物的根',
    objects: '瓷盆、瓦罐、甲胄、渔网、缸瓮、钱物、头盔、盆、皮毛、衣物、五谷、米麦、药品、碾磨、香纸',
    geography: '走廊、寺观、沟渠、土堆、浅滩、删减、泥泞、池塘、山包、高岗、坟墓、庄稼地、医院、公检司法机关'
  },
  {
    name: '巳',
    wuXing: '阴火',
    yinYang: '阴',
    direction: '南偏东',
    weather: '炎热、星星',
    color: '红色',
    colorClass: 'border-t-4 border-red-500',
    headerClass: 'bg-red-600',
    concept: '信息、惊扰、怪异、争斗、口舌、流血、变化、乞索、讨债、赏赐、奖赏、聪明、狡诈、虚伪、忧愁、文艺、轻狂、谩骂、犯法',
    appearance: '红脑门、大嘴、头发黄、眼目不整、水蛇腰、哈腰、走路摇摆',
    personality: '狡猾善变、神经质、虚伪怪异、精神恍惚',
    people: '精神病患者、经常做梦的人、怪人、流血受伤的人、爱打架者、讨债者、文艺工作者、犯法者、虚伪狡诈者、厨师、歌手、少女、美人、乞丐、妇人',
    bodyParts: '血液、心、面部、口腔、喉咙、齿、唇、左肩小肠、眼睛、肛门',
    animals: '蛇、蚓、蝉、萤火虫、飞虫、飞鸟、蜥蜴、鳝鱼',
    plants: '植物的尖部、藤萝、瓜秧、牵牛、蒺藜、爬山虎等蔓状类植物',
    objects: '文字、文件、文书、书画、证件票据、砖瓦、花果、烟囱、电视机、灯、手机、电话、电器类、发热物体、火光、烟雾、火灾',
    geography: '热闹向阳质地、供娱乐场所、砖厂、化工厂、弯曲的河流、弯曲的小路、长城、电器店'
  },
  {
    name: '午',
    wuXing: '阳火',
    yinYang: '阳',
    direction: '正南',
    weather: '闪电、太阳、炎热',
    color: '红色',
    colorClass: 'border-t-4 border-red-500',
    headerClass: 'bg-red-600',
    concept: '富贵、名人、经理、第三者、善良、教徒、骑马、纺织、胆小、惊恐、胎孕、骂人、文化、广告、导演、演员、制片、工矿冶炼、电业、兵工、烧伤、烫伤、发烧',
    appearance: '目圆、面赤、身体高大',
    personality: '脾气急躁、点火就着',
    people: '富商、名人、经理、第三者、善良的人、教徒、爱骑马的人、纺织者、胆小者、惊恐者、胎孕、爱骂人者、文化人、广告经营者、导演、演员、制片人、工矿冶炼、电业、兵工、烧伤者、烫伤者、发烧者',
    bodyParts: '心、口、目、血液、神经、小肠、头、舌、肚脐',
    animals: '马、鹿、獐、麝、漂亮的鸟类',
    plants: '花、盆景、绿篱、观赏树',
    objects: '电话、信息、手机、文章、电视机、书画、旌旗、裤子、枪炮弹药、烟花爆竹、丝绸、布料、棉麻织品、锅炉、暖气',
    geography: '漂亮壮丽的建筑物、客厅、大厅、厨房、窑燥、窗户、电影院、山岭、娱乐场所、电站、电子设备厂、商店、炉冶、高岭、田园、道路、鸟窝、鸡窝、鸟笼子'
  },
  {
    name: '未',
    wuXing: '阴土',
    yinYang: '阴',
    direction: '南偏西',
    weather: '多云、燥热',
    color: '黄色',
    colorClass: 'border-t-4 border-yellow-500',
    headerClass: 'bg-yellow-600',
    concept: '口味、味道、酒食、宴会、婚姻、喜庆、拜神、召见、会见、小的收获、否定',
    appearance: '肥胖、丰满、肉多、皮肤干燥、唇厚',
    personality: '豪爽好饮、乐观性直、知书达理',
    people: '丰满之人、胖人、喜食者、好打扮着、经营酒水者、厨师、调酒师、茶师、经营食品者、父母、老人、姑嫂、姨妹、教徒、寡妇',
    bodyParts: '头、胃、肝、脊柱、右肩、腹腔、手、口舌',
    animals: '海鲜、河虾、羊、鹿、驴、骡等一切能提供人们饮食的动物',
    plants: '农作物、蔬菜、果树等一切能提供人们饮食的植物',
    objects: '盘子、碗、帽子、衣裳、印信、酒器、用嘴的乐器、医疗器械、药品、窗帘、食品',
    geography: '院子、墙、坑、底洼处、沼泽、湖泊、监狱、动物的圈、水晶、自来水、厨房、田地、坟墓、田野、砖厂、庙宇、神祠'
  },
  {
    name: '申',
    wuXing: '阳金',
    yinYang: '阳',
    direction: '西偏南',
    weather: '霹雳、闪电',
    color: '白色、金色',
    colorClass: 'border-t-4 border-gray-500',
    headerClass: 'bg-gray-600',
    concept: '运动、传递、道路、疾病、精神、意识、交易、失脱、问题、阻隔、困难',
    appearance: '圆脸、圆眼、脖子粗短、脑门后平、身材肥大',
    personality: '严肃、急躁、不怒而威',
    people: '军人、公检法、猎人、恶人、旅游者、首饰加工者、冶炼者、金属加工、汽车制造者、财务、经商、医生、屠宰、穿孝的人',
    bodyParts: '大肠、右胸、右臂、骨、肺、食道、气管',
    animals: '狮子、老虎、猴子、猿、猩猩',
    plants: '大麦、坚果、榛子、核桃、栗子、松子、胡桃',
    objects: '刀、剑、武器、绢帛、经文、羽毛、药物、金银、铁器、汽车、飞机、石制品、金属制品、水泥制品',
    geography: '道路、关口、路障、悬崖、湖、池、河水之发源地、灵柩、神堂、佛堂、麦地、机械场、金属加工冶炼厂、水泥厂、首饰厂'
  },
  {
    name: '酉',
    wuXing: '阴金',
    yinYang: '阴',
    direction: '西',
    weather: '霜、雪',
    color: '白色',
    colorClass: 'border-t-4 border-gray-500',
    headerClass: 'bg-gray-600',
    concept: '密谋、筹划、策划、缜密、精致、细节、完美、金融、经济、市场、交易、买卖',
    appearance: '形貌端庄、面色黄白、声音清脆圆润',
    personality: '文静、文雅、谈吐不凡、细腻认真',
    people: '经商人、策划人、总经理、细致完美的人、资助自己的异性朋友、女人、女友、第三者、戴金银首饰的人、歌星、律师、教师、从事说教工作的人、金融工作者、经纪人、银行工作者、刀伤的人',
    bodyParts: '右肋、手臂、口、耳、目、嘴、鼻、肛门、尿道、手、骨骼、经血、小肠',
    animals: '鸡、鸽、鸭、鹅、羊、善鸣叫的鸟类',
    plants: '葱、姜、辣椒、大蒜、小麦、辛辣植物',
    objects: '金银、首饰、皮革、玻璃制品、金属制品、玉石制品、镜子、玻璃、宝剑、小刀、手术刀、钱币、信用卡、珠宝、首饰、洗衣机、瓜果、口罩、石柱、石碑、酒制品、菜食',
    geography: '门、窗、路、停车场、平坦之地、跑道、光滑之地、酒店、房子、车子、乐器'
  },
  {
    name: '戌',
    wuXing: '阳土',
    yinYang: '阳',
    direction: '西偏北',
    weather: '云、阴天',
    color: '黄色',
    colorClass: 'border-t-4 border-yellow-500',
    headerClass: 'bg-yellow-600',
    concept: '欺诈、虚伪、虚耗、虚假、思考、空虚、伪装、虚幻、缥缈、茫然、不切合实际、深邃、精神、宗教',
    appearance: '方脸、眼泡大、嘴唇厚、手掌松软、皮肤干燥',
    personality: '慈祥、宽厚、态度安然',
    people: '军人、狱警、门卫、长者、教徒、猎人、恶人、黑社会、强盗、乞丐、善人、小孩、舅舅、妹妹、建筑者',
    bodyParts: '命门、膀胱、腿足、腹部、胃、脾、臀、胸',
    animals: '狗、豺、狼、鹰、大雁',
    plants: '红柳、甘草、枸杞、枣树、仙人掌、地黄等沙漠或抗旱的植物',
    objects: '服装、鞋履、刀剑、手铐、刑具、农具、钥匙、锁头、碾磨、瓦器、石块、出土文物、佛珠、坛子、坚硬之物、干燥之物、炉子、燥、变压器、瓷器、锁、药箱、钥匙、尸骨',
    geography: '高岗、高坡、山岭、寺观、学校、牢狱、冶炼厂、化工厂、堂屋、坟墓、墙垣'
  },
  {
    name: '亥',
    wuXing: '阴水',
    yinYang: '阴',
    direction: '北偏西',
    weather: '云、阴天',
    color: '黑色、蓝色',
    colorClass: 'border-t-4 border-blue-500',
    headerClass: 'bg-blue-600',
    concept: '惊讶、胆怯、流动、光明、召见、隐私、脏脏、偷盗、目眩、恍惚、困难、疑惑、争斗、沉溺、索取',
    appearance: '长脸、黑面、手脚也黑、大头',
    personality: '精神恍惚、神经衰弱、聪明伶俐、风流淫荡',
    people: '儿童、军人、酗酒人、乞丐、艺人、盗贼、产销饮品者、风流淫荡之人、下流之人、阴谋之人、哭泣之人、腹泻之人',
    bodyParts: '眼、头发、毛发、肾、膀胱、血液、体液、分泌物、肛门、脚',
    animals: '猪、熊、鱼虾等水中生长的动物',
    plants: '梅花、葫芦、水草、海带、荷花、水稻、菱角、芦苇等水中生长的植物',
    objects: '笔墨、布匹、毛皮、帐子、麻布、图画、幔帐、伞、雨具、斗笠、圆环、酱油、醋、糖、盐、饮料',
    geography: '庭院、菜园、墙角、低洼地、江河、湖海、仓库、寺院、楼台、饮料、酒厂、盐场、酱油厂、浴场等'
  }
]

const diZhiList = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

const currentRelation = ref('xing')
const activeNode = ref(null)

const relationLabels = {
  xing: '击刑',
  sheng: '相生',
  ke: '相克',
  chong: '相冲',
  hai: '相害',
  sanHe: '三合',
  po: '相破'
}

const relationStyles = {
  xing: {
    active: 'bg-red-600 text-white',
    inactive: 'bg-red-100 text-red-800',
    line: 'stroke-red-500'
  },
  sheng: {
    active: 'bg-green-600 text-white',
    inactive: 'bg-green-100 text-green-800',
    line: 'stroke-green-500'
  },
  ke: {
    active: 'bg-yellow-600 text-white',
    inactive: 'bg-yellow-100 text-yellow-800',
    line: 'stroke-yellow-500'
  },
  chong: {
    active: 'bg-blue-600 text-white',
    inactive: 'bg-blue-100 text-blue-800',
    line: 'stroke-blue-500'
  },
  hai: {
    active: 'bg-purple-600 text-white',
    inactive: 'bg-purple-100 text-purple-800',
    line: 'stroke-purple-500'
  },
  sanHe: {
    active: 'bg-indigo-600 text-white',
    inactive: 'bg-indigo-100 text-indigo-800',
    line: 'stroke-indigo-500'
  },
  po: {
    active: 'bg-gray-600 text-white',
    inactive: 'bg-gray-100 text-gray-800',
    line: 'stroke-gray-500'
  }
}

const diZhiRelations = {
  // 击刑关系
  xing: [
    {
      type: '无理之刑',
      pairs: ['子', '卯'],
      desc: '不讲道理，多因投资或桃色事件破财'
    },
    {
      type: '持势之刑',
      pairs: ['丑', '未', '戌'],
      desc: '依仗权势造成的伤害，多表现为窝火和赌气'
    },
    {
      type: '无恩之刑',
      pairs: ['寅', '巳', '申'],
      desc: '多恩将仇报，容易引起争斗、受伤'
    },
    {
      type: '自刑',
      pairs: ['辰'],
      desc: '因自己的原因而受到责罚，容易破财、犯错误'
    },
    {
      type: '自刑',
      pairs: ['午'],
      desc: '因自己的原因而受到责罚，容易破财、犯错误'
    },
    {
      type: '自刑',
      pairs: ['酉'],
      desc: '因自己的原因而受到责罚，容易破财、犯错误'
    },
    {
      type: '自刑',
      pairs: ['亥'],
      desc: '因自己的原因而受到责罚，容易破财、犯错误'
    }
  ],

  // 相生关系
  sheng: [
    {
      from: ['寅', '卯'],
      to: ['巳', '午'],
      desc: '木生火'
    },
    {
      from: ['巳', '午'],
      to: ['辰', '戌', '丑', '未'],
      desc: '火生土'
    },
    {
      from: ['辰', '戌', '丑', '未'],
      to: ['申', '酉'],
      desc: '土生金'
    },
    {
      from: ['申', '酉'],
      to: ['亥', '子'],
      desc: '金生水'
    },
    {
      from: ['亥', '子'],
      to: ['寅', '卯'],
      desc: '水生木'
    }
  ],

  // 相克关系
  ke: [
    {
      from: ['申', '酉'],
      to: ['寅', '卯'],
      desc: '金克木'
    },
    {
      from: ['寅', '卯'],
      to: ['辰', '戌', '丑', '未'],
      desc: '木克土'
    },
    {
      from: ['辰', '戌', '丑', '未'],
      to: ['亥', '子'],
      desc: '土克水'
    },
    {
      from: ['亥', '子'],
      to: ['巳', '午'],
      desc: '水克火'
    },
    {
      from: ['巳', '午'],
      to: ['申', '酉'],
      desc: '火克金'
    }
  ],

  // 相冲关系
  chong: [
    { pairs: ['子', '午'], desc: '子午相冲，主身心不安、出行、变化、财产耗散' },
    { pairs: ['丑', '未'], desc: '丑未相冲，主身心不安、出行、变化、财产耗散' },
    { pairs: ['寅', '申'], desc: '寅申相冲，主身心不安、出行、变化、财产耗散' },
    { pairs: ['卯', '酉'], desc: '卯酉相冲，主身心不安、出行、变化、财产耗散' },
    { pairs: ['辰', '戌'], desc: '辰戌相冲，主身心不安、出行、变化、财产耗散' },
    { pairs: ['巳', '亥'], desc: '巳亥相冲，主身心不安、出行、变化、财产耗散' }
  ],

  // 相害关系
  hai: [
    { pairs: ['子', '未'], desc: '子未相害，测婚可能有第三者插足' },
    { pairs: ['丑', '午'], desc: '丑午相害，测婚可能有第三者插足' },
    { pairs: ['寅', '巳'], desc: '寅巳相害，测婚可能有第三者插足' },
    { pairs: ['卯', '辰'], desc: '卯辰相害，测婚可能有第三者插足' },
    { pairs: ['申', '亥'], desc: '申亥相害，测婚可能有第三者插足' },
    { pairs: ['酉', '戌'], desc: '酉戌相害，测婚可能有第三者插足' }
  ],

  // 三合关系
  sanHe: [
    {
      group: ['申', '子', '辰'],
      ma: '寅',
      desc: '水局三合，马星在寅，主事业、财运、学业、考试的变动'
    },
    {
      group: ['亥', '卯', '未'],
      ma: '巳',
      desc: '木局三合，马星在巳，主人际、感情、婚姻、子女的变动'
    },
    {
      group: ['寅', '午', '戌'],
      ma: '申',
      desc: '火局三合，马星在申，主事业、名誉、官运、权力的变动'
    },
    {
      group: ['巳', '酉', '丑'],
      ma: '亥',
      desc: '金局三合，马星在亥，主财运、投资、生意、收益的变动'
    }
  ],

  // 相破关系
  po: [
    { pairs: ['子', '酉'], desc: '子酉相破，主事物破坏、关系破裂' },
    { pairs: ['丑', '辰'], desc: '丑辰相破，主事物破坏、关系破裂' },
    { pairs: ['寅', '亥'], desc: '寅亥相破，主事物破坏、关系破裂' },
    { pairs: ['卯', '午'], desc: '卯午相破，主事物破坏、关系破裂' },
    { pairs: ['巳', '申'], desc: '巳申相破，主事物破坏、关系破裂' },
    { pairs: ['未', '戌'], desc: '未戌相破，主事物破坏、关系破裂' }
  ]
}

// 获取节点样式
const getNodeClass = (zhi) => {
  const baseClass = 'text-sm font-medium'
  const wuXing = diZhiDetails.find(d => d.name === zhi)?.wuXing
  
  if (wuXing?.includes('木')) return `${baseClass} bg-green-100 text-green-800`
  if (wuXing?.includes('火')) return `${baseClass} bg-red-100 text-red-800`
  if (wuXing?.includes('土')) return `${baseClass} bg-yellow-100 text-yellow-800`
  if (wuXing?.includes('金')) return `${baseClass} bg-gray-100 text-gray-800`
  if (wuXing?.includes('水')) return `${baseClass} bg-blue-100 text-blue-800`
  
  return baseClass
}

// 计算当前显示的连线
const currentLines = computed(() => {
  const lines = []
  const radius = 230
  const centerX = 250
  const centerY = 250

  // 获取节点坐标的辅助函数
  const getNodePosition = (index) => {
    const angle = index * Math.PI / 6 - Math.PI / 2
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    }
  }

  // 确保当前关系类型存在
  const relations = diZhiRelations[currentRelation.value] || []
  
  // 处理三合关系的特殊情况
  if (currentRelation.value === 'sanHe') {
    relations.forEach(relation => {
      const group = relation.group
      // 连接三合关系中的三个地支
      for (let i = 0; i < group.length; i++) {
        const zhi1 = group[i]
        const zhi2 = group[(i + 1) % group.length]
        const index1 = diZhiList.indexOf(zhi1)
        const index2 = diZhiList.indexOf(zhi2)
        const pos1 = getNodePosition(index1)
        const pos2 = getNodePosition(index2)

        lines.push({
          id: `sanHe-${zhi1}-${zhi2}`,
          x1: pos1.x,
          y1: pos1.y,
          x2: pos2.x,
          y2: pos2.y,
          class: `${relationStyles.sanHe.line} opacity-50`,
          hasArrow: false
        })
      }
    })
  } else {
    // 处理其他关系
    relations.forEach((relation, index) => {
      if (relation.pairs) {
        // 处理配对关系（如相冲、相害等）
        const pairs = Array.isArray(relation.pairs) ? relation.pairs : [relation.pairs]
        for (let i = 0; i < pairs.length - 1; i++) {
          const zhi1 = pairs[i]
          const zhi2 = pairs[i + 1]
          const index1 = diZhiList.indexOf(zhi1)
          const index2 = diZhiList.indexOf(zhi2)
          const pos1 = getNodePosition(index1)
          const pos2 = getNodePosition(index2)

          lines.push({
            id: `${currentRelation.value}-${index}-${i}`,
            x1: pos1.x,
            y1: pos1.y,
            x2: pos2.x,
            y2: pos2.y,
            class: relationStyles[currentRelation.value].line,
            hasArrow: false
          })
        }
      } else if (relation.from && relation.to) {
        // 处理有方向的关系（如相生、相克）
        relation.from.forEach(fromZhi => {
          relation.to.forEach(toZhi => {
            const index1 = diZhiList.indexOf(fromZhi)
            const index2 = diZhiList.indexOf(toZhi)
            const pos1 = getNodePosition(index1)
            const pos2 = getNodePosition(index2)

            lines.push({
              id: `${currentRelation.value}-${fromZhi}-${toZhi}`,
              x1: pos1.x,
              y1: pos1.y,
              x2: pos2.x,
              y2: pos2.y,
              class: relationStyles[currentRelation.value].line,
              hasArrow: true
            })
          })
        })
      }
    })
  }

  return lines
})

// 添加马星关系数据
const maXingRelations = {
  // 三合局的马星
  sanHe: [
    {
      group: ['申', '子', '辰'],
      ma: '寅',
      desc: '水局三合，马星在寅，主事业、财运、学业、考试的变动'
    },
    {
      group: ['亥', '卯', '未'],
      ma: '巳',
      desc: '木局三合，马星在巳，主人际、感情、婚姻、子女的变动'
    },
    {
      group: ['寅', '午', '戌'],
      ma: '申',
      desc: '火局三合，马星在申，主事业、名誉、官运、权力的变动'
    },
    {
      group: ['巳', '酉', '丑'],
      ma: '亥',
      desc: '金局三合，马星在亥，主财运、投资、生意、收益的变动'
    }
  ],
  // 马星的一般含义
  meaning: '马星表示人和事物有动态的信息，有快的含义。在预测时，主奔波、走动、外出、旅行、出差、搬家、转职等与移动有关的事项。',
  // 马星的特殊作用
  specialEffects: [
    '用神处沐浴桃花状态临马星时，桃花运来得快',
    '用神处禄地（临官）临马星时，财来得快',
    '日干临马星，变动事、调动事、外出事来得快'
  ]
}
</script>

<style scoped>
.relation-line {
  pointer-events: none;
  transition: all 0.3s ease;
}
</style> 