<template>
  <div class="test-form">
    <div class="normal">
      <p class="title">Normal Form</p>
      <div class="input-form">
        <lable class="label">NormalForm</lable>
        <input class="form" type="text" placeholder="normal" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>


<style lang="scss" scoped>
$english-breakfast: #3f0f0f;
$links-awakening: #3cad7e;
$black-metal: #060707;

.test-form {
  background-color: $links-awakening;
  margin: 0 auto;
  width: 1200px;
  height: 150px;

  > .normal {
    > .title {
      font-size: 35px;
      font-weight: bold;
      color: white;
    }
  }
}

.input-form {
  margin: 0 auto;
  width: 150px;
  height: 150px;

    > .label {
      text-align: left;
      display: block;
      font-size: 14px;
      color: white;
    }

    > .form {
      padding-left: 10px;
      font-size: 20px;
      border: none;
      border-radius: 5px;
      color: $black-metal;
    }

    > .form:focus {
      box-shadow: 3px 3px rgba(0, 0, 0, .4), -1px 0 .4px rgba(0, 0, 0, .4);
      border: solid 2px #666;
      outline: none;
    }
}
</style>