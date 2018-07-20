<template>
    <v-card>
        <v-toolbar color="indigo" dark>
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field prepend-icon="person"
                            name="login" 
                            label="Логин (e-mail)" 
                            v-model="email" 
                            :rules="[rules.required, rules.email]">
                            </v-text-field>
                <v-text-field prepend-icon="lock"
                            name="password" 
                            label="Пароль"
                            type="password" 
                            v-model="password"
                            :rules="[rules.required, rules.validatePassword]"></v-text-field>
                <v-text-field prepend-icon="lock"
                            name="password"
                            label="Подтвердите пароль"
                            type="password" 
                            v-model="confirmPassword"
                            :rules="[rules.required, rules.validatePassword]"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn flat color="primary"
                    @click.stop="$emit('sign-in')">
                    Уже есть аккаунт?
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success"
                :disabled="toggleButton">
                Зарегистрироваться
            </v-btn>
        </v-card-actions>
        <v-card-actions></v-card-actions>
    </v-card>
</template>

<script>
/* eslint no-console: 0*/
export default {
    data: function() {
        return {
            password: "",
            confirmPassword: "",
            email: "",
            isPasswordInvalid: true,
            isEmailInvalid: true,
            rules: {
                required: value => !!value || 'Заполните поле!',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                
                    this.isEmailInvalid = !pattern.test(value)
                    
                    return pattern.test(value) || 'Неверно заполнено поле!';
                },
                validatePassword: () => {
                    if(this.password != this.confirmPassword) {
                        this.isPasswordInvalid = true;
                        return "Введеные пароли не совпадают";
                    } else if(this.password == this.confirmPassword) {
                        this.isPasswordInvalid = false;
                        return true;
                    }
                }
        }
        };
    },
    computed: {
        toggleButton: function() {
            if(this.isEmailInvalid || this.isPasswordInvalid) {
                return true;
            } else {
                return false;
            }
        }
    }
};
</script>
