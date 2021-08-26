
export const add_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

export const remove_user = () => {
    return {
        type: "REMOVE_USER"
    }
}

