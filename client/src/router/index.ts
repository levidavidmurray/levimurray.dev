import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Home from '@/views/Home.vue';
import Resume from '@/views/Resume.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cases',
  },
  {
    path: '/cases',
    name: 'Cases',
    component: Home,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/about-me',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router