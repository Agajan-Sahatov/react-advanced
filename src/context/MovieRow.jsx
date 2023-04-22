import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
	const userContext = useContext(UserContext);
	const cartContext = useContext(CartContext);

	console.log("Cart Context", cartContext);

	return <div>Movie Row {userContext[0] ? userContext[0].name : ""}</div>;
}

export default MovieRow;
