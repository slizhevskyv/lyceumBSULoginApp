<template>
	<v-app>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<transition name="fade" mode="out-in">
						<sign-up @sign-in="isSignUpForm = !isSignUpForm" v-if="isSignUpForm"></sign-up>
						<sign-in @sign-up="isSignUpForm = !isSignUpForm" v-else></sign-in>
					</transition>
				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
import signInComponent from "./components/SignIn";
import signUpComponent from "./components/SignUp";

export default {
	name: "app",
	data: function() {
		return {
			isSignUpForm: false
		};
	},
	components: {
		"sign-in": signInComponent,
		"sign-up": signUpComponent
	}
};
</script>

<style>
	.fade-enter-active, .fade-leave-active{
		transition: opacity .3s ease-out;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
	.fade-enter-to, .fade-leave{
		opacity: 1;
	}

</style>
