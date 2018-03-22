export const selectLibrary = (libraryId) => { //action creator function
  return {  //action object
    type: 'select_library',
    payload: libraryId
  }
};
