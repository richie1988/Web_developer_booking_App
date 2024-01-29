// AddDeveloper.jsx
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

  const handleAddDeveloper = () => {
    dispatch(addDeveloper(developer));
  };

  return (
    <div>
      <h1>Add Developer Page</h1>
      <form>
        {/* Add form fields for developer details */}
        <button type="button" onClick={handleAddDeveloper}>
          Add Developer
        </button>
        <button type="button" onClick={handleInputChange}>
          Add Developer
        </button>
      </form>
    </div>
  );
}

export default AddDeveloper;
