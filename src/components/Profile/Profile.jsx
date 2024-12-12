import { MdAlternateEmail } from "react-icons/md";
import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({
    location,
    image,
    name,
    stats: { tag, followers, views, likes } }) 
    {
    
    return (
        <div className={clsx(css.container)}>

        <div className={clsx(css.dataUser)}>
            <img className={clsx(css.img)} src={image} alt={name} />
            <p className={clsx(css.name)}>{name}</p>
            <p className={clsx(css.text)}><MdAlternateEmail />{tag}</p>
            <p className={clsx(css.text)}>{location}</p>
        </div>

        <ul className={clsx(css.listStatsUser)}>
            <li className={clsx(css.listItemsStatsUser)}>
                <span className={clsx(css.textStats)}>Followers</span>
                <span className={clsx(css.textStatsValue)}>{followers}</span>
            </li>
            <li className={clsx(css.listItemsStatsUser)}>
                <span className={clsx(css.textStats)}>Views</span>
                <span className={clsx(css.textStatsValue)}>{views}</span>
            </li>
            <li className={clsx(css.listItemsStatsUser)}>
                <span className={clsx(css.textStats)}>Likes</span>
                <span className={clsx(css.textStatsValue)}>{likes}</span>
            </li>
            </ul>
            
    </div>
)};
