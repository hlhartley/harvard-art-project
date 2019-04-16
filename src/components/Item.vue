<template>
    <div>
        <img class="korean-painting" v-bind:src="item.primaryimageurl"/>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["item"]
}
</script>

<style scoped>
    .korean-painting {
        height: 300px;
    }
</style>
