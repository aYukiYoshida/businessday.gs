import { main } from "./functions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;
global.main = main;
