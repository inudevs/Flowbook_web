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
                교사추천도서 업로드
            </div>
        </div>
    </div>
    <div class="help">
        <div class="help__box">
            도움
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
        padding-left: 14em; 
        width: 70%;

        &__content {
            display: flex;
            color: #9896F1;
            font-size: 25px;
            align-items: center;
        }
    }

}


.help {
    display: flex;
    align-items: center;
    width: 40%;
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    
    &__box {
        width: 5em;
        display: flex;
        height: 2rem;
        justify-content: center;
        background-color: #9896F1;
        border-radius: 1.5em 1.5em 1.5em 1.5em;
        color: white;
        align-items: center;
        cursor: pointer;
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