import Post from "@/components/Post/Post";
import styles from "./PostContainer.module.css";
import { useEffect, useState } from "react";
import getReviews from "@/apis/reviews/getReviews";
import { PostData } from "@/apis/reviews/getReviews";

type locationDetail = {
  name: string;
  address: string;
}

type Props = {
  filterText: string;
  onClick: (location: locationDetail) => void;
};

const PostContainer = ({ filterText, onClick }: Props) => {
  const [reviews, setReviews] = useState<PostData[] | null>(null);

  // Fetch review data to display
  useEffect(() => {
    const retrieveReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };

    retrieveReviews().catch(console.error);
  }, []);

  // Filter data based on search bar text
  const filteredData = reviews?.filter((i) => {
    return !(
      Object.values(i)
        .join(",")
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) == -1
    );
  });

  if(!reviews) {
    return <div>loading!</div>;
  }

  if (!filteredData) {
    return <div>no items found!</div>;
  }
  return (
    <>
      <div className={styles.container}>
        {filteredData.map((i, index: number) => {
          return (
            <Post
              key={`${index}_${i.name}_${i.date}`}
              username={i.authorUsername}
              name={i.name}
              date={i.date}
              address={i.address}
              fave={i.favorited}
              comment={i.review}
              handleClick={onClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostContainer;
