import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/porta/Introduccion',
      name: 'Introduccion',
      component: () =>  import('./components/Introduccion.vue'),
    },
    {
      path: '/porta/',
      name: 'Portada',
      component: () => import('./components/Portada.vue')
    },
    {
      path: '/porta/Investigaciones',
      name: 'Investigaciones',
      component: () => import('./components/Contenidos/Investigaciones.vue')
      },
    {
    path: '/porta/SdC',
    name: 'SdC',
    component: () => import('./components/Contenidos/SdC.vue')
    },
    {
    path: '/porta/Tareas',
    name: 'Tareas',
    component: () => import('./components/Contenidos/Tareas.vue')
    }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
