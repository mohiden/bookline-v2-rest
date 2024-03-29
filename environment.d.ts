export { };
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PROT: string;
      DB_URI: string;
      ACCESS_TOKEN_SECRET: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_CLUSTER: string;
    }
  }
}
