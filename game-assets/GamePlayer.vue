<template>
    <div id="maingameplayer" :style="cssProps">
        <div class="d-flex justify-content-center" :style="logocss">
            <img v-bind:src="'images/logo.png'" class="logoimage"/> 
        </div>
        <div :style="gamecss">
            <div class="row" :style="mainshowcss">
                <div class="col-sm-4" id="rangeSelector">
                    <div class="valueselect rounded-3 d-flex align-items-center flex-column">
                        <div class="text-white text-center m-3 p-3">
                            2.089x
                        </div>
                        <div class="text-white text-center">
                            100
                        </div>
                        <Slider v-model="value" :orientation="orientation" :min="min" :max="max" :direction="direction" @change='sliderchange()'/>
                        <div class="text-white text-center">
                            1
                        </div>
                        <div class="text-white text-center rangeScroll m-2 p-2 rounded-3">
                            {{value[0]}}~{{value[1]}}
                        </div>
                    </div>
                    
                </div>
                <div class="col-sm-4" id="mainplayer">
                    <div class="d-flex justify-content-center" id="paneltop">
                        <div id="timerpinkback" class="">
                            <div id="timerwhiteback">
                                <div class="text-white text-center" id="timerback">
                                    1.8
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="" id="panel">
                        <div :style="notifierCss" class="d-flex justify-content-center">
                            <input id="sourcer1" type="range" orient="vertical" min="0" max="100" list="tickmarks"  class="slider"/>
                            <datalist id="tickmarks" class="text-white">
                                <option value="0" label="0%">0</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                                <option value="90">90</option>
                                <option value="100">100</option>
                            </datalist>
                        </div>
                        <div :style="foundCss">
                        </div>
                        <!-- <img v-bind:src="'images/found.svg'" class="foundimage"/> -->
                    </div>
                </div>
                <div class="col-sm-4">
                </div>
            </div>
            <div :style="bottomCss">
                
            </div>
        </div>
    </div>
</template>
<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";
export default{

    components: { 
        Slider,
    },
    data() {
        return{
            logocss: {
                
            },
            gamecss:{
                backgroundImage: `url(${require('@/assets/unnamed.jpg')})`,
                height: `95%`,
                marginTop : `-5%`,
                paddingTop : `10%`
            },
            mainshowcss : {
                
                backgroundSize : `cover`,
                height : `90%`
            },
            cssProps: {
                // backgroundImage: `url(${require('@/assets/unnamed.jpg')})`,
                margin : `0.5rem`,
                marginTop : `5%`,
                borderRadius : `20px`
            },
            bottomCss: {
                backgroundImage: `url(${require('@/assets/bottom.png')})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize : `100%, 100%`,
                height:`15%`
            },
            notifierCss:{
                backgroundImage: `url(${require('@/assets/panel.svg')})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
                backgroundSize : `auto 100%`,
                height : `80%`
            },
            foundCss:{
                backgroundImage: `url(${require('@/assets/found.svg')})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
                backgroundSize : `100% auto`,
                height : `20%`,
                marginTop : `-10%`
            },
            value: [1, 100],
            orientation: 'vertical',
            direction: 'rtl',
            min: 1,
            max: 100
        };
    },
    mounted(){
        console.log(this.value);
    },
    methods:{
        sliderchange(){
            
        }
    }
};
</script>
<style scoped>
#maingameplayer{
    height: 60vh;
}
.valueselect{
    margin : 20% 10% 0% 20%;
    height: 80%;
    background-color: #574663c0;
}
.rangeScroll{
    background-color: #7b6d85af;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 23px;
  height: 24px;
  border: 0;
  /* background: url('contrasticon.png'); */
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 23px;
  height: 24px;
  border: 0;
  /* background: url('contrasticon.png'); */
  cursor: pointer;
}
#sourcer1{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 8px;
    height: 270px;
    margin: 60px 5px ;
}
.logoimage{
    width:50%;
}
#paneltop{

}
#timerpinkback{
    background-color: #8a50bf;
    width: fit-content;
    padding: 10px;
    border-radius: 100%;
}
#timerwhiteback{
    font-weight: bolder;
    background-color: white;
    width: fit-content;
    padding: 10px;
    border-radius: 100%;
}
#timerback{
    font-weight: bolder;
    
    background-color: grey;
    width: fit-content;
    padding: 20px;
    border-radius: 100%;
}
#panel{
    margin-top: -50px;
    z-index: -2;
    height: 100%;
}
.panelimage{
    height: auto;
    width: 40%;
}
.foundimage{
    height: auto;
    width: 100%;
    margin-top: -10px;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>