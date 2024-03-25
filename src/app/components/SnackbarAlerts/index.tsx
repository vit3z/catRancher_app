
import { Alert, Snackbar } from "@mui/material";
import { SnackbarAlertsProps } from "@/consts/interfaces";
import styles from "./index.module.css";


const SnackbarAlerts:React.FC<SnackbarAlertsProps> = ({
  error,
  turnOffError,
  errorContent,
  warning,
  turnOffWarning,
  success,
  turnOffSuccess,
}) => {
  return (
    <>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => turnOffError(false)}
      >
        <Alert
          onClose={() => turnOffError(false)}
          severity="error"
          variant="filled"
          className={styles.snackBarAlert}
        >
          {`An error has occured: ${errorContent}`}
        </Alert>
      </Snackbar>

      <Snackbar
        open={warning}
        autoHideDuration={6000}
        onClose={() => turnOffWarning(false)}
      >
        <Alert
          onClose={() => turnOffWarning(false)}
          severity="warning"
          variant="filled"
          className={styles.snackBarAlert}
        >
          {`You already have that setup of cats in a Clowder, please switch it up!`}
        </Alert>
      </Snackbar>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => turnOffSuccess(false)}
      >
        <Alert
          onClose={() => turnOffSuccess(false)}
          severity="success"
          variant="filled"
          className={styles.snackBarAlert}
        >
          {`You've successfully created a Clowder!`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarAlerts;