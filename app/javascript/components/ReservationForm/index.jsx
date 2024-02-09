import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservationAsync } from '../../redux/actions/ReservationsActions';
import { useNavigate } from 'react-router-dom';

function ReservationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState({
    developerFullName: '',
    developerPhoneNumber: '',
    date: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleAddReservation = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Submitting reservation:', reservation);
      await dispatch(addReservationAsync(reservation));
      navigate('/my-reservations');
    } catch (error) {
      console.error('Error adding reservation:', error);
    }
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