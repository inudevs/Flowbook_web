<script>
import DeleteBook from '@/components/DeleteBook'
import CheckDelete from '@/components/CheckDelete'

export default {
  name: 'Delete',
  components: {
    DeleteBook,
    CheckDelete
  }
}
</script>

<template>
    <div class="page">
        <delete-book />
        <check-delete />
    </div>
</template>

<style lang="scss" scoped>
.page
{
    width: 100%;
    margin: auto;
}
</style>
