import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Projects from '@/views/Projects.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    }
  },
});

export default router;
