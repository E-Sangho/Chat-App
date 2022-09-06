import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Background = styled.div`
	background-color: #a7bcff;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 65%;
	height: 80%;
	border-radius: 12px;
	border: 2px solid white;

	display: flex;
	overflow: hidden;
`;

function Home() {
	return (
		<Background>
			<Container>
				<Sidebar />
				<Chat />
			</Container>
		</Background>
	);
}

export default Home;
