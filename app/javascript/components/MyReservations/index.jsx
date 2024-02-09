import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationsAsync } from '../../redux/actions/ReservationsActions';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h1>My Reservations Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Developer</th>
            <th>Date</th>
            <th>Duration</th>
            <th></th> {/* Empty column for delete button */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(reservations) && reservations.length > 0 ? (
            reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.developerFullName}</td>
                <td>{reservation.date}</td>
                <td>{reservation.duration} hours</td>
                <td>
                  <button className="btn btn-danger">Delete Reservation</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No reservations to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyReservations;
