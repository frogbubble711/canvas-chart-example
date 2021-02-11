import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import { AUDIO_PLAY_STATUS } from 'redux/constants'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    audio: {
      loading: true,
      position: 0,
      speed: 1,
      play: AUDIO_PLAY_STATUS.STOPPED,  // should be one of "PLAYING", "STOPPED", "PAUSED"
      duration: 0
    },
    transcript: null,
    status: 'INIT',
    error: null,
    searchText: ''
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CONSTANTS.SET_AUDIO_LOADING]: (state, { payload }) => ({
    ...state,
    audio: {
      ...state.audio,
      loading: payload.loading
    }
  }),

  [CONSTANTS.SET_AUDIO_PLAY]: (state, { payload }) => ({
    ...state,
    audio: {
      ...state.audio,
      play: payload.play
    }
  }),

  [CONSTANTS.SET_AUDIO_SPEED]: (state, { payload }) => ({
    ...state,
    audio: {
      ...state.audio,
      speed: payload.speed
    }
  }),

  [CONSTANTS.SET_AUDIO_POSITION]: (state, { payload }) => ({
    ...state,
    audio: {
      ...state.audio,
      position: payload.position
    }
  }),

  [CONSTANTS.SET_AUDIO_DURATION]: (state, { payload }) => ({
    ...state,
    audio: {
      ...state.audio,
      duration: payload.duration
    }
  }),

  [requestSuccess(CONSTANTS.GET_TRANSCRIPT)]: (state, { payload }) => ({
    ...state,
    transcript: payload,
    status: requestSuccess(CONSTANTS.GET_TRANSCRIPT),
    error: null
  }),

  [requestFail(CONSTANTS.GET_TRANSCRIPT)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.GET_TRANSCRIPT),
    error: payload
  }),

  [CONSTANTS.SET_SEARCH_TEXT]: (state, { payload }) => ({
    ...state,
    searchText: payload.text
  })
}, getInitialState())
