import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Button,
} from "@mui/material";
import { useState, useMemo } from "react";
import styles from "./SignupForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import postUser from "@/apis/users/postUser";
import * as yup from "yup";

type Props = {
  handleClose: (close: boolean) => void;
};

const SignupForm = ({ handleClose }: Props) => {
  const [showPassword, setShowpassword] = useState(false);
  const { register, handleSubmit } = useForm<Data>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const schema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
        email: yup.string().email().required(),
        isLocal: yup.boolean(),
      }),
    []
  );
  type Data = yup.InferType<typeof schema>;

  const onSubmit = async (data: Data) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setErrorMsg("Passwords do not match!");
      return;
    }
    const userData = {
      username: data.username,
      password: data.password,
      email: data.email,
      isLocal: data.isLocal || false,
    };
    try {
      await postUser(userData);
      handleClose(false);
    } catch (e) {
      if (typeof e === "string") {
        setErrorMsg(e);
      } else if (e instanceof Error) {
        setErrorMsg(e.message);
      }
    } finally {
      setLoading(false);
    }
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
        <InputLabel shrink htmlFor="confirm-pw">
          Confirm password
        </InputLabel>
        <TextField
          id="confirm-pw"
          required
          type="password"
          size="small"
          {...register("confirmPassword")}
        />
        <InputLabel shrink htmlFor="email">
          Email
        </InputLabel>
        <TextField id="email" type="text" size="small" {...register("email")} />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="I'm a local!"
            value={true}
            {...register("isLocal")}
          />
        </FormGroup>
        <Button className={styles.signupBtn} variant="contained" type="submit">
          Sign Up!
        </Button>
        {loading && <div>loading...</div>}
        {errorMsg && <div className="">{errorMsg}</div>}
      </div>
    </form>
  );
};

export default SignupForm;
