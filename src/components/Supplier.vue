<template>
    <div>
        <h1>{{ name }}</h1>
        <h3 v-if="status" class="text-success">A du stock: YES</h3>
        <h3 v-else class="text-danger">A du stock: NO</h3>
        <h5>Date de dernière relevé des stocks : {{ checkedAt }}</h5>
    </div>
</template>

<script>
    export default {
        name: 'Supplier',
        props: {
            id: String,
            name: String,
            status: Boolean,
            checkedAt: String,
        },
    }

</script>

<style scoped>
    .text-danger {
        color: red;
    }

    .text-success {
        color: green;
    }

</style>