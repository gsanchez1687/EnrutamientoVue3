//import createwebHistory
import { createWebHistory, createRouter } from "vue-router";

//import components
import admin from "@/views/cursos/Admin.vue";
import inicio from "@/views/home/Inicio.vue";
import categoriasadmin from "@/views/categorias/Admin.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "",
        name: "inicio",
        component: inicio || { template: '<div>Inicio component not found</div>' },
        },
        {
        path: "/cursos/admin",
        name: "admin",
        component: admin || { template: '<div>Admin component not found</div>' },
        },
        {
        path: "/categorias/admin",
        name: "categoriasadmin",
        component: categoriasadmin || { template: '<div>Categorias Admin component not found</div>' },
        },
    ],
});

export default router;