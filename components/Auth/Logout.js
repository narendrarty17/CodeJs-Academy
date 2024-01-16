import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="bg-gray-600 text-blue-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
            Log Out
        </button>
    );
};

export default LogoutButton;