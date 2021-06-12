<template>
  <div class="submit-button">
    <button class="submit">サブミット</button>
  </div>
</template>

<style lang="scss" scoped>
$evil-lyn: #ffd803;
$caramel-finish: #ffd799;
.submit-button {
  
  > .submit {
    width: 350px;
    height: 40px;
    border: 2px solid white;
    border-radius: 30px;
    background-color: $evil-lyn;
    cursor: pointer;

    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    font-weight: bold;
  }

  > .submit:hover {
    opacity: .8;
    filter: brightness(103%);
  }

  > .submit:active {
    border: 2px solid $caramel-finish;
  }
}
</style>