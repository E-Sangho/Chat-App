import styled from "styled-components";

interface IProps {
	message: string;
}

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Img = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-right: 8px;
`;

const Content = styled.div`
	background-color: rgb(100, 100, 210);
	padding: 8px 16px;
	border-radius: 0 8px 8px 8px;
	height: 32px;
	color: white;
	max-width: 80%;
	display: flex;
	align-items: center;
`;

function Message({ message }: IProps) {
	return (
		<Container>
			<Img
				src="https://w7.pngwing.com/pngs/887/945/png-transparent-line-application-bear-illustration-kakaotalk-kakao-friends-emoticon-kakao-ryan-smiley-sticker-desktop-wallpaper.png"
				alt="user"
			/>
			<Content>{message}</Content>
		</Container>
	);
}

export default Message;
