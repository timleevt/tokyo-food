import { TextField, InputLabel, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useState, useMemo, useContext } from "react";
import styles from "./LoginForm.module.css";
import * as yup from "yup";
import postUserLogin from "@/apis/users/postUserLogin";
import { AuthContext } from "@/context/AuthContext";

type Props = {
  handleClose: (close: boolean) => void;
};

const LoginForm = ({ handleClose }: Props) => {
  const [showPassword, setShowpassword] = useState(false);
  const { register, handleSubmit } = useForm<Data>();
  const { setAuthenticated } = useContext(AuthContext);

  const schema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
      }),
    []
  );
  type Data = yup.InferType<typeof schema>;

  const onSubmit = async (data: Data) => {
    // const res = await postUserLogin(data);
    // console.log(res);
    setAuthenticated(true);
    handleClose(false);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <CloseIcon
        onClick={() => handleClose(false)}
        className={styles.closeBtn}
      />
      <div className={styles.formContents}>
        <InputLabel shrink htmlFor="user">
          Username
        </InputLabel>
        <TextField id="user" required size="small" {...register("username")} />
        <InputLabel shrink htmlFor="password">
          Password
        </InputLabel>
        <TextField
          id="password"
          required
          type={showPassword ? "text" : "password"}
          size="small"
          {...register("password")}
        />
        <Button className={styles.loginBtn} variant="contained" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
