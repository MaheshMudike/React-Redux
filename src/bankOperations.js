// import React,{Component}  from 'react'
// import {store ,deposite,withdraw} from './redux_counter'
// class BankOperation extends Component{
//     constructor(){
//         super();

//         this.state = {
//             disabled : true,
//             enterAmount : 0
        
//         }
    

//     store.subscribe(()=>{
//         var state = store.getState()
//         this.setState({
//             disabled : state.disabled
//         })
//     })

// }
// enterAmount = (e)=>{

//     this.setState({
//         enterAmount : e.target.value
//     })

// }

//     withdraw = ()=>{
//     store.dispatch(withdraw(this.state.enterAmount))
//     this.setState({
//         enterAmount : ''
        
//          })
//     }
//     deposite = ()=>{
//       store.dispatch(deposite(this.state.enterAmount))
//         this.setState({
//         enterAmount : ''
        
//          })
//     }
//         render(){
//             return (
//                <React.Fragment>
//                    <h1>Bank Operations</h1>
//                   <input type = "text" name= 'amount' value = {this.state.enterAmount} onChange = {this.enterAmount} placeholder = "Amount"></input>< br></br><br></br>
//                   <button onClick = {this.withdraw} disabled = {this.state.disabled}>Withdraw</button>&nbsp;&nbsp;
//                   <button onClick = {this.deposite}> Deposite</button>
//                </React.Fragment>
//             )
//         }

//     }
//     export default BankOperation