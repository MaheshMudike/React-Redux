
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 

//// User Api calling Using Middle Ware 

      //Actions  & creatords 

      const GETUSERS_STARTED = 'GETUSERS_STARTED'
      const GETUSERS_SUCCESS = 'GETUSERS_SUCCESS'
      const GETUSERS_FAILED = 'GETUSERS_FAILED'


        export function getusersStarted(){
         return  {
           type : GETUSERS_STARTED
         }
        }
        export function getusersSuccess(users){
          return {
            type : GETUSERS_SUCCESS,
            users
          }
       }
       export function getusersFailed(error){
          return {
            type : GETUSERS_FAILED,
            error
          }
       }

   // thumnk

   export function getUsers () {
     return function (dispatch){
       dispatch(getusersStarted())
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=> response.json())
       .then(users=>{
         dispatch(getusersSuccess(users))
       })
       .catch((err)=>{
         dispatch(getusersFailed())
       })
     }
   }

   // Reducers 
  let intialObject = {
    users : [],
    loading : false,
    error : false
  }

   var users = (state = intialObject, action)=>{

     switch (action.type){
       case GETUSERS_STARTED:
         return {
           users  : [],
           loading : true,
           error : false
         }
         case GETUSERS_SUCCESS : 
         return {
           users  : action.users,
           loading : false,
           error : false
         }
         case GETUSERS_FAILED : 
          return {
           users  : [],
           loading : false,
           error : true
          }
        default :
           return state 
     }

   }

   // store using middle ware and fetch api data 

    export const store = createStore(users,applyMiddleware(thunk));