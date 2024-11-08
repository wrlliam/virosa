import chalk from "chalk";

export const info_log = (msg: string) =>
  console.log(`${chalk.blueBright("[INFO]")} ${msg}`);
export const success_log = (msg: string) =>
  console.log(`${chalk.greenBright("[SUCCESS]")} ${msg}`);
export const error_log = (msg: string) =>
  console.log(`${chalk.redBright("[ERR]")} ${msg}`);
export const warn_log = (msg: string) =>
  console.log(`${chalk.blueBright("[WARN]")} ${msg}`);
