<template>
    <div class="mx-1">
        <button type="button" class="w-100 btn text-white py-3 font-weight-bold" id="realplaybtn">Play for Real</button>
        <div class="rounded-3"  id="maingamecontroller">
            <div class="my-1 w-100">
                <div class="row m-0">
                    <div class="col-sm-9 p-0 m-0">
                        <div class="d-flex  justify-content-between m-1 py-1 px-1 rounded-3 valuecontroller">
                            <button type="button" class="btn incdecbtn">-</button>
                            <div class="text-white font-bold text-center">
                                0.1
                            </div>
                            <button type="button" class="btn incdecbtn">+</button>
                        </div>
                    </div>
                    <div class="col-sm-3 p-0 m-0">
                        <div class="d-flex justify-content-between p-1 m-1 ml-0 rounded-3">
                            <span  class="badge w-50 py-3 mr-1 valuecontroller">0.1</span>
                            <span  class="badge w-50 py-3 valuecontroller">0.3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-1">
                <div class="row m-0">
                    <div class="col-sm-9 m-0 p-0">
                        <div class="p-1">
                            <button type="button" class="btn w-100 p-4" v-bind:class="{ 'btn-success': !awesome, 'btn-danger': awesome }" id="cancelbtn" @click="striker()"><h1 v-if="awesome">CANCEL</h1><h1 v-else>Next Bet</h1></button>
                        </div>
                    </div>
                    <div class="col-sm-3 m-0 p-0">
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
</template>
<script>

export default({
    data() {
        return{
            awesome:false,
            randomnumber:''
        }
    },
    methods:{
        striker: function () {		
            this.awesome = !this.awesome
            this.randomNumber = Math.random()*100;
        }
    }
})
</script>
<style scoped>
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
</style>
