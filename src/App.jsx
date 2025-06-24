import React, { useState } from 'react';
import ProblemStatementInput from './ProblemStatementInput';
import FetchProblemStatements from './FetchYourProblem'; // ✅ Use here
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ReferenceBook from './ReferenceBook';
import ContactPage from './ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'enterYourProblem':
        return (
          <ProblemStatementInput
            onBackToHome={() => navigateTo('home')}
            onSubmissionSuccess={() => {
              alert('Your problem statement has been submitted!');
              navigateTo('home');
            }}
          />
        );
      case 'fetchYourProblem':
        return (
          <FetchProblemStatements
            onBackToHome={() => navigateTo('home')}
          />
        );
      case 'about':
        return <AboutPage onBackToHome={() => navigateTo('home')} />;
      case 'referencebook':
        return <ReferenceBook onBackToHome={() => navigateTo('home')} />;
      case 'contact':
        return <ContactPage onBackToHome={() => navigateTo('home')} />;
      case 'home':
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
