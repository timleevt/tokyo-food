import {
  GoogleMap,
  LoadScriptProps,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import styles from "./Map.module.css";
import { useState, useEffect } from "react";
import getPlaceDetails from "@/apis/place/getPlaceDetails";

const containerStyle = {
  width: "100%",
  height: "40vh",
  minWidth: "380px",
};

// Default coordinates to Tokyo Station
const TOKYO_STATION_COORD = {
  lat: 35.6812,
  lng: 139.7671,
};

type Props = {
  currentLoc: string | null;
};
const libraries: LoadScriptProps["libraries"] = ["places"];

const Map = ({ currentLoc }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });
  const [coord, setCoord] = useState(TOKYO_STATION_COORD);

  useEffect(() => {
    const placeDetails = async () => {
      const d = await getPlaceDetails();
      console.log(d);
      // console.log(d.data.candidates[0]);
      setCoord(d.geometry.location);
    };
    placeDetails();
  }, []);

  if (!isLoaded) {
    return <div>loading map..</div>;
  }

  return (
    <div className={styles.container}>
      <GoogleMap zoom={15} center={coord} mapContainerStyle={containerStyle}>
        <MarkerF position={coord}>

        </MarkerF>
        <InfoWindow position={coord}>
            <div className={styles.infoWindow}>
              <p>working?</p>
            </div>
          </InfoWindow>
      </GoogleMap>
    </div>
  );
};

export default Map;
