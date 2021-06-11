import createActions, { createAction } from '.'
import { ACTIONS_FILE } from '../../constants'

export const getAllFilesAction = createActions(ACTIONS_FILE.GET_FILES)

export const createFileAction = createActions(ACTIONS_FILE.ADD_FILE)

export const changeFileAction = createActions(ACTIONS_FILE.CHANGE_FILE)

export const deleteFileAction = createActions(ACTIONS_FILE.DELETE_FILE)
