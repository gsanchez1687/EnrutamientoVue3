<template>
    <main>
        <h1>Categorias</h1>
        <button @click="regresar" class="btn btn-primary">Regresar</button>
    </main>
</template>

<script setup lang="ts">
//import useRouter
import { useRouter } from 'vue-router'
const router = useRouter();

const regresar = () => {
    router.push({ name: 'inicio' });
}
</script>