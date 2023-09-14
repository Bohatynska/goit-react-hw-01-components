import { FriendsUl } from 'components/FriendList/Friendlist.styled';
import { FriendListItem } from './FriendListItem/FriendListItem.jsx';
export const FriendsList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </FriendsUl>
  );
};
