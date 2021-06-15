<template>
  <div class="circle-container">
    <div class="circle">
      <span class="cover1"></span>
      <span class="cover2"></span>
      <!-- <span class="check">&check;</span> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle-container {
  width: 1000px;
  height: 350px;
  background-image: linear-gradient(135deg, #f67751, #4346f0 100%);
}
.circle {
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  box-shadow: inset 0 0 0 2px #fff;
  animation: filling 0.2s ease-in 0.8s forwards;
}
.cover1,
.cover2 {
  position: absolute;
  overflow: hidden;
  width: 50%;
  height: 100%;
}
.cover1 {
  left: 50%;
}
.cover1:before,
.cover2:before {
  position: absolute;
  content: "";
}
.cover1:before {
  width: 100%;
  height: 200%;
  background: #7496ea;
  transform-origin: 0 25%;
  animation: draw 5s linear forwards;
}
.cover2:before {
  left: -10%;
  width: 110%;
  height: 120%;
  background: #7393ea;
  transform-origin: 100% 40%;
  animation: draw 5s ease-out 5s forwards;
}
// .check {
//   position: absolute;
//   color: #7393ea;
//   width: 100%;
//   font-size: 3rem;
//   line-height: 2rem;
//   text-align: center;
//   top: 26px;
//   opacity: 0;
//   animation: check 0.2s ease-in-out 0.9s forwards;
// }
/* 円を描くアニメーション */
@keyframes draw {
  0% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/* 塗りのアニメーション */
@keyframes filling {
  0% {
    box-shadow: inset 0 0 0 9px #fff;
  }
  75% {
    box-shadow: inset 0 0 0 50px #fff;
  }
  100% {
    box-shadow: inset 0 0 0 9px #fff;
  }
}
/* チェックマークのアニメーション */
// @keyframes check {
//   0% {
//     transform: scale(0.5) rotate(30deg);
//     opacity: 0;
//   }
//   90% {
//     transform: scale(1.3) rotate(-15deg);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1) rotate(0deg);
//     opacity: 1;
//   }
// }
</style>