import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import WorkView from './views/WorkView.vue'
import SkillsView from './views/SkillsView.vue'
import WorkDetailsView from './views/WorkDetailsView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: WorkView,
      path: '/work'
    },
    {
      component: WorkDetailsView,
      path: '/work/:workid'
    },
    {
      component: WorkDetailsView,
      path: '/fbk'
    },
    {
      component: WorkDetailsView,
      path: '/ttvdb'
    },
    {
      component: WorkDetailsView,
      path: '/pcc'
    },
    {
      component: WorkDetailsView,
      path: '/swindlr'
    },
    {
      component: SkillsView,
      path: '/skills'
    },
    {
      component: WorkDetailsView,
      path: '/galleritb'
    },
    {
      component: WorkDetailsView,
      path: '/fbk2'
    },
    {
      component: WorkDetailsView,
      path: '/arenaultimatum'
    }
  ]
})
