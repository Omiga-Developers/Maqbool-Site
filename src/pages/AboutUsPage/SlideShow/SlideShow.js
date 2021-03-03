import React from 'react';
import styled from 'styled-components';
import AnimatedBg from 'react-animated-bg';

function SlideShow() {
	const imagesList = [
		'url("https://media.istockphoto.com/photos/muslim-man-is-praying-in-mosque-picture-id1001021150?k=6&m=1001021150&s=612x612&w=0&h=4C5gYs9QG8D4SJV4gzxzq8X-E4nB4aOsFwGRnH78Pk8=")',
		'url("https://static6.depositphotos.com/1003580/621/i/600/depositphotos_6212608-stock-photo-hands-up-islamic-praying-koran.jpg")',
		'url("https://al-talib.org/wp-content/uploads/2014/03/Muslims-praying-Michael-O.-799x533.jpg")',
	];
	return (
		<SlideShowMain>
			<AnimatedBg
				className="slideShowImage"
				colors={imagesList}
				duration={2}
				delay={1}
				timingFunction="ease-out"
			></AnimatedBg>
		</SlideShowMain>
	);
}

const SlideShowMain = styled.div`
	.slideShowImage {
		width: 500px;
		height: 450px;
	}
`;
export default SlideShow;
