import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import styles from "./SignupForm.module.css";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  handleClose: (close: boolean) => void;
};

const SignupForm = ({ handleClose }: Props) => {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <form className={styles.container} action="submit">
      <CloseIcon
        onClick={() => handleClose(false)}
        className={styles.closeBtn}
      />
      <div className={styles.formContents}>
        <InputLabel shrink htmlFor="user">
          Username
        </InputLabel>
        <TextField id="user" required size="small" />
        <InputLabel shrink htmlFor="password">
          Password
        </InputLabel>
        <TextField
          id="password"
          required
          type={showPassword ? "text" : "password"}
          size="small"
        />
        <InputLabel shrink htmlFor="confirm-pw">
          Confirm password
        </InputLabel>
        <TextField id="confirm-pw" required type="password" size="small" />
        <InputLabel shrink htmlFor="email">
          Email
        </InputLabel>
        <TextField id="email" type="text" size="small" />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="I'm a local!"
            value={true}
          />
        </FormGroup>
        <Button className={styles.signupBtn} variant="contained" type="submit">
          Sign Up!
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;

// import { useForm } from "react-hook-form";
// import { TextField, Button } from "@mui/material";
// import { Autocomplete } from "@react-google-maps/api";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import styles from "./PostForm.module.css";

// import * as yup from "yup";

// import postReview from "@/apis/reviews/postReview";

// type Props = {
//   handleClose: (close: boolean) => void;
// };

// const PostForm = ({ handleClose }: Props) => {
//   const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
//   const [isFavorited, setIsFavorited] = useState(false);
//   const [loadingPost, setIsLoadingPost] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const { register, handleSubmit } = useForm<Data>();

//   const schema = useMemo(
//     () =>
//       yup.object().shape({
//         address: yup.string().required(),
//         review: yup.string().max(280).required(),
//       }),
//     []
//   );

//   type Data = yup.InferType<typeof schema>;

//   const onSubmit = async (data: Data) => {
//     setIsLoadingPost(true);
//     let reviewData = {
//       name: "testname",
//       isFavorited,
//       username: "admin",
//       ...data,
//     };

//     try {
//       await postReview(reviewData);
//       handleClose(false);
//     } catch (e) {
//       if (typeof e === "string") {
//         setErrorMsg(e);
//       } else if (e instanceof Error) {
//         setErrorMsg(e.message);
//       }
//     } finally {
//       setIsLoadingPost(false);
//       // handleClose(false);
//     }
//   };

//   if (!GOOGLE_MAPS_API_KEY) {
//     return <></>;
//   }

//   return (
//     <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <CloseIcon
//           onClick={() => handleClose(false)}
//           className={styles.closeBtn}
//         />
//       </div>
//       <Autocomplete restrictions={{ country: 'JP'}} types={['bar', 'bakery', 'cafe', 'food']}>
//         <TextField fullWidth {...register("address")}></TextField>
//       </Autocomplete>
//       <TextField
//         fullWidth
//         multiline
//         placeholder="Tell us about your experience"
//         rows={3}
//         {...register("review")}
//       />
//       <div className={styles.btnContainer}>
//         {isFavorited ? (
//           <FavoriteIcon
//             className={styles.favIcon}
//             onClick={() => setIsFavorited(false)}
//           />
//         ) : (
//           <FavoriteBorderIcon
//             className={styles.favIcon}
//             onClick={() => setIsFavorited(true)}
//           />
//         )}
//         <Button variant="contained" type="submit" disabled={loadingPost}>
//           Post
//         </Button>
//       </div>
//       {loadingPost && <div>loading...</div>}
//       {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
//     </form>
//   );
// };

// export default PostForm;
