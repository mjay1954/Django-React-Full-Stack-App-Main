import Form from "../components/Form";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <div className="text-center mt-4">
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
    );
}

export default Login;