export const validateField = (fieldName:string, value:string, password?:string):string => {
    switch(fieldName) {
      case 'email':
        if(value === ''){
            return('Please fill out this field'); 
        }
        return (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        ? ''
        : 'Email is invalid';
      case 'password':
        if(value === ''){
            return('Please fill out this field'); 
        }
        return (value.length >= 6)
        ? ''
        : 'Password is too short'
      case 'confirm-password':
            if(value === ''){
                return('Please fill out this field'); 
            }
            return (value === password)
            ? ''
            : 'Not matching'
      default:
        return ''
    }
}