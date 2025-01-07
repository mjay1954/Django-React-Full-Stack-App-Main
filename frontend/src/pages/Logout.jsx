// Add to your constants file
export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    window.location.href = '/login';
};

// Add a Logout component
function Logout() {
    return (
        <button 
            onClick={logout}
            className="logout-button"
        >
            Logout
        </button>
    );
}

export default Logout;