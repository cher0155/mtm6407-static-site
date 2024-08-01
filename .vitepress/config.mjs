import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jeff Portfolio",
  description: "A website that displays my work in photography and graphic design",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Photography', link: '/photography' }
      { text: 'Graphic Design', link: '/graphicdesign' }
      { text: 'About Me', link: '/about' }
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Categories',
        items: [
          { text: 'Photography Work', link: '/photography' },
          { text: 'Graphic Design Work', link: '/graphicdesign' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
