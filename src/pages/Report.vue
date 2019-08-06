<script>
import GetReport from '@/components/GetReport'
import FinishReport from '@/components/FinishReport'
import ReportHeader from '@/components/header/ReportHeader'

export default {
  name: 'Report',
  components: {
    GetReport,
    ReportHeader,
    FinishReport
  }
}
</script>

<template>
    <div class="page">
        <report-header />
        <get-report />
        <finish-report />
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100%;
    margin: auto;
}
</style>
