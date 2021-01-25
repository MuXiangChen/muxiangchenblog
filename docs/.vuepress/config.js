module.exports = {
    head: [
        ['link', { rel: 'icon', type: "image/png", sizes: '48x48', href: '/fav/icon-48.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: '96x96', href: '/fav/icon-96.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: '144x144', href: '/fav/icon-144.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: '192x192', href: '/fav/icon-192.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: '256x256', href: '/fav/icon-256.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: '384x384', href: '/fav/icon-384.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: '512x512', href: '/fav/icon-512.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/fav/apple-touch-icon-57.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/fav/apple-touch-icon-60.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/fav/apple-touch-icon-72.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/fav/apple-touch-icon-76.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/fav/apple-touch-icon-114.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/fav/apple-touch-icon-120.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/fav/apple-touch-icon-152.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '167x167', href: '/fav/apple-touch-icon-167.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav/apple-touch-icon-180.png' }],
        ['link', { rel: 'mask-icon', href: '/fav/safari-pinned-tab.svg', color: '#0078df' }],
        ['link', { rel: 'manifest', href: '/fav/manifest.json' }]
        ['meta', { name: "theme-color", content: "#0078df" }]
    ],
    themeConfig: {
        logo: '/favicon.png', // 导航栏 logo
        sidebar: 'auto',
        displayAllHeaders: true,
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
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                /*
                nav: [
                    { text: '数学', link: '/en/codelearn/', ariaLabel: 'Nested' }
                ],
                sidebar: {
                    '/en/codelearn': [{
                            title: '勾股定理', // 必要的
                            path: '/en/codelearn/vue', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                            collapsable: true, // 可选的, 默认值是 true,
                            sidebarDepth: 1, // 可选的, 默认值是 1
                            children: [
                                ['/en/codelearn/vue/vue1', '第一个公式']
                            ]
                        },
                        {
                            title: 'ios教程', // 必要的
                            path: '/en/codelearn/ios', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                            collapsable: true, // 可选的, 默认值是 true,
                            sidebarDepth: 1, // 可选的, 默认值是 1
                            children: [
                                ['/en/codelearn/ios/1', '1']
                            ]
                        }
                    ]
                }
                */
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
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '创意和想法', link: '/idea/' },
                    { text: '开发日志', link: '/devlog/' },
                    { text: '小教程', link: '/codelearn/' },

                ],
                sidebar: {
                    '/codelearn/': [{
                            title: 'Vue.js',
                            path: '/codelearn/vue',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/codelearn/vue/vue1'
                            ]
                        },
                        {
                            title: 'iOS',
                            path: '/codelearn/ios',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                '/codelearn/ios/1'
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
                    }]
                }
            }
        }
    },
    locales: {
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: "Jasmine's blog",
            description: "programmers can't change the world."
        },
        '/': {
            lang: 'zh-CN',
            title: '穆相臣的博客',
            description: '学编程是改变不了世界的。'
        }
    },
    lang: 'zh-CN'
}