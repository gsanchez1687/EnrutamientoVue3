<template>
    <div>
        <h1>Administrar Cursos2</h1>
        <button @click="regresar" class="btn btn-primary">Regresar</button>
    </div>
</template>

<script setup lang="ts">
//import useRouter
import { useRouter } from 'vue-router';

const router = useRouter();
const regresar = () => {
    router.push('/');
}

</script>