import React from 'react';
import styled from 'styled-components';

function TimePray({ name, time }) {
	return (
		<TimePrayContainer>
			<p className="name">{name}</p>
			<p className="time">{time}</p>
		</TimePrayContainer>
	);
}

const TimePrayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    flex-direction: column;

	.name {
		font-weight: bold;
	}
`;

export default TimePray;
