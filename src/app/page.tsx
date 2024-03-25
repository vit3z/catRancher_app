import ClowderSelector from "./components/ClowderSelector";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h2" fontWeight={"bold"} color={"#d7d7d7"}>Welcome to the Catrancher App</Typography>
      <Typography variant="h4" color={"#d7d7d7"}>This App will help you choose which cats can be grouped together in a clowder!</Typography>

      <ClowderSelector />
    </main>
  );
}
