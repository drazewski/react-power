import { all } from 'redux-saga/effects';
 
import { startFetchList, fetchListSaga } from './sagaFetchList';
import { startFetchCards, fetchCardsSaga } from './sagaFetchCards';
 
export function* rootSaga() {
    yield all([
        startFetchList(),
        fetchListSaga(),
        startFetchCards(),
        fetchCardsSaga(),
    ])
}