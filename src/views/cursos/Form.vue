<template>
    <div>
        <h1>Agregar/Editar {{ id }}</h1>
    </div>
</template>

<script setup lang="ts">
//import useRouter
import { useRouter } from 'vue-router';

const router = useRouter();
const { id } = router.currentRoute.value.params;

</script>