import { motion } from 'framer-motion';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const sports = [
   'Badminton',  'Swimming', 'Chess', 'Table Tennis', 'basketball'
];

interface FormData {
  institutionName: string;
  location: string;
  email: string;
  sport: string;
  area: string;
  contactNumber: string;
  coachName: string;
}

export const InstitutionRegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    institutionName: '',
    location: '',
    email: '',
    sport: '',
    area: '',
    contactNumber: '',
    coachName: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const response = await axios.post('https://vision-2036-backend.onrender.com/api/institutions', {
        name: formData.institutionName,
        location: formData.location,
        mail: formData.email,
        sport: formData.sport,
        areaInSqMeters: Number(formData.area),
        contactNumber: formData.contactNumber,
        coachName: formData.coachName,
      });
      setSuccessMessage('Institution registered successfully!');
      console.log('Response:', response.data);
      setTimeout(() => navigate("/"), 2000)
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
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
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Institution Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-5">
        {errorMessage && (
          <div className="text-red-600 text-sm">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-600 text-sm">{successMessage}</div>
        )}

        {/* Institution Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Institution Name
          </label>
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter institution name"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter location"
            required
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
            required
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
            required
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
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter area in square meters"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter contact number"
            required
          />
        </div>

        {/* Coach Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Coach Name
          </label>
          <input
            type="text"
            name="coachName"
            value={formData.coachName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter coach name"
            required
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
