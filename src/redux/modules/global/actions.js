import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const setAudioLoading = createAction(CONSTANTS.SET_AUDIO_LOADING)
export const setAudioPlay = createAction(CONSTANTS.SET_AUDIO_PLAY)
export const setAudioSpeed = createAction(CONSTANTS.SET_AUDIO_SPEED)
export const setAudioPosition = createAction(CONSTANTS.SET_AUDIO_POSITION)
export const setAudioDuration = createAction(CONSTANTS.SET_AUDIO_DURATION)
export const getTranscript = createAction(CONSTANTS.GET_TRANSCRIPT)
export const setSearchText = createAction(CONSTANTS.SET_SEARCH_TEXT)
