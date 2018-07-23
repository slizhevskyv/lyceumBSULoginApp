import Vue from "vue";
import CONSTANTS from "../constants/constants";



export default {
    signInUser: function (data) {
        return Vue.axios.post(CONSTANTS.SIGN_IN_URL, data);
    },
    signUpUser: function (data) {
        return Vue.axios.post(CONSTANTS.SIGN_UP_URL, data);
    }
}