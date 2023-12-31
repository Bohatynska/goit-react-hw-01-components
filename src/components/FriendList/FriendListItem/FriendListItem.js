import styled from 'styled-components';

export const FriendItem = styled.li`
  background-color: beige;
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

export const FriendListStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid grey;
  display: block;
  margin-right: 20px;
  background-color: ${props => (props.$status ? 'green' : 'red')};
`;
export const FriendListAvatar = styled.img`
  margin-right: 25px;
  border-radius: 50%;
  border: 1px solid grey;
`;
export const FriendListName = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
