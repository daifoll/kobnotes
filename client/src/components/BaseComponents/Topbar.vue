<template>
    <div class="topbar">
        <div class="logo">
            <BaseImage
                :src="imageSrc"
                :width="100"
                :height="100"
                alt="Kobnotes logo"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseImage from './BaseImage.vue';
import logoSrc from '@/assets/logo.png';

export default defineComponent({
    setup() {
        return {
            imageSrc: logoSrc
        }
        
    },
    components: { BaseImage }
})
</script>

<style lang="sass" scoped>
</style>
