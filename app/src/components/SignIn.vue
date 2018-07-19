<template>
   <v-fade-transition>
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field prepend-icon="person" name="login" label="Логин (e-mail)" type="text"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password" type="password"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn flat color="primary">
                    Забыли пароль?
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Войти</v-btn>
                <v-btn color="success"
                    @click="$emit('sign-up')">Регистрация</v-btn>
            </v-card-actions>
        </v-card>
   </v-fade-transition>
</template>

<script>
export default {
	name: "SignIn"
};
</script>
