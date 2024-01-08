import { useState } from 'react';
import {
	StyledBtnContainer,
	StyledButton,
	StyledCard,
	StyledEmail,
	StyledImg,
	StyledName,
	StyledUsername
} from './styles';
import { USERS } from '../../constants/users';

const Card = () => {
	const [counter, setCounter] = useState(0);
	return (
		<StyledCard>
			<StyledImg src={USERS[counter].profileImage} alt={USERS[counter].name} />
			<StyledName>Name: {USERS[counter].name}</StyledName>
			<StyledUsername>UserName: {USERS[counter].username}</StyledUsername>
			<StyledEmail>{USERS[counter].email}</StyledEmail>
			<StyledBtnContainer>
				<StyledButton
					onClick={() => clickPrevious(counter, setCounter)}
					disabled={counter <= 0}
				>
					Previous
				</StyledButton>
				<StyledButton
					onClick={() => clickNext(counter, setCounter)}
					disabled={counter >= USERS.length - 1}
				>
					Next
				</StyledButton>
			</StyledBtnContainer>
		</StyledCard>
	);
};

const clickNext = (counter, setCounter) => {
	setCounter(counter + 1);
};

const clickPrevious = (counter, setCounter) => {
	setCounter(counter - 1);
};

export default Card;
