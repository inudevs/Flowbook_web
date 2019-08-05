<script>
import InfoUser from '@/components/InfoUser'
import MainFunc from '@/components/MainFunc'

export default {
    name: 'Index',
    components: {
        InfoUser,
        MainFunc
    }
}
</script>

<template>
    <div class="page">
        <info-user />
        <main-func />
    </div>    
</template>

<style lang="scss" scoped>
.page
{
    width: 80%;
    height: 100%;
    margin: auto;
}
</style>
