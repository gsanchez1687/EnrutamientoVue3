//import createwebHistory
import { createWebHistory, createRouter } from 'vue-router'

//import components
import admin from '@/views/cursos/Admin.vue';
import inicio from '@/views/home/Inicio.vue';
import categoriasadmin from '@/views/categorias/Admin.vue';
import form from '@/views/cursos/Form.vue';
import error from '@/views/errors/Error.vue';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '',
      name: 'inicio',
      component: inicio || { template: '<div>Inicio component not found</div>' }
    },
    {
      path: '/cursos/admin',
      name: 'admin',
      component: admin || { template: '<div>Admin component not found</div>' }
    },
    {
      path: '/cursos/courses',
      redirect: { name: 'admin' }
    },
    {
      path: '/cursos/form/:id',
      name: 'curso-form',
      component: form || { template: '<div>Admin component not found</div>' }
    },
    {
      path: '/categorias/admin',
      name: 'categoriasadmin',
      component: categoriasadmin || { template: '<div>Categorias Admin component not found</div>' }
    },
    {
      path: '/errors/error',
      name: 'error',
      components: error
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: 'error'
    },
  ]
})

export default router