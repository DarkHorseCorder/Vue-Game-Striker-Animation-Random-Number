import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCompositionAPI from '@vue/composition-api'
import VModal from 'vue-js-modal'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(Buefy);
Vue.use(VModal);
Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
library.add(faHatWizard);
Vue.component('font-awesome-icon', FontAwesomeIcon);