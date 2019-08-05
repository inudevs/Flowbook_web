<script>
export default {
    name: 'DeleteBook',
    data :
        function () {
            return {
                books: [
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'https://misc.ridibooks.com/cover/786000077/xxlarge',
                        owner: '장종우'
                    },
                    {
                        title: '코스모스',
                        author: '칼 세이건',
                        img: 'https://misc.ridibooks.com/cover/786000077/xxlarge',
                        owner: '윤영창'
                    },
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
            <img class="list__img">
            <div class="list__title">
                {{ item.title }}
            </div>
            <div class="list__author">
                {{ item.author }}
            </div>
            <div class="list__owner">
                {{ item.owner }}
            </div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>

.list {
    display: flex;
    margin: auto;
    width: 70%;
    height: auto;
    padding-top: 3em;
    padding-bottom: 5em;
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
        flex-direction: column;
        margin-bottom: 3em;
    }

    &__img {
        width: 100px;
        height: 150px;
    }

    &__title {

    }

    &__author {

    }

    &__owner { 
    
    }

    &__delete {
        cursor: pointer;
    }
}
</style>
