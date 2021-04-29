import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import db from '../../firebase';
import { exportToCSV } from './exportCsv';

function DashBoard() {
	const [authUser, setAuthUser] = useState(true);
	const [loading, setLoading] = useState(true);
	// const USER_ID = '12863';
	// const API_KEY = 'VCrsnCGK4CKplT0HcKlx';
	const [userData, setUserData] = useState();
	// const { gen } = require('n-digit-token');
	const LOADING_GIF_URL = 'https://i.stack.imgur.com/UUjhE.gif';
	const notifyDownload = () => toast('Preparing to download the excel sheet');
	const notifyStartTokenGeneration = () =>
		toast(
			'Preparing to generate tokens, please wait till all the token are generated, you will be notified once all tokens are generated (This will take 2mins approximately)'
		);
	const notifyEndTokenGeneration = () => toast('Successfully generated tokens for all the users');

	useEffect(() => {
		let password = prompt('Enter password to continue: ');
		console.log(password);
		if (password === 'Thisismydashboardpassword') {
			setAuthUser(true);
		} else {
			setAuthUser(false);
		}
	}, []);

	useEffect(() => {
		db.collection('Registered')?.onSnapshot((snapshot) => {
			setUserData(snapshot.docs);
		});
		// Add a loading gif here (3 second delay)
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	// handle reset database data
	const handleDeleteRecords = () => {
		// returns true or false
		let resultBool = window.confirm('Are you sure ?');

		if (resultBool) {
			// Beginning
			alert('Performing resetting, please hold on...');

			// reset the counts to 0

			// delete all the records from the "Registered" collection

			// Completed
			alert('Completed Resetting Successfully!');
		}
	};

	// handle generated tokens for all the cusotmers
	const handleGenerateTokens = () => {
		notifyStartTokenGeneration();
		for (let index = 0; index < userData?.length; index++) {
			let doc_id = userData[index].id;
			let data = userData[index]?.data();
			let token =
				Math.floor(Math.random() * 11) +
				'' +
				Math.floor(Math.random() * 11) +
				'' +
				Math.floor(Math.random() * 11) +
				'' +
				Math.floor(Math.random() * 11);

			if (data?.notified === false) {
				console.log('Generating token');
				// let phoneNumber = data?.mobileNumber.slice(1);
				// console.log(phoneNumber);
				// Perform notification
				// fetch(
				// 	`https://app.notify.lk/api/v1/send?user_id=${USER_ID}&api_key=${API_KEY}&sender_id=NotifyDEMO&to=${phoneNumber}&message=${`
				// 		Prayer Registration Details,
				// 		Token Number: ${token} \n,
				// 		Name: ${data?.fullName} \n,
				// 		Email: ${data?.email} \n,
				// 		Mobile Number: ${data?.mobileNumber} \n,
				// 		NIC / Passport Number: ${data?.nicPassport} \n,
				// 		Time of Registration: ${data?.time} \n,
				// 		PLEASE DO NOT DELETE THIS MESSAGE UNTIL YOU COMPLETE THE PRAYER. \n
				// 	`}`
				// );

				// Updating the database with the TOKEN NUMBERS
				db.collection('Registered').doc(doc_id).update({
					notified: true,
					token: token,
				});
			}
		}

		// 2 mins for all the notifications to happen
		setTimeout(() => {
			notifyEndTokenGeneration();
		}, 120 * 1000);
	};

	// creating a downloadable excel file with all the data
	const handleDownloadData = () => {
		notifyDownload();
		const fileName = 'userData';
		let exportData = [];

		for (let index = 0; index < userData?.length; index++) {
			let data = userData[index]?.data();
			exportData.push(data);
		}
		exportData.sort(function (a, b) {
			return a?.token - b?.token;
		});
		exportToCSV(exportData, fileName);
	};

	return (
		<DashBoardContainer>
			{authUser ? (
				<>
					{loading ? (
						<div className="loadingImage">
							<img src={LOADING_GIF_URL} alt="" />
						</div>
					) : (
						<>
							<div className="dashboard__header">MAQBOOL - DASHBOARD</div>
							<div className="dashboard__description">
								<p>
									<strong>IMPORTANT NOTE: </strong> Make sure you have enough credit available before clicking the
									GENERATE TOKENS BUTTON.
								</p>
								<p>
									<strong>GENERATE TOKENS:</strong> When you click this button it will generate tokens to everyone who
									registered for the prayer. This will only generate tokens and send for the people who didn't receive
									the token yet. So make sure you click the generate tokens button if you did not.
								</p>

								<br />
								<p>
									<strong>DOWNLOAD DATA:</strong> This is create a downloadable excel file with all the records of the
									people who registered for the prayer.
								</p>
							</div>
							<div className="dashboard__buttons">
								<button onClick={handleGenerateTokens}>GENERATE TOKENS</button>
								<button onClick={handleDownloadData}>DOWNLOAD DATA</button>
								<button onClick={handleDeleteRecords}>RESET DB</button>
								<ToastContainer hideProgressBar={true} autoClose={3000} />
							</div>
							<br />
							<br />
						</>
					)}
				</>
			) : (
				<div className="dashboard__invalidUser">
					<p>THIS IS NOT OPEN FOR PUBLIC</p>
				</div>
			)}
		</DashBoardContainer>
	);
}

const DashBoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 80px 100px;

	.dashboard__invalidUser > p {
		margin: 270px 30px;
		color: #045762;
		text-align: center;
		font-size: 25px;
		font-weight: bold;
	}
	.dashboard__header {
		font-weight: bold;
		font-size: 30px;
		color: #045762;
		margin: 50px;
	}
	.dashboard__buttons {
		display: flex;
		margin-top: 80px;
	}
	.dashboard__buttons > button {
		background-color: #045762;
		width: 200px;
		padding: 20ox;
		margin: 20px;
		cursor: pointer;
		outline: none;
		height: 50px;
		border-color: #045762;
		border-radius: 5px;
		font-weight: bold;
		font-size: 15px;
		color: white;
	}
	.dashboard__buttons > button:nth-child(2) {
		background-color: white !important;
		color: #045762 !important;
	}
	.dashboard__description > p > strong {
		color: #045762;
	}
	.dashboard__description > p {
		font-size: 16px;
		text-align: justify;
	}
	.loadingImage {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 80px;
	}
	.loadingImage > img {
		object-fit: contain;
		height: 100px;
	}
	@media screen and (max-width: 1020px) {
		margin: 50px;
	}
	@media screen and (max-width: 750px) {
		margin: 20px 50px;
		/* .dashboard__invalidUser > p {
			margin: 180px 30px;
		} */
		.dashboard__header {
			font-size: 25px;
			margin: 10px;
		}
		.dashboard__description {
			margin: 20px;
		}
		.dashboard__buttons {
			display: flex;
			flex-direction: column;
			margin-top: 50px;
		}
		.dashboard__buttons > button {
			width: 250px;
			margin: 10px;
		}
	}
	@media screen and (max-width: 500px) {
		margin: 20px;
	}
	@media screen and (max-width: 400px) {
		.dashboard__header {
			font-size: 20px;
		}
		.dashboard__buttons > button {
			width: 250px;
			margin: 10px;
		}
	}
	@media screen and (max-width: 300px) {
		margin: 10px;
		.dashboard__header {
			font-size: 18px;
		}
		.dashboard__description {
			margin: 10px;
		}
		.dashboard__description > p {
			font-size: 15px;
		}
		.dashboard__buttons > button {
			width: 200px;
		}
		.dashboard__buttons {
			margin-top: 10px;
		}
	}
`;

export default DashBoard;
