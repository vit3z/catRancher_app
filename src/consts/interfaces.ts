import { Dispatch, SetStateAction } from "react";

export interface BagOfCatsResponse {
  cats: Array<[string, string, string, string]>;
}

export interface ResultsDisplayProps {
  foundClowders: string[];
  invalidClowder: boolean;
  invalidClowderCause: string[];
}

export interface SnackbarAlertsProps {
  error: boolean;
  turnOffError: Dispatch<SetStateAction<boolean>>;
  errorContent: string|null;
  warning: boolean;
  turnOffWarning: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  turnOffSuccess: Dispatch<SetStateAction<boolean>>;
}

export interface CatDisplayProps {
  cat: string;
  catHeight: number;
  catWidth: number;
}