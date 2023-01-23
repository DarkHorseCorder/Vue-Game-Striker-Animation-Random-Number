<template>
<section>
  <b-notification type="is-success" aria-close-label="Close notification">Pls insert Username and Password</b-notification>
       <b-field label="Username" Username:
            :type="{ 'is-danger': hasError }"
            :message="{ 'Username is not available': hasError }">
            <b-input value="johnsilver" maxlength="30" v-model="username" required>    </b-input>
        </b-field>

        <b-field label="Password" Password:
            :type="{ 'is-danger': hasError }"
            :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
            <b-input value="123" type="password" maxlength="30" v-model="password"></b-input>
        </b-field>
        <b-button label="Login" type="is-primary"  @click.prevent="login" />

    </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
        hasError: false,
        username: "",
        password: "",
    };
  },
  methods: {
    async login() {
        if (this.username == "" || this.password.length<=0) {
            this.hasError = true
        } else {
            this.hasError = false;
            let response = await this.$store.dispatch("login", {
            username: this.username,
            password: this.password,
            });
            if (response) {
                this.$router.replace("create");
            } else {
                ///
            }
        }
    },
  },
};
</script>