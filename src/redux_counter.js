// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk' 


//    ///counter Store code ......

// //Actions 
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'

// export  function increment(){
//     return {
//         type : INCREMENT
//     }
// }
// export  function decrement(){
//     return {
//         type : DECREMENT
//     }
// }
// //reducers 
//  let IntialState = {
//      count : 0,
//      disabled : true
//  }
// let counter =(state=IntialState , action )=>{
//     console.log(action.type)
//     switch(action.type){
//         case INCREMENT:
//             return  {
//                 count :  state.count+1,
//                 disabled : false
//             };
//         case DECREMENT:
//             return  {
//                 disabled : (state.count === 1) ? true : false,
//                 count :  state.count-1,
//             };
//         default:
//             return state;
//     }
// }
// //Store 

// export const store=createStore(counter);





// //Bank Balance Example ......


// // const WITHDRAW = 'WITHDRAW'
// // const DEPOSITE = 'DEPOSITE'

// // // Action Creator

// // export function withdraw(amount) {
// //   return {
// //     type: WITHDRAW,
// //     amount
// //   }
// // }

// // export function deposite(amount) {
// //   return {
// //     type: DEPOSITE,
// //     amount
// //   }
// // }

// // // reducers 
// // let intialObject = {
// //   balance : 0,
// //   disabled : true
// // }

// // let balanceCheck = (state = intialObject, action) => {
// //   console.log(action.amount);
// //   console.log(state.balance);
// //   switch (action.type) {
// //     case WITHDRAW:
// //       return {
// //         balance : state.balance - action.amount,
// //         disabled : (state.balance === 1) ? true : false
// //       }
// //     case DEPOSITE:
// //       return {
        
// //         balance : (parseInt(state.balance)+parseInt(action.amount)),
// //         disabled : false
// //       }
// //     default:
// //       return state

// //   }

// // }
// // //  store
// // export const store = createStore(balanceCheck);


