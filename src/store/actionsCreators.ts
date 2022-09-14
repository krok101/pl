import { ASYNC_SET_RECTANGLES, SET_VIDEO_SRC } from './actions'

export const setVideoSrc = (payload: string) => ({
  payload,
  type: SET_VIDEO_SRC
})

export const setRectangles = (payload: any) => ({
  payload,
  type: ASYNC_SET_RECTANGLES
})