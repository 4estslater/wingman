class User {
    static getUser() {
        return {
            uid: 'uid123',
            handle: 'handle123'
        }
    }
}


export const getUser = async() => {
    return await User.getUser();
}
