<template>
    <div>

                
        <div id="maingameplayer" :style="cssProps">
            
            <div class="d-flex justify-content-center" :style="logocss">
                <img v-bind:src="'images/logo.png'" class="logoimage"/> 
            </div>
            <div :style="gamecss">
                
                <modal name="win-modal" :width="300" :height="300" :top="100" :style="modalCSS" id="winmodal">
                    <div class="d-flex justify-content-center rounded-3" id="modalDIV">
                        <div>
                            <div class="text-center text-white modaltitle m-3 p-3">
                                Win!
                            </div>
                            <div class="text-center modalscore">
                                0.1
                            </div>
                            <div class="text-center text-white modalvalue">
                                Game Result - {{randomnumber.toFixed(0)}}
                            </div>
                            <div class="text-center text-white rounded-3 my-3 p-3 mx-1 modalbutton" @click="winhide()">
                                Play Again
                            </div>
                        </div>
                    </div>
                </modal>
                <modal name="failed-modal" :width="300" :height="300" :top="100" :style="modalCSS" id="winmodal">
                    <div class="d-flex justify-content-center rounded-3" id="modalDIV">
                        <div>
                            <div class="text-center text-white modaltitle m-3 p-3">
                                Failed
                            </div>
                            <div class="text-center modalscore">
                                0.1
                            </div>
                            <div class="text-center text-white modalvalue">
                                Game Result - {{randomnumber.toFixed(0)}}
                            </div>
                            <div class="text-center text-white rounded-3 my-3 p-3 mx-1 modalbutton" @click="failedhide()">
                                Play Again
                            </div>
                        </div>
                    </div>
                </modal>
                <div class="row" :style="mainshowcss">
                    <div class="" id="rangeSelector">
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
                    <div class="" id="mainplayer">
                        <!-- <div class="d-flex justify-content-center">
                            <div class="slidecontainer">
                            <input  id="showRange" type="range" min="1" max="100" value="0" class="slider">
                        </div>
                        </div> -->
                        
                        <div class="d-flex justify-content-center" id="paneltop">
                            <div id="timerpinkback" class="">
                                <div id="timerwhiteback">
                                    <div class="text-white text-center" id="timerback">
                                        {{reverseTime}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="" id="panel">
                            <div :style="notifierCss" class="d-flex justify-content-center">
                                <div class="slidecontainer">
                                    <input  id="showRange" type="range" min="1" max="100" value="0" class="slider">
                                </div>
                                <!-- <input class="slider" type="range" min="0" max="100" value="0" step="1" orient="vertical" list="tickmarks" id="showRange"> -->
                                <!-- <input class="sourcer1" value="0" type="range" orient="vertical" min="0" max="100" list="tickmarks" id="showRange"/> -->
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
                        </div>
                    </div>
                    <div class="">
                    </div>
                </div>
                <div :style="bottomCss">
                    <div id="animation">
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-1">
            <button type="button" class="w-100 btn text-white py-3 font-weight-bold" id="realplaybtn">Play for Real</button>
            <div class="rounded-3"  id="maingamecontroller">
                <div class="my-1 w-100">
                    <div class="row m-0">
                        <div class="width60 p-0 m-0">
                            <div class="d-flex  justify-content-between m-1 py-1 px-1 rounded-3 valuecontroller">
                                <button type="button" class="btn incdecbtn">-</button>
                                <div class="text-white font-bold text-center">
                                    0.1
                                </div>
                                <button type="button" class="btn incdecbtn">+</button>
                            </div>
                        </div>
                        <div class="width40 p-0 m-0">
                            <div class="d-flex justify-content-between p-1 m-1 ml-0 rounded-3">
                                <span  class="badge w-50 py-3 mr-1 valuecontroller">0.1</span>
                                <span  class="badge w-50 py-3 valuecontroller">0.3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-1">
                    <div class="row m-0">
                        <div class="width60 m-0 p-0">
                            <div class="p-1">
                                <button type="button" class="btn w-100 p-4" v-bind:class="{ 'btn-success': !awesome, 'btn-danger': awesome }" id="cancelbtn" @click="striker()"><h1 v-if="awesome">CANCEL</h1><h1 v-else>Next Bet</h1></button>
                            </div>
                        </div>
                        <div class="width40 m-0 p-0">
                            <div class="bg-primary rounded-3 m-1 p-1">
                                <div class="form-check form-switch py-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                    <label class="form-check-label text-white" for="flexSwitchCheckDefault">Auto</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomplus rounded-3 d-flex justify-content-center">
                <button type="button" class="btn btn-sm my-2 text-white bottomplusbtn">+</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";
export default {
  name: "home",
  
  components:{
      Slider,
  },
  data() {
    return {
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
            marginTop : `-40%`
        },
        modalCSS:{
            marginTop : '-100px'
        },
        value: [1, 100],
        orientation: 'vertical',
        direction: 'rtl',
        min: 1,
        max: 100,
        awesome:false,
        randomnumber:0,
        strikerState : 0,
        reverseTime: '0'
    };
  },
    mounted(){
    },
    methods:{
        sliderchange(){
            
        },
        closeModal(){
            document.getElementById('winnershow').style.display = "none";
        },
        striker() {
            document.getElementById('showRange').value = '0';
            this.awesome = !this.awesome
            this.reverseTime = 1;
            console.log(this.value);
            var minvalue = this.value[0];
            var maxvalue = this.value[1];
            var delayTimer;
            var increaseTime = 2;
            var that = this;
            delayTimer = setInterval(function(){
                if(that.reverseTime >0){
                    increaseTime = increaseTime - 0.1;
                    that.reverseTime = Math.abs(increaseTime.toFixed(1));
                    
                }
                document.getElementById('timerback').style.marginTop = Math.random()*10 + "px"
                document.getElementById('timerback').style.marginLeft = Math.random()*10 + "px"
                console.log(that.reverseTime);
                if(increaseTime <= 0){
                    clearInterval(delayTimer);
                    document.getElementById('timerback').style.marginTop = "8px"
                    document.getElementById('timerback').style.marginLeft = "8px"
                    var i=0;
                    var j = 0;
                    that.awesome = !that.awesome
                    
                    var strikerTimer;
                    // console.log(that.value[0], that.value[1], that.randomNumber);
                    strikerTimer = setInterval(function(){
                        i++;
                        // console.log(i,j);
                        if(i<13){
                            // console.log(""+(-361 * i)+"px " + (j * -348) +"px");
                            document.getElementById('animation').style.backgroundPosition = (-361*i) + "px" + " " + (-348*j) + "px";
                            // console.log(document.getElementById('animation').style.backgroundPosition)
                        }
                        else{
                            i=0;
                            j++;
                            if(j>=7){
                                j=0;
                                clearInterval(strikerTimer);
                                that.randomnumber = Math.random()*100;
                                document.getElementById('showRange').value = that.randomnumber;
                                console.log(minvalue, maxvalue);
                                if(that.randomnumber>minvalue && that.randomnumber<maxvalue)
                                {
                                    console.log("win");
                                    // document.getElementById('winnershow').style.display = "block";
                                    that.winshow()
                                }
                                else{
                                    console.log("failed")
                                    that.failedshow()
                                }
                            }
                        }
                    }, 10);
                    
                }
            },100);
        },
        winshow () {
            this.$modal.show('win-modal');
        },
        winhide () {
            this.$modal.hide('win-modal');
        },
        failedshow () {
            this.$modal.show('failed-modal');
        },
        failedhide () {
            this.$modal.hide('failed-modal');
        }
    }
};
</script>
<style scoped>
#maingameplayer{
    height: 60vh;
}
#rangeSelector{
    width: 33%;
    height: 100%;
}
#mainplayer{
    width: 33%;
}
.width60{
    width : 70%;
}
.width40{
    width : 30%;
}
.valueselect{
    margin : 20% 10% 0% 20%;
    height: 80%;
    background-color: #574663c0;
}
.rangeScroll{
    background-color: #7b6d85af;
}
.slidecontainer{
    width: 250px;
    position: absolute;
    margin-left: 0%;
    margin-top: 170px;
}

@media only screen and (max-height: 1200px) {
  .slidecontainer{
    width: 350px;
    margin-top: 250px;
  }
}
@media only screen and (max-height: 1080px) {
  .slidecontainer{
    width: 260px;
    margin-top: 170px;
  }
}
@media only screen and (max-height: 920px) {
  .slidecontainer{
    width: 250px;
    margin-top: 170px;
  }
}
@media only screen and (max-height: 860px) {
  .slidecontainer{
    width: 230px;
    margin-top: 150px;
  }
}
@media only screen and (max-height: 750px) {
  .slidecontainer{
    width: 180px;
    margin-top: 130px;
  }
}
@media only screen and (max-height: 670px) {
  .slidecontainer{
    width: 150px;
    margin-top: 120px;
  }
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
  -webkit-transform:rotate(270deg);
     -moz-transform:rotate(270deg);
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 0;
  background: url('~@/assets/star.svg');
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border: 0;
  background: url('~@/assets/star.svg');
  cursor: pointer;
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
    width: 95px;
    height: 95px;
    border-radius: 100%;
}
#timerback{
    font-weight: bolder;
    background-color: grey;
    position: absolute;
    width: 80px;
    text-align: center;
    height: 80px;
    border-radius: 100%;
    margin-top: 8px;
    margin-left: 8px;
    line-height: 80px;
    font-size: 40px;
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
#maingamecontroller{
    background-color: #524b4bc5;
}
#realplaybtn{
    background-color: #8a50bf;
    font-weight: bold;
}
.valuecontroller{
    background-color: #4c4c50c0;
}
.incdecbtn{
    background-color: #636368c0;
}
#cancelbtn{
    font-weight: bold;
}
.bottomplus{
    background-color: #524b4bc5;
}
.bottomplusbtn{
    background-color: #9faa18;
    border-radius: 40%;
    font-weight: bold;
}
#animation{
    position: absolute;
    margin-top: -270px;
    margin-left: -12px;
    background-image: url('~@/assets/animation.png');
    width: 361px;
    height: 348px;
    background-position: -361px 0px;
    z-index: 0;
}
#winnershow{
    position: absolute;
    width: 400px;
    height: 600px;
    background-color: #524b4bc5;
    z-index: 20;
    display:none;
    margin: 0px;
    padding-top: 50px;
}
#modalDIV{
    height: 400px;
    background-color: #8a50bf;
    margin: auto;

}
.modalbutton{
    background-color: #b69ece;
    
}

.modaltitle{
    font-weight: bolder;
    font-size:40px;
}
.modalscore{
    font-weight: bolder;
    font-size:40px;
    color: #fffb15;
}
.modalvalue{
    
}
</style>
<style src="@vueform/slider/themes/default.css"></style>