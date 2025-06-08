export default {
  name: 'information',
  title: '公司信息',
  type: 'document',
  fields: [
    // 网站标题
    { name: 'webtitle', title: '标题栏标题', type: 'string' },
    
    // banner图标题（多语言）
    { name: 'bannerTitle', title: 'banner图标题（中文）', type: 'string' },
    { name: 'bannerTitle_en', title: 'banner图标题（英文）', type: 'string' },
    { name: 'bannerTitle_de', title: 'banner图标题（德文）', type: 'string' },
    
    // 段落总标题（多语言）
    { name: 'sectionTitle', title: '段落总标题（中文）', type: 'string' },
    { name: 'sectionTitle_en', title: '段落总标题（英文）', type: 'string' },
    { name: 'sectionTitle_de', title: '段落总标题（德文）', type: 'string' },
    
    // 段落1（多语言）
    { name: 'sec1_title', title: '段落1标题（中文）', type: 'string' },
    { name: 'sec1_desc', title: '段落1描述（中文）', type: 'text' },
    { name: 'sec1_hoverdesc', title: '段落1详细信息（中文）', type: 'text' },
    { name: 'sec1_title_en', title: '段落1标题（英文）', type: 'string' },
    { name: 'sec1_desc_en', title: '段落1描述（英文）', type: 'text' },
    { name: 'sec1_hoverdesc_en', title: '段落1详细信息（英文）', type: 'text' },
    { name: 'sec1_title_de', title: '段落1标题（德文）', type: 'string' },
    { name: 'sec1_desc_de', title: '段落1描述（德文）', type: 'text' },
    { name: 'sec1_hoverdesc_de', title: '段落1详细信息（德文）', type: 'text' },
    
    // 段落2（多语言）
    { name: 'sec2_title', title: '段落2标题（中文）', type: 'string' },
    { name: 'sec2_desc', title: '段落2描述（中文）', type: 'text' },
    { name: 'sec2_hoverdesc', title: '段落2详细信息（中文）', type: 'text' },
    { name: 'sec2_title_en', title: '段落2标题（英文）', type: 'string' },
    { name: 'sec2_desc_en', title: '段落2描述（英文）', type: 'text' },
    { name: 'sec2_hoverdesc_en', title: '段落2详细信息（英文）', type: 'text' },
    { name: 'sec2_title_de', title: '段落2标题（德文）', type: 'string' },
    { name: 'sec2_desc_de', title: '段落2描述（德文）', type: 'text' },
    { name: 'sec2_hoverdesc_de', title: '段落2详细信息（德文）', type: 'text' },
    
    // 段落3（多语言）
    { name: 'sec3_title', title: '段落3标题（中文）', type: 'string' },
    { name: 'sec3_desc', title: '段落3描述（中文）', type: 'text' },
    { name: 'sec3_hoverdesc', title: '段落3详细信息（中文）', type: 'text' },
    { name: 'sec3_title_en', title: '段落3标题（英文）', type: 'string' },
    { name: 'sec3_desc_en', title: '段落3描述（英文）', type: 'text' },
    { name: 'sec3_hoverdesc_en', title: '段落3详细信息（英文）', type: 'text' },
    { name: 'sec3_title_de', title: '段落3标题（德文）', type: 'string' },
    { name: 'sec3_desc_de', title: '段落3描述（德文）', type: 'text' },
    { name: 'sec3_hoverdesc_de', title: '段落3详细信息（德文）', type: 'text' },
    
    // 公司介绍
    { name: 'companyIntro_zh', title: '公司介绍（中文）', type: 'text' },
    { name: 'companyIntro_en', title: '公司介绍（英文）', type: 'text' },
    { name: 'companyIntro_de', title: '公司介绍（德文）', type: 'text' },

    // 发展历程
    { name: 'companyHistory_zh', title: '发展历程（中文）', type: 'text' },
    { name: 'companyHistory_en', title: '发展历程（英文）', type: 'text' },
    { name: 'companyHistory_de', title: '发展历程（德文）', type: 'text' },

    // 电话、邮箱、地址
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
    
    // copyright
    { name: 'copyright_zh', title: 'copyright（中文）', type: 'text' },
    { name: 'copyright_en', title: 'copyright（英文）', type: 'text' },
    { name: 'copyright_de', title: 'copyright（德文）', type: 'text' },
  ],
};
