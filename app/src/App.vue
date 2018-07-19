<template>
	<v-app>
		<v-container fluid fill-height>
    		<v-layout align-center justify-center>
        		<v-flex xs12 sm8 md4>		
					<v-toolbar color="indigo" dark>
						<v-toolbar-title>{{ isSignUpForm ? 'Регистрация' : 'Авторизация' }}</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
		
					<sign-up @sign-in="isSignUpForm = !isSignUpForm" v-if="isSignUpForm"></sign-up>
					
					<sign-in @sign-up="isSignUpForm = !isSignUpForm" v-if="!isSignUpForm"></sign-in>
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
