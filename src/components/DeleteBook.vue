<script>
export default {
  name: 'DeleteBook',
  data:
        function () {
          return {
            books: [
              {
                title: '코스모스',
                author: '칼 세이건',
                img: 'cosmos.jpg',
                owner: '장종우'
              },
              {
                title: '코스모스',
                author: '칼 세이건',
                img: 'cosmos.jpg',
                owner: '윤영창'
              },
              {
                title: '코스모스',
                author: '칼 세이건',
                img: 'cosmos.jpg',
                owner: '문형일'
              },
              {
                title: '코스모스',
                author: '칼 세이건',
                img: 'cosmos.jpg',
                owner: '윤영창'
              }
            ]
          }
        }
}
</script>

<template>
    <div class="list">
        <div class="list__frame"  v-for="(item, idx) in books"
                :key="idx"
            >
            <div class="list__base">
              
              <div class="not">
                <div class="list__row">
                  <img class="list__img" :src="require(`../assets/${item.img}`)">
                </div>

                <div class="list__row">
                  <div class="list__title">
                      {{ item.title }}
                  </div>
                  <div class="list__author">
                      {{ item.author }}
                  </div>
                  <div class="list__owner">
                      소유자 - {{ item.owner }}
                  </div>
                </div>
              </div>
              <div class="list__del">
                <img src="@/assets/del_button.jpg" class="del">
              </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.not {
  display: flex;
}
.del {
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.list {
    display: flex;
    margin: auto;
    width: 70%;
    height: auto;
    flex-direction: column;

    &__frame {
        display: flex;
        width: 70%;
        margin: auto;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
        border-radius: 1.5em 1.5em 1.5em 1.5em;
        margin-bottom: 2em;
    }

    &__del {
      display: flex;
      align-self: flex-end;
      padding-bottom: 1rem;
    }

    &__base {
      justify-content: space-between;
      display: flex;
      width: 95%;
      padding: 0.6em;
    }

    &__row {
      display: flex;  
      flex-direction: column;
    }

    &__img {
      display: flex;
      border-radius: 0.7em;
      width: 100px;
      height: 150px;
    }

    &__title {
      display: flex;
      flex-direction: row;
      padding-left: 0.5em;
      font-size: 25px;
    }

    &__author {
      display: flex;
      flex-direction: row;
      padding-left: 1em;
      color: #707070;
    }

    &__owner {
      display: flex;
      flex-direction: row;
      padding-left: 1em;
      padding-top: 1.5em;
      color: #707070;
    }

    &__delete {
        cursor: pointer;
    }
}
</style>
