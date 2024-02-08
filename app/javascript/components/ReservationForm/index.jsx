// ReservationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservationAsync } from '../../redux/store';

const ReservationForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    city: '',
    reservation_date: '',
    web_developer_id: 1, // Replace with the actual web developer ID
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservationAsync(formData));
    setFormData({
      city: '',
      reservation_date: '',
      web_developer_id: 1,
    });
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="reservation_date">Reservation Date:</label>
        <input
          type="datetime-local"
          id="reservation_date"
          name="reservation_date"
          value={formData.reservation_date}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;