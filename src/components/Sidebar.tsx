import styled from "styled-components";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Container = styled.div`
	flex: 1;
	background-color: #3e3c61;
`;

function Sidebar() {
	return (
		<Container>
			<Navbar />
			<Search />
			<Chats />
		</Container>
	);
}

export default Sidebar;
