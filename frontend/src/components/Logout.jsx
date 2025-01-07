// src/components/Logout.jsx
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";  // Make sure path is correct

function Logout() {
    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        window.location.href = '/login';
    };

    return (
        <button 
            onClick={handleLogout}
            className="logout-button"
        >
            Logout
        </button>
    );
}

export default Logout;