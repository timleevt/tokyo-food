import {
  GoogleMap,
  LoadScriptProps,
  useLoadScript,
} from "@react-google-maps/api";
import styles from "./Map.module.css";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

// Default coordinates to Tokyo Station
const TOKYO_STATION_COORD = {
  lat: 35.6812,
  lng: 139.7671,
};

type Props = {
  currentLoc: string | null;
};
// const libraries: LoadScriptProps["libraries"] = ["places"];

const Map = ({ currentLoc }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    // libraries,
  });

  if (!isLoaded) {
    return <div>loading map..</div>;
  }

  return (
    <div className={styles.container}>
      <GoogleMap
        zoom={15}
        center={TOKYO_STATION_COORD}
        mapContainerStyle={containerStyle}
      />
      <></>
    </div>
  );
};

export default Map;

/*
      {isLoaded && (
        <GoogleMap
          clickableIcons
          mapContainerStyle={containerStyle}
          center={TOKYO_STATION_COORD}
          zoom={15}
        >
          // Child components, such as markers, info windows, etc. 
          <></>
        </GoogleMap>
      )}
*/
