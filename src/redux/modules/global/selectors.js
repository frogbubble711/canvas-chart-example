import { get } from 'lodash'
import { AUDIO_PLAY_STATUS } from 'redux/constants'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const audioLoadingSelector = (state) =>
  get(state, 'global.audio.loading', null)

export const audioPlaySelector = (state) =>
  get(state, 'global.audio.play', AUDIO_PLAY_STATUS.STOPPED)

export const audioSpeedSelector = (state) =>
  get(state, 'global.audio.speed', 1.0)

export const audioPositionSelector = (state) =>
  get(state, 'global.audio.position', 0)

export const audioDurationSelector = (state) =>
  get(state, 'global.audio.duration', 0)

export const transcriptSelector = (state) =>
  get(state, 'global.transcript', {})

export const loadingStatusSelector = (state) =>
  get(state, 'global.status', 'INIT')

export const searchTextSelector = (state) =>
get(state, 'global.searchText', '')
