import user from 'json/user.json';
import { Profile } from 'components/Profile/Profile';
import data from './json/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'json/friends.json';
import { FriendsList } from 'components/FriendList/Friendlist';
import transactions from './json/transactions.json';
import { TransactionHistory } from 'components/Transactions/TransactionHistory ';
import { Container } from 'App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics data={data} /> */}
      <Statistics data={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
