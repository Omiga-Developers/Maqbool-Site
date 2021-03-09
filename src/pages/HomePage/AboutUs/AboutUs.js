import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutUs = () => {
	return (
		<AboutUsWrapper>
			<div className="title">
				<h2>- About Us -</h2>
			</div>
			<p className="update__message" style={{ marginBottom: '20px' }}>
				(This will be updated soon in time In Sha Allah)
			</p>

			<div className="lower">
				<div className="lower__left">
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
						suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
						vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
						accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
						nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
					</p>
					<p>
						<Link to="/about-us" target="_top" style={{ color: '#045762', fontWeight: 'bold' }}>
							Read More &gt;
						</Link>
					</p>
				</div>
				<div
					className="lower__right"
					style={{ backgroundImage: `url(images/about/about.jpg)`, backgroundSize: 'cover' }}
				></div>
			</div>
		</AboutUsWrapper>
	);
};

export default AboutUs;

const AboutUsWrapper = styled.div`
	margin: 5rem 4rem;
	display: flex;
	flex-direction: column;
	font-family: 'Poppins';
	@media screen and (max-width: 1000px) {
	}

	> div.title {
		display: flex;
		justify-content: center;
	}

	> div.title > h2 {
		font-size: 2rem;
		margin-bottom: 30px;
		font-weight: bold !important;
		color: #045762;
	}

	> div.lower {
		padding-left: 2.4rem;
		padding-right: 2.4rem;
		display: flex;
		color: #045762;
	}

	> div.lower > div.lower__left {
		width: 60%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-right: 3rem;
	}

	> div.lower > div.lower__right {
		width: 40%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	div.lower__left > p {
		text-align: justify;
		font-size: 1.1rem;
	}

	div.lower__left {
		text-align: start;
	}
	@media screen and (max-width: 500px) {
		> div.title > h2 {
			font-size: 1.5rem;
			margin-bottom: 10px;
		}
		div.lower__left > p {
			font-size: 1rem;
			text-align: justify;
		}
		> div.lower {
			padding: 0 20px !important;
		}
		.update__message{
			font-size: 10px;
			word-wrap: wrap;
		}
	}
	@media screen and (max-width: 650px) {
		margin: 4rem 1rem;
	}

	@media screen and (max-width: 1000px) {
		> div.lower {
			flex-direction: column;
		}

		div.lower__left,
		div.lower__right {
			width: 100% !important;
			padding: 0 !important;
		}

		div.lower__left > p {
			font-size: 1rem;
		}
		.lower__right {
			height: 250px;
		}
	}
`;
