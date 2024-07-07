export interface weatherState {
  data: [];
  status: "idle" | "loading" | "failed" | "succeeded";
  error: null | undefined | string;
}
