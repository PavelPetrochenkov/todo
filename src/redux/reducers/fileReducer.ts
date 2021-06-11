import {
  changeTextFileAction,
  changeTypeAction,
  createFileAction,
  deleteFileAction,
  getAllFilesAction,
} from '../actions/fileAction'

const initialState: any = {
  files: [],
}

function fileReducer(
  state: any = initialState,
  action: any
): any {
  switch (action.type) {
    case getAllFilesAction.types.SUCCESS:{
      return {
        ...state,
        files: action.payload.files,
      }
    }
    case createFileAction.types.SUCCESS: {
      return {
        ...state,
        files: [...state.files, action.payload],
      }
    }
    case changeTextFileAction.types.SUCCESS: {
      return {
        ...state,
        files: state.files.map((item:any) =>
          item.id === action.payload.id ? { ...action.payload } : item
        ),
      }
    }
    case deleteFileAction.types.SUCCESS: {
      const files = state.files.filter((file:any) => file.id !== action.payload)
      return {
        ...state,
        files,
      }
    }
    case changeTypeAction.type: {
      return {
        ...state,
        type: action.payload,
      }
    }
  }
  return state
}

export default fileReducer
