MyReservations/index.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsAsync, deleteReservationAsync } from '../../redux/store';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, [dispatch]);

  const handleDelete = (reservationId) => {
    dispatch(deleteReservationAsync(reservationId));
  };

  return (
    <div>
      <h2>Reservation List</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>City: {reservation.city}</p>
            <p>Reservation Date: {reservation.reservation_date}</p>
            <button onClick={() => handleDelete(reservation.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;