// Create new file: src/pages/ForgotPassword.jsx
import { useState } from 'react';
import api from '../api';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/password_reset/', { email });
            alert('Password reset email sent!');
        } catch (error) {
            alert('Error sending reset email');
        }
    };

    return (
        <div className="form-container">
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="form-input"
                />
                <button type="submit" className="form-button">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
}

export default ForgotPassword;