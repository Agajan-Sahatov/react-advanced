import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
	const onLoggedIn = useContext(UserContext)[1];
	return (
		<div>
			<button onClick={() => onLoggedIn("Sahatov")}>Login</button>
		</div>
	);
}

export default Login;
