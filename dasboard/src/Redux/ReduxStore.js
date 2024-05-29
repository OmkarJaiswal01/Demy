import { legacy_createStore,combineReducers } from "redux";
const fun1=(state=[],action)=>{
    if(action.type==="e1")
    {
        return action.data;
    }
    else{
        return state;
    }
}
const rootred=combineReducers({
fun1
})

const  Store=legacy_createStore(rootred);
export {Store}