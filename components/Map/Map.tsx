import { GoogleMap } from "@react-google-maps/api";
import styles from './Map.module.css';

const containerStyle = {
  width: "100%",
  // height: "400px",
  height: "40vh"
};

// Default coordinates to Tokyo Station
const TOKYO_STATION_COORD = {
  lat: 35.6812,
  lng: 139.7671,
};

const Map = () => {
  return (
    <div className={styles.container}>
      <GoogleMap mapContainerStyle={containerStyle} center={TOKYO_STATION_COORD} zoom={11}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>

    </div>

  );
};

export default Map;
