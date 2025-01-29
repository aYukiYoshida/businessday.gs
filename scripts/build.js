import { GasPlugin } from 'esbuild-gas-plugin';
import { build }  from 'esbuild';
import { Command } from "commander";

const buildApp = () => {
  build({
    entryPoints: ['src/app.ts'],
    bundle: true,
    outfile: 'public/app.js',
    plugins: [GasPlugin]
  }).catch(() => process.exit(1));
};

const program = new Command();
program
  .description("build application")
  .action(() => {
      buildApp();
});

program.parse(process.argv);
