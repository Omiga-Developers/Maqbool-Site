import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Form, Input, Menu } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import db from '../../firebase';
import prayerCoverImage from './image.jpg';

function PrayerRegPage() {
	const [showModal, setShowModal] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const history = useHistory();
	const [full, setFull] = useState(false);

	//will hold the total counts
	const [jammaathOneCount, setJamaathOneCount] = useState(null);
	const [jammaathTwoCount, setJamaathTwoCount] = useState(null);
	const [jammaathThreeCount, setJamaathThreeCount] = useState(null);

	//will just be a temporary flag to toggle current counts
	const [currentJammaathOne, setCurrentJamaathOne] = useState(0);
	const [currentJammaathTwo, setCurrentJamaathTwo] = useState(0);
	const [currentJammaathThree, setCurrentJamaathThree] = useState(0);

	const [activeChoice, setActiveChoice] = useState('');

	const [nicPassport, setNicPassport] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [fullName, setFullName] = useState('');
	const [dateTime, setDateTime] = useState('');
	const [form] = Form.useForm();

	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const PHONE_NUMBER_REGEX = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
	const NAMES_REGEX = /^[a-z ,.'-]+$/i;

	// Wednesday -> 3
	useEffect(() => {
		let date = new Date();
		let enableTargetTime = 14 * 60 + 45; // Real Enable time
		let disableTargetTime = 15 * 60; // Real Disable time
		let currentTime = date.getHours() * 60 + date.getMinutes();

		// REDIRECTION OF ROUTES BASED ON TIMINGS
		if (date.getDay() === 3) {
			if(!(currentTime >= enableTargetTime && currentTime <= disableTargetTime)){
				history.replace('/home');
			}
		} else {
			history.replace('/home');
		}
	}, []);

	// Updated use effect
	useEffect(() => {
		db.collection('Registered')?.onSnapshot((snapshot) => {
			let JamOne = 0;
			let JamTwo = 0;
			let JamThree = 0;

			for (let index = 0; index < snapshot.docs?.length; index++) {
				const registrationData = snapshot.docs[index]?.data();

				if (registrationData['JamaathChoice'] === 'Jamaath 1') {
					JamOne = JamOne + 1;
				} else if (registrationData['JamaathChoice'] === 'Jamaath 2') {
					JamTwo = JamTwo + 1;
				} else if (registrationData['JamaathChoice'] === 'Jamaath 3') {
					JamThree = JamThree + 1;
				}
			}

			if (JamOne >= 75 && JamTwo >= 75 && JamThree >= 75) {
				setFull(true);
			}

			setJamaathOneCount(JamOne);
			setJamaathTwoCount(JamTwo);
			setJamaathThreeCount(JamThree);
		});
	}, [jammaathOneCount, jammaathTwoCount, jammaathThreeCount]);

	const handleJamaathOneChange = () => {
		setActiveChoice('Jamaath 1');
		setCurrentJamaathOne(1);
		setCurrentJamaathTwo(0);
		setCurrentJamaathThree(0);
	};

	const handleJamaathTwoChange = () => {
		setActiveChoice('Jamaath 2');
		setCurrentJamaathOne(0);
		setCurrentJamaathTwo(1);
		setCurrentJamaathThree(0);
	};

	const handleJamaathThreeChange = () => {
		setActiveChoice('Jamaath 3');
		setCurrentJamaathOne(0);
		setCurrentJamaathTwo(0);
		setCurrentJamaathThree(1);
	};

	const jamaathOptions = () => (
		<Menu style={{ width: '250px' }}>
			{/* limit: 75 */}
			{(jammaathOneCount < 75 || jammaathOneCount === undefined) && (
				<Menu.Item key="0">
					<a onClick={handleJamaathOneChange}>Jamaath 1</a>
				</Menu.Item>
			)}
			<Menu.Divider />
			{/* limit: 75 */}
			{(jammaathTwoCount < 75 || jammaathOneCount === undefined) && (
				<Menu.Item key="1">
					<a onClick={handleJamaathTwoChange}>Jamaath 2</a>
				</Menu.Item>
			)}
			<Menu.Divider />
			{/* limit: 75 */}
			{(jammaathThreeCount < 75 || jammaathOneCount === undefined) && (
				<Menu.Item key="2">
					<a onClick={handleJamaathThreeChange}>Jamaath 3</a>
				</Menu.Item>
			)}
		</Menu>
	);

	const onHandleRegister = async (e) => {
		let timeRegister = new Date().toUTCString();
		setDateTime(timeRegister);

		//firebase
		db.collection('Registered').add({
			nicPassport,
			email,
			fullName,
			mobileNumber,
			JamaathChoice: activeChoice,
			time: timeRegister,
			notified: false,
			token: 'NO TOKEN',
		});

		//jamaath counts stored in firebase
		//delete all records and reupdate values
		db.collection('Jamaath Counts')
			.doc('counts')
			.update({
				'Jamaath 1': jammaathOneCount + currentJammaathOne,
				'Jamaath 2': jammaathTwoCount + currentJammaathTwo,
				'Jamaath 3': jammaathThreeCount + currentJammaathThree,
			});

		setShowModal(true);
		setSubmitted(false);
	};

	return (
		<PrayerRegPageMain>
			{/* bg image */}
			<div className="prayerReg__title">
				<p>Prayers</p> <p>Registration</p>
			</div>

			<div className="prayerReg__body">
				<div className="prayerReg__bodyDescription">
					<h2>Maqbool Jumuah Registration</h2>
					<p>In the month of Ramadan, all jummah namaaz will be THREE JAMA’ATH’S</p>
					<strong>
						<p>Terms and Conditions</p>
					</strong>

					<p>
						{' '}
						&#8226; Registration does not guarantee a spot for prayers, If you have registered and dont recieve a toke
						via SMS means that you have not been selected.{' '}
					</p>
					<p>
						{' '}
						&#8226; Face mask and musalla compulsory, Failure to do so will result in giving your spot to another
						person.{' '}
					</p>
					<p> &#8226; Wear face mask at all times when in the masjid. </p>
					<p> &#8226; Maintain social distance and pray only in the designated marked places fr Namaaz. </p>
					<p> &#8226; Hand wash and sanitizer provided at the gate. </p>
					<p> &#8226; Late Entry will not be permitted </p>
					<p> &#8226; If possible please come in wudu </p>
					<p> &#8226; Wear cap when in the masjid and Specially during prayers. </p>
					<p>
						{' '}
						&#8226; Once you finish your jummah namaaz, duaa and salat-O-Salaam pls leave the masjid as people fr the
						next jama’ath can enter.{' '}
					</p>
					<p>
						{' '}
						&#8226; Please cooperate with the masjid staff and trustees to main the guide lines, rules and regulations
						provided by the health ministry.{' '}
					</p>
					<p>
						{' '}
						&#8226; Please keep a screenshot of your application before submitting to report any errors from our end. We
						will need proof for any complaints submitted.{' '}
					</p>
					<p>
						{' '}
						&#8226; Please do not contact any staff members via Call or whatsapp to their personal numbers. We will only
						accept complaints through the complaints form on the website.{' '}
					</p>
					<p> &#8226; Children below 15 years strictly prohibited. </p>
					<p>
						&#8226; A Valid ID number and phone number is required for each application, If incorrect, your application
						will be revoked.{' '}
					</p>
					<p> &#8226; Each individual should submit with their own NIC/PASSPORT number and mobile number </p>
					<p>
						{' '}
						&#8226; Please only register once and be patient for the token, Multiple registrations would lead to the
						entire registration to be revoked.{' '}
					</p>
					<p> &#8226; Please make sure to register yourself first before registering others. </p>
					<p> &#8226; You have to accept the Terms & Conditions above to proceed with the registration </p>
					<p>
						{' '}
						&#8226; Please note that the system selects on first come first serve basis only. IT IS NOT AN ACT OF
						FAVORATION OR SELECTING CLOSE FRIENDS FIRST.{' '}
					</p>
					<p>
						&#8226; Any calls made to the team handling the registration will not be answered and complaints are
						strictly to be typed on the complaints form. Please do not be rude to the team.{' '}
					</p>
				</div>
				<div className="prayerReg__bodyForm">
					<Form
						className="prayerReg__bodyFormSection"
						name="basic"
						initialValues={{ remember: true }}
						// onFinish={() => setShowModal(true)}
						requiredMark={false}
						colon={false}
						form={form}
					>
						<div>
							<p>NIC/Passport Number</p>
							<Form.Item
								className="prayerReg__bodyFormNIC"
								name="nic-passport"
								rules={[{ required: true, message: 'Please fill in your NIC/Passport Number!' }]}
							>
								<Input
									id="nic-passport"
									onChange={(e) => setNicPassport(e.target.value)}
									placeholder="NIC - Passport Number"
								/>
							</Form.Item>
						</div>
						<div>
							<p>Email</p>
							<Form.Item
								className="prayerReg__bodyFormEmail"
								name="email"
								rules={[
									{ required: true, message: 'Please enter your Email' },
									{ pattern: EMAIL_REGEX, message: 'Please enter a valid E-mail!' },
								]}
							>
								<Input id="email" onChange={(e) => setEmail(e.target.value)} placeholder="someone@gmail.com" />
							</Form.Item>
						</div>
						<div>
							<p>
								Mobile Number{' '}
								<small>
									<strong>
										(Enter number in <strong>+947XXXXXXXX</strong> format else you <strong>won't</strong> be able to get
										the <strong>token number</strong>)
									</strong>
								</small>
							</p>
							<Form.Item
								className="prayerReg__bodyFormMobile"
								name="mobile"
								rules={[
									{ required: true, message: 'Please enter your Mobile Number' },
									{ pattern: PHONE_NUMBER_REGEX, message: 'Please enter a valid Mobile Number!' },
								]}
							>
								<Input id="mobile" onChange={(e) => setMobileNumber(e.target.value)} placeholder="+947XXXXXXXX" />
							</Form.Item>
						</div>
						<div>
							<p>Full Name</p>
							<Form.Item
								className="prayerReg__bodyFormFullName"
								name="fullName"
								rules={[
									{ required: true, message: 'Please enter your Full Name' },
									{ pattern: NAMES_REGEX, message: 'Please enter a valid name!' },
								]}
							>
								<Input id="fullName" onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
							</Form.Item>
						</div>

						<div className="prayerReg__bodyJammathTimings">
							<p>Jamaath Timings</p>
							<section className="prayerReg__bodyJamaathContainer">
								<div className="jamaath01">
									<p>Jama’ath 1</p>
									<p>Enter at - 12:00pm</p>
									<p>Kuthba at - 12:20pm</p>
									<p>Namaaz at - 12:30pm</p>
								</div>
								<div className="jamaath02">
									<p>Jama’ath 2</p>
									<p>Enter at - 12:45pm</p>
									<p>Kuthba at - 12:50pm</p>
									<p>Namaaz at - 1:00pm</p>
								</div>
								<div className="jamaath03">
									<p>Jama’ath 3</p>
									<p>Enter at - 1:15pm</p>
									<p>Kuthba at - 1:20pm</p>
									<p>Namaaz at - 1:30pm</p>
								</div>
							</section>
						</div>

						<div className="JamaathOptions">
							{!full && <p>Jamaath Options</p>}

							{jammaathThreeCount !== null ? (
								full ? (
									<p>All Jamaaths are Full! </p>
								) : (
									<div style={{ width: '250px' }}>
										<Dropdown overlay={jamaathOptions} trigger={['click']}>
											<Button style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
												<span>{activeChoice}</span>
												<span>
													<DownOutlined />
												</span>
											</Button>
										</Dropdown>
									</div>
								)
							) : (
								<p>Loading . . .</p>
							)}
						</div>

						<div className="contactUs__formBtn">
							{(jammaathOneCount >= 75 && jammaathTwoCount >= 75 && jammaathThreeCount >= 75) ||
							!activeChoice ||
							!nicPassport ||
							!email ||
							!mobileNumber ||
							!fullName ? (
								<button
									disabled
									htmlType="submit"
									style={{ backgroundColor: 'grey', color: 'white', borderColor: 'white' }}
									className="prayerReg__bodyFormRegister"
								>
									Confirm Jamaath
								</button>
							) : (
								<button
									htmlType="submit"
									disabled={submitted}
									onClick={() => {
										setSubmitted(true);
										setTimeout(() => {
											onHandleRegister();
										}, Math.random() * 1500 + Math.random() * 1500);
									}}
									className="prayerReg__bodyFormRegister"
								>
									{submitted ? <>Registering...</> : <>Confirm Jamaath</>}
								</button>
							)}
						</div>
					</Form>
				</div>
			</div>
			<Modal
				centered
				visible={showModal}
				title="Your response has been recorded"
				onOk={() => {
					// Displaying the welcome page
					history.replace('/welcome');
					setShowModal(false);

					form.resetFields();
					setActiveChoice('');
					setNicPassport('');
					setEmail('');
					setMobileNumber();
					setFullName('');
				}}
				onCancel={() => {
					// Displaying the welcome page
					history.replace('/welcome');
					setShowModal(false);

					form.resetFields();
					setActiveChoice('');
					setNicPassport('');
					setEmail('');
					setMobileNumber();
					setFullName('');
				}}
			>
				<p> Assalamu Alaikum {fullName}, your response has been recorded </p>
				<p>
					<em>
						{' '}
						<strong>Please take a screen shot of this for safety purpose</strong>
					</em>
				</p>
				<p>
					{' '}
					&#8226; <strong>Name</strong>: {fullName}
				</p>
				<p>
					{' '}
					&#8226; <strong>Email</strong>: {email}
				</p>
				<p>
					{' '}
					&#8226; <strong>Mobile Number</strong>: {mobileNumber}
				</p>
				<p>
					{' '}
					&#8226; <strong>Jamaath Choice</strong>: {activeChoice}
				</p>
				<p>
					{' '}
					&#8226; <strong>NIC/Passport No </strong>:{nicPassport}
				</p>
				<p>
					{' '}
					&#8226; <strong>Date & Time</strong>: {dateTime}
				</p>
			</Modal>
		</PrayerRegPageMain>
	);
}

const PrayerRegPageMain = styled.div`
	font-family: 'Poppins';
	animation: fadeInAnimation ease 1s;

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.prayerReg__title {
		background-image: url(${prayerCoverImage});
		background-repeat: no-repeat;
		background-size: cover;
		padding: 100px 150px;
		background-position: center;
		width: 100%;
	}
	.prayerReg__title > p {
		font-size: 80px;
		font-weight: lighter;
		margin: 0 !important;
		line-height: 80px;
		/* border: 1px red solid; */
		color: white;
	}
	.prayerReg__title > p:first-child {
		font-weight: 700;
	}
	.prayerReg__body {
		margin: 80px 100px;
	}
	.prayerReg__bodyDescription > h2 {
		color: #045762;
		font-size: 25px;
		font-weight: bold;
		margin: 30px 0;
	}
	.prayerReg__bodyDescription > p,
	.prayerReg__bodyDescription > strong > p,
	.prayerReg__bodyFormSection > div > p {
		color: #045762;
		font-size: 20px;
	}
	.prayerReg__bodyFormSection {
		margin: 100px 0;
	}
	.ant-input {
		background-color: #efefef;
		border-radius: 20px;
	}
	.prayerReg__bodyJamaathContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.prayerReg__bodyJamaathContainer > div {
		border: 1px green solid;
		padding: 50px 30px;
		margin: 20px 0;
		flex-direction: column;
		background-color: #045762;
		color: white;
		display: flex;
		border-radius: 20px;
		align-items: center;
	}
	.prayerReg__bodyJamaathContainer > div > p {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 0px;
	}
	.prayerReg__bodyJamaathContainer > div > p:first-child {
		margin-bottom: 20px;
	}
	.prayerReg__bodyJammathTimings {
		margin: 50px 0;
	}
	.JamaathOptions > div > select {
		color: grey !important;
		outline: none;
		padding: 5px 0;
		width: 300px;
		cursor: pointer;
		font-size: 1rem;
		border: 1px lightgrey solid;
		@media screen and (max-width: 450px) {
			width: 50vw;
		}
	}

	.prayerReg__bodyFormRegister {
		background-color: #045762;
		color: #fff;
		margin: 50px 0;
		outline: none;
		cursor: pointer;
		font-size: 20px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12), 3px 1px 5px rgba(0, 0, 0, 0.24);
		border: 1px transparent solid;
		transition: 0.5s ease-in-out;
		border-radius: 20px;
		padding: 5px 25px;
		/* border: 1px red solid; */
	}
	.prayerReg__bodyFormRegister:hover {
		border: 1px darkgreen solid;
		background-color: #fff;
		color: #045762;
		transition: 0.2s ease-in-out;
	}
	.jamaath01,
	.jamaath02,
	.jamaath03 {
		background-image: url(${prayerCoverImage});
		background-repeat: no-repeat;
		background-size: cover;
		cursor: pointer;
		background-position: center;
	}

	@media screen and (max-width: 1000px) {
		.prayerReg__bodyDescription > p {
			text-align: justify;
		}
		.prayerReg__bodyJamaathContainer {
			justify-content: space-evenly;
		}
	}
	@media screen and (max-width: 700px) {
		.prayerReg__body {
			margin: 80px 50px;
		}
	}
	@media screen and (max-width: 650px) {
		.prayerReg__title > p {
			display: flex !important;
			flex-direction: column !important;
			align-items: center !important;
			justify-content: center !important;
			line-height: 4rem;
			font-size: 4rem;
		}
	}
	@media screen and (max-width: 400px) {
		.prayerReg__bodyFormSection {
			margin: 60px 0;
		}
		.prayerReg__bodyJamaathContainer > div {
			padding: 30px 20px;
		}
		.prayerReg__title > p {
			line-height: 3rem;
			font-size: 3rem;
		}
		.prayerReg__body {
			margin: 50px 25px;
		}
	}
	@media screen and (max-width: 350px) {
		.prayerReg__title > p {
			line-height: 2.5rem;
			font-size: 2.5rem;
		}
		.prayerReg__title {
			padding: 80px 100px;
		}
	}
`;
export default PrayerRegPage;
