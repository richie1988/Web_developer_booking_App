import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import { createReservation } from '../../redux/reservation/thunk';
import { fetchDevelopers } from '../../redux/Developer/DeveloperSlice';
import { selectStatus } from '../../redux/user/userSlice';
import Sidenav from '../Navbar/Sidenav';

const NewReservation = () => {
  const dispatch = useDispatch();
  const Developers = useSelector((state) => state.Developer.Developers);
  const location = useLocation();
  const selectedDeveloper = location.state;
  const userStatus = useSelector(selectStatus);

  const userId = JSON.parse(localStorage.getItem('user_id'));
  console.log('reservation user:', userId);
  const [date, setDate] = useState('');
  // const [city, setCity] = useState('');
  const [DeveloperId, setDeveloperId] = useState(selectedDeveloper ? selectedDeveloper.id : '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      toast.error('User ID is not available. Please login and try again.');
      return;
    }

    setIsLoading(true);

    try {
      const reservationData = {
        user_id: userId,
        Developer_id: DeveloperId,
        // city,
        date,
      };

      await dispatch(createReservation({ data: reservationData }));
      setDeveloperId('');
      // setCity('');
      setDate('');
      toast.success('Developer added successfully');
    } catch (err) {
      setError('Error creating a reservation. Please try again later.');
      toast.error('Please fill all fields before you submit');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // if (userStatus === 'idle' && userId) {
    dispatch(fetchDevelopers());
    console.log('Developers:', Developers);
    // }
  }, [dispatch, userStatus, userId]);

  return (
    <>
      <Sidenav />
      <div className="bg-lime-400 px-10  h-screen pt-[1rem]  md:pl-[14rem] md:pt-[8rem]">

        {/* Scheduling Information */}
        <div className="text-center text-white md:mx-auto p-1 md:pl-24 md:p-8">
          <h2 className="font-bold">Reservation Schedule Information</h2>
          <p className="text-center">
            Our Developers are available from Monday to Friday,
            9:00 AM to 5:00 PM. If you have any questions
            <br />
            or need assistance,feel free to contact our support team at support@example.com.
          </p>
        </div>
        <div className="mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:w-[80%] justify-center items-center md:pl-[6rem]">
            {/* Date Input */}
            <div className="flex flex-col w-full  md:ml-6">
              <p className="text-lg font-medium text-white">
                Date
              </p>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border rounded reserve-input"
                required
              />
            </div>
            <div className="flex flex-col w-full  md:ml-9">
              <p className="text-md font-medium text-white">
                Choose Developer
              </p>
              <select
                id="Developer"
                onChange={(e) => setDeveloperId(e.target.value)}
                value={DeveloperId}
                className="p-2 border rounded reserve-select"
                required
              >
                <option value="">Select Developer</option>
                {Developers.map((Developer) => (
                  <option key={Developer.id} value={Developer.id}>
                    {Developer.first_name}
                  </option>
                ))}
              </select>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`reserve-btn bg-gray-200 px-3 w-40 h-11 rounded mt-5 text-lime-500 font-[400] hover:bg-lime-500 hover:text-white ${
                    isLoading ? 'cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Reserving...' : 'Reserve'}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit Button */}
          </form>
        </div>
      </div>
    </>
  );
};

export default NewReservation;