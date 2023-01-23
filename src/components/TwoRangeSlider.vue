<template>
    <div>
        <div class="content">
            <div id="my-slider" se-min="-100" se-step="1" se-min-value="40" se-max-value="40" se-max="100" class="slider">
                <div class="slider-touch-left">
                <span></span>
                </div>
                <div class="slider-touch-right">
                <span></span>
                </div>
                <div class="slider-line">
                <span></span>
                </div>
            </div>
        </div>
        <div id="result">Min: 0 Max: 140</div>
    </div>
</template>
<script>

export default {
    setup() {
        
    },
}
</script>
<style scoped>
.content {
  width: 320px;
}
.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  padding: 6px;
  z-index: 2;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  background: #F0F0F0;
  border: 1px solid #A4A4A4;
  border-radius: 50%;
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 36px);
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: #F0F0F0;
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: orange;
}

</style>
