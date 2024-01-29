// MyReservations.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/actions/ReservationsActions';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h1>My Reservations Page</h1>
      <ul>
        {Array.isArray(reservations) ? (
          reservations.map((reservation) => (
            <li key={reservation.id}>
              <strong>Developer: {reservation.developerFullName}</strong> 
              - Date: {reservation.date} 
              - Duration: {reservation.duration} hours
              <button>Delete Reservation</button>
            </li>
          ))
        ) : (
          <li>No reservations to display</li>
        )}
      </ul>
    </div>
  );
}

export default MyReservations;
