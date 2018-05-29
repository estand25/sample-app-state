import {
  ORIENTATION
} from './types'

export const orientationChanged = (orientation) => ({
  type: ORIENTATION,
  payload: orientation
})
