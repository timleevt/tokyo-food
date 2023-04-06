import Post from "@/components/Post/Post";
import styles from "./PostContainer.module.css";
// import postdata from "@/constants/postdata";
import { useEffect, useState } from "react";
import getReviews from "@/apis/reviews/getReviews";
import { PostData } from "@/apis/reviews/getReviews";

type Props = {
  filterText: string;
};

const PostContainer = ({ filterText }: Props) => {
  const [reviews, setReviews] = useState<PostData[] | null>(null);

  const retrieveReviews = async () => {
    const reviews = await getReviews();
    setReviews(reviews);
  };

  useEffect(() => {
    retrieveReviews();
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

  if(!filteredData) {
    return <div>no items found!</div>
  }
  return (
    <>
      <div className={styles.container}>
        {filteredData.map((i, index: number) => {
          return (
            <Post
              key={`${index}_${i.name}_${i.date}`}
              name={i.name}
              date={i.date}
              address={i.address}
              fave={i.favorited}
              comment={i.review}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostContainer;
