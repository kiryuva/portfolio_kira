import { createRouter, createWebHashHistory } from "vue-router";

import WorksPageView from "@/views/WorksPageView.vue";
import AboutPageView from "@/views/AboutPageView.vue";
import ContactPageView from "@/views/ContactPageView.vue";
import MainView from "@/views/MainView.vue";

const routes = [
   
    { path: '/', name: 'main', component: MainView },
    { path: '/works', name: 'works', component: WorksPageView },
    { path: '/about', name: 'about', component: AboutPageView },
    { path: '/contact', name: 'contact', component: ContactPageView },

];


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;