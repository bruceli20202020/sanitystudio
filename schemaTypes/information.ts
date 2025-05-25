export default {
  name: 'information',
  title: '公司信息',
  type: 'document',
  fields: [
    // 公司介绍
    { name: 'companyIntro_zh', title: '公司介绍（中文）', type: 'text' },
    { name: 'companyIntro_en', title: '公司介绍（英文）', type: 'text' },
    { name: 'companyIntro_de', title: '公司介绍（德文）', type: 'text' },

    // 发展历程
    { name: 'companyHistory_zh', title: '发展历程（中文）', type: 'text' },
    { name: 'companyHistory_en', title: '发展历程（英文）', type: 'text' },
    { name: 'companyHistory_de', title: '发展历程（德文）', type: 'text' },

    // 电话、邮箱、地址（通常无需多语言，但如需可加）
    { name: 'phone', title: '电话', type: 'string' },
    { name: 'email', title: '邮箱', type: 'string' },
    { name: 'address_zh', title: '地址（中文）', type: 'string' },
    { name: 'address_en', title: '地址（英文）', type: 'string' },
    { name: 'address_de', title: '地址（德文）', type: 'string' },

    // 监管公告
    { name: 'regulatoryNotice_zh', title: '监管公告（中文）', type: 'text' },
    { name: 'regulatoryNotice_en', title: '监管公告（英文）', type: 'text' },
    { name: 'regulatoryNotice_de', title: '监管公告（德文）', type: 'text' },

    // 法律声明
    { name: 'legalStatement_zh', title: '法律声明（中文）', type: 'text' },
    { name: 'legalStatement_en', title: '法律声明（英文）', type: 'text' },
    { name: 'legalStatement_de', title: '法律声明（德文）', type: 'text' },

    // Cookie政策
    { name: 'cookiesPolicy_zh', title: 'Cookie政策（中文）', type: 'text' },
    { name: 'cookiesPolicy_en', title: 'Cookie政策（英文）', type: 'text' },
    { name: 'cookiesPolicy_de', title: 'Cookie政策（德文）', type: 'text' },

    // 隐私政策
    { name: 'privacyPolicy_zh', title: '隐私政策（中文）', type: 'text' },
    { name: 'privacyPolicy_en', title: '隐私政策（英文）', type: 'text' },
    { name: 'privacyPolicy_de', title: '隐私政策（德文）', type: 'text' },
  ],
};