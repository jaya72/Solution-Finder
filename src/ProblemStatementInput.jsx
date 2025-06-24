// --- New Component: ProblemStatementInput ---
import axios from 'axios';
import React, { useState } from 'react';

function ProblemStatementInput({ onBackToHome, onSubmissionSuccess }) {
    const [problemStatement, setProblemStatement] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!problemStatement.trim()) {
            setError('Please enter a problem statement.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            await axios.post('http://localhost:5000/api/problems', {
                statement: problemStatement,
            });

            setProblemStatement('');
            onSubmissionSuccess();
        } catch (err) {
            setError('Failed to submit problem statement.');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h1>Enter Your Problem Statement</h1>
            <textarea
                rows="10"
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                placeholder="Type your problem..."
                disabled={isSubmitting}
            ></textarea>
            {error && <p>{error}</p>}
            <button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button onClick={onBackToHome}>Back to Home</button>
        </div>
    );
}
export default ProblemStatementInput;

