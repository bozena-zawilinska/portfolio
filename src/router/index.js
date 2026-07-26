import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import WorkPage from '../views/WorkPage.vue'
import { setDocumentMeta } from '../utils/setDocumentMeta'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Bozena Zawilinska | Front-End Engineer',
      description:
        'Portfolio of Bozena Zawilinska, a Front-End Engineer in Hamilton, Scotland, specialising in Vue.js, WordPress, accessible interfaces, reusable components and maintainable web applications.',
    },
  },
  {
    path: '/welcome',
    redirect: '/',
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Bozena Zawilinska | Front-End Engineer',
      description:
        'How Bozena Zawilinska works: accessible, maintainable front-end engineering across Vue.js and WordPress, with reusable systems and clear documentation at the centre of the process.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Bozena Zawilinska | Front-End Engineer',
      description:
        'Get in touch with Bozena Zawilinska, a Front-End Engineer based in Hamilton, Scotland, available for Vue.js and WordPress front-end work.',
    },
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage,
    meta: {
      title: 'Selected Work | Bozena Zawilinska',
      description:
        'Selected front-end projects by Bozena Zawilinska, including Vue.js product work at ProdPad, WordPress platforms and an independent React product, The Areté Club.',
    },
  },
  // Catch-all route to redirect to home page
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.afterEach((to) => {
  setDocumentMeta({
    title: to.meta.title,
    description: to.meta.description,
    path: to.path,
  })
})

export default router
