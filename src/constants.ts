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
    DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS',
    CHECK_ALL_TODOS = 'CHECK_ALL_TODOS',
    CHANGE_TYPE = 'CHANGE_TYPE',
}

export enum ACTIONS_USER {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
    CLEAR_ERROR = 'CLEAR_ERROR',
}
