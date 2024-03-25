import Image from "next/image";
import { Typography } from "@mui/material";
import { CatDisplayProps } from "@/consts/interfaces";
import styles from "./index.module.css";

const CatDisplay: React.FC<CatDisplayProps> = ({
  cat,
  catHeight,
  catWidth,
}) => {
  return (
    <div
      className={styles.catDisplayDiv}
    >
      <Image
        src={`https://static.quantcast.com/catrancher/${cat}.png`}
        width={catWidth}
        height={catHeight}
        alt={`Image of Cat with ID: ${cat}`}
      />
      {/* In theory, I didn't need to add this toUpperCase function, however, I found it easier to read the CatId with it */}
      <Typography variant="subtitle1">{cat.toUpperCase()}</Typography>
    </div>
  );
};

export default CatDisplay;
