<template>
  <div class="home">
    <Topbar />
    <div v-if="data">
      <CategoryItem
        v-for="item in data"
        :key="item.id"
        :item="item"
        :type="item.type"
        @update="updatingData = $event"
        @delete="onDelete"
      />
    </div>
    <button @click="onCreate('link')">Добавить ссылку</button>
    <button @click="onCreate('command')">Добавить команду</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Topbar from '../BaseComponents/Topbar.vue'
import CategoryItem from '../BaseComponents/CategoryItem.vue'
import categoryItemType from '../BaseComponents/types/categoryItemType'
import { watch } from 'vue'

export default defineComponent({
  components: { Topbar, CategoryItem },

  setup() {
    const data = ref([])
    const updatingData = ref<categoryItemType>()

    const onCreate = (type: string) => {
      data.value.push({ id: new Date().getMilliseconds(), type, title: '', link: '', command: '' })
    }

    const onUpdate = (id: number) => {
      data.value = data.value.map((item) => {
        if (item.id === id) {
          return {
            id: updatingData.value.id,
            type: updatingData.value.type,
            title: updatingData.value.title,
            link: updatingData.value.link,
            command: updatingData.value.command
          }
        }

        return item
      })
    }

    const onDelete = (id: number) => {
      data.value = data.value.filter((item) => item.id !== id)
    }

    watch(updatingData, () => {
      onUpdate(updatingData.value.id)
      console.log(updatingData.value)
      console.log(data.value)
    })

    return {
      data,
      updatingData,
      onDelete,
      onCreate
    }
  }
})
</script>

<style lang="sass" scoped></style>
