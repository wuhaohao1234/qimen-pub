<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">九星</h1>
    
    <!-- 概述部分 -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">九星概述</h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p class="text-gray-600 leading-relaxed">
          九星为天盘，代表人的先天秉性、长相及脾气性格。九星的旺相休囚废反映被预测人是否得天时（时间、政策、大趋向、人生际遇等因素）。
          临吉星旺相为最好，而凶星越衰是越不利。九星一般反映事物最初成像的情况，事情开始的原因等。
        </p>
        
        <!-- 九星分类 -->
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-medium text-green-800 mb-2">四吉星</h3>
            <p class="text-sm text-green-600">天心星、天禽星、天辅星、天任星</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h3 class="font-medium text-yellow-800 mb-2">次吉/中平</h3>
            <p class="text-sm text-yellow-600">天冲星（次吉）、天英星（中平）</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h3 class="font-medium text-red-800 mb-2">三凶星</h3>
            <p class="text-sm text-red-600">天蓬星、天芮星、天柱星</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 九星详情 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="star in jiuXing" 
           :key="star.name"
           class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div :class="[
          'px-6 py-4',
          {
            'bg-green-600': star.nature === '吉星',
            'bg-yellow-600': star.nature === '中平',
            'bg-red-600': star.nature === '凶星'
          }
        ]">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-bold text-white">{{ star.name }}</h3>
            <span class="px-2 py-1 rounded text-sm font-medium bg-white" 
                  :class="{
                    'text-green-600': star.nature === '吉星',
                    'text-yellow-600': star.nature === '中平',
                    'text-red-600': star.nature === '凶星'
                  }">
              {{ star.rank }}
            </span>
          </div>
        </div>
        
        <div class="p-6 space-y-4">
          <!-- 基本描述 -->
          <div>
            <h4 class="font-medium text-gray-900 mb-2">基本特征</h4>
            <p class="text-gray-700">{{ star.description }}</p>
          </div>

          <!-- 性格与外貌 -->
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">性格与外貌</h4>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-sm"><span class="font-medium">性格：</span>{{ star.characteristics.personality }}</p>
              <p class="text-sm mt-1"><span class="font-medium">外貌：</span>{{ star.characteristics.appearance }}</p>
              <p class="text-sm mt-1 text-red-600"><span class="font-medium">衰弱时：</span>{{ star.characteristics.weakened }}</p>
            </div>
          </div>

          <!-- 影响效果 -->
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">影响效果</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-green-50 p-3 rounded">
                <h5 class="text-sm font-medium text-green-800 mb-1">有利影响</h5>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li v-if="typeof star.effects.positive === 'string'">{{ star.effects.positive }}</li>
                  <li v-else v-for="(effect, idx) in star.effects.positive" 
                      :key="idx">{{ effect }}</li>
                </ul>
              </div>
              <div class="bg-red-50 p-3 rounded">
                <h5 class="text-sm font-medium text-red-800 mb-1">不利影响</h5>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li v-if="typeof star.effects.negative === 'string'">{{ star.effects.negative }}</li>
                  <li v-else v-for="(effect, idx) in star.effects.negative" 
                      :key="idx">{{ effect }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const jiuXing = [
  {
    name: '天心星',
    nature: '吉星',
    rank: '上吉',
    description: '代表心智、谋略、智慧，为武曲星，与西北方六宫乾卦相对应',
    characteristics: {
      personality: '多才多艺、有心计，做事周全，心高气傲、正直、善良，聪明能干、精明机智、有领导才能、乐善好施',
      appearance: '圆形、高大、威严、雄伟，貌美清秀、皮肤较白',
      weakened: '歪心眼多、工于心计，阴险、城府深'
    },
    effects: {
      positive: [
        '有管理能力',
        '能治病救人',
        '策划周密',
        '进退自如',
        '能惩恶助善'
      ],
      negative: '衰弱时心机过重'
    },
    represents: {
      people: [
        '领导',
        '管理人员',
        '指挥人员',
        '医生',
        '医药从业者',
        '参谋助手',
        '医卜星象之人',
        '核心人物'
      ],
      bodyParts: ['头', '心脏', '肺', '肠', '骨骼'],
      animals: ['马', '猪', '狗', '狮子', '老虎', '熊', '天鹅', '鲸鱼'],
      plants: ['菊花', '果树', '大树', '桔子', '草药'],
      objects: ['影壁', '金银珠宝', '神像', '佛像', '铁器', '金属器皿'],
      places: [
        '高亢之所',
        '领导办公室',
        '珠宝店',
        '影碑墙',
        '堂屋',
        '马路',
        '塔',
        '郊野',
        '大平原',
        '教堂',
        '寺院'
      ],
      weather: ['冰雹', '雷电', '赤霞', '白气', '霜', '雪'],
      colors: ['白色', '金色']
    },
    suitable: [
      '治病服药',
      '练气功',
      '经商',
      '迁徙',
      '埋葬'
    ],
    seasonality: {
      good: ['秋', '冬'],
      bad: ['春', '夏']
    }
  },
  {
    name: '天蓬星',
    nature: '凶星',
    rank: '大凶',
    description: '原名贪狼星，与北方一宫坎卦相对应，为水贼之星',
    characteristics: {
      personality: '敢冒险、敢作敢为，胆大妄为、机智过人、圆融果敢、贪婪、喜欢暗中行事、多情多欲、贪酒恋花',
      appearance: '浓眉、脸微黑、络腮胡子，庄严、威猛、彪悍、精干',
      weakened: '游荡之人、胆大好色'
    },
    effects: {
      positive: '能做大事情',
      negative: [
        '经商破财',
        '出行遇盗',
        '宜安分守己'
      ]
    },
    represents: {
      people: [
        '妓女',
        '盗贼',
        '乞丐',
        '头发蓬松的人',
        '黑社会',
        '猎鱼者',
        '大企业家',
        '风险投资人'
      ],
      bodyParts: [
        '耳',
        '肾',
        '膀胱',
        '生殖系统',
        '排泄系统',
        '头发',
        '眼睛',
        '足部'
      ],
      animals: [
        '猪',
        '鼠',
        '蝙蝠',
        '多毛多厚的动物',
        '水生物'
      ],
      plants: [
        '磨菇类',
        '菌类植物',
        '树冠大的树',
        '大叶植物',
        '蓬草类',
        '水果',
        '蔬菜',
        '水中生长的植物'
      ],
      objects: ['伞', '雨具', '渔具', '船', '车'],
      places: [
        '宫殿',
        '亭子',
        '庙宇',
        '茅屋',
        '简陋的房屋',
        '四面通风的房子',
        '破了门窗的房子',
        '房顶',
        '三角状的建筑',
        '桥'
      ],
      weather: ['阴天', '雨天', '多云', '黑夜', '冬天'],
      colors: ['黑色', '蓝色', '玄色']
    },
    unsuitable: [
      '嫁娶',
      '营造',
      '搬迁'
    ],
    seasonality: {
      good: ['春', '夏'],
      bad: ['秋', '冬']
    }
  },
  {
    name: '天任星',
    nature: '吉星',
    rank: '小吉',
    description: '代表宽容、任劳任怨',
    characteristics: {
      personality: '为人厚道、宽容心强，做事任劳任怨',
      appearance: '身材矮胖、或有点驼背、面色发黄、相貌平平',
      weakened: '任性、固执'
    },
    effects: {
      positive: [
        '经商嫁娶皆吉',
        '百事顺遂'
      ],
      negative: '衰弱时过于固执'
    }
  },
  {
    name: '天冲星',
    nature: '吉星',
    rank: '次吉',
    description: '代表行动、冲劲、助人',
    characteristics: {
      personality: '做事雷厉风行，敢说敢干，大慈大悲、助人为乐',
      appearance: '个高好动、声音洪亮、语速快',
      weakened: '鲁莽，爱冲动'
    },
    effects: {
      positive: [
        '宜于出征交战',
        '摇旗呐喊'
      ],
      negative: '衰弱时冲动莽撞'
    }
  },
  {
    name: '天辅星',
    nature: '吉星',
    rank: '上吉',
    description: '代表文化、知识、涵养',
    characteristics: {
      personality: '文化程度高、有涵养、文雅，知识渊博、言行高雅',
      appearance: '身材高挑、才貌出众，说话柔声细语',
      weakened: '为学究、没主见或有隐藏之事'
    },
    effects: {
      positive: [
        '百事皆宜',
        '宜升学考官',
        '发展文化教育事业'
      ],
      negative: '衰弱时过于书生气'
    }
  },
  {
    name: '天英星',
    nature: '中平',
    rank: '中平',
    description: '代表名望、策略、光明',
    characteristics: {
      personality: '有名望，要面子，做事光明磊落',
      appearance: '面色微红、声音响亮，有的面部有雀斑或麻点',
      weakened: '办事急躁、脾气暴烈'
    },
    effects: {
      positive: [
        '宜于谋划策略',
        '面君竭贵'
      ],
      negative: [
        '不宜求财嫁娶',
        '衰弱时性急暴躁'
      ]
    }
  },
  {
    name: '天芮星',
    nature: '凶星',
    rank: '大凶',
    description: '代表学习、思考、交友',
    characteristics: {
      personality: '爱学习，善于思考，爱结交朋友',
      appearance: '身材矮胖、面色发黑或有黑痣斑点，容貌较丑',
      weakened: '贪婪或身体有病'
    },
    effects: {
      positive: '善于学习思考',
      negative: [
        '不宜主动谋吉事',
        '只宜坐待时机'
      ]
    }
  },
  {
    name: '天禽星',
    nature: '吉星',
    rank: '上吉',
    description: '代表稳重、正直、规矩',
    characteristics: {
      personality: '处事稳重、正直大方、有帅才、循规蹈矩、为人诚信',
      appearance: '面貌端庄秀丽，脸型为方脸型或圆脸型',
      weakened: '死板、办事缺乏灵活性'
    },
    effects: {
      positive: '百事皆吉',
      negative: '衰弱时过于死板'
    }
  },
  {
    name: '天柱星',
    nature: '凶星',
    rank: '小凶',
    description: '代表言辩、独立、叛逆',
    characteristics: {
      personality: '能言善辩，为中流砥柱，能独当一面',
      appearance: '面白清瘦、俊丽，嘴巴灵巧或声音突出，旺则骨架宽大',
      weakened: '性格叛逆'
    },
    effects: {
      positive: '能言善辩',
      negative: [
        '有意外伤灾',
        '官司牵连',
        '求财赔本',
        '出征远行车破马伤',
        '宜固守本分'
      ]
    }
  }
]

// 添加九星的关系数据
const starRelations = {
  complementary: [
    { stars: ['天心', '天辅'], desc: '天辅星主文化，天心星主应用。天辅为谋士，天心为领导' },
    { stars: ['天蓬', '天芮'], desc: '同为凶星，一主动一主静' },
    { stars: ['天冲', '天柱'], desc: '一主进取，一主守成' }
  ],
  opposing: [
    { stars: ['天心', '天蓬'], desc: '正邪对立' },
    { stars: ['天辅', '天芮'], desc: '文化与病患对立' }
  ]
}

// 添加九星的变化规律
const starChanges = {
  daily: '九星随时辰变化，每时辰不同',
  monthly: '九星随月令变化，有固定规律',
  yearly: '九星随年份变化，影响全年大运'
}
</script> 