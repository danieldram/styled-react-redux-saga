import { delay } from "redux-saga"
import { takeLatest, call } from "redux-saga/effects";
import axios from "axios"

export const exampleSaga = function*(action) {
    console.log(action)
    try{
        const res = yield axios("https://jsonplaceholder.typicode.com/todos/1");
        console.log("in SAGA RES", res)
        
    }catch(e){
        console.log("ERR", e)
    }
};
