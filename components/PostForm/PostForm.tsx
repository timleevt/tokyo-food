import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./PostForm.module.css";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  handleClose: (close: boolean) => void;
};

const PostForm = ({ handleClose }: Props) => {
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("handle post submission!");
  };

  if (!GOOGLE_MAPS_API_KEY) {
    return <></>;
  }

  return (
    <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
      <div>
        <CloseIcon
          onClick={() => handleClose(false)}
          className={styles.closeBtn}
        />
      </div>
      <Autocomplete>
        <TextField fullWidth></TextField>
      </Autocomplete>
      <TextField
        fullWidth
        multiline
        placeholder="Tell us about your experience"
        rows={3}
        maxRows={3}
      />
      <div className={styles.btnContainer}>
        {isFavorited ? (
          <FavoriteIcon
            className={styles.favIcon}
            onClick={() => setIsFavorited(false)}
          />
        ) : (
          <FavoriteBorderIcon
            className={styles.favIcon}
            onClick={() => setIsFavorited(true)}
          />
        )}
        <Button variant="contained" type="submit">
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
