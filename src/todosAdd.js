import React,{Component}  from 'react'
import {addTodo} from './redux_todos'
import {connect} from 'react-redux'
class TodosAdd extends Component{
    constructor(){
        super();

        this.state = {
            todo : ''
        
        }
        // store.subscribe(()=>{
        //     // var state = 
        //     this.setState({
        //         counter : store.getState().count
        //     })
        // })
    }
    onTodoChange =(e)=>{
    this.setState({
        todo : e.target.value
    })
    }
    addTodo = ()=>{
     //Send Acition 
       
    //    store.dispatch({
    //        type : "ADD_TODO", todo : this.state.todo
    //    })

     /// or //

    //  store.dispatch(addTodo(this.state.todo));
    //  this.setState({
    //      todo : ''
    //  })
    this.props.addTodo(this.state.todo)
        this.setState({
         todo : ''
     })
    }
    render(){
        return(
            <React.Fragment>
            <h1>TodosAdd</h1>
            <div>
               <input type="text" name="todo" value = {this.state.todo} onChange={this.onTodoChange}/>
               <button onClick = {this.addTodo}>Add Todo</button>
            </div>
            </React.Fragment>
        )
    }
}
var mapDispatchProps={
    addTodo

}
export default connect(null,mapDispatchProps)(TodosAdd);