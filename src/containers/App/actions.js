import {
  BOARD,
  MOVE_BOARD,
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
} from './constants';

export const getBoard = (position) => ({
  type: BOARD,
  data: position,
});

export const moveBoard = (direction) => ({
  type: MOVE_BOARD,
  data: direction,
});

export const getAPIData = () => ({
  type: GET_API_DATA,
});

export const getAPIDataLoaded = (data) => ({
  type: GET_API_DATA_LOADED,
  data,
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error,
});
