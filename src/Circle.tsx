import React, { useState } from 'react';
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
	// 초기값의 타입을 자동으로 지정함 → 타입지정 불필요
	// undefined, null 방지 : 배열, 객체에서는 타입 지정해주는 것이 좋음
	const [value, setValue] = useState<string | null>('');

	return (
		<div>
			<Container borderColor={borderColor ?? bgColor} bgColor={bgColor}>
				{text}
			</Container>
		</div>
	);
}

export default Circle;
