import React from 'react';
// import { Carousel } from './Carousel';
// import { ParallaxSection } from './ParallaxSection';
import { InstitutionRegistrationForm } from './InstitutionRegistration';
import { StudentRegistrationForm } from './StudentRegistrationForm';

interface StudentRegistrationProps {
  value: string;
}

const Registration1: React.FC<StudentRegistrationProps> = ({ value }) => {
  return (

    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Sports Community</h1>
        <div className="max-w-3xl mx-auto">
          {value === 'institution'?<InstitutionRegistrationForm />:<StudentRegistrationForm />}
        </div>
      </div>
    </div>
  );
};

export default Registration1;