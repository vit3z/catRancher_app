import { catImageHeightCalculatorMainDisplay } from "@/app/utils/CatImageHeightCalculatorMainDisplay";
import { catImageWidthCalculatorMainDisplay } from "@/app/utils/CatImageWidthCalculatorMainDisplay";
import { ResultsDisplayProps } from "@/consts/interfaces";
import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./index.module.css";

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  foundClowders,
  invalidClowder,
  invalidClowderCause,
}) => {
  return (
    <Paper className={styles.resultsDisplayPaper}>
      <Typography variant="h6">Clowders found</Typography>
      <Grid container>
        {[...Array(12)].map((_, index) => (
          <Grid
            key={index}
            item
            xs={4}
            className={styles.resultsDisplayGridItem}
            alignItems="flex-end"
            justifyContent="center"
          >
            {foundClowders[index] ? (
              <Image
                src={`https://static.quantcast.com/catrancher/${foundClowders[index]}.png`}
                height={
                  catImageHeightCalculatorMainDisplay(foundClowders[index]) / 2
                }
                width={
                  catImageWidthCalculatorMainDisplay(foundClowders[index]) / 2
                }
                alt={`Image of Cat with ID: ${foundClowders[index]}`}
              />
            ) : (
              <></>
            )}
          </Grid>
        ))}
      </Grid>
      {invalidClowder && (
        <div>
          <Typography variant="subtitle1" marginTop="15px" color={"red"} lineHeight={"1.5"}>
            {
              "The cats will NOT get along! Make sure the following properties are not in a 2:1 ratio:"
            }
          </Typography>
          {invalidClowderCause.map((cause: string, index: number) => {
            return (
              <Typography
                key={`disorder-key-${index}`}
                variant="subtitle1"
                color={"red"}
              >
                - {cause.toUpperCase()}
              </Typography>
            );
          })}
        </div>
      )}
    </Paper>
  );
};

export default ResultsDisplay;
