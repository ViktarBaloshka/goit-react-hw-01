// import clsx from 'clsx';
// import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline }}) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Ofline"}</p>
    </div>
  );
}
