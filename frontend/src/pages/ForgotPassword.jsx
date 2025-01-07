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
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Reset Password</button>
        </form>
    );
}

export default ForgotPassword;