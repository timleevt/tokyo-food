import client from "../client";

type PostUser = {
  username: string;
  password: string;
  email: string;
  isLocal: boolean;
};
const postUser = async (data: PostUser): Promise<void> => {
    return await client.post("/users", data);
};

export default postUser;
