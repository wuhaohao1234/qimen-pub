<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">八神</h1>
    
    <!-- 概述部分 -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">八神概述</h2>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p class="text-gray-600 leading-relaxed">
          八神又称八将、八诈门，是奇门遁甲中的神盘，代表神助。是古人在天人感应中发现的与九宫八卦具有相对应性质的八种神秘的自然力量，
          现代有人称之为暗物质、信息波等，对事物的发生及过程结果有着一定的影响。
        </p>
      </div>
    </div>

    <!-- 八神列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="shen in baShen" :key="shen.名称" 
           class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900">
            {{ shen.名称 }}
            <span class="ml-2 text-sm text-gray-500">({{ shen.五行 }})</span>
          </h3>
          <div class="mt-4 space-y-4">
            <p class="text-sm text-gray-600">{{ shen.描述 }}</p>
            <div class="border-t border-gray-200 pt-4">
              <h4 class="font-medium text-gray-900 mb-2">主要特征：</h4>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li v-for="trait in shen.特征" :key="trait">{{ trait }}</li>
              </ul>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <h4 class="font-medium text-gray-900 mb-2">表征物品：</h4>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li v-for="item in shen.物品" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <h4 class="font-medium text-gray-900 mb-2">表征人物：</h4>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li v-for="person in shen.人物" :key="person">{{ person }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 八神与日干配合 -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-xl font-semibold text-gray-900">八神与日干配合</h2>
      </div>
      <div class="border-t border-gray-200">
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(rule, index) in 日干配合规则" :key="index"
                 class="bg-gray-50 rounded-lg p-4">
              <h3 class="font-medium text-gray-900 mb-2">{{ rule.title }}</h3>
              <p class="text-sm text-gray-600">{{ rule.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const baShen = [
  {
    名称: '值符',
    五行: '土',
    描述: '值符又称天乙贵人，显示物品的高贵、高价和稀有；显示人的高尚、显赫和权力。',
    特征: [
      '器宇轩昂',
      '领导才能',
      '组织能力强',
      '处事大度',
      '平安吉祥',
      '逢凶化吉'
    ],
    物品: [
      '贵重物品',
      '稀有物品',
      '高档用品',
      '权力象征物'
    ],
    人物: [
      '领导干部',
      '贵人',
      '有影响力的人',
      '团队领袖'
    ]
  },
  {
    名称: '螣蛇',
    五行: '火',
    描述: '显示物品的花纹、柔软和光亮；显示人的狡诈、善变和缠绵。',
    特征: [
      '虚诈',
      '狡诈',
      '易变化',
      '不诚信',
      '忧疑惊恐',
      '宗教信仰'
    ],
    物品: [
      '花纹物品',
      '柔软物品',
      '光亮物品',
      '宗教用品'
    ],
    人物: [
      '宗教人士',
      '善变之人',
      '不诚信者',
      '精神异常者'
    ]
  },
  {
    名称: '太阴',
    五行: '阴金',
    描述: '显示物品的精致、细腻和缜密；显示人的文静、贤惠和忧愁。',
    特征: [
      '爱思考',
      '细致缜密',
      '喜暗中行事',
      '爱情专一',
      '婚姻美满',
      '易犯小人'
    ],
    物品: [
      '精致物品',
      '细腻物品',
      '隐蔽物品',
      '女性用品'
    ],
    人物: [
      '贤惠女性',
      '文静之人',
      '谋士',
      '策划者'
    ]
  },
  {
    名称: '六合',
    五行: '木',
    描述: '显示物品的数量、相连和状态；显示人的和蔼、慈祥和乐观。',
    特征: [
      '善于待人接物',
      '开朗平和',
      '善于谈判',
      '处事圆滑',
      '八面玲珑',
      '利于合作'
    ],
    物品: [
      '成对物品',
      '连接物品',
      '婚嫁用品',
      '谈判工具'
    ],
    人物: [
      '中介人',
      '谈判者',
      '和事佬',
      '圆滑之人'
    ]
  },
  {
    名称: '白虎',
    五行: '金',
    描述: '显示物品的锐利、坚硬和危险；显示人的坚强、凶恶和威严。',
    特征: [
      '脾气直爽',
      '有能力',
      '性格凶猛',
      '好斗',
      '防打斗',
      '防事故'
    ],
    物品: [
      '锐利物品',
      '坚硬物品',
      '危险物品',
      '武器装备'
    ],
    人物: [
      '警察',
      '军人',
      '执法者',
      '强势人物'
    ]
  },
  {
    名称: '玄武',
    五行: '水',
    描述: '显示物品的伪劣、假冒和伪装；显示人的假象、谎言和贼性。',
    特征: [
      '聪敏',
      '贪婪',
      '风流',
      '虚诈',
      '不诚信',
      '欺骗'
    ],
    物品: [
      '伪劣商品',
      '假冒物品',
      '伪装用品',
      '偷盗工具'
    ],
    人物: [
      '小偷',
      '骗子',
      '不诚信者',
      '投机分子'
    ]
  },
  {
    名称: '九地',
    五行: '阳土',
    描述: '显示物品的稳定、稳固和长久；显示人的宽厚、包容和吝啬。',
    特征: [
      '做事沉稳',
      '持之以恒',
      '包容',
      '固执',
      '内向',
      '办事拖拉'
    ],
    物品: [
      '稳固物品',
      '耐用物品',
      '储存物品',
      '隐藏物品'
    ],
    人物: [
      '稳重之人',
      '固执之人',
      '内向之人',
      '吝啬之人'
    ]
  },
  {
    名称: '九天',
    五行: '阳金',
    描述: '显示物品的高大、雄伟和庄严；显示人的理想、目标和志向。',
    特征: [
      '性格外向',
      '远大抱负',
      '积极进取',
      '敢作敢为',
      '好高骛远',
      '做事浮躁'
    ],
    物品: [
      '高大物品',
      '雄伟建筑',
      '庄严物品',
      '军事装备'
    ],
    人物: [
      '理想主义者',
      '军事人员',
      '开拓者',
      '激进分子'
    ]
  }
]

const 日干配合规则 = [
  {
    title: '日干临值符',
    content: '表明被预测人器宇轩昂、具有领导才能，或有贵人帮助，组织能力强、团队作用发挥的好、处事大度。'
  },
  {
    title: '日干临螣蛇',
    content: '主虚诈、狡诈、诡诈、假话，易变化、不诚信、忧疑惊恐，又指被事情缠绕。有时也表示此人有宗教信仰。'
  },
  {
    title: '日干临太阴',
    content: '格局吉则有贵人相助，爱思考、利策划、细致缜密。测婚姻临此符号的人爱情专一、婚姻美满。'
  },
  {
    title: '日干临六合',
    content: '善于待人接物，开朗平和、利于攻关谈判、处事圆滑。主多种可能性，也是婚姻的代表符号。'
  },
  {
    title: '日干临白虎',
    content: '格局吉，主脾气直爽、有能力、性格凶猛好斗。需防打斗、交通事故、疾病刑伤。'
  },
  {
    title: '日干临玄武',
    content: '主暧昧、投机事。格局吉，主聪敏。格局凶，主贪婪、风流、虚诈、不诚信、欺骗。'
  },
  {
    title: '日干临九地',
    content: '格局吉则做事沉稳、持之以恒、包容。格局差，主消极、停顿、慢慢悠悠、固执、内向、办事拖拉。'
  },
  {
    title: '日干临九天',
    content: '性格外向。格局吉主有远大抱负、理想，开拓进取。格局凶，则好高骛远、做事浮躁。'
  }
]
</script> 