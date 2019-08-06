<script>
export default {
    name: 'CheckDelete'    
}
</script>

<template>
    <div class="check">
        <div class="check__frame">
            <div class="check__question">
                이 책을 추천도서로 업로드하시겠습니까?
            </div>
            <div class="column">
                <div class="check__yes">
                    네
                </div>
                <div class="check__no">
                    아니오
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.check {
  display: flex;
  margin: auto;
  width: 70%;
  height: auto;
  padding-top: 3em;
  padding-bottom: 5em;

  &__frame {
    display: flex;
    width: 40%;
    height: 10em;
    margin: auto;
    align-self: flex-start;
    text-align: center;
    box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    flex-direction: column;
    margin-bottom: 3em;
  }

  &__question {
      color: black;
      margin-top: 1.5em;
      font-size: 20px;
      flex-direction: row;
  }

  &__yes {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    background-color: #4945E7;
    padding: 0.2rem;
    font-size: 15px;
    color: white;
    flex-direction: column;
    margin-right: 1rem;
    border-radius: 1.5em;
    cursor: pointer;
  }

  &__no {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    padding: 0.2rem;
    color: #9E9E9E;
    border: 0.5px solid #9E9E9E;
    font-size: 15px;
    margin-left: 1rem;
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    cursor: pointer;

  }
}

.column {
    display: flex;
    flex-direction: row;
    margin-top: 1.5em;
    justify-content: center;
}
</style>
