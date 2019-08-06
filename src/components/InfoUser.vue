<script>
export default {
  name: 'InfoUser'
}
</script>

<template>
    <div class="info">
        <div class="info__teacher">
            <div class="info__show">
                OO학교 OO선생님 입니다.
            </div>
            <div class="info__out" onclick="logout">
                로그아웃
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info {
    display: flex;
    margin: auto;
    height: 15vh;
    width: 100%;
    padding-top: 5em;
    padding-bottom: 16em;
    &__teacher {
        display: flex;
        width: 80%;
        margin: auto;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
        height: 4em;
        border-radius: 1.5em 1.5em 1.5em 1.5em;
    }

    &__show {
        width: 100%;
        align-items: center;
        text-align: left;
        padding-left: 2em;
        color: #707070;
        font-size: 20px;
    }

    &__out {
        width: 100%;
        text-align: right;
        color: #707070;
        font-size: 20px;
        padding-right: 2em;
        cursor: pointer;
    }
}
</style>
