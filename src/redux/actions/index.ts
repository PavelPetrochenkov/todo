export default function createActions(type: string) {
  const types = {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAIL: `${type}_FAIL`,
  }
  return {
    request: createAction(types.REQUEST),
    success: (payload: any) => createAction(types.SUCCESS, payload),
    fail: () => createAction(types.FAIL, null),
    types,
  }
}

const createAction = (type: string) => (payload: any) => {
  return { type, payload }
}

// const a = createAction('asdas')

// a.type === 'asdas'
// a()
