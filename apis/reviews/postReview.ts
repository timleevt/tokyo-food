import client from "../client";

type PostReview = {
  name: string;
  address: string;
  review: string;
  isFavorited: boolean;
  username: string;
};

const postReview = async (data: PostReview): Promise<void> => {
  const response = await client.post(`/review`, data);
  return response.data;
};
export default postReview;
