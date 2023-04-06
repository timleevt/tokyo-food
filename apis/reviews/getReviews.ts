import client from "../client";

export type PostData = {
    id: number,
    name: string,
    address: string,
    date: string,
    favorited: boolean,
    authorUsername: string,
    review: string
}

const getReviews = async (): Promise<PostData[]> => {
  let reviews =  await client.get(`/reviews`);
//   reviews.data.date = reviews.data.date.toLocaleString();
  return reviews.data;
};
export default getReviews;
