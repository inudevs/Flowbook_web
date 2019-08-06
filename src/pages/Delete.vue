<script>
import DeleteBook from '@/components/DeleteBook'
import CheckDelete from '@/components/CheckDelete'
import DeleteHeader from '@/components/header/DeleteHeader'

export default {
  name: 'Delete',
  components: {
    DeleteBook,
    CheckDelete,
    DeleteHeader
  }
}
</script>

<template>
    <div class="page">
        <delete-header />
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
