export default {
  name: 'news',
  title: '新闻',
  type: 'document',
  fields: [
    { name: 'title', title: '中文标题', type: 'string' },
    { name: 'title_en', title: '英文标题', type: 'string' },
    { name: 'title_de', title: '德文标题', type: 'string' },
    { name: 'pubdate', title: '发布时间', type: 'datetime' },
    { name: 'author', title: '作者', type: 'string' },
    { name: 'tags', title: '标签', type: 'array', of: [{ type: 'string' }] },
    { name: 'content', title: '中文正文', type: 'blockContent' },
    { name: 'content_en', title: '英文正文', type: 'blockContent' },
    { name: 'content_de', title: '德文正文', type: 'blockContent' },
    {
      name: 'status',
      title: '状态',
      type: 'number',
      description: '0=草稿，1=已发布'
    }
  ]
}