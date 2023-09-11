<template>
    <div class="topbar">
        <div class="logo">
            <router-link :to="{ name: 'Home' }">
                <BaseImage
                    :src="imageSrc"
                    :width="60"
                    :height="60"
                    alt="Kobnotes logo"
                />
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseImage from './BaseImage.vue';
import logoSrc from '@/assets/logo.jpg';

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

.logo
    display: inline-block

.topbar
    padding: 2rem
    border-bottom: 2px solid black
</style>
