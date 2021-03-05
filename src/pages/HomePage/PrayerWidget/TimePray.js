import React from 'react';
import styled from 'styled-components';

function TimePray({ name, time }) {
	return <TimePrayContainer>{console.log(name + ' ' + time)}</TimePrayContainer>;
}

const TimePrayContainer = styled.div``;

export default TimePray;
