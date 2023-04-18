import client from "../client";

type PostUserLogin = {
  username: string;
  password: string;
};
const postUserLogin = async (data: PostUserLogin): Promise<void> => {
  return await client.post("/users/login", data);
};

export default postUserLogin;
