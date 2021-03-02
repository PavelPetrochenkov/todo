export enum FilterTypes {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export enum ACTIONS_TODO {
  ADD_TODO = 'ADD_TODO',

  CHANGE_TEXT_TODO = 'CHANGE_TEXT_TODO',

  CHANGE_CHECK_TODO = 'CHANGE_CHECK_TODO',

  DELETE_TODO = 'DELETE_TODO',

  CHANGE_TYPE = 'CHANGE_TYPE',

  GET_TODOS = 'GET_TODOS',

  DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS',

  CHECK_ALL_TODOS = 'CHECK_ALL_TODOS',

  TODO_FAIL = 'TODO_FAIL',
}

export enum ACTIONS_USER {
  LOG_IN = 'LOG_IN',

  REGISTRATION = 'REGISTRATION',

  GET_USER = 'GET_USER',

  LOG_OUT = 'LOG_OUT',
  SAVE_LAST_ACTION = 'SAVE_LAST_ACTION',
  CLEAR_ERROR = 'CLEAR_ERROR',
}
