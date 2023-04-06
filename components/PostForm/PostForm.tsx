import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./PostForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";

import postReview from "@/apis/reviews/postReview";

type Props = {
  handleClose: (close: boolean) => void;
};

const PostForm = ({ handleClose }: Props) => {
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [isFavorited, setIsFavorited] = useState(false);
  const [loadingPost, setIsLoadingPost] = useState(false);
  const { register, handleSubmit } = useForm<Data>();

  const schema = useMemo(
    () =>
      yup.object().shape({
        address: yup.string().required(),
        review: yup.string().max(280).required(),
      }),
    []
  );

  type Data = yup.InferType<typeof schema>;

  const onSubmit = async (data: Data) => {
    setIsLoadingPost(true);
    let reviewData = {
      name: "testname",
      isFavorited,
      username: "admin",
      ...data,
    };

    try {
      await postReview(reviewData);
      return;
    } catch (e) {
      console.log("handle error");
    } finally {
      setIsLoadingPost(false);
      handleClose(false);
    }
  };

  if (!GOOGLE_MAPS_API_KEY) {
    return <></>;
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <CloseIcon
          onClick={() => handleClose(false)}
          className={styles.closeBtn}
        />
      </div>
      <Autocomplete>
        <TextField fullWidth {...register("address")}></TextField>
      </Autocomplete>
      <TextField
        fullWidth
        multiline
        placeholder="Tell us about your experience"
        rows={3}
        {...register("review")}
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
        <Button variant="contained" type="submit" disabled={loadingPost}>
          Post
        </Button>
      </div>
      {loadingPost && <div>loading...</div>}
    </form>
  );
};

export default PostForm;
