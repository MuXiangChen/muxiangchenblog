module.exports = {
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ typographer: true }),
                md.use(require('markdown-it-footnote'))
        }
    },
    plugins: [
        '@maginapp/vuepress-plugin-katex',
        {
            delimiters: 'dollars'
        }
    ],
    head: [
        ['meta', { name: 'theme-color', content: '#fc46aa' }],
        ['link', { rel: 'icon', herf: '/navicon.png' }],

    ],
    themeConfig: {
        logo: '/navicon.png', // 导航栏 logo
        sidebar: 'auto',
        displayAllHeaders: true,
        markdown: {
            extractHeaders: ['h2', 'h3', 'h4'],
        },
        theme: 'vuepress-theme-succinct',
        locales: {
            '/en/': {
                lang: 'en-US',
                title: "Jasmine's blog",
                description: 'a long path.',
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                algolia: {},
                nav: [
                    { text: 'ideas', link: '/en/idea/' },
                    { text: 'dev_log', link: '/en/devlog/' },
                    { text: 'tutorial', link: '/en/codelearn/' }
                ],
                sidebar: {
                    '/en/codelearn/': [{
                            title: 'Vue.js',
                            path: '/en/codelearn/vue',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/en/codelearn/vue/vuepress'
                            ]
                        },
                        {
                            title: 'Thoughts',
                            path: '/en/codelearn/thinking',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/en/codelearn/thinking/tools'
                            ]
                        }
                    ],
                    '/en/devlog/': [{
                        title: 'Apps',
                        path: '/en/devlog/apps',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/en/devlog/apps/socialapp'
                        ]
                    }],
                    '/en/idea/': [{
                        title: 'Apps',
                        path: '/en/idea/apps',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/en/idea/apps/personalsite'
                        ]
                    }]
                }
            },
            '/': {
                lang: 'zh-CN',
                title: '穆相臣@博客',
                description: '好好看，好好学',
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: '发现新内容可用.',
                        buttonText: '刷新'
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '创意和想法', link: '/idea/' },
                    { text: '开发日志', link: '/devlog/' },
                    { text: '小教程', link: '/codelearn/' }
                ],
                sidebar: {
                    '/codelearn/': [{
                            title: 'Vue.js',
                            path: '/codelearn/vue',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/codelearn/vue/vuepress'
                            ]
                        },
                        {
                            title: '编程思想',
                            path: '/codelearn/thinking',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/codelearn/thinking/tools',
                                '/codelearn/thinking/career'
                            ]
                        },
                        {
                            title: '基础',
                            path: '/codelearn/basic',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/codelearn/basic/markdown'
                            ]
                        }
                    ],
                    '/devlog/': [{
                        title: '应用',
                        path: '/devlog/apps',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/devlog/apps/socialapp'
                        ]
                    }],
                    '/idea/': [{
                        title: '应用',
                        path: '/idea/apps',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/idea/apps/personalsite'
                        ]
                    }, {
                        title: '思考',
                        path: '/idea/thinking',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/idea/thinking/ideas'
                        ]
                    }]
                }
            }
        }
    },
    locales: {
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: "Jasmine's blog",
            description: 'programmers change the world.'
        },
        '/': {
            lang: 'zh-CN',
            title: '穆相臣的博客',
            description: '程序改变世界'
        }
    },
    lang: 'zh-CN'
}