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

export default ContactPage;