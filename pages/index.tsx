import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import PostContainer from "@/containers/PostContainer/PostContainer";
import Map from "@/components/Map/Map";
import { useState } from "react";

export default function Home() {
  type locationDetail = {
    name: string;
    address: string;
  };

  const [postFilterText, setPostFilterText] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<locationDetail | null>(
    null
  );

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>  
        <SearchBar changeHandler={setPostFilterText} />
        <PostContainer filterText={postFilterText} onClick={setSelectedPlace} />
      </div>
      <Map currentLoc={selectedPlace} />
    </main>
  );
}
