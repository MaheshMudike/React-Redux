import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 


// Tods Example Store ....

//Actions & Action Createros 

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

//Action Creator 

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        todo
    }
}


//reducrs 

const todos = (state = [], action) => {
      console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                 action.todo
            ]

        case REMOVE_TODO:
            return  state.filter((currentTodo)=>{
                 return currentTodo != action.todo
            })
        default:
            return state;
    }
}

//store 

export const store=createStore(todos);