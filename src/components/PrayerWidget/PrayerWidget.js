import React from 'react';
import styled from 'styled-components';

const PrayerWidget = () => {
	return (
		<PrayerWidgetWrapper>
			<iframe
				id="iframe"
				title="prayerWidget"
				className="widget-m-top"
				style={{ height: '358px', border: '1px solid #ddd' }}
				scrolling="no"
				src="https://www.islamicfinder.org/prayer-widget/42598157/shafi/2/0/19.5/17.5"
			>
				{' '}
			</iframe>
		</PrayerWidgetWrapper>
	);
};

export default PrayerWidget;

const PrayerWidgetWrapper = styled.div`
	margin: 4rem;
	display: flex;
	justify-content: center;
    font-family: 'Poppins';

`;
