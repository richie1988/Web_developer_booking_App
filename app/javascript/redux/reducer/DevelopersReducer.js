const initialState = {
  developers: [],
  selectedDeveloper: null,
};

const developersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DEVELOPERS':
      return { ...state, developers: action.payload };
    case 'ADD_DEVELOPER':
      return { ...state, developers: [...state.developers, action.payload] };
    case 'DELETE_DEVELOPER':
      const updatedDevelopers = state.developers.filter((dev) => dev.id !== action.payload);
      return { ...state, developers: updatedDevelopers };
    case 'FETCH_WEB_DEVELOPER':
      return { ...state, selectedDeveloper: action.payload };
    case 'UPDATE_WEB_DEVELOPER':
      const updatedWebDevelopersUpdate = state.developers.map((dev) =>
        dev.id === action.payload.id ? action.payload : dev
      );
      return { ...state, developers: updatedWebDevelopersUpdate, selectedDeveloper: action.payload };
    case 'DELETE_WEB_DEVELOPER':
      const updatedWebDevelopersDelete = state.developers.filter((dev) => dev.id !== action.payload);
      return { ...state, developers: updatedWebDevelopersDelete, selectedDeveloper: null };
    default:
      return state;
  }
};

export default developersReducer;
