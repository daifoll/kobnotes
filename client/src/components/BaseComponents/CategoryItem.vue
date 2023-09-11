<template>
    <form @submit.prevent="onSubmit" v-if="status === 'create' || status === 'edit'">
        <input v-model="data"/>
        <button submit>Сохранить</button>
    </form>
    <div v-else>
        <span>{{ data }}</span>
        <button @click="onEdit">Редактировать</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    components: {

    },

    props: {
        type: String,

    },
    setup() {
        const data = ref('')
        const status = ref<'create' | 'saved' | 'edit'>('create')

        const onSubmit = () => {
            status.value = 'saved'
        }

        const onEdit = () => {
            status.value = 'edit'
        }
        watch(status, () => {
            console.log(status.value)
        })

        return {
            data,
            status,
            onSubmit,
            onEdit
        }
    }
})
</script>

<style>

</style>