// import axios from 'axios';

// const initialState = {
//     username: null,
//     loginStatus: null
//     // ,triggers: null
// };

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case 'LOGIN_FULFILLED':
//         console.log('this is LOGIN payload',action.payload);
//             return Object.assign({},state,{username: action.payload.username, loginStatus: 'Success'});

//         case 'LOGIN_PENDING':
//                 return Object.assign({},state,{loginStatus: 'Pending'}); 

//         case 'LOGIN_REJECTED':
//         console.log('this is LOGIN rejected payload',action.payload);
//                 return Object.assign({},state,{loginStatus: ''});

//         case 'GETUSERINFO_FULFILLED':
//         console.log('22222222 this is getuserinfo payload',action.payload);
//                 return Object.assign({},state,{username: action.payload.username, loginStatus: 'Success'});
                
//         case 'LOGOUT_FULFILLED':
//             // console.log('this is LOGOUT payload',action.payload);
//                 return Object.assign({},state,{ username: null,
//                                                 loginStatus: null}
//                                         );

//     default:
//       return state
//   }
// };

// export function login(user){
//     return {
//         type: 'LOGIN',
//         payload: axios.post('/api/login', user)
//             .then( response => {
//                 // console.log(response.data);
//             return response.data;
//           })
//     }
// };

// export function getUserInfo(){
//     return {
//         type: 'GETUSERINFO',
//         payload: axios.get('/api/me')
//         .then( response => {
//              console.log('1111111 this is getuserinfo response.data',response.data);
//         return response.data;
//     })
//     }
// };

// export function logout(){
//     return {
//         type: 'LOGOUT',
//         payload: axios.post('/api/logout')
//             .then( response => {
//                 // console.log(response.data);
//             return response.data;
//           })
//     }
// };
