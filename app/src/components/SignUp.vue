<template>
   <v-fade-transition>

        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field prepend-icon="person"
                                name="login" 
                                label="Логин (e-mail)" 
                                v-model="email" 
                                :rules="[rules.required, rules.email]"
                                autofocus></v-text-field>
                    
                    <v-text-field prepend-icon="lock" 
                                :class="validateStatusPassword == false ? 'error' : ''" 
                                @input="validatePassword" 
                                name="password" 
                                label="Пароль" 
                                id="password" 
                                type="password" 
                                v-model="password"></v-text-field>
                    <v-text-field prepend-icon="lock" 
                                :class="validateStatusPassword == false ? 'error' : ''" 
                                @input="validatePassword" 
                                name="password" 
                                label="Подтвердите пароль" 
                                id="confirm-password" 
                                type="password" 
                                v-model="confirmPassword"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn flat color="primary"
                       @click.stop="$emit('sign-in')">
                       Уже есть аккаунт?
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success"
                    :disabled="passwordInvalid || emailInvalid">
                    Зарегистрироваться
                </v-btn>
            </v-card-actions>
            <v-card-actions></v-card-actions>
        </v-card>
   </v-fade-transition>
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
            disableButton: true,
            rules: {
                required: value => !!value || 'Required.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                
                    this.emailInvalid = !pattern.test(value)
                    
                    return pattern.test(value) || 'Invalid e-mail.'
                }
        }
        };
    },
    methods: {
        validatePassword: function() {
            this.passwordInvalid = this.password !== this.confirmPassword
        }
    }
};
</script>
