<template>
    <Suspense>
        <template #default>
            <UserInfo :id="id" />
        </template>
        <template #fallback>
            <Spinner />
        </template>
    </Suspense>
    <v-btn rounded="pill" color="blue" v-on:click="goBack">Go back</v-btn>
</template>


<script>
import { useRouter, useRoute } from 'vue-router'
import UserInfo from '../components/UserInfo.vue'
import Spinner from '../components/Spinner.vue'

export default {
    name: 'UserDetails',
    components: {
        UserInfo,
        Spinner
    },
    props: ['id'],
    setup() {
        const route = useRoute();
        const router = useRouter();
        const id = route.params.id;

        function goBack() {
            window.history.back()
        }
        return {
            id,
            goBack
        }
    },
}
</script>


<style lang="css" scoped>
</style>
