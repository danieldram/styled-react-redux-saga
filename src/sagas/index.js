import { takeLatest} from "redux-saga/effects";
import {exampleSaga} from "./_example-saga"
import * as t from "types"

export const saga = function*() {
    yield takeLatest(t.UPDATE_ASSET_DESC, exampleSaga);
};