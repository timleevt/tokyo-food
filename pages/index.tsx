import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SearchBar from '@/components/SearchBar/SearchBar'
import PostContainer from '@/containers/PostContainer/PostContainer'
import Map from '@/components/Map/Map';
import Header from '@/components/Header/Header';
import PostForm from '@/components/PostForm/PostForm';
import { useState } from 'react';

export default function Home() {

  const [postFilterText, setPostFilterText] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>TB</title>
        <meta name="description" content="Food recommendations by locals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.contentContainer}>
          <SearchBar changeHandler={setPostFilterText} />
          <PostContainer filterText={postFilterText}/>
        </div>
        <div className={styles.mapContainer}>
          <Map currentLoc={selectedPlace}/>
        </div>
      </main>
      <footer className={styles.footer}>
        <a className={styles.footerLink} href="/about">about</a>
      </footer>
    </>
  )
}
