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
    <div className="container mt-5">
      <h1>Reservation Form</h1>
      <form onSubmit={handleAddReservation}>
        <table className="table">
          <tbody>
            <tr>
              <td>Developer Full Name</td>
              <td><input type="text" name="developerFullName" value={reservation.developerFullName} onChange={handleInputChange} className="form-control" placeholder="Developer Full Name" /></td>
            </tr>
            <tr>
              <td>Developer Phone Number</td>
              <td><input type="text" name="developerPhoneNumber" value={reservation.developerPhoneNumber} onChange={handleInputChange} className="form-control" placeholder="Developer Phone Number" /></td>
            </tr>
            <tr>
              <td>Date</td>
              <td><input type="date" name="date" value={reservation.date} onChange={handleInputChange} className="form-control" /></td>
            </tr>
            <tr>
              <td>Duration</td>
              <td><input type="number" name="duration" value={reservation.duration} onChange={handleInputChange} className="form-control" placeholder="Duration" /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Make Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
