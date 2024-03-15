export const customMiddlewareLogger = store => next => action => {
  if (action.payload) {
    console.log(`%c ${action.type}:`, 'color: #8baa36', action.payload);
  }
  return next(action);
};
