<template>
  <div class="container">
    <div class="btn">
      <div class="btn-back">
        <span class="btn-back-inner"></span>
      </div>
      <span class="btn-heart">&hearts;</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1000px;
  height: 350px;
  background-image: linear-gradient(135deg, #f67751, #4346f0 100%);
}
.btn {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 60px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  top: 35px;
  left: 500px;
}

.btn-heart {
  position: relative;
  color: #f78198;
  font-size: 1.8rem;
  transform: scaleY(0.8);
  transition: 0.35s ease-in-out;
}

.btn-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotation 4s infinite linear;
}

.btn-back-inner {
  position: absolute;
  border: 0 solid #fff;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.15s ease-out;
}
/* ハートのアニメーション */
.btn:hover .btn-heart {
  margin: 0 auto;
  color: #fff;
  transform: rotate3d(0, -1, 0, 180deg) scale(1.2, 0.9);
}
/* 背景のアニメーション */
.btn:hover .btn-back-inner {
  border: 1px dashed #fff;
  background-color: rgba(255, 255, 255, 0);
  transform: scale(1.3);
}
/* 円の回転アニメーション */
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
