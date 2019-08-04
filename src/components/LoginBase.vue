<script>
export default {
  name: 'LoginBase'
}
</script>

<template>
    <div class="login">
        <div class="login__frame">
            <section class="content">
                <h1 class="content__title__detail">
                    FlowBook
                </h1>
                <h2 class="content__title">
                    로그인
                </h2>
                <form class="box" action="/" method="url">
                    <input type="text" name="id" placeholder="  아이디">
                    <input type="password" name="pw" placeholder="  비밀번호">
                    <input type="submit" name="Login" value="로그인">
                </form>
                <a href="/auth/register">
                    <h3 class="content__title">
                        <div class="content__title__detail" id="register">회원가입</div>
                    </h3>
                </a>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 50%;
    height: 100vh;;
    margin: auto;

    &__frame {
        display: flex;
        width: 100%;
        height: 50%;
        align-items: center;
        justify-content: center;
        box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
        border-radius: 2em 2em 2em 2em;
    }
}

.content {
    display: flex;
    width: 70%;
    height: 70%;
    padding: 3em;
    order: 2;

    &__title {
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        margin: 0;
        font-size: 2em;

        &__detail {
            font-size: 2.5em;
            display: flex;
            width: 100%;
            justify-content: center;
            margin: 0;
            background: -webkit-linear-gradient(  #4D66D4,#C299EA );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        }
    }
}

.box {
    position: relative;
    margin: 0;
    margin-top: 3em;
    text-align: center;
    widows: 100%;
    height: 100%;
    }

.box input[type = "text"],.box input[type = "password"]{
    border: 0;
    display: block;
    width: 70%;
    height: 3em;
    margin: 20px auto;
    background-color: #E8E8E8;
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 7px;
    border-radius: 2em 2em 2em 2em;
    cursor:text;
}

.box input[type = "submit"] {
    border: 0;
    display: block;
    width: 35%;
    height: 3em;
    margin: 20px auto;
    background: linear-gradient( to bottom, #4D66D4,#C299EA );
    font-size: 2em;
    margin-top: 3em;
    margin-bottom: 2em;
    border-radius: 5em 5em 5em 5em;
    color: white;
    cursor:pointer;
    padding: 0;
    font-size: 15px;
}

#register {
    font-size: 0.6em;
    color: black;
    border-right: 5px;
}

#base {
    display: block;
}

input {
    padding-left: 1rem;
    outline: none;
}

a {
    text-decoration: none;
}
</style>
