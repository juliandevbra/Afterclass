export const Auth = () => {
    const token = localStorage.getItem('token')
    return token
}