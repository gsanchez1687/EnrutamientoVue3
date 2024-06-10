<template>
    <div>
        <h1>Administrar Cursos2</h1>
        <button @click="regresar" class="btn btn-primary">Regresar</button>
    </div>
    <div>
        <h1>admin de cusos</h1>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Ver</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ id }}</td>
                    <td>curso 1</td>
                    <td>Curso de prueba</td>
                    <td><router-link class="btn btn-primary" :to="{ name:'curso-form',params:{id:id} }">ver</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
//import useRouter
import { useRouter } from 'vue-router';
//import form
import { Form } from './Form.vue';
const router = useRouter();
const regresar = () => {
    router.push('/');
}

const id = 1;

</script>