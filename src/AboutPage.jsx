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
export default AboutPage;