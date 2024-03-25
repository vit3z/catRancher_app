"use client";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { CircularProgress, Grid } from "@mui/material";
import styles from "./index.module.css";
import useFetchBagOfCats from "@/app/hooks/useFetchBagOfCats";
import CatDisplay from "../CatDisplay";
import { catImageHeightCalculatorMainDisplay } from "@/app/utils/CatImageHeightCalculatorMainDisplay";
import { catImageWidthCalculatorMainDisplay } from "@/app/utils/CatImageWidthCalculatorMainDisplay";
import { CheckTentativeClowder } from "@/app/utils/CheckTentativeClowder";
import { BreakDownCatStats } from "@/app/utils/BreakDownCatStats";
import SnackbarAlerts from "../SnackbarAlerts";
import ResultsDisplay from "../ResultsDisplay";

const ClowderSelector = () => {
  const [showErrorSnackbar, setShowErrorSnackbar] = useState<boolean>(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] =
    useState<boolean>(false);
  const [showWarningSnackbar, setShowWarningSnackbar] =
    useState<boolean>(false);

  const [foundClowders, setFoundClowders] = useState<string[]>([]);
  const [tentativeClowder, setTentativeClowder] = useState<string[]>([]);
  const [invalidClowder, setInvalidClowder] = useState<boolean>(false);
  const [invalidClowderCause, setInvalidClowderCause] = useState<string[]>([]);

  const { bagOfCats, error, loading } = useFetchBagOfCats();

  useEffect(() => {
    if (error !== null) {
      setShowErrorSnackbar(true);
    }
  }, [error]);

  /* This hook will trigger every time we make a selection, however, it's functionality will only happen if there are 3 cats selected */
  useEffect(() => {
    if (tentativeClowder.length === 3) {
      /* First we break down the Cat stats into a more manageable format */
      const clowderValuesRes = BreakDownCatStats(tentativeClowder);
      /* After that we check what the end-result of putting together these cats would be; and also give feedback on why disorder in the Clowder would happen */
      const { theClowderWillBePeaceful, disorderCause } =
        CheckTentativeClowder(clowderValuesRes);

      if (!theClowderWillBePeaceful) {
        setInvalidClowder(true);
        setInvalidClowderCause(disorderCause);
      } else {
        /* If the Clowder is going to be peaceful, we check if the user already made this selection of cats */
        const tempFoundClowders = [...foundClowders];
        tentativeClowder.map((el: string) => {
          tempFoundClowders.push(el);
        });

        const splitClowders = [];
        for (let i = 0; i < foundClowders.length; i += 3) {
          const chunk = foundClowders.slice(i, i + 3);
          const sortedChunk = chunk.sort();
          splitClowders.push(sortedChunk);
        }

        const sortedTentativeArr = [...tentativeClowder].sort();
        let foundMatchingComposition = false;
        splitClowders.forEach((clowder) => {
          if (!foundMatchingComposition) {
            JSON.stringify(sortedTentativeArr) === JSON.stringify(clowder)
              ? (foundMatchingComposition = true)
              : (foundMatchingComposition = false);
          }
        });

        // If the user made a new selection of cats we show them on the Results Display, 
        // but if they already made this selection of cats, we show a warning Snackbar to provide feedback
        if (!foundMatchingComposition) {
          setFoundClowders(tempFoundClowders);
          setShowSuccessSnackbar(true);
          setTentativeClowder([]);
        } else {
          setShowWarningSnackbar(true);
        }
      }
    } else {
      if (invalidClowder) {
        setInvalidClowder(false);
      }
    }
  }, [tentativeClowder]);

  const addCatToTentativeClowder = useCallback(
    (catId: string) => {
      const tempClowder = [...tentativeClowder];
      const indexOfCatId = tempClowder.indexOf(catId);
      if (indexOfCatId > -1) {
        tempClowder.splice(indexOfCatId, 1);
        setTentativeClowder(tempClowder);
      }
      if (tentativeClowder.length < 3) {
        if (indexOfCatId === -1) {
          tempClowder.push(catId);
          setTentativeClowder(tempClowder);
        }
      }
    },
    [tentativeClowder]
  );

  return (
    <div className={styles.catDisplayDivWrapper}>
      {!loading && !error ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
            >
              {bagOfCats?.cats.map((cat: string[], index: number) => {
                const catId = cat.join("");
                return (
                  <Grid
                    item
                    xs={12}
                    md={3}
                    key={`cat-display-${index}`}
                    alignItems="flex-end"
                    textAlign="center"
                    className={styles.catDisplayGridItem}
                    style={{
                      background: tentativeClowder?.includes(catId)
                        ? "#6a6a6a82"
                        : "#FFFFFF00",
                    }}
                    onClick={() => addCatToTentativeClowder(catId)}
                  >
                    <CatDisplay
                      cat={catId}
                      catHeight={catImageHeightCalculatorMainDisplay(catId)}
                      catWidth={catImageWidthCalculatorMainDisplay(catId)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <ResultsDisplay
              foundClowders={foundClowders}
              invalidClowder={invalidClowder}
              invalidClowderCause={invalidClowderCause}
            />
          </Grid>
        </Grid>
      ) : (
        <CircularProgress className={styles.catDisplayLoadingSpinner} />
      )}

      <SnackbarAlerts
        error={showErrorSnackbar}
        turnOffError={setShowErrorSnackbar}
        errorContent={error}
        warning={showWarningSnackbar}
        turnOffWarning={setShowWarningSnackbar}
        success={showSuccessSnackbar}
        turnOffSuccess={setShowSuccessSnackbar}
      />
    </div>
  );
};

export default ClowderSelector;
