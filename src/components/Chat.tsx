import styled from "styled-components";
import Input from "./Input";
import Messages from "./Messages";

const Container = styled.div`
	flex: 2;
`;

const ChatInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	background-color: rgb(80, 80, 170);
	height: 64px;
`;

const User = styled.div`
	font-size: 18px;
	color: white;
`;

const Icons = styled.div`
	display: flex;
	gap: 24px;
`;

const Icon = styled.svg`
	width: 20px;
	height: 20px;
	color: white;
`;

function Chat() {
	return (
		<Container>
			<ChatInfo>
				<User>User Name</User>
				<Icons>
					<Icon
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						fill="currentColor"
					>
						<path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
					</Icon>
					<Icon
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
						fill="currentColor"
					>
						<path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
					</Icon>
					<Icon
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						fill="currentColor"
					>
						<path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
					</Icon>
				</Icons>
			</ChatInfo>
			<Messages />
			<Input />
		</Container>
	);
}

export default Chat;
