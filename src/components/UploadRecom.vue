<script>
export default {
    name: 'Uploadrecom',
    data: 
        function () {
            return {
                books: [
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'cosmos.jpg',
                    },
                    {
                        title: '모든 순간이 너였다.',
                        author: '하태완 에세이',
                        img: '모든.jpg'
                    },
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'cosmos.jpg',
                    },
                    {
                        title: '모든 순간이 너였다.',
                        author: '하태완 에세이',
                        img: '모든.jpg'
                    },
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'cosmos.jpg',
                    },
                    {
                        title: '모든 순간이 너였다.',
                        author: '하태완 에세이',
                        img: '모든.jpg'
                    },
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'cosmos.jpg',
                    },
                    {
                        title: '모든 순간이 너였다.',
                        author: '하태완 에세이',
                        img: '모든.jpg'
                    },
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'cosmos.jpg',
                    },
                    {
                        title: '모든 순간이 너였다.',
                        author: '하태완 에세이',
                        img: '모든.jpg'
                    },
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'cosmos.jpg',
                    },
                    {
                        title: '모든 순간이 너였다.',
                        author: '하태완 에세이',
                        img: '모든.jpg'
                    }
                ]
            }
        }
}
</script>

<template>
    <div class="list">
        <div class="list__frame" v-for="(item, idx) in books"
            :key="idx">
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
                </div>
              </div>

            </div>
        </div>

        <div class="button">
            <img src="@/assets/del_button.jpg" class="button__img" >
            <img src="@/assets/add_button.jpg" class="button__img" >
        </div>
    </div>
</template>

<style lang="scss" scoped>

.not {
  display: flex;
}

.list {
    display: flex;
    margin: auto;
    width: 80%;
    height: auto;
    flex-direction: column;
    

    &__frame {
        display: flex;
        width: 60%;
        margin: auto;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-shadow: 5px 10px 15px 10px rgb(231, 231, 231);
        border-radius: 1.5em 1.5em 1.5em 1.5em;
        margin-bottom: 1.5em;
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

}

.button {
    position: fixed;
    width: 100px;
    height: 200px;
    top: 35em;
    float: right;
    align-self: flex-end;

    &__img {
        display: flex;
        flex-direction: column;
        width: 100px;
        height: 100px;
        cursor: pointer;
        margin: 0;
    }
}
</style>
