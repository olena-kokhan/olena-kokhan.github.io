import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import Home from './components/Home.vue'
import Project from './components/Project.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'


const routes = [
   { path: '/', component: Home },
   { path: '/Work/:id/', component: Project, name: 'work' },
   { path: '/About/', component: About, name: 'about' },
   { path: '/Contact/', component: Contact, name: 'contact' },
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
