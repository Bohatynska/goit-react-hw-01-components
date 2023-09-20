import {
  FriendItem,
  FriendListStatus,
  FriendListAvatar,
  FriendListName,
} from './FriendListItem';
export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem>
      <FriendListStatus $status={isOnline} />
      <FriendListAvatar src={avatar} alt={name} width="48" />
      <FriendListName>{name}</FriendListName>
    </FriendItem>
  );
};
