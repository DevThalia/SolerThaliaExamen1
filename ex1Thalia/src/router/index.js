import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/exercici1',
    name: 'Exercici1',
    component: () => import('../views/Exercici1View.vue'),
  },
  {
    path :'/exercici1/:id',
    name: 'Exercici1-detail',
    component: () => import('../components/Exercici1DetailComponent.vue'),
  },
  {
    path: '/exercici2',
    name: 'Exercici2',
    component: () => import('../views/Exercici2View.vue'),
  },
  {
    path: '/exercici3',
    name: 'Exercici3',
    component: () => import('../views/Exercici3View.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;