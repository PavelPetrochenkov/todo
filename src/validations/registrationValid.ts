export const validateField = (
    fieldName: string,
    value: string,
    password?: string
): string => {
    switch (fieldName) {
        case 'email':
            return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                ? ''
                : 'Email is invalid'
        case 'password':
            return value.length >= 6 ? '' : 'Password is too short'
        case 'confirm-password':
            return value === password ? '' : 'Not matching'
        default:
            return ''
    }
}

export const isInputEmpty = (input: string): string => {
    if (input === '') {
        return 'Please fill out this field'
    }
    return ''
}
