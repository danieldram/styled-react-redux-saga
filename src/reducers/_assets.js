
import * as t from "types"

const assetsState = {
    description:"Some Asset Description"
}


export const assets = (state=assetsState, {type, payload}) => {
    switch (type) {
      case t.UPDATE_ASSET_DESC:
        return {...state, ...payload}
      case'RESET_ASSETS':
        return {...state}
      default:
        return state
    }
  }
  