import {OPERATOR} from "../definitions/operator";

const initialState = {
    result:0
}
export default  (state=initialState,action)=>{
    switch(action.type){
        case OPERATOR.add:
            state={
                result:action.result
            }
            break;
        case OPERATOR.subtract:
            state={
                result:action.result
            }
            break;
        case OPERATOR.multiple:
            state={
                result:action.result
            }
            break;
        case OPERATOR.divide:
            state = {
                result:action.result
            }
            break;
        default:
    }
    return state;
}


