<template>
    <form @submit.prevent="onSubmit" v-if="status === 'create' || status === 'edit'">
        <input v-model="title" placeholder="Название"/>
        <input v-if="type === 'link'" v-model="link" placeholder="Адрес ссылки">
        <input v-if="type === 'command'" v-model="command" placeholder="Команда">
        <button submit>Сохранить</button>
    </form>
    <div v-else-if="type === 'link'">
        <a :href="item.link" target="_blank"><span>{{ title }}</span></a>
        <button @click="onEdit">Редактировать</button>
        <button @click="$emit('delete', item.id)">Удалить</button>
    </div>
    <div v-else-if="type === 'command'">
        <span>{{ title }}</span>
        <pre>{{ command }}</pre>
        <button @click="onEdit">Редактировать</button>
        <button @click="$emit('delete', item.id)">Удалить</button>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from "vue";
import categoryItemType from './types/categoryItemType'

export default defineComponent({
    components: {

    },

    props: {
        type: String,
        item: {
            type: Object as PropType<categoryItemType>
        }

    },

    emit: ['delete', 'update'],

    setup(props, { emit }) {
        const title = ref(props.item.title)
        const link = ref(props.item.link)
        const command = ref(props.item.command)

        const status = ref<'create' | 'saved' | 'edit'>('create')

        const onSubmit = () => {
            status.value = 'saved'
            emit('update', { id: props.item.id, type: props.item.type, title: title.value, link: link.value, command: command.value })
        }

        const onEdit = () => {
            status.value = 'edit'
        }

        return {
            title,
            status,
            link,
            command,
            onSubmit,
            onEdit
        }
    }
})
</script>

<style>

</style>