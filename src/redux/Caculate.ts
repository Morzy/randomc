import type { Reducer } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

export function caculate(oldstate= {digit:0},action:any){
    let state = Object.assign({},oldstate);
    switch(action.type){
        case "Add":
            state.digit += 1;
            break;

    }
    return state;
}
