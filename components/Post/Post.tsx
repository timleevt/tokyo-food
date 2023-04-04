import PlaceIcon from '@mui/icons-material/Place';
import styles from './Post.module.css';

// TODO: revise typing later
type Props = {
    name: string;
    date: string;
    address: string;
    fave?: boolean;
    comment: string;
    pics?: string;
}

const Post = ({name, date, address, fave, comment, pics}:Props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.name}>{name}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.addressContainer}>
                <PlaceIcon color="primary" />
                <span className={styles.address}>{address}</span> 
            </div>
            <div className={styles.body}>
                <p>{comment}</p>
            </div>
            {/* <div>
                Picture Area
            </div> */}
        </div>
     );
}
 
export default Post;
