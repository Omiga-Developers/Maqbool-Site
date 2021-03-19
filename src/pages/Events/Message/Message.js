import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Message = forwardRef(({ message }, ref) => {
	return (
		<MessageMainContainer >
			<p ref={ref}>{message}</p>
		</MessageMainContainer>
	);
});

export default Message;

const MessageMainContainer = styled.div`
	p {
		display: flex;
		width: fit-content;
		align-items: center;
		justify-content: flex-start;
		padding: 5px 10px;
		word-wrap: wrap;
		margin: 8px 10px;
		border-top-left-radius:15px;
		border-top-right-radius:15px;
		border-bottom-right-radius:15px;
		background-color: #045762;
		color: white;
	}
`;
