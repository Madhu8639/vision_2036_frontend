import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const sports = [
  'Badminton',  'Swimming', 'Chess', 'Table Tennis', 'basketball'
];

const StudentRegistrationForm = () => {
  const [representingType, setRepresentingType] = useState('school');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    sportsCategory: '',
    institutionName: '',
    coachName: '',
    academyName: '',
    competitionLevel: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Prepare the payload based on the representing type
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      city: formData.city,
      sportsCategory: formData.sportsCategory,
      competitionLevel: formData.competitionLevel,
      institutionName: representingType === 'school' ? formData.institutionName : '',
      academyName: representingType === 'academy' ? formData.academyName : '',
      coachName: representingType === 'academy' ? formData.coachName : '',
    };

    try {
      const response = await axios.post('https://vision-2036-backend.onrender.com/api/students', payload);
      setSuccessMessage('Student registered successfully!');
      
      console.log('Response:', response.data);
      setTimeout(() => navigate("/"), 2000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || 'An error occurred while registering the student.'
        );
      } else {
        setErrorMessage('An error occurred while registering the student.');
      }
      console.error('Error:', error);
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
              required
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
              required
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
            required
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
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sport Category
          </label>
          <select
            name="sportsCategory"
            value={formData.sportsCategory}
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

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Representing
          </label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="representingType"
                value="school"
                checked={representingType === 'school'}
                onChange={(e) => setRepresentingType(e.target.value)}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">School</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="representingType"
                value="academy"
                checked={representingType === 'academy'}
                onChange={(e) => setRepresentingType(e.target.value)}
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
                name="academyName"
                value={formData.academyName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Academy Name"
                required
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
              name="institutionName"
              value={formData.institutionName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Institution Name"
              required
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
            required
          >
            <option value="">Select competition level</option>
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
export default StudentRegistrationForm;