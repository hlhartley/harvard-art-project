<template>
    <div>
        <img v-bind:src="item.primaryimageurl"/>
        {{item.primaryimageurl}}
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["item"]
}
</script>

<style scoped>

</style>
