<template>
    <div class="home">
        <Topbar/>
        <div>
            <CategoryItem v-for="item in data" :key="item.title" :title="item.title"/>
            <button @click="onCreate">Добавить</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Topbar from '../BaseComponents/Topbar.vue';
import CategoryItem from '../BaseComponents/CategoryItem.vue';
import { watch } from 'fs';

export default defineComponent({
    components: { Topbar, CategoryItem },

    setup() {
        const data = ref([])

        const onCreate = () => {
            data.value.push({title: ''})
        }

        // watch(data, () => {

        // })
        return {
            data,
            onCreate
        }
    }
})
</script>

<style lang="sass" scoped>
</style>