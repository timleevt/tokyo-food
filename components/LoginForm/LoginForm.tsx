import { TextField, InputLabel, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";
import styles from "./LoginForm.module.css";
import * as yup from "yup";

type Props = {
  handleClose: (close: boolean) => void;
};

const LoginForm = ({ handleClose }: Props) => {
  const [showPassword, setShowpassword] = useState(false);
  const { register, handleSubmit } = useForm<Data>();
  const schema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
      }),
    []
  );
  type Data = yup.InferType<typeof schema>;
  return (
    <form className={styles.container}>
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
      </div>
    </form>
  );
};

export default LoginForm;
