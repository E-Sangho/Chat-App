import styled from "styled-components";
import Message from "./Message";

const Container = styled.div`
	background-color: rgb(120, 120, 220);
	height: calc(100% - 128px);
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	padding: 16px 8px 0 8px;
`;

function Messages() {
	return (
		<Container>
			{["1", "2", "3"].map((m) => (
				<Message message={m} key={m} />
			))}
		</Container>
	);
}

export default Messages;
