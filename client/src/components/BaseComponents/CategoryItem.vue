<template>
    <form @submit.prevent="onSubmit" v-if="status === 'create' || status === 'edit'">
        <input v-model="data"/>
        <button submit>Сохранить</button>
    </form>
    <div v-else>
        <span>{{ data }}</span>
        <button @click="onEdit">Редактировать</button>
        <button @click="$emit('delete', item.id)">Удалить</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    components: {

    },

    props: {
        type: String,
        item: Object

    },

    emit: ['delete'],

    setup(props) {
        const data = ref(props.item.title)
        const status = ref<'create' | 'saved' | 'edit'>('create')

        const onSubmit = () => {
            status.value = 'saved'
            console.log(props.item)
        }

        const onEdit = () => {
            status.value = 'edit'
        }

        // const onDelete = () => {
        //     console.log(data)
        // }

        return {
            data,
            status,
            onSubmit,
            onEdit,
            // onDelete
        }
    }
})
</script>

<style>

</style>