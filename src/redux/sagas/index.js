import { all } from 'redux-saga/effects'
import global from './global'

export default function* rootSaga () {
  yield all([
    global()
  ])
}
