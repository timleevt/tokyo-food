import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import PostContainer from "@/containers/PostContainer/PostContainer";
import Map from "@/components/Map/Map";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [postFilterText, setPostFilterText] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  return (
    <>
      <main className={styles.main}>
        {/* <Header /> */}
        <div className={styles.contentContainer}>
          <SearchBar changeHandler={setPostFilterText} />
          <PostContainer filterText={postFilterText} />
        </div>
        <div className={styles.mapContainer}>
          {/* <Map currentLoc={selectedPlace}/> */}
          map here
        </div>
      </main>
      <footer className={styles.footer}>
        <Link className={styles.footerLink} href="/about">
          about
        </Link>
      </footer>
    </>
  );
}
