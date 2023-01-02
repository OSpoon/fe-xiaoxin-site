module.exports = {
  "title": " 小鑫同学",
  "description": "小鑫同学个人站点",
  "dest": "public",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      },
    ],
    [
      "meta",
      {
        "name": "referrer",
        "content": "never"
      }
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?35d1c7fdb4d22fb3e38125dbdbead3fe";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date",
      },
      {
        "text": "编程导航",
        "link": "/navigate/",
        "icon": "reco-api",
      },
      {
        "text": "必看",
        "link": "/myself/",
        "icon": "reco-other",
      },
      {
        "text": "RSS",
        "link": "https://it200.cn/rss.xml",
        "icon": "reco-bokeyuan"
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/OSpoon/fe-xiaoxin-site",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "InfoQ写作社区",
        "desc": "⚡InfoQ签约作者",
        "avatar": "小鑫同学",
        "logo": "https://static001.infoq.cn/static/infoq/img/logo-121-75.yuij86g.png",
        "link": "https://www.infoq.cn/u/xiaoxin"
      },
      {
        "title": "阿里云开发者社区",
        "desc": "阿里云技术博主、专家博主",
        "logo": "https://developer.aliyun.com/favicon.ico",
        "link": "https://developer.aliyun.com/profile/expert/mr4w653rmvm7o"
      },
      {
        "title": "稀土掘金",
        "desc": "Level5 活跃作者",
        "logo": "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",
        "link": "https://juejin.cn/user/3966693685871694"
      },
      {
        "title": " Github",
        "desc": " 小鑫同学的Github",
        "logo": "https://avatars.githubusercontent.com/in/15368?s=64&v=4",
        "link": "https://github.com/OSpoon"
      },
      {
        "title": "IT200.cn",
        "desc": "IT200 持续为您导航",
        "logo": "/logo.png",
        "link": "https://vp.it200.cn/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "小鑫同学",
    "authorAvatar": "/avatar.png",
    "record": "晋ICP备15003329号-3",
    "recordLink": "https://beian.miit.gov.cn/",
    "startYear": "2022",
    "locales": {
      '/': {
        "recoLocales": {
          "homeBlog": {
            "article": '美文', // 默认 文章
            "tag": '标识', // 默认 标签
            "category": '类别', // 默认 分类
            "friendLink": '友链' // 默认 友情链接
          },
          "pagation": {
            "prev": '上一页',
            "next": '下一页',
            "go": '前往',
            "jump": '跳转至'
          }
        }
      }
    },
    "valineConfig": {
      "appId": "qVZiiwT0KyuXAmrQEZIUnmOd-gzGzoHsz",
      "appKey": "Rb5flNCY63vstNSiMOyuddTe",
      "showComment": false
    }
  },
  "markdown": {
    "lineNumbers": true,
    "anchor": { "permalink": false },
    "toc": { "includeLevel": [1, 2] },
  },
  "plugins": [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      "width": '300px', // 默认 260px
      "title": '消息提示',
      "body": [
        {
          "type": 'title',
          "content": '实用性前端技术分享',
          "style": 'text-aligin: center;font-size: 15px;'
        },
        {
          "type": 'image',
          "src": '/wx_code.png'
        }
      ]
    }],
    ['@vuepress-reco/vuepress-plugin-rss', {
      site_url: "https://it200.cn/",
      copyright: 'IT200.cn',
      count: 10,
    }]
  ]
}