// DeleteDeveloper.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteWebDeveloper } from '../../redux/actions/DevelopersActions';
import { useNavigate } from 'react-router-dom';

function DeleteDeveloper({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteDeveloper = async () => {
    try {
      await dispatch(deleteWebDeveloper(id));
      navigate('/developers');
    } catch (error) {
      console.error('Error deleting web developer:', error.message);
    }
  };

  const handleCancel = () => {
    navigate('/developers');
  };

  return (
    <div>
      <h1>Delete Developer Page</h1>
      <p>Are you sure you want to delete this developer?</p>
      <button onClick={handleDeleteDeveloper} className="btn btn-danger me-2">
        Delete
      </button>
      <button onClick={handleCancel} className="btn btn-secondary">
        Cancel
      </button>
    </div>
  );
}

export default DeleteDeveloper;
