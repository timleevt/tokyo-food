import client from "../client";

type Coordinates = {
  lat: number;
  lng: number;
}

type PlaceDetails = {
  formatted_address: string;
  geometry: {
    location: Coordinates;
    viewport: {
      northeast: Coordinates;
      southwest: Coordinates;
    }
  };
  name: string;
  price_level: number;
  rating: number;

}

const getPlaceDetails = async (address: string): Promise<PlaceDetails> => {
  const response = await client.get(`/place`, {
    params: {
      address,
    },
  });

  return response.data.candidates[0];
};
export default getPlaceDetails;
