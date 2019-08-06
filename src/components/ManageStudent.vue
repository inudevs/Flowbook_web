<script>
export default {
    name: 'ManageStudent',
    data: 
    function() {
        return {
            students: [
                {
                    position: 'student',
                    name: '김상민',
                    number: '1304',
                    status: '삭제'
                },
                {
                    position: 'teacher',
                    name: '김성렬',
                    title: '선생님',
                    status: '삭제'
                },
                {
                    position: 'student',
                    name: '윤영창',
                    number: '1320',
                    status: '삭제'
                },
                {
                    position: 'student',
                    name: '문형일',
                    number: '1611',
                    status: '승인'
                },
                {
                    position: 'teacher',
                    name: '이민주',
                    title: '선생님',
                    status: '승인'
                }
            ]
        }
    },
    methods : {
        isUndone: function (item) {
            return item.status === "승인";
        }
    }
}

</script>

<template>
    <div class="list"> 
        <div class="list__frame" v-for="(item, idx) in students"
            :key="idx">
            <div class="list__content">
                {{ item.number }}
                {{ item.name }}
                {{ item.title }}
            </div>
            <div class="list__button">
                <div :class="{ 'allow' : isUndone(item) }">
                    {{ item.status }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list {
    display: flex;
    margin: auto;
    width: 100%;
    flex-direction: column;

    &__frame {
        display: flex;
        width: 50%;
        margin: auto;
        align-items: center;
        padding-left: 3em;
        margin-bottom: 1em;
        box-shadow: 0px 5px 20px 3px rgb(180, 180, 180);
        height: 4em;
        border-radius: 0.7em;
    }

    &__content {
        width: 50%;
        font-size: 20px;
    }

    &__button {
        display: flex;
        width: 50%;
        justify-content: flex-end;
        
        &__del {
            display: flex;
            width: 4em;
            height: 2em;
            cursor: pointer;
            color:#707070;
        
        }
    }
}

.allow {  
    display: flex;
    border-radius: 1em;
    width: 4em;
    height: 2em;
    justify-content: center;
    align-items: center;
    background-color: #4945E7;
    color: white;
    cursor: pointer;
}
</style>
