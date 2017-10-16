import * as chalk from "chalk";
import { echo } from "shelljs";

export default class Logger {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public log(message: string) {
    this.logMessage(message, chalk.green);
  }

  public error(message: string) {
    this.logMessage(message, chalk.red.bold);
  }

  private logMessage(message: string, color: (msg: string) => string) {
    process.stdout.write(chalk.green(`[csp] `));
    process.stdout.write(chalk.green(`[${this.name} 模块]: `));
    process.stdout.write(color(message));
  }
}
