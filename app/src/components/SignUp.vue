<template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar class="blue darken-4 white--text">
                    <v-toolbar-title class="font-weight-medium">Регистрация</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field prepend-icon="person" :class="validateStatusEmail == false ? 'error' : ''" @input="validateEmail" name="login" label="Логин (e-mail)" type="text" v-model="email" autofocus></v-text-field>
                        <v-text-field prepend-icon="lock" :class="validateStatusPassword == false ? 'error' : ''" @input="validatePassword" name="password" label="Пароль" id="password" type="password" v-model="password"></v-text-field>
                        <v-text-field prepend-icon="lock" :class="validateStatusPassword == false ? 'error' : ''" @input="validatePassword" name="password" label="Подтвердите пароль" id="confirm-password" type="password" v-model="confirmPassword"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <a href="javascript:void(0);" class="sign-in-ref" @click.stop="$emit('sign-in')">Уже есть аккаунт?</a>
                    <v-spacer></v-spacer>
                    <v-btn class="blue darken-4 white--text" :disabled="disableButton" small>Зарегистрироваться</v-btn>
                </v-card-actions>
                <v-card-actions></v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
/* eslint no-console: 0*/
export default {
	data: function() {
		return {
			password: "",
			confirmPassword: "",
			email: "",
			validateStatusPassword: undefined,
			validateStatusEmail: undefined,
			disableButton: true
		};
	},
	methods: {
		validatePassword: function() {
			if (this.password == this.confirmPassword) {
				this.validateStatusPassword = true;
			} else {
				this.validateStatusPassword = false;
			}
			this.checkStatus();
		},
		validateEmail: function() {
			const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (pattern.test(this.email)) {
				this.validateStatusEmail = true;
			} else {
				this.validateStatusEmail = false;
			}
			this.checkStatus();
		},
		checkStatus: function() {
			if (this.validateStatusPassword && this.validateStatusEmail) {
				this.disableButton = false;
			} else {
				this.disableButton = true;
			}
		}
	}
};
</script>

<style scoped>
.error {
	color: red;
}
.sign-in-ref {
	text-decoration: none;
	color: #000;
	transition: color 0.5s ease;
}
.sign-in-ref:hover {
	color: #0d47a1;
}
</style>
