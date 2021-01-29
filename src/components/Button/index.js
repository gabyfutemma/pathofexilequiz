import styled from 'styled-components';

const Button = styled.button`
	width: 100%;
	box-shadow: inset 0px 1px 0px 0px #f29c93;
	background: linear-gradient(to bottom, #b12b24 5%, #760604 100%);
	background-color: #b12b24;
	border-radius: 6px;
	border: 1px solid #d83526;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 15px;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #b23e35;
	:hover {
	background: linear-gradient(to bottom, #760604 5%, #b12b24 100%);
	background-color: #760604;
	}
	:active {
	position: relative;
	top: 1px;
	}
`;

export default Button;
