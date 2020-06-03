import React, { Component } from 'react'
//import {store, increment ,decrement} from './redux_counter'
import { connect } from 'react-redux'
class CounterAction extends Component {
    constructor() {
        super()
        this.state = {
            disabled: true
        }

        // store.subscribe(()=>{
        //    var state = store.getState()
        //     this.setState({
        //         //counter value is optional if we need we can take 
        //          counter : state.count,
        //         disabled : state.disabled
        //     })
        // })
    }
    componentWillReceiveProps(newProps){
    this.setState({
        disabled : newProps.disabled
    })
    }
    decrementCount = () => {
        //store.dispatch(decrement())
        this.props.decrement()
    }
    incrementCount = () => {
        this.props.increment()
        // store.dispatch(increment())
    }
    render() {
        return (
            <React.Fragment>
                <h1>Counterr Action</h1>
                <button onClick={this.incrementCount}>Increment</button>&nbsp;&nbsp;
                <button onClick={this.decrementCount} disabled={this.state.disabled}>Decrement</button>
            </React.Fragment>
        )
    }

}



var mapStateprops = (state) => {
    return {
        disabled: state.disabled,
        //    loading : state.loading,
        //    error : state.error
    }
}
var mapDispatchtoprops=(dispatch) => {
    return {
        increment:() =>{

           dispatch({type: 'INCREMENT'})
        },
        decrement:()=>{
            dispatch({ type: 'DECREMENT' })
        }
    }

}

export default connect(mapStateprops,mapDispatchtoprops)(CounterAction);