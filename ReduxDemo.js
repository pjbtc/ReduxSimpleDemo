import React ,{Component} from 'react';
import {createStore} from 'redux';


class ReduxDemo extends Component{
	render(){

		// step 2 reducer: state n action  // reducer is an agent which does what it is told.
		// state is like current situation and action is like performing activities
		const reducer =function (state , action ){
			if(action.type==="ATTACK"){
				return action.payload
			}
			if(action.type==="GREENATTACK"){
				return action.payload  // payload is nonofficial naming convention for property that holds 
											//actaul data in Redux action object
			}
			return state;
		}

		// step1 Store :reducer n state  // store requires reducer and state
		const store = createStore(reducer, "peace");



		//step 3: subscribe  Which means get the current state  
			store.subscribe(()=>{
				console.log("Store is now", store.getState());

			})

		// step 4:Dispatch action which means what action you need to take
			store.dispatch({type:"ATTACK", payload:"Iron Man"})	
			store.dispatch({type:"ATTACK", payload:"HULK"})	

		return(
			<div>
			test
			</div>
		)
	}
}
export default ReduxDemo;