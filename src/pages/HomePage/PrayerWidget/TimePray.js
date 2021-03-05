import React from 'react';
import styled from 'styled-components';

function TimePray({ name, time }) {
    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      }

	return (
		<TimePrayContainer>
			<p className="name">{name}</p>
			<p className="time">{tConvert(time)}</p>
		</TimePrayContainer>
	);
}

const TimePrayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 1px lightgrey solid;
	width: 180px;
	background-color: #f2f2f2;
    border-radius: 10px;
    padding: 18px;
    font-size: 1rem;
	.name {
		font-weight: bolder;
	}
    p{
        margin: 0;
    }
`;

export default TimePray;
