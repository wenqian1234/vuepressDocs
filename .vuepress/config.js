module.exports = {
    title:'文档管理',
    description:'Hello VuePress',
    base:'https://wenqian1234.github.io/vuepressdocs/index.html',
    head:[
        ['link',{rel:'icon',href:'/favicon.ico'}]
    ],
    port:8080,
    locales:{  //站点多语言配置
        '/':{
            lang:'zh-CN',  //将会被设置为<html>的lang属性
            title:'文档管理',
            description:'Vue驱动的静态网站生成器'
        },
        '/en/':{
            lang:'en-US',
            title:'VuePress',
            description: 'Vue-powered Static Site Generator'
        }
    },
    extraWatchFiles:[],
    themeConfig:{
        search:false,  //禁用默认的搜索框
        nextLinks:true,  //上一篇链接
        prevLinks:true,
        nav:[
            {text:'Home',link:'/'},
            {text:'Guide',link:'/guide/'},
            {text:'External',link:'https://baidu.com'},
        ],
        sidebar:[  //分组显示
            {
                title:'Group 1',
                collapsable:false,
                sidebarDepth:1,
                children:['/guide/']
            },
            {
                title:'Group 2',
                collapsable:false,
                sidebarDepth:1,
                children:['/config/base/','/config/high/']
            }
        ],
        sidebarDepth:4,  //最大的深度为2
        navbar:true,  //禁用导航栏
        displayAllHeaders:true,  //显示所有页面的标题链接 默认值：false
        locales:{  //默认主题多语言配置
            '/':{
                selectText:'选择语言',
                label: '简体中文',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/'  },
                    { 
                        text: '配置', 
                        items: [
                            { text: '基本配置', link: '/config/base/', 
                            // target: '_blank' 
                            },
                            { text: '高级配置', link: '/config/high/'}
                    ]
                }
            ],
                lastUpdated: '上次更新', // string | boolean
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: 'home', link: '/en/' },
                    { text: 'guide', link: '/en/guide/' },
                    { 
                        text: 'config', 
                        items: [
                            { text: 'base', link: '/config/base/' },
                            { text: 'high', link: '/config/high/' }
                        ]
                    }
                ],
                lastUpdated: 'Last Updated', // string | boolean
            }

        }
    }
}
