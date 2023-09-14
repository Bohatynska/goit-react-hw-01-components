import user from 'json/user.json';
import { Profile } from 'components/Profile/Profile';
import data from './json/data.json';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'json/friends.json';
import { FriendsList } from 'components/FriendList/Friendlist';
import transactions from './json/transactions.json';
import { Container } from 'App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <FriendsList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </Container>
  );
};
