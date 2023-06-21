// we need a base path that we can use to refer our requests to the location of our routes
import sendRequest from './send-request';
const BASE_URL = '/api/users'



// export async function signUp(userData) {
//     // fetch uses an options object as a second arg to make requests
//     // this is useful for anything other than a basic GET
//     // this means any requests that send data, headers, etc.
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData)
//     })

//     // check that the request was successful
//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error('Invalid Sign Up')
//     }
// }





// export async function login(credentials) {
//     // fetch uses an options object as a second arg to make requests
//     // this is useful for anything other than a basic GET
//     // this means any requests that send data, headers, etc.
//     const res = await fetch(`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials)
//     })

//     // check that the request was successful
//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error('Invalid Log In')
//     }
// }


export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
  }

  
export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
  }


export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
  }