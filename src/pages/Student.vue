<script>
import StudentHeader from '@/components/header/StudentHeader'
import ManageStudent from '@/components/ManageStudent'

export default {
    name: 'Student',
    components: {
        StudentHeader,
        ManageStudent
    }
}
</script>
    
<template>
    <div class="page">
        <student-header />
        <manage-student />
    </div>
</template>

<style lang="scss" scoped>
.page
{
    width: 100%;
}
</style>
