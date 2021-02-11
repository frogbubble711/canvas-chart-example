import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/global/constants'
import apiCall from '../api/apiCall'

const doGetTranscript = apiCall({
  type: CONSTANTS.GET_TRANSCRIPT,
  method: 'get',
  path: ({ payload }) => `/assets/js/${payload.fileName}`
})

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.GET_TRANSCRIPT, doGetTranscript)
}
