import Vue from 'vue'
import wcPullUpLoad from './wcPullUpLoad'

export default {
	install (Vue) {
		Vue.component('wcPullUpLoad', Vue.extend(wcPullUpLoad));
	}
}