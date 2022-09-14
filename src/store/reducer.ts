import { ASYNC_SET_RECTANGLES, SET_VIDEO_SRC } from "./actions"

const initialState = {
  videoSrc: '',
  rectangles: null,
}

const rootReducer = (state = initialState, {type, payload}: any) => {
  switch(type) {
    case SET_VIDEO_SRC: return { ...state, videoSrc: payload }
    case ASYNC_SET_RECTANGLES: return { ...state, rectangles: payload }
    default: return state
  }
}

export default rootReducer