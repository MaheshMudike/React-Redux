import React,{Component}  from 'react'
//import {store} from './redux_counter'
import {connect} from 'react-redux'
class CounterDisplay extends Component{
    constructor(){
        super();

        this.state = {
            counter : 0,
        
        }
        // store.subscribe(()=>{
        //     // var state = 
        //     this.setState({
        //         counter : store.getState().count
        //     })
        // })
    }
    componentWillReceiveProps(newProps){
        console.log(newProps)
        this.setState({
            counter : newProps.counter
        })
    }
    render(){
        return(
            <React.Fragment>
            <h1>Counterr Dispaly</h1>
            <h3>{this.state.counter}</h3>
            </React.Fragment>
        )
    }
}

var mapStateprops = (state)=>{
    console.log(state)
    return {
       counter : state.count,
    // //    loading : state.loading,
    // //    error : state.error
     }
}

export default  connect(mapStateprops)(CounterDisplay);