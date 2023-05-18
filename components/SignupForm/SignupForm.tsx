import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from "@mui/material";
import { useState, useMemo } from "react";
import styles from "./SignupForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import postUser from "@/apis/users/postUser";
import * as yup from "yup";
import Image from "next/image";

type Props = {
  handleClose: (close: boolean) => void;
};

const SignupForm = ({ handleClose }: Props) => {
  const [showPassword, setShowpassword] = useState(false);
  const { register, handleSubmit } = useForm<Data>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
      const registerUser = await postUser(userData);
      if (registerUser.status == 200) {
        setSuccess(true);
        setTimeout(() => {
          handleClose(false);
        }, 2000);
      } else {
        setErrorMsg("Something went wrong!");
      }
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
    <>
      {success ? (
        <div className={styles.successContainer}>
          <h1>Success</h1>
          <Image
            className={styles.successLoadImg}
            src="/images/loading.gif"
            alt="Loading"
            height={20}
            width={20}
          ></Image>
          <p>Signup successful!</p>
        </div>
      ) : (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
          <CloseIcon
            onClick={() => handleClose(false)}
            className={styles.closeBtn}
          />
          <div className={styles.formContents}>
            <h2 className={styles.header}>Create your account</h2>
            <Box>
              <TextField
                className={styles.textField}
                margin="dense"
                id="user"
                label="Username"
                required
                size="small"
                {...register("username")}
              />
            </Box>

            <TextField
              label="Password"
              id="password"
              required
              type={showPassword ? "text" : "password"}
              size="small"
              {...register("password")}
            />
            <TextField
              id="confirm-pw"
              label="Confirm Password"
              required
              type="password"
              size="small"
              {...register("confirmPassword")}
            />
            <TextField
              label="Email"
              id="email"
              type="text"
              size="small"
              {...register("email")}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I'm a local!"
                value={true}
                {...register("isLocal")}
              />
            </FormGroup>
            <Button
              className={styles.signupBtn}
              variant="contained"
              type="submit"
            >
              Sign Up!
            </Button>
            {loading && <div>loading...</div>}
            {errorMsg && <div aria-live="assertive">{errorMsg}</div>}
          </div>
        </form>
      )}
    </>
  );
};

export default SignupForm;
