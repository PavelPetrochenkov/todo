import axios from 'axios'

export function* loginUser(action: any) {
  yield axios({
    method: 'post',
    url: 'http://localhost:1328/api/login',
    data: {
      login: action.payload.login,
      password: action.payload.password,
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log('er: ', err)
    })
}
