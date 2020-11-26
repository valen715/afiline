import React from 'react';
import '../styles/Navbar.css';

export const Navbar = ({ titulo }) => {
	return (
		<>
			<div className="nav_bar navbar">
				<div
					className="container-fluid navbar_brand text-white"
					bg="navbar"
				>
					<header titulo="" className="App-header ">
						<a className="header_registro text-white" href="/">
							{titulo}
						</a>
					</header>
				</div>
			</div>
		</>
	);
};

export default Navbar;
