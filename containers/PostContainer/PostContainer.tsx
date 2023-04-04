import Post from "@/components/Post/Post";
import styles from "./PostContainer.module.css";

import postdata from "@/constants/postdata";

type Props = {
  filterText: string;
};

const PostContainer = ({ filterText }: Props) => {

  // Filter data based on search bar text
  const filteredData = postdata.filter(i => {
    return !Object.values(i).findIndex(e => e.toString().toLowerCase().includes(filterText));
  })

  return (
    <div className={styles.container}>
      {filteredData.map((i) => {
        return (
          <Post
            key={i.name + i.date}
            name={i.name}
            date={i.date}
            address={i.address}
            fave={i.fave}
            comment={i.comment}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
