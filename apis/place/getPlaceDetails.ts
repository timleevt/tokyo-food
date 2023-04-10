import client from "../client";

// export type PostData = {
//     id: number,
//     name: string,
//     address: string,
//     date: string,
//     favorited: boolean,
//     authorUsername: string,
//     review: string
// }

// Fix typing later
const getPlaceDetails = async (): Promise<any> => {
  const response = await client.get(`/place`);
  return response.data.candidates[0];
};
export default getPlaceDetails;
