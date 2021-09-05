import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import Work from './components/Work.vue'
import Project from './components/Project.vue'
import About from './components/About.vue'

const routes = [
   { path: '/', component: Work },
   { path: '/Project/:id/', component: Project, name: 'project' },
   { path: '/About/', component: About, name: 'about' },

]

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { left: 0, top: 0 }
      }
    }
});

createApp(App).use(router).mount('#app')
