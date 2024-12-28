import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const sports = [
  'Cricket', 'Football', 'Table Tennis', 'Basketball',
  'Tennis', 'Badminton', 'Kabaddi', 'Swimming', 'Tennikoit',
];

export const StudentRegistrationForm = () => {
  const [representingType, setRepresentingType] = useState('school');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    sport: '',
    representing: 'school',
    institutionOrAcademyName: '',
    coachName: '',
    competitionLevel: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('/api/students/register', formData);
      setSuccessMessage('Student registered successfully!');
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
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Student Registration Form
      </h2>

      <form className="space-y-6 mt-7" onSubmit={handleSubmit}>
        {errorMessage && <div className="text-red-600 text-sm">{errorMessage}</div>}
        {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="City"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sport Category
          </label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {sports.map((sport) => (
              <option key={sport} value={sport.toLowerCase()}>
                {sport}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Representing
          </label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="representing"
                value="school"
                checked={formData.representing === 'school'}
                onChange={(e) => {
                  handleChange(e);
                  setRepresentingType(e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    coachName: '',
                    institutionOrAcademyName: '',
                  }));
                }}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">School</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="representing"
                value="academy"
                checked={formData.representing === 'academy'}
                onChange={(e) => {
                  handleChange(e);
                  setRepresentingType(e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    institutionOrAcademyName: '',
                  }));
                }}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Academy</span>
            </label>
          </div>
        </div>

        {representingType === 'academy' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Academy Name
              </label>
              <input
                type="text"
                name="institutionOrAcademyName"
                value={formData.institutionOrAcademyName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Academy Name"
              />
            </div>
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
                placeholder="Coach Name"
              />
            </div>
          </>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution Name
            </label>
            <input
              type="text"
              name="institutionOrAcademyName"
              value={formData.institutionOrAcademyName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Institution Name"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Competition Level
          </label>
          <select
            name="competitionLevel"
            value={formData.competitionLevel}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="international">International</option>
            <option value="national">National</option>
            <option value="state">State</option>
            <option value="district">District</option>
          </select>
        </div>

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
