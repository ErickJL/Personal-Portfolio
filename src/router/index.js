// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Resume from '../views/Resume.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: import.meta.env.VITE_API_BASE_URL || '/Personal-Portfolio' + '/', component: Home, name: 'home' },
  { path: import.meta.env.VITE_API_BASE_URL || '/Personal-Portfolio' + '/services', component: Services, name: 'services' },
  { path: import.meta.env.VITE_API_BASE_URL || '/Personal-Portfolio' + '/resume', component: Resume, name: 'resume' },
  { path: import.meta.env.VITE_API_BASE_URL || '/Personal-Portfolio' + '/project', component: Project, name: 'project' },
  { path: import.meta.env.VITE_API_BASE_URL || '/Personal-Portfolio' + '/contact', component: Contact, name: 'contact' },
];

const router = createRouter({
  history: createWebHistory(), // Gunakan HTML5 history mode
  routes,
});

export default router;
