import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline }}) {
  return (
    <div className={clsx(css.friendListItemsContener)}>
      <img src={avatar} alt={name} width="48" />
      <p className={clsx(css.friendListItemsText)}>{name}</p>
      <p className={clsx(
          isOnline&&css.isOnline,
          !isOnline&&css.isOffline)
      }>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
