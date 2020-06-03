import React , {Component}  from 'react'
import { getUsers } from './redux_users';
import { connect } from 'react-redux'

class Users extends Component {

    constructor(){
        super();

        this.state = {
            users : [],
            loading : false,
            error : false
        }
    //     store.subscribe(()=>{
    //         var state = store.getState();
    //         this.setState({
    //             users : state.users,
    //             loading : state.loading,
    //             error : state.error
    //         })
    //     })
     }
    componentWillReceiveProps(newProps){
        this.setState({
                        users : newProps.users,
                        loading : newProps.loading,
                        error : newProps.error
                    })
    }
    componentDidMount(){
       // store.dispatch(getUsers());
       this.props.getUsers()
    }
    render(){
        if(this.state.loading === true){
            return (
                <div>
                    <h1>Users</h1>
                    <p>Loading... Please wait</p>
                </div>
            )
        }
        if(this.state.error === true){
            return (
                <div>
                    <h1>Users</h1>
                    <p>Something went wrong... Please try again</p>
                </div>
            )
        }
        return (
            <React.Fragment>
            <h1>Users</h1>
            <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key ={user.id}>{user.name}</li>
                    })
                }
            </ul>
            </React.Fragment>
        )
    }
}
 
var mapDispatchtToProps = {
    getUsers

}

 var mapStateprops = (state)=>{
     return {
        users : state.users,
        loading : state.loading,
        error : state.error
     }
 }
 
 
export default connect(mapStateprops ,mapDispatchtToProps)(Users);

//export default Users