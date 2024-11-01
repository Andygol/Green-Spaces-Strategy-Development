declare global {
  interface Window {
    env: any;
  }
}

// Define your environment variables here
type EnvType = {
  REACT_APP_BACKEND_URL: string;
  REACT_APP_DISTRICTS_ENDPOINT: string;
  REACT_APP_AREAS_ENDPOINT: string;
  REACT_APP_FORM_ENDPOINT: string;
  REACT_APP_GA4_ID: string;
};

export const env: EnvType = { ...process.env, ...window.env };
