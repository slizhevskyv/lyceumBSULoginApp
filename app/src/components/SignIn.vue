<template>
<v-card>
    <v-toolbar color="indigo" dark>
        <v-toolbar-title>Авторизация</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
        <v-form>
            <v-text-field prepend-icon="person" name="login" label="Логин (e-mail)" type="text" v-model="login"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password" type="password" v-model="password"></v-text-field>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-btn flat color="primary">
            Забыли пароль?
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="signInUser">Войти</v-btn>
        <v-btn color="success" @click="$emit('sign-up')">Регистрация</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
// import api from "../services/apiService.js";
export default {
	name: "SignIn",
	data: function() {
		return {
			login: "",
			password: ""
		};
	},
	methods: {
		signInUser: function() {
			// var sendObj = {
			// 	login: this.login,
			// 	password: this.password
			// };
			// api.signInUser(sendObj).then(this.onSuccess);
		}
	}
};
</script>
