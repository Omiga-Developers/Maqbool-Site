import React from 'react';
import styled from 'styled-components';
import donateCoverImage from './image.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'antd';

function DonatePage() {
	const notify = () => toast('Coming Soon!');
	return (
		<DonatePageMain>
			{/* bg image */}
			<div className="donate__title">
				<p>Donate</p>
			</div>

			{/* donate option */}
			<div className="donate__body">
				<h1>
					WE ARE <span>ALMOST</span> THERE
				</h1>

				<button onClick={notify}>Donate</button>
				<ToastContainer hideProgressBar={true} autoClose={3000}/>
			</div>
		</DonatePageMain>
	);
}

const DonatePageMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.donate__title {
		background-image: url(${donateCoverImage});
		background-repeat: no-repeat;
		background-size: cover;
		padding: 130px 150px;
		background-position: center;
		width: 100%;
	}
	.donate__title > p {
		font-size: 80px;
		font-weight: lighter;
		margin: 0 !important;
		font-weight: 700;
		line-height: 80px;
		/* border: 1px red solid; */
		color: white;
	}
	.donate__body {
		margin: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.donate__body > h1 {
		margin: 100px;
		font-size: 50px;
		color: darkgreen;
		font-weight: lighter;
	}
	.donate__body > h1 > span {
		font-weight: bolder;
	}
	.donate__body > button {
		margin-bottom: 100px;
		color: darkgreen;
		background-color: #fff;
		outline: none;
        cursor: pointer;
        font-size: 25px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.12), 3px 1px 5px rgba(0,0,0,0.24);
		border: 1px transparent solid;
        transition: 0.5s ease-in-out;
		border-radius: 20px;
		padding: 5px 25px;
		/* border: 1px red solid; */
	}
    .donate__body > button:hover {
        border: 1px darkgreen solid;
        transition: 0.2s ease-in-out;
	}
`;
export default DonatePage;
