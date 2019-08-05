<script>
import DeleteBook from '@/components/DeleteBook'

export default {
    name: 'Delete',
    components: {
        DeleteBook
    }    
}
</script>

<template>
    <div class="page">
        <delete-book />
    </div>
</template>

<style lang="scss" scoped>
.page 
{
    width: 100%;
    height: 100%;;
}
</style>
