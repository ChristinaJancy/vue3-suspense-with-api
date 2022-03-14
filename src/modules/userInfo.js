import { ref } from 'vue'

export default function getUsers() {
    // const id = ref(propId);
    const userDetails = ref([])
    const error = ref(null)

    const load = async (id) => {
        try {
            const usersResponse = await fetch
                ("https://reqres.in/api/users/" + id)
            // Think of it as a "for each"-loop 
            await usersResponse.json().then(userData => {
                userDetails.value = userData.data
            })
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {
        userDetails,
        error,
        load
    }
}