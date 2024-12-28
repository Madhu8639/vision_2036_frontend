import { motion } from 'framer-motion';
import React, { useState } from 'react';
import axios from 'axios';

const sports = [
  'Cricket', 'Football', 'Table Tennis', 'Basketball',
  'Tennis', 'Badminton', 'Kabaddi', 'Swimming', 'Tennikoit',
];

export const InstitutionRegistrationForm = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    location: '',
    email: '',
    sport: '',
    area: '',
    contactNumber: '',
    coachName: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('/api/institutions/register', formData);
      setSuccessMessage('Institution registered successfully!');
      console.log('Response:', response.data);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Institution Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-5">
        {errorMessage && <div className="text-red-600 text-sm">{errorMessage}</div>}
        {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}

        {/* Institution Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Institution Name</label>
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter institution name"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter location"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter email address"
          />
        </div>

        {/* Sports */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Sports</label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select a sport</option>
            {sports.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter area"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter contact number"
          />
        </div>

        {/* Coach Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Coach Name</label>
          <input
            type="text"
            name="coachName"
            value={formData.coachName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter coach name"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};
