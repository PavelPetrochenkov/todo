export default function createActions(type: string) {
  const types = {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAIL: `${type}_FAIL`,
  }
  return {
    request: createAction(types.REQUEST),
    success: createAction(types.SUCCESS),
    fail: createAction(types.FAIL),
    types,
  }
}

type Action = {
  (payload?: any): { type: string; payload: any }
  type?: string
}

export function createAction(type: string) {
  let a: Action = (payload = null) => ({ type, payload })
  a.type = type
  return a
}
