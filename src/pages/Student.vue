<script>
import AddStudent from '@/components/AddStudent'

export default {
    name: 'Student',
    components: {
        AddStudent
    }
}
</script>
    
<template>
    <div class="page">
        <add-student />
    </div>
</template>

<style lang="scss" scoped>
.page
{
    width: 100%;
}
</style>
