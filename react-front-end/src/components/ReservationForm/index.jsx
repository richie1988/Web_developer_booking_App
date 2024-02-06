import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/actions/myReservationActions';

function ReservationForm() {
  const dispatch = useDispatch();
  const [reservation, setReservation] = useState({
    developerFullName: '',
    developerPhoneNumber: '',
    date: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleAddReservation = (e) => {
    e.preventDefault();
    dispatch(addReservation(reservation));
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <form onSubmit={handleAddReservation}>
        <input type="text" name="developerFullName" value={reservation.developerFullName} onChange={handleInputChange} placeholder="Developer Full Name" />
        <input type="text" name="developerPhoneNumber" value={reservation.developerPhoneNumber} onChange={handleInputChange} placeholder="Developer Phone Number" />
        <input type="date" name="date" value={reservation.date} onChange={handleInputChange} />
        <input type="number" name="duration" value={reservation.duration} onChange={handleInputChange} placeholder="Duration" />
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;