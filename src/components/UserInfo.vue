<template>
    <div class="UserDetails">
        <div>
            <br />
            <strong>{{ userDetails.first_name }} {{ userDetails.last_name }}</strong>
            <br />
            <img v-bind:src="userDetails.avatar" alt width="500" />
            <p>{{ userDetails.email }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import getUsers from '../modules/userInfo'

export default {
    props: ['id'],

    async setup(props) {
        const { userDetails, error, load } = getUsers(); //destructuring 
        const id = ref(props.id);

        await load(id.value);

        return {
            userDetails,
            error
        }
    },
}
</script>

<style lang="scss" scoped>
</style>