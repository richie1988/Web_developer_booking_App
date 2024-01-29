import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDeveloper } from '../../redux/actions/DevelopersActions';

function AddDeveloper() {
  const dispatch = useDispatch();
  const [developer, setDeveloper] = useState({
    fullName: '',
    phoneNumber: '',
    hourlyRate: '',
    city: '',
    email: '',
    apr: '',
  });

  const handleInputChange = (e) => {
    setDeveloper({ ...developer, [e.target.name]: e.target.value });
  };

  const handleAddDeveloper = (e) => {
    e.preventDefault();
    dispatch(addDeveloper(developer));
  };

  return (
    <div>
      <h1>Add Developer Page</h1>
      <form onSubmit={handleAddDeveloper}>
        <input type="text" name="fullName" value={developer.fullName} onChange={handleInputChange} placeholder="Full Name" />
        <input type="text" name="phoneNumber" value={developer.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" />
        <input type="text" name="hourlyRate" value={developer.hourlyRate} onChange={handleInputChange} placeholder="Hourly Rate" />
        <input type="text" name="city" value={developer.city} onChange={handleInputChange} placeholder="City" />
        <input type="email" name="email" value={developer.email} onChange={handleInputChange} placeholder="Email" />
        <input type="text" name="apr" value={developer.apr} onChange={handleInputChange} placeholder="APR" />
        <button type="submit">Add Developer</button>
      </form>
    </div>
  );
}

export default AddDeveloper;