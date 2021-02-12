export const getTodosLength = ({ todoReducer }) => todoReducer.todos.length;

export const getTodosType = ({ todoReducer }) => todoReducer.type;

export const getFooterCounter = ({ todoReducer }) => 
todoReducer.todos.filter((item) => !item.check).length;

export const getModeAllCheck =  ({ todoReducer }) => todoReducer.isAllCheck;

export const getTodosList = ({ todoReducer }) => ({ list:todoReducer.todos, type:todoReducer.type})