import { useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  data: null
};

const requestReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        error: null,
        data: null,
        loading: action.status
      };
    case 'ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error
      };
    case 'DATA':
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data
      };
    case 'CLEAR':
      return {
        ...initialState
      };
    default:
      throw new Error('[useRequest reducer] unknown action: ', action.type);
  }
};

export default (options) => {
  const [requestState, dispatch] = useReducer(requestReducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING', status: true });
    try {
      const request = await axios({
        ...options,
        responseType: 'json'
      });
      dispatch({ type: 'DATA', data: request.data });
    } catch (err) {
      if (err.response) {
        dispatch({ type: 'ERROR', error: err.response.data.error });
      } else if (err.request) {
        dispatch({ type: 'ERROR', error: 'Couldn\'t reach server.' });
      } else {
        dispatch({ type: 'ERROR', error: err.message });
      }
    }
  }, [options]);

  const clearState = () => dispatch({ type: 'CLEAR' });

  useEffect(() => {
    if (options.method) {
      fetchData();
    }
  }, [options, fetchData]);

  return [requestState, clearState];
};
