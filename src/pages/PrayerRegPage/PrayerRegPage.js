import { Button, Dropdown, Form, Input, Menu } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import prayerCoverImage from './image.jpg';
import db from '../../firebase';

function PrayerRegPage() {
	const [showModal, setShowModal] = useState(false);

	//will hold the total counts
	const [jammaathOneCount, setJamaathOneCount] = useState(0);
	const [jammaathTwoCount, setJamaathTwoCount] = useState(0);
	const [jammaathThreeCount, setJamaathThreeCount] = useState(0);

	//will just be a temporary flag to toggle current counts
	const [currentJammaathOne, setCurrentJamaathOne] = useState(0);
	const [currentJammaathTwo, setCurrentJamaathTwo] = useState(0);
	const [currentJammaathThree, setCurrentJamaathThree] = useState(0);

	const [activeChoice, setActiveChoice] = useState('');

	const [nicPassport, setNicPassport] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [fullName, setFullName] = useState('');
	const [form] = Form.useForm();

	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const PHONE_NUMBER_REGEX = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
	const NAMES_REGEX = /^[a-z ,.'-]+$/i;

	useEffect(() => {
		//refetch counts
		db.collection('Jamaath Counts');
		db.collection('Jamaath Counts')?.onSnapshot((snapshot) => {
			if (snapshot.docs.length > 0) {
				setJamaathOneCount(snapshot.docs[0]?.data()['Jamaath 1']);
				setJamaathTwoCount(snapshot.docs[0]?.data()['Jamaath 2']);
				setJamaathThreeCount(snapshot.docs[0]?.data()['Jamaath 3']);
			}
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
			{(jammaathOneCount < 50 || jammaathOneCount === undefined) && (
				<Menu.Item key="0">
					<a onClick={handleJamaathOneChange}>Jamaath 1</a>
				</Menu.Item>
			)}
			<Menu.Divider />
			{(jammaathTwoCount < 50 || jammaathOneCount === undefined) && (
				<Menu.Item key="1">
					<a onClick={handleJamaathTwoChange}>Jamaath 2</a>
				</Menu.Item>
			)}
			<Menu.Divider />
			{(jammaathThreeCount < 50 || jammaathOneCount === undefined) && (
				<Menu.Item key="2">
					<a onClick={handleJamaathThreeChange}>Jamaath 3</a>
				</Menu.Item>
			)}
		</Menu>
	);

	const onHandleRegister = async (e) => {
		setShowModal(false);

		//firebase
		db.collection('Registered').add({
			nicPassport,
			email,
			fullName,
			mobileNumber,
			JamaathChoice: activeChoice,
			time: new Date().toUTCString(),
		});

		//jamaath counts stored in firebase
		//delete all records and reupdate values
		db.collection('Jamaath Counts')
			.get()
			.then((res) => res.forEach((element) => element.ref.delete()));

		db.collection('Jamaath Counts').add({
			'Jamaath 1': jammaathOneCount + currentJammaathOne,
			'Jamaath 2': jammaathTwoCount + currentJammaathTwo,
			'Jamaath 3': jammaathThreeCount + currentJammaathThree,
		});

		form.resetFields();
		setActiveChoice('');
		setNicPassport('');
		setEmail('');
		setMobileNumber();
		setFullName('');
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
					<p>Terms and Conditions</p>
					<p>
						Please note that registration is compulsory to enter the Masjid Children below the age of 15 will not be
						allowed to enter. Your own prayer mat and mask is compulsory. If you registered and didn't receive a token
						number via SMS means you have not been selected due to the slots being full. A valid ID Number is required
						(If invalid, your registration will be revoked) You will have to show the SMS with the confirmed details you
						receive at the entry checkpoint. Double entries will be cancelled as its only 1 token per person. Please
						double check the details you submit as if it is invalid then you will not receive the token even though you
						have been selected. Please do not submit your application twice; if you did, your entire registration would
						be revoked.
					</p>
				</div>
				<div className="prayerReg__bodyForm">
					<Form
						className="prayerReg__bodyFormSection"
						name="basic"
						initialValues={{ remember: true }}
						onFinish={() => setShowModal(true)}
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
								<Input id="nic-passport" onChange={(e) => setNicPassport(e.target.value)} />
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
								<Input id="email" onChange={(e) => setEmail(e.target.value)} />
							</Form.Item>
						</div>
						<div>
							<p>Mobile Number</p>
							<Form.Item
								className="prayerReg__bodyFormMobile"
								name="mobile"
								rules={[
									{ required: true, message: 'Please enter your Mobile Number' },
									{ pattern: PHONE_NUMBER_REGEX, message: 'Please enter a valid Mobile Number!' },
								]}
							>
								<Input id="mobile" onChange={(e) => setMobileNumber(e.target.value)} />
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
								<Input id="fullName" onChange={(e) => setFullName(e.target.value)} />
							</Form.Item>
						</div>

						<div className="prayerReg__bodyJammathTimings">
							<p>Jamaath Timings</p>
							<section className="prayerReg__bodyJamaathContainer">
								<div className="jamaath01">
									<p>Jamaath 1</p>
									<p>Gates Open at - 12:10</p>
									<p>Kuthuba - 12:30</p>
									<p>Namaaz - 12:45</p>
								</div>
								<div className="jamaath02">
									<p>Jamaath 2</p>
									<p>Gates Open at - 12:50</p>
									<p>Kuthuba - 13:00</p>
									<p>Namaaz - 13:15</p>
								</div>
								<div className="jamaath03">
									<p>Jamaath 3</p>
									<p>Gates Open at - 13:20</p>
									<p>Kuthuba - 13:30</p>
									<p>Namaaz - 13:45</p>
								</div>
							</section>
						</div>

						<div className="JamaathOptions">
							<p>Jamaath Options</p>
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
						</div>

						<div className="contactUs__formBtn">
							{(jammaathOneCount === 50 && jammaathTwoCount === 50 && jammaathThreeCount === 50) ||
							!activeChoice ||
							!nicPassport ||
							!email ||
							!mobileNumber ||
							!fullName ? (
								<button disabled htmlType="submit" className="prayerReg__bodyFormRegister">
									Confirm Jamaath
								</button>
							) : (
								<button htmlType="submit" className="prayerReg__bodyFormRegister">
									Confirm Jamaath
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
				onOk={onHandleRegister}
				onCancel={onHandleRegister}
			>
				<p>Assalamu Alaikum {fullName}, your response has been recorded</p>
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
