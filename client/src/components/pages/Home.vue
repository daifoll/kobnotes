<template>
    <div class="home">
        <Topbar/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from '../BaseComponents/Topbar.vue';

export default defineComponent({
    setup() {
        return {

        }
    },
    components: { Topbar }
})
</script>

<style lang="sass" scoped>
</style>