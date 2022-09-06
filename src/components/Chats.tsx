import styled from "styled-components";

const Container = styled.ul`
	display: flex;
	flex-direction: column;
`;

const List = styled.li`
	display: flex;
	align-items: center;
	padding: 8px;
	margin-bottom: 12px;
`;

const Img = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-right: 8px;
`;

const User = styled.div`
	display: flex;
	flex-direction: column;
`;

const UserName = styled.div`
	font-size: 20px;
	color: rgb(200, 200, 200);
	margin-bottom: 4px;
`;

const Description = styled.div`
	font-size: 16px;
	color: rgb(180, 180, 180);
`;

function Chats() {
	return (
		<Container>
			{[1, 2, 3, 4].map(() => (
				<List>
					<Img
						width="32px"
						height="32px"
						src="https://w7.pngwing.com/pngs/887/945/png-transparent-line-application-bear-illustration-kakaotalk-kakao-friends-emoticon-kakao-ryan-smiley-sticker-desktop-wallpaper.png"
						alt="user"
					/>
					<User>
						<UserName>User name</UserName>
						<Description>description</Description>
					</User>
				</List>
			))}
		</Container>
	);
}

export default Chats;
