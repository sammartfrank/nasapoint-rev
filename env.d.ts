declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXTAUTH_SECRET: string;
    // GOOGLE_CLIENT_ID: string;
    // GOOGLE_CLIENT_SECRET: string;
    // NEXTAUTH_URL: string;
    NEXT_PUBLIC_URL: string;
    NODE_ENV: string;
    // GOOGLE_SYNC_URL: string;
    // NEXT_PUBLIC_GOOGLE_PLACES_KEY: string;
  }
}
