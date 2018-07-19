<template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar class="blue darken-4 white--text">
                    <v-toolbar-title class="font-weight-medium">Авторизация</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Логин (e-mail)" type="text"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <a href="javascript:void(0);" class="sign-up-ref">Забыли пароль?</a>
                    <v-spacer></v-spacer>
                    <v-btn class="blue darken-4 white--text" small>Войти</v-btn>
                    <v-btn class="red darken-4 white--text" @click="$emit('sign-up')" small>Регистрация</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
	name: "SignIn"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up-ref {
	text-decoration: none;
	color: #000;
	transition: color 0.5s ease;
}
.sign-up-ref:hover {
	color: #0d47a1;
}
</style>
