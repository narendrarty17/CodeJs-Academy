import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className="bg-gray-600 text-blue-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
            onClick={() => loginWithRedirect()}
        >Log In</button>
    );
};

export default LoginButton;