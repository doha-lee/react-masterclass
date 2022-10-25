import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
	bgColor: string;
	borderColor: string;
}

const Container = styled.div<ContainerProps>`
	width: 200px;
	height: 200px;
	background-color: ${(props) => props.bgColor};
	border: 2px solid ${(props) => props.borderColor};
	border-radius: 100px;
`;

interface CircleProps {
	bgColor: string;
	borderColor?: string;
	text?: string;
}

function Circle({ bgColor, borderColor, text = 'default Text' }: CircleProps) {
	return (
		<div>
			<Container borderColor={borderColor ?? bgColor} bgColor={bgColor}>
				{text}
			</Container>
		</div>
	);
}

export default Circle;
