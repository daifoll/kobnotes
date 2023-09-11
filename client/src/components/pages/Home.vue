<template>
    <div class="home">
        <Topbar/>
        <CategoryItem/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from '../BaseComponents/Topbar.vue';
import CategoryItem from '../BaseComponents/CategoryItem.vue';

export default defineComponent({
    components: { Topbar, CategoryItem },

    setup() {

        return {
        }
    }
})
</script>

<style lang="sass" scoped>
</style>