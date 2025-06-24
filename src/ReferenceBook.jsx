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
export default ReferenceBook;