export const required = (value) => {
    if(value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    return (value.length > maxLength) ? `Max length is ${maxLength}` : undefined;
}