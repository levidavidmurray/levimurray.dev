import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Resume from '@/views/Resume.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/projects",
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/about-me",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }
  },
});

export default router;
