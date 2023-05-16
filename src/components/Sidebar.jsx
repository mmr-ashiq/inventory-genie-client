import { useState } from 'react';
import styled, { css } from 'styled-components';

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container isOpen={isOpen}>
			<div>
				<div>logo</div>

				<Hamburger onClick={toggleSidebar} isOpen={isOpen}>
					<span></span>
					<span></span>
					<span></span>
				</Hamburger>
			</div>

			<ListContainer>
				<ul>
					<li>Dashboard</li>
					<li>Dashboard</li>
					<li>Dashboard</li>
					<li>Dashboard</li>
					<li>Dashboard</li>
					<li>Dashboard</li>
					<li>Dashboard</li>
				</ul>
			</ListContainer>
		</Container>
	);
};

const Container = styled.div`
	padding: 40px 20px;
	background-color: #1a7c7d;
	max-width: 400px;
	min-width: 200px;
	position: fixed;
	min-height: 100vh;
	transition: transform 0.3s ease-in-out;
	padding-right: 40px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	${(props) =>
		props.isOpen &&
		css`
			transform: translateX(-75%);
		`}
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Hamburger = styled.div`
	height: 20px;
	width: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 10;
	/* ${(props) =>
		props.isOpen &&
		css`
			top: 10px;
			right: -30px;
		`} */
	span {
		height: 2px;
		width: 100%;
		background-color: black;
		display: block;
		pointer-events: none;
	}
`;
