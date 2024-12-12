import clsx from 'clsx';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css"

export default function FriendList ({friends}) { 
    return (
        <ul className={clsx((css.listCardUsers))}>
            {friends.map((friend) => {
                return <li key={friend.id} className={clsx(css.listCardItems)}>
                    <FriendListItem friend={friend} />
            </li>})
            }
    </ul>);
}