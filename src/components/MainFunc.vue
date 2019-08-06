<script>
export default {
  name: 'MainFunc',
  data:
    function () {
      return {
        menu: [
          {
              name: '학생관리',
              href: '/manage/student',
              icon: 'student.jpg'
          },
          {
              name: '교사추천도서',
              href: '/upload',
              icon: 'book.jpg'
          },
          {
              name: '도서관리',
              href: '/manage/book',
              icon: 'book.jpg'
          },
          {
              name: '신고접수',
              href: '/report',
              icon: 'book.jpg'
          }
        ]
      }
  }
}
</script>

<template>
  <div class="func">
    <div class="func__base">
      <div class="func__frame">
        <li class="func__item" id="hover">
          <span class="func__img">
            <img src="@/assets/student.jpg" class="func__icon">
          </span>
          <span class="func__text">
            학생관리
          </span>
        </li>
        <li class="func__item" id="hover">
          <span class="func__img">
            <img src="@/assets/book.jpg" class="func__icon">
          </span>
          <span class="func__text">
            교사추천도서
          </span>
        </li>
        <li class="func__item" id="hover">
          <span class="func__img">
            <img src="@/assets/book.jpg" class="func__icon">
          </span>
          <span class="func__text">
            도서관리
          </span>
        </li>
        <li class="func__item" id="hover">
          <span class="func__img">
            <img src="@/assets/신고.jpg" class="func__icon">
          </span>
          <span class="func__text">
            신고접수
          </span>
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.func {
  margin: auto;
  width:100%;
  
  &__base {
    width: 62em;
    height: 46em;
    margin: auto;
  }
  &__frame {
    display: grid;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-columns: 14em 14em 14em 14em;
    grid-template-rows: 14em 14em 14em;
      
  }
  
  &__item {    
    display: block;
    padding: 1.5em;
    box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    cursor: pointer;
  }  
  &__item:hover {
    opacity: 1;
    background-color: white;
    border: 0.5px solid rgb(231, 231, 231);
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    transition: all 0.3s ease-in-out;
    transform: scale(1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }  
  
  &__text {
    display: flex;
    margin-top: 2.5em;
    width: 100%;
    align-items: center;
    align-self: flex-end;
    justify-content: center;
    color: black;
    font-size: 16px;
  }  
  &__img {
    display: flex;
    margin-top: 2em;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
  }  
  &__icon {
    display: block;
    width: 60px;
    height: 60px;
  }  
  &__summary {
    display: flex;
  }
}

</style>