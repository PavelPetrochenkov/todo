export enum FilterTypes {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export enum ACTIONS_TODO {
  ADD_TODO_REQUEST = 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',

  CHANGE_TEXT_TODO_REQUEST = 'CHANGE_TEXT_TODO_REQUEST',
  CHANGE_TEXT_TODO_SUCCESS = 'CHANGE_TEXT_TODO_SUCCESS',

  CHANGE_CHECK_TODO_REQUEST = 'CHANGE_CHECK_TODO_REQUEST',
  CHANGE_CHECK_TODO_SUCCESS = 'CHANGE_CHECK_TODO_SUCCESS',

  DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',

  CHANGE_TYPE_REQUEST = 'CHANGE_TYPE_REQUEST',
  CHANGE_TYPE_SUCCESS = 'CHANGE_TYPE_SUCCESS',

  GET_TODOS_REQUEST = 'GET_TODOS_REQUEST',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',

  DELETE_COMPLETED_TODOS_REQUEST = 'DELETE_COMPLETED_TODOS_REQUEST',
  DELETE_COMPLETED_TODOS_SUCCESS = 'DELETE_COMPLETED_TODOS_SUCCESS',

  CHECK_ALL_TODOS_REQUEST = 'CHECK_ALL_TODOS_REQUEST',
  CHECK_ALL_TODOS_SUCCESS = 'CHECK_ALL_TODOS_SUCCESS',

  TODO_FAIL = 'TODO_FAIL',
}

export enum ACTIONS_USER {
  LOG_IN_REQUEST = 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_FAIL = 'LOG_IN_FAIL',

  REGISTRATION_REQUEST = 'REGISTRATION_REQUEST',
  REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
  REGISTRATION_FAIL = 'REGISTRATION_FAIL',

  REFRESH_TOKENS_REQUEST = 'REFRESH_TOKENS_REQUEST',
  REFRESH_TOKENS_FAIL = 'REFRESH_TOKENS_FAIL',

  LOG_OUT = 'LOG_OUT',
  SAVE_LAST_ACTION = 'SAVE_LAST_ACTION',
  CLEAR_ERROR = 'CLEAR_ERROR',
}
