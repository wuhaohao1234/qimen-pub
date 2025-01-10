<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h3 class="text-2xl font-semibold mb-6 text-center">五行详解</h3>
    <div class="space-y-8">
      <div v-for="element in wuXingDetails" 
           :key="element.name" 
           :class="['bg-white rounded-lg shadow-md overflow-hidden', element.colorClass]">
        <div :class="['px-6 py-4', element.headerClass]">
          <div class="flex items-center space-x-3">
            <i :class="[element.icon, 'text-2xl']"></i>
            <h4 class="text-xl font-bold text-white">{{ element.name }}行</h4>
          </div>
        </div>

        <div class="p-6">
          <!-- 基本信息部分 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <!-- 基本属性 -->
            <div class="space-y-2">
              <h5 class="font-semibold border-b pb-2">基本属性</h5>
              <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div class="text-gray-600">方位：</div>
                <div>{{ element.direction }}</div>
                <div class="text-gray-600">季节：</div>
                <div>{{ element.season }}</div>
                <div class="text-gray-600">数字：</div>
                <div>{{ element.numbers }}</div>
                <div class="text-gray-600">颜色：</div>
                <div>{{ element.color }}</div>
                <div class="text-gray-600">味道：</div>
                <div>{{ element.taste }}</div>
                <div class="text-gray-600">五常：</div>
                <div>{{ element.virtue }}</div>
              </div>
            </div>

            <!-- 奇门属性 -->
            <div class="space-y-2">
              <h5 class="font-semibold border-b pb-2">奇门属性</h5>
              <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div class="text-gray-600">宫位：</div>
                <div>{{ element.palace }}</div>
                <div class="text-gray-600">九星：</div>
                <div>{{ element.stars }}</div>
                <div class="text-gray-600">八门：</div>
                <div>{{ element.doors }}</div>
                <div class="text-gray-600">天干：</div>
                <div>{{ element.heavenlyStems }}</div>
                <div class="text-gray-600">地支：</div>
                <div>{{ element.earthlyBranches }}</div>
              </div>
            </div>

            <!-- 人物特征 -->
            <div class="space-y-2">
              <h5 class="font-semibold border-b pb-2">人物特征</h5>
              <p class="text-sm">{{ element.characteristics }}</p>
            </div>
          </div>

          <!-- 行业和性质 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <h5 class="font-semibold border-b pb-2">相关行业</h5>
              <p class="text-sm">{{ element.industries }}</p>
            </div>
            <div class="space-y-2">
              <h5 class="font-semibold border-b pb-2">性质特点</h5>
              <p class="text-sm">{{ element.nature }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const wuXingDetails = [
  {
    name: '木',
    icon: 'fas fa-tree',
    colorClass: 'border-t-4 border-green-500',
    headerClass: 'bg-green-600 text-white',
    direction: '东方',
    season: '春季（寅卯辰月）',
    numbers: '三、八',
    color: '绿色、青色',
    taste: '酸',
    virtue: '仁',
    palace: '震巽两宫',
    stars: '天冲星、天辅星',
    doors: '伤门、杜门',
    heavenlyStems: '甲、乙',
    earthlyBranches: '寅、卯',
    characteristics: '面貌修长、眉清目秀、肤色清白、坐立身多倚侧、说话畅快、声调高。主人性情仁慈、忠厚、理智、有主见，举止稳重端庄、潇洒。',
    industries: '种植业、医药、文教、印刷、纸张、书籍、木材、园艺、司法、布匹、纺织、装饰、装潢',
    nature: '名曰曲直，能屈能伸之意，具有生发、条达的特性，反映了事物曲直向上的过程。对应人体：肝胆、四肢、毛发、神经系统等。气候：主风。'
  },
  {
    name: '火',
    icon: 'fas fa-fire',
    colorClass: 'border-t-4 border-red-500',
    headerClass: 'bg-red-600 text-white',
    direction: '南方',
    season: '夏季（巳午未月）',
    numbers: '二、七',
    color: '赤色、红色',
    taste: '苦',
    virtue: '礼',
    palace: '离宫',
    stars: '天英星',
    doors: '景门',
    heavenlyStems: '丙、丁',
    earthlyBranches: '巳、午',
    characteristics: '面貌上尖下阔、肉多、印堂窄。多动少静、肤色红黄、话多语快。性格热情、奔放、活跃、开朗大方、作风严谨、有奋发精神、尊长爱幼、有创造力、爱打扮。',
    industries: '美容化妆、照明灯饰、电子电器、易燃品、加油站、高温行业、消防、摄影、化工',
    nature: '名曰炎上，具有火热、向上、发光、温暖的特征。对应人体：心脏、血液循环系统。气候：主热。'
  },
  {
    name: '土',
    icon: 'fas fa-mountain',
    colorClass: 'border-t-4 border-yellow-500',
    headerClass: 'bg-yellow-600 text-white',
    direction: '中央',
    season: '四季末月（辰、戌、丑、未）',
    numbers: '五、十',
    color: '黄色',
    taste: '甜',
    virtue: '信',
    palace: '艮中坤三宫',
    stars: '天任星、天芮星、天禽星',
    doors: '生门、死门',
    heavenlyStems: '戊、己',
    earthlyBranches: '辰、戌、丑、未',
    characteristics: '鼻子肉多、口方、头圆面阔、声音重浊、多静少动、举止缓慢、话语迟钝。性格诚实、守信、踏实认真、主静、有信仰、忠厚、朴实、心胸宽广、安静耐心。',
    industries: '土地种植、养殖、矿产、房地产、建筑、水泥、石器、丧葬、基础设施、建筑材料',
    nature: '名曰稼穑，具有生化万物、长养、化育的特性。对应人体：脾胃、皮肤、肌肉。具有养育、包容、慈爱的特性。'
  },
  {
    name: '金',
    icon: 'fas fa-coins',
    colorClass: 'border-t-4 border-gray-500',
    headerClass: 'bg-gray-600 text-white',
    direction: '西方',
    season: '秋季（申酉戌月）',
    numbers: '四、九',
    color: '白色',
    taste: '辛',
    virtue: '义',
    palace: '乾兑两宫',
    stars: '天柱星、天心星',
    doors: '开门、惊门',
    heavenlyStems: '庚、辛',
    earthlyBranches: '申、酉',
    characteristics: '皮肤白皙、眉目英俊、圆脸尖下巴、鼻直口正、说话清亮、骨肉匀称、多短发、胡须少。性格果断、勇敢、坚韧、客观、冷静，多才多艺、好酒好饮、宁折不弯、仗义、通情达理。',
    industries: '金属器材、冶炼、金银珠宝、金融、铸造、钟表、钢铁、汽车',
    nature: '名曰从革，具有清净收杀、变革的特性。对应人体：肺、呼吸系统、骨骼。气候：主燥。'
  },
  {
    name: '水',
    icon: 'fas fa-water',
    colorClass: 'border-t-4 border-blue-500',
    headerClass: 'bg-blue-600 text-white',
    direction: '北方',
    season: '冬季（亥子丑月）',
    numbers: '一、六',
    color: '黑色',
    taste: '咸',
    virtue: '智',
    palace: '坎宫',
    stars: '天蓬星',
    doors: '休门',
    heavenlyStems: '壬、癸',
    earthlyBranches: '亥、子',
    characteristics: '皮肤黑细、圆脸、瘦肩、骨骼不壮，身体柔弱、眉清目秀、大眼睛、语调清和、抑扬顿挫。性格聪明、灵活、善变、流动、胆大、智慧、胸怀广阔、目光远大、学识俱佳。',
    industries: '水产、餐饮、运输、娱乐界、渔业、水利、旅游、服务性行业、商业',
    nature: '名曰润下，具有滋润万物、寒冷向下的特性。对应人体：肾脏、泌尿系统、耳朵。气候：主寒。'
  }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 