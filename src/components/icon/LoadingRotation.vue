<template>
  <div class="loading-rotation">
    <div class="loading">Loading...</div>
  </div>
</template>

<style lang="scss" scoped>
.loading-rotation {
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 350px;
  background-color: #80DEEA;
  margin: 76px auto;
  position: relative;
  top: 30%;
}

.loading {
  color: #ffffff;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 76px auto;
  position: relative;
  top: 30%;
  -webkit-animation: round 2s infinite ease;
  animation: cirlce 1s infinite ease, round 1s infinite ease;
}

@keyframes cirlce {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em;
  }
  // 12.5% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 25% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 37.5% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 50% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 62.5% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 75% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 87.5% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
  // 100% {
  //   box-shadow: 0 -0.83em 0 -0.4em;
  // }
}

@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  12.5% {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  37.5% {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  62.5% {
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  87.5% {
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>