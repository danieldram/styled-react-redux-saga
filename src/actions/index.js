
export const update = ({type, payload}) => {
    return { type ,payload}
}

export const reset = ({type}) => {
    return {type}
}