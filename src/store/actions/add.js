import {OPERATOR} from "../definitions/operator";

export function add(){
    return {type:OPERATOR.add,result:500}
}

export function setValue (data) {
    return {type:OPERATOR.add,result:data}
}
