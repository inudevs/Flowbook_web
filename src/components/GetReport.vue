<script>
export default {
  name: 'GetReport',
  data:
    function () {
      return {
        report: [
          {
            user: '1학년 3반 장종우',
            content: '밥이너무짜요 그리고 내가 너무 잘생겼고요 또 음 저 할말이없네요 여기까지할게요밥이너무짜요 그리고 내가 너무 잘생겼고요 또 음 저 할말이없네요 여기까지할게요밥이너무짜요 그리고 내가 너무 잘생겼고요 또 음 저 할말이없네요 여기까지할게요밥이너무짜요 그리고 내가 너무 잘생겼고요 또 음 저 할말이없네요 여기까지할게요밥이너무짜요 그리고 내가 너무 잘생겼고요 또 음 저 할말이없네요 여기까지할게요',
            status: '처리완료'
          },
          {
            user: '2학년 2반 ㅁㅁㅁ',
            content: '책의 겉표지가 너무 찢겨있어요 안에 야한게있어요',
            status: '처리완료'
          },
          {
            user: '1학년 3반 윤영창',
            content: '영창이 보러올사람은 11시 30분 까지 센트럴시티 터미널',
            status: '미처리'
          }
        ]
      }
    },
  methods : {
    isUndone: function (item) {
      return item.status === '미처리';
    }
  }
}

</script>

<template>
  <div class="report">
    <div class="report__frame" v-for="(item, idx) in report" :key="idx">
      <div class="report__user">
        {{ item.user }}
      </div>
      <div class="report__content" >
        {{ item.content }}
      </div>
      <div class="report__finish" :class="{ 'none' : isUndone(item) }">
        {{ item.status }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.report {
  display: flex;
  margin: auto;
  width: 70%;
  height: auto;
  padding-bottom: 2em;
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
  &__user {
    display: flex;
    width: 100%;
    text-align: left;
    padding-left: 2em;
    font-size: 23px;
    color: black;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  &__content {
    display: flex;
    width: 80%;
    text-emphasis: left;
    padding-left: 2em;
    padding-right: 5em;
    font-size: 19px;
    color: black;
    margin-bottom: 2rem;
  }
  &__finish {
    text-align: right;
    color: white;
    background-color: #4945E7;
    font-size: 20px;
    padding: 0.5em;
    margin-bottom: 2rem;
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    cursor: pointer;
    margin-left: 35em;
    &.none {
      text-align: right;
      color: white;
      background-color: #f03e3e;
      font-size: 20px;
      padding: 0.5em;
      margin-bottom: 2rem;
      border-radius: 1.5em 1.5em 1.5em 1.5em;
      cursor: pointer;
      margin-left: 35em;
    }
  }
}
</style>
