import Cookies from 'js-cookie'
// Define empty state 
export const state = () => { }

// create mutation to set 'user' cookie
export const mutations = {
    setUser(state, user) {
        state.user = user
        Cookies.set('user', user)
    },
    // logout user 
    logout(state) {
        state.user = null
        Cookies.set('user', null)
        this.$router.push('/')
    }
}
// getter to get username from state
export const getters = {
    username: state => {
        return state.user && state.user.username
    }
}
