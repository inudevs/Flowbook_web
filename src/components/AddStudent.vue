<script>
export default {
    name: 'AddStudent'
}
</script>

<template>
    <div class="student">
        <div class="student__frame">
            테스트
        </div>
    </div>
</template>

<style lang="scss" scoped>

.student {
  display: flex;
  margin: auto;
  width: 70%;
  height: auto;
  padding-top: 3em;
  padding-bottom: 5em;

  &__frame {
    display: flex;
    width: 70%;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    margin-bottom: 3em;
  }
  &__user {
    display: flex;
    width: 100%;
    text-align: left;
    padding-left: 2em;
    font-size: 23px;
    color: black;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  &__content {
    display: flex;
    width: 80%;
    text-emphasis: left;
    padding-left: 2em;
    padding-right: 5em;
    font-size: 19px;
    color: black;
    margin-bottom: 2rem;
  }
}
</style>
