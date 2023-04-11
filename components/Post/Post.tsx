import PlaceIcon from "@mui/icons-material/Place";
import styles from "./Post.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  name: string;
  date: string;
  address: string;
  fave?: boolean;
  comment: string;
  pics?: string;
  handleClick: (location: locationDetail) => void;
};

type locationDetail = {
  name: string;
  address: string;
}

const Post = ({ name, date, address, fave, comment, pics, handleClick }: Props) => {
  return (
    <div className={styles.container} onClick={() => handleClick({name, address})}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>
          {new Date(date).toLocaleDateString()}
        </span>
        {fave && (
          <span className={styles.favorite}>
            <FavoriteIcon className={styles.favIcon} />
          </span>
        )}
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
};

export default Post;
