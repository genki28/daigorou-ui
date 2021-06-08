<template>
  <div class="icon-container">
    <p class="icon"></p>
  </div>  
</template>

<style lang="scss" scoped>
$honey-glow: #e7b74a;
$mint-soap: #ccd5b1;
$deep-space: #3e4144;

.icon-container {
  width: 410px;
  height: 268px;
  
  > .icon {
    width: 0px;
    border-right: 50px solid transparent;
    border-bottom: 50px solid #b2ce54;
    border-left: 50px solid transparent; 
    // width: 40px;
    // height: 34px;
    // position: relative;
    // margin: 0 auto;
    // border-style: solid;
    // border-color: transparent transparent $honey-glow transparent;
    // border-width: 3px 20px 32px 20px;
  }

  // > .icon::after {
  //   content: '!';
  //   position: absolute;
  //   left: -3px;
  //   top: 5px;
  //   color: $honey-glow;
  //   font-size: 17px;
  //   font-weight: bold;
  // }

  // > .icon::before {
  //   content: '';
  //   position: absolute;
  //   right: -16px;
  //   top: 4px;
  //   border-style: solid;
  //   border-color: transparent transparent white transparent;
  //   border-width: 0 16px 26px 16px;
  // }
}
</style>