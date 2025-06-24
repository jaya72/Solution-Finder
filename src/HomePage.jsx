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
                >
                    Enter Your Problem Statement
                </button>
            </div>
<p> You can fetch enter your problems by entering some common keywords
    example: "stress", "anger", "purpose", "depression" etc.
    <br />
</p>
            <button
                onClick={() => navigateTo('fetchYourProblem')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 font-inter"
            >
                Fetch Your Problem Statement
            </button>

        </div>
    );
}
export default HomePage;