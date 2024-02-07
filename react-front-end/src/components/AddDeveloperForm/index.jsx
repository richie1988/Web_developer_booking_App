import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWebDeveloper } from '../../redux/actions/DevelopersActions';
import '../../styles/forms.css';

function AddDeveloper() {
  const dispatch = useDispatch();
  const [developer, setDeveloper] = useState({
    name: '',
    title: '',
    description: '',
    hourly_rate: '',
    image_url: '',
    city: '',
    email: '',
    phone: '',
    linkedin_url: '',
    twitter_url: '',
    github_url: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setDeveloper({ ...developer, [name]: files[0] });
    } else {
      setDeveloper({ ...developer, [name]: value });
    }
  };

  const handleAddDeveloper = (e) => {
    e.preventDefault();

    const updatedDeveloper = { ...developer, hourly_rate: parseFloat(developer.hourly_rate) };
    // Dispatch action to add developer with the modified developer object
    dispatch(addWebDeveloper(updatedDeveloper));
  };

  return (
    <div className="container">
      <h1 className="adddeveloper-h1">Add Developer Page</h1>
      <form onSubmit={handleAddDeveloper} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" name="name" value={developer.name} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={developer.title} onChange={handleInputChange} />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={developer.description} onChange={handleInputChange}></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="hourly_rate" className="form-label">Hourly Rate</label>
          <input type="text" className="form-control" id="hourly_rate" name="hourly_rate" value={developer.hourly_rate} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" value={developer.city} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={developer.email} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={developer.phone} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="linkedin_url" className="form-label">LinkedIn URL</label>
          <input type="text" className="form-control" id="linkedin_url" name="linkedin_url" value={developer.linkedin_url} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="twitter_url" className="form-label">Twitter URL</label>
          <input type="text" className="form-control" id="twitter_url" name="twitter_url" value={developer.twitter_url} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="github_url" className="form-label">GitHub URL</label>
          <input type="text" className="form-control" id="github_url" name="github_url" value={developer.github_url} onChange={handleInputChange} />
        </div>
        <div className="col-6">
        <label htmlFor="image_url" className="form-label">Profile Image URL</label>
        <input type="text" className="form-control" id="image_url" name="image_url" value={developer.image_url} onChange={handleInputChange} />
      </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Developer
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default AddDeveloper;
