import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

import userData from '../Data/userData.json';
import friends from  '../Data/friends.json'
import transactions from '../Data/transactions.json';


export default function App () {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};