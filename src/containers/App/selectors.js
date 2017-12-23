export const selectAppContainer = (state) => state.containers.appReducer;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectApiData = (state) => selectAppContainer(state).get('apiData');
export const selectPieces = (state) => selectAppContainer(state).get('pieces');
export const selectBoardPosition = (state) => selectAppContainer(state).get('boardPosition');
