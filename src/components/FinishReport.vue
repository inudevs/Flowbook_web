<script>
export default {
    name: 'FinishReport'    
}
</script>

<template>
    <div class="report">
        <div class="report__finish">
            처리완료된 신고 보기
        </div>
    </div>
</template>

<style lang="scss" scoped>
.report {
  display: flex;
  margin: auto;
  width: 70%;
  height: auto;
  padding-bottom: 2em;
  flex-direction: column;

  &__finish {
    text-align: right;
    width: 15%;
    color: white;
    background-color: #228be6;
    font-size: 20px;
    padding: 0.5em;
    margin-bottom: 2rem;
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    cursor: pointer;
    align-self: flex-end;
  }
}
</style>
