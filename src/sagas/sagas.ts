import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getRectangles } from '../api';
import { ASYNC_SET_RECTANGLES, FETCH_RECTANGLES_DATA } from '../store/actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRectangles() {
      const [ ...data ] = yield call(getRectangles);
      console.log('rectangles:::', data)
      yield put({type: "ASYNC_SET_RECTANGLES", data});
}


function* rootSaga() {
  yield takeEvery(FETCH_RECTANGLES_DATA, fetchRectangles);
}

export default rootSaga