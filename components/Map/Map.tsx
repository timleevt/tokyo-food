import {
  GoogleMap,
  LoadScriptProps,
  useLoadScript,
  MarkerF,
} from "@react-google-maps/api";
import styles from "./Map.module.css";
import { useState, useEffect } from "react";
import getPlaceDetails from "@/apis/place/getPlaceDetails";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const containerStyle = {
  width: "100%",
  height: "40vh",
  border: "1px solid #d3d3d3",
};

// Default coordinates to Tokyo Station
const TOKYO_STATION_COORD = {
  lat: 35.6812,
  lng: 139.7671,
};

type locationDetail = {
  name: string;
  address: string;
};

type Props = {
  currentLoc: locationDetail | null;
};

type PlaceDetail = {
  geometry: any;
  name: string;
  price_level: number;
  rating: number;
};

const libraries: LoadScriptProps["libraries"] = ["places"];

const Map = ({ currentLoc }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });
  const [coord, setCoord] = useState(TOKYO_STATION_COORD);
  const [placeDetails, setPlaceDetails] = useState<PlaceDetail | null>(null);

  useEffect(() => {
    const placeDetails = async () => {
      if(!currentLoc) {
        return;
      }
      const details = await getPlaceDetails(currentLoc?.address);
      if(!details) {
        return;
      }
      setCoord(details.geometry.location);
      setPlaceDetails(details);
    };
    placeDetails();
  }, [currentLoc]);

  if (!isLoaded) {
    return <div>loading map..</div>;
  }

  const createRating = (rating: number) => {
    let count = 0;
    let res = [];
    const MAX_RATING = 5;
    while (count < rating) {
      res.push(<StarIcon className={styles.starIcon} />);
      count += 1;
    }
    while (count < MAX_RATING) {
      res.push(<StarOutlineIcon className={styles.starIcon} />);
      count += 1;
    }

    return res;
  };

  return (
    <div className={styles.container}>
      <GoogleMap zoom={15} center={coord} mapContainerStyle={containerStyle}>
        <MarkerF position={coord}></MarkerF>
      </GoogleMap>
      {placeDetails && currentLoc && (
        <div className={styles.infoCard}>
          <div className={styles.infoCardContents}>
            <h1>{currentLoc.name}</h1>
            <div className={styles.priceContainer}>
              <span>Price: </span>
              <span className={styles.price}>
                {"$".repeat(placeDetails.price_level)}
              </span>
            </div>
            <div>
              Google Rating: {placeDetails.rating}{" "}
              {createRating(Math.floor(placeDetails.rating))}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
