import React,{Component}  from 'react'
import { removeTodo} from './redux_todos'
import {connect} from 'react-redux'
class TodoShow extends Component{
    constructor(){
        super();

        this.state = {
           todos : []
        
        }
        // store.subscribe(()=>{
        //     // var state = 
        //     // this.setState({
        //     //     todos : store.getState()
        //     // })
        // })
    }
    componentWillReceiveProps(newProps){
        this.setState({
            todos : newProps.todos
        })
    }
    remove = (todo)=>{
       // store.dispatch(removeTodo(todo));
       this.props.removeTodo(todo)
        this.setState({
            todo : ''
        })
    }
    render(){
        return(
            <React.Fragment>
            <h1>Todos Dispaly</h1>
             <ul>
                 {
                     this.state.todos.map((todo,index)=>{
                         return <li key={index}>{todo} 
                         &nbsp;&nbsp;<button onClick = {()=>{
                             this.remove(todo)
                         }}>Remove</button></li>
                     })
                 }
             </ul>
            </React.Fragment>
        )
    }
}
var mapStateToProp = (state)=>{
    console.log(state)
    return {
      todos : state
    }
}
var mapDispatchToProps = {
   removeTodo
}
export default  connect (mapStateToProp, mapDispatchToProps)(TodoShow)