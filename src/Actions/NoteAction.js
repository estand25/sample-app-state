import { SELECT_NOTE, ALL_NOTES } from './types';

export default selectNote = ({note}) => ({
  type: SELECT_NOTE,
  payload: note
});
