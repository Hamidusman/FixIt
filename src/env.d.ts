declare global {
    namespace NodeJS {
    interface ProcessEnv {
    REACT_APP_API_URL: string;
    REACT_APP_FEATURE_FLAG?: string; // Optional variable
    }
}
}