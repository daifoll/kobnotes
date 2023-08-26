<template>
    <div class="base-image">
        <img class="base-image-item" :src="src" :alt="alt" :width="width ? width : '300'" :height="height ? height : '300'">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        src: {
            type: String,
            required: true
        },

        alt: {
            type: String
        },

        width: {
            type: Number
        },

        height: {
            type: Number
        }
    },

    setup() {
        
    },
})
</script>

<style lang="sass" scoped>
.base-image-item
    object-fit: cover
</style>