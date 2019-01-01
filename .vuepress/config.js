module.exports = {
    title: "VuePress Exploration",
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'VuePress Static Page',
            description: 'Using this for jon.hk?'
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['link', {
            rel: 'canonical',
            href: 'https://vuepress-deploy.netlify.com'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: `/icons/apple-touch-icon-152x152.png`
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/icons/safari-pinned-tab.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/icons/msapplication-icon-144x144.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    // markdown: {
    //     extendMarkdown: md => {
    //         // use more markdown-it plugins!
    //         md.use(require('markdown-it-latex'))
    //     }
    // },
    plugins: [
        '@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                // Don't forget to install moment yourself
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        }
    ],
    serviceWorker: true,
    themeConfig: {
        docsDir: 'docs',
        repo: 'jkwchui/vuepress-jonhk-deploy',

        nav: [{
                text: 'Start',
                link: '/pages/',
            },
            {
                text: 'Admin',
                link: '/admin',
            },
            {
                text: 'NetlifyCMS Config Help',
                link: '/docs/netlifycms-configuration.html',
            }

        ]

    }
}