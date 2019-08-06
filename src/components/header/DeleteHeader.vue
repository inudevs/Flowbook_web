<script>
export default {
    name: 'UploadHeader'    
}
</script>

<template>
<div>
    <div class="header">
        <div class="header__logo" onclick="location.href='/';">
            <img src="@/assets/FlowBook로고.jpg" class="header__logo__img">
        </div> 
        
        <div class="header__title">
            <div class="etc">
                <img src="@/assets/book_purple.jpg" class="img">
            </div>
            <div class="header__title__content">
                도서관리
            </div>
        </div>
    </div>
    <div class="help">
        <div class="help__box">
            <div class="help__text">
                도우미
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 80%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 1em;
    
    &__logo {
        display: flex;
        margin-top: 2em;
        margin-bottom: 0.5em;
        width: 30%;
        flex-direction: column;


        &__img {
            display: flex;
            align-self: center;
            width: 200px;
            height: 30px;
            cursor: pointer;
        }

    }

    &__title {
        display: flex;
        padding-left: 18em; 
        width: 70%;

        &__content {
            display: flex;
            color: #9896F1;
            font-size: 40px;
            align-items: center;
        }
    }

}


.help {
    display: flex;
    align-items: center;
    width: 49%;
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    
    &__box {
        width: 100%;
        height: 2rem;
        cursor: pointer;
    }

    &__text {
        float: right;
        border-radius: 1.5em 1.5em 1.5em 1.5em;
        display: flex;
        height: 2rem;
        background-color: #9896F1;;
        width: 10%;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: white;
    }
}
.img {
    width: 40px;
    height: 60px;
}
.etc {
    display: flex;
    align-items: center;
    padding-right: 1em;
}
</style>