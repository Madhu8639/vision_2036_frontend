import React from 'react';
import { InstitutionRegistrationForm } from './InstitutionRegistration';
import StudentRegistrationForm from "./StudentRegistrationForm"
import videoSrc from "../../assets/video1.mp4";
import './Registration1.css'; // Import the CSS file

interface StudentRegistrationProps {
  value: string;
}

const Registration1: React.FC<StudentRegistrationProps> = ({ value }) => {
  return (
    <div className="relative min-h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Join Our Sports Community</h1>
        <div className="max-w-3xl mx-auto">
          {value === 'institution' ? <InstitutionRegistrationForm /> : <StudentRegistrationForm />}
        </div>
      </div>
    </div>
  );
};

export default Registration1;