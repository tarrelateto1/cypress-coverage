
const initialState = {
    result:0
}
export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            state={
                result:state.result+=action.payload
            }
            break;
        case "SUBTRACT":
            state={
                result:state.result+=action.payload
            }
            break;
        default:
    }
    return state;
}
