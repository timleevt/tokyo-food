import { TextField } from "@mui/material";
import styles from "./SearchBar.module.css";

type Props = {
  changeHandler: (searchText: string) => void;
};
const SearchBar = ({ changeHandler }: Props) => {
  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        label="Search..."
        variant="outlined"
        color="info"
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
