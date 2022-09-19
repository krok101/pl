import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getRectangles, getVideoSRC } from '../api'
import { FETCH_RECTANGLES_DATA, FETCH_VIDEO_SRC } from '../store/actions'
import { setRectangles, setVideoSrc } from '../store/actionsCreators'

function* fetchRectangles() {
  const [ ...data ] = yield call(getRectangles)
  yield put(setRectangles(data))
}

function* fetchVideoSrc() {
  const [ ...data ] = yield call(getVideoSRC)
  yield put(setVideoSrc(data.join('')))
}

function* rootSaga() {
  yield takeLatest(FETCH_RECTANGLES_DATA, fetchRectangles)
  yield takeLatest(FETCH_VIDEO_SRC, fetchVideoSrc)
}

export default rootSaga