import Post from "@/components/Post/Post";
import styles from "./PostContainer.module.css";
import postdata from "@/constants/postdata";

type Props = {
  filterText: string;
};

const PostContainer = ({ filterText }: Props) => {
  // Filter data based on search bar text
  const filteredData = postdata.filter((i) => {
    return !(
      Object.values(i)
        .join(",")
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) == -1
    );
  });

  return (
    <>
      <div className={styles.container}>
        {filteredData.map((i, index) => {
          return (
            <Post
              key={`${index}_${i.name}_${i.date}`}
              name={i.name}
              date={i.date}
              address={i.address}
              fave={i.fave}
              comment={i.comment}
            />
          );
        })}
      </div>
      {filteredData.length === 0 && <div>no items found!</div>}
    </>
  );
};

export default PostContainer;
