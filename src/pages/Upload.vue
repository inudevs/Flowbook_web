<script>
import UploadRecom from '@/components/UploadRecom'
import UploadHeader from '@/components/header/UploadHeader'


export default {
    name: 'Upload',
    components: {
        UploadRecom,
        UploadHeader
    }
}
</script>

<template>
    <div class="page">
        <upload-header />
        <upload-recom />
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100%;
    margin: auto;
}
</style>
