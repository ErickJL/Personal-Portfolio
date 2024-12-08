// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Resume from '../views/Resume.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/services', component: Services, name: 'services' },
  { path: '/resume', component: Resume, name: 'resume' },
  { path: '/project', component: Project, name: 'project' },
  { path: '/contact', component: Contact, name: 'contact' },
];

const router = createRouter({
  history: createWebHistory(), // Gunakan HTML5 history mode
  routes,
});

export default router;
