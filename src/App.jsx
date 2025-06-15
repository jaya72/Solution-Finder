import React, { useState } from 'react';
//import axios from 'axios'; // Import axios for making HTTP requests
// Main App component that handles routing
function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const navigateTo = (pageName) => {
        setCurrentPage(pageName);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'enterYourProblem':
                return (
                    <ProblemStatementInput
                        onBackToHome={() => navigateTo('home')}
                        // Pass a function to handle successful submission
                        onSubmissionSuccess={() => {
                            alert('Your problem statement has been submitted!');
                            navigateTo('home');
                        }}
                    />
                );
            case 'referencebook':
                return <ReferenceBook onBackToHome={() => navigateTo('home')} />;
            case 'about':
                return <AboutPage onBackToHome={() => navigateTo('home')} />;
            case 'contact':
                return <ContactPage onBackToHome={() => navigateTo('home')} />;
            case 'fetchYourProblem':
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

// --- New Component: ProblemStatementInput ---
function ProblemStatementInput({ onBackToHome, onSubmissionSuccess }) {
    const [problemStatement, setProblemStatement] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!problemStatement.trim()) {
            setError('Please enter a problem statement before submitting.');
            return;
        }

        setIsSubmitting(true);
        setError(null); // Clear previous errors

        try {
            // Make a POST request to your backend API
            const response = await axios.post('http://localhost:5000/api/problems', {
                statement: problemStatement,
            });

            console.log('Server Response:', response.data);
            setProblemStatement(''); // Clear the textarea
            if (onSubmissionSuccess) {
                onSubmissionSuccess(); // Call the success callback
            }
        } catch (err) {
            console.error('Error submitting problem statement:', err);
            setError(err.response?.data?.message || 'Failed to submit problem statement. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h1>Enter Your Problem Statement</h1>
            <p>
                Please describe your problem statement below:
            </p>
            <textarea
                rows="10"
                placeholder="Type your problem statement here..."
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                disabled={isSubmitting} // Disable during submission
            ></textarea>
            {error && <p>{error}</p>} {/* Display error message */}
            <button
                onClick={handleSubmit} // Call handleSubmit
                disabled={isSubmitting} // Disable button during submission
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button
                onClick={onBackToHome}
                >
                Back to Home
            </button>
        </div>
    );
}

// Home Page Component
function HomePage({ navigateTo }) {
    return (
        <div>
            <h1>Welcome to Our Solution Finder Website!</h1>
            <p>
                "Unlock the wisdom of Sanatan Dharma spiritual books to address your life's challenges.
                <br/>Explore our services and discover the ideal solution for your needs."
            </p>
            <div>
                <button
                    onClick={() => navigateTo('about')}
                >
                    About Us
                </button>
                <button
                    onClick={() => navigateTo('referencebook')}
                 >
                    Reference Book
                </button>
                <button
                    onClick={() => navigateTo('contact')}
                >
                    Contact Us
                </button>
                <p className="text-md text-gray-700 mt-6 mb-2">Click the button below to enter your problem statement:</p>
                <button
                    onClick={() => navigateTo('enterYourProblem')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 font-inter"
                >
                    Enter Your Problem Statement
                </button>
            </div>

            <button
                onClick={() => navigateTo('fetchYourProblem')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 font-inter"
            >
                Fetch Your Problem Statement
            </button>

        </div>
    );
}

// About Page Component
function AboutPage({ onBackToHome }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center transform transition-all duration-300 hover:scale-105">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
            <p className="text-lg text-gray-600 mb-8 font-inter">
                "For those seeking spiritual insights but pressed for time, our team offers clear answers drawn from the profound scriptures of Sanatan Dharma.
                <br />We connect modern seekers with the timeless teachings of the Vedas, Puranas, and other spiritual books."
                <br /><br />For now, our primary reference book is 'Bhagvad Gita As It Is'.
            </p>
            <button
                onClick={onBackToHome}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 font-inter"
            >
                Back to Home
            </button>
        </div>
    );
}

// Reference Book Component
function ReferenceBook({ onBackToHome }) {
    return (
        <div>
            <h2>Welcome, Here you can explore our Reference Book</h2>
            <h3>
                <i>Bhagavad Gita As It Is</i>
            </h3>
            <p>
                In case you are satisfied by the answers and eager to read and
                understand the whole book, you have landed on the right spot.
            </p>

            <div className="my-6">
                <a
                    href="https://vedabase.io/en/library/bg/"
                    target="_blank"
                    rel="noopener noreferrer"
            
                >
                    Read Bhagavad Gita As It Is Online
                </a>
            </div>
            <p className="text-md text-gray-700 mb-4">We will add more books soon!</p>
            <button
                onClick={onBackToHome}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 font-inter"
            >
                Back to Home
            </button>
        </div>
    );
}

// Contact Page Component
function ContactPage({ onBackToHome }) {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>
                Have questions or feedback? Feel free to reach out! You can email us or call us at the following contact details:
                <br />Email: <br />
                <a href="mailto:jayamishra759@gmail.com" className="text-blue-600 hover:underline">
                    jayamishra759@gmail.com
                </a><br />
                Or call us at 619-540-2404.
            </p>
            <button
                onClick={onBackToHome}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 font-inter"
            >
                Back to Home
            </button>
        </div>
    );
}

export default App;