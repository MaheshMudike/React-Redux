// import React,{Component}  from 'react'
// import {store ,} from './redux_counter'
// class BankBalance extends Component{
//     constructor(){
//         super();

//         this.state = {
//             balance : 0
//         }
//         store.subscribe(()=>{
//              var state = store.getState()
//             this.setState({
//                 balance : state.balance
//             })
//         })
//     }
//     render(){
//         return (
//         <React.Fragment>
//             <h1>Balance : {this.state.balance}</h1>

//         </React.Fragment>
//         )
//     }
// }
// export default BankBalance;