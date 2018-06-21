import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { loadList } from '../actions/lists'

export function* startFetchList() {
    yield takeEvery('START_FETCH_LIST', fetchListSaga);
}

export function* fetchListSaga() {
    const response = yield call(axios.get, 'http://localhost:3001/api/lists')
    yield put(loadList(response.data))
 //  yield put ({type: 'LIST_LOAD', data })
}
    