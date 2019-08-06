<script>
import CheckUpload from '@/components/CheckUpload'

export default {
    name: 'Search',
    components: {
        CheckUpload
    }
}
</script>

<template>
    <div class="page">
        <check-upload />
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100%;
}
</style>
