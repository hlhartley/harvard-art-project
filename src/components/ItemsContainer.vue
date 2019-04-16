<template>
    <div>
        <div v-for="item in items">
            <Item v-bind:item="item"/>
        </div>
    </div>
</template>

<script>

import Item from './Item.vue';

export default {
    name: "ItemsContainer",
    components: {
        Item
    },
    props: ["items"]
}
</script>

<style scoped>
</style>