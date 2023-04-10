import client from "../client";

type PostReview = {
  // name: string;
  address: string;
  review: string;
  isFavorited: boolean;
  username: string;
};

const postReview = async (data: PostReview): Promise<void> => {
  const dataArray = data.address.split(",");

  // TODO: addresses are not always consistent..
  // ex. andparfait
  // if(dataArray.length !== 5) {
  //   throw Error('Error: Invalid Location. Please input a business as a place');
  // }

  // Extract place name from address
  const placeName = dataArray[0];
  console.log(dataArray[3]);
  // Check to make sure location is in Tokyo
  // if(dataArray[3].trim() !== "Tokyo" || dataArray[4].trim() !== "Japan") {
  //   throw Error('Error: Location is not in Tokyo!');
  // }

  const reviewData = {
    ...data,
    name: placeName
  }

  const response = await client.post(`/review`, reviewData);
  return response.data;
};
export default postReview;
