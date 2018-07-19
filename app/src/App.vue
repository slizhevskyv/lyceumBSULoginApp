<template>
	<sign-up @sign-in="changeState = !changeState" v-if="changeState"></sign-up>
	<sign-in @sign-up="changeState = !changeState" v-else></sign-in>
</template>

<script>
import signInComponent from "./components/SignIn";
import signUpComponent from "./components/SignUp";

export default {
	name: "app",
	data: function() {
		return {
			changeState: false
		};
	},
	components: {
		"sign-in": signInComponent,
		"sign-up": signUpComponent
	}
};
</script>

<style>
html,
body {
	font-family: "Roboto";
	height: 100%;
}
</style>
