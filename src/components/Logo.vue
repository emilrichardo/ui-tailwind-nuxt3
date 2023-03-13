<template>
    <div>
        Logotipo <br>
        text: {{text}}

    </div>
</template>
<script setup>
const {text} = defineProps(['text'])
</script>