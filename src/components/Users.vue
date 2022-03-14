<template>
    <h1>henlo users</h1>
    <br />

    <div v-for="user in state.users" :key="user.id">
        <router-link
            :to="{
                name: 'UserDetails',
                params: {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    avatar: user.avatar
                }
            }"
        >
            <strong>{{ user.first_name }} {{ user.last_name }}</strong>
            <br />
            <img v-bind:src="user.avatar" alt />
            <p>{{ user.email }}</p>
        </router-link>

        <router-view></router-view>
        <hr />
    </div>
</template>

<!-- With -->
<script>
import { reactive, onMounted } from 'vue'
export default {
    async setup() {
        const state = reactive({
            users: null,
            error: null
        });
        const load = async () => {
            try {
                const usersResponse = await fetch('https://reqres.in/api/users?')
                await usersResponse.json().then(userData => {
                    state.users = userData.data
                })
            }
            catch (err) {
                state.error = err.message;
                console.log(err)
            }
        }
        onMounted(() => {
            load();
        })
        return {

            state
        }
    }
}
</script>

<style lang="css" scoped>
</style>
