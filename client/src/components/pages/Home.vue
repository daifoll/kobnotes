<template>
    <div class="home">
        <Topbar/>
        <div v-if="data">
            <CategoryItem v-for="item in data" :key="item.id" :item="item" @delete="onDelete"/>
            <button @click="onCreate">Добавить</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Topbar from '../BaseComponents/Topbar.vue';
import CategoryItem from '../BaseComponents/CategoryItem.vue';

export default defineComponent({
    components: { Topbar, CategoryItem },

    setup() {
        const data = ref([])

        const onCreate = () => {
            data.value.push({id: new Date().getMilliseconds(), title: ''})
        }

        const onDelete = (id) => {
            data.value = data.value.filter(item => item.id !== id)
            console.log(id)
        }

        return {
            data,
            onDelete,
            onCreate
        }
    }
})
</script>

<style lang="sass" scoped>
</style>