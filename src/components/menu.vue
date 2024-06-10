<template>
    <main>
        <ul class="nav">
            <li class="nav-item">
                <RouterLink :to="{ name:'inicio' }" class="nav-link active">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink :to="{ name:'admin' }" class="nav-link">Cursos</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink :to="{ name:'categoriasadmin' }" class="nav-link">Categorias</RouterLink>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">

</script>