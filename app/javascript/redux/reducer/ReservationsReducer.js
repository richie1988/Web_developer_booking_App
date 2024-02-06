// ReservationsReducer.js
const initialState = {
    reservations: [],
  };
  
  const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RESERVATIONS':
        return { ...state, reservations: action.payload };
      case 'ADD_RESERVATION':
        return { ...state, reservations: [...state.reservations, action.payload] };
      case 'DELETE_RESERVATION':
        const updatedReservations = state.reservations.filter((reservation) => reservation.id !== action.payload);
        return { ...state, reservations: updatedReservations };
      default:
        return state;
    }
  };
  
  export default reservationsReducer;
  