import * as args from "yargs";
import { web, cp } from "./lib";

/**
 * 自制命令行工具
 */
args
  .usage("Usage: csp [Commands] [Options]")
  .command(
    "weather",
    "weather [Options]",
    yargs => {
      return yargs
        .reset()
        .option("c", {
          alias: "city",
          demand: true,
          describe: "your city name",
          type: "string"
        })
        .example("weather -c nanjing", "show nanjing weather info");
    },
    argv => {
      console.log(argv);
    }
  )
  .command(
    "cp",
    "cp [Options]",
    yargs => {
      return yargs
        .reset()
        .option("s", {
          alias: "source",
          demand: true,
          describe: "source path (原文件路径)",
          type: "string"
        })
        .option("t", {
          alias: "target",
          demand: false,
          describe: "target path (复制后文件保存路径)",
          type: "string"
        })
        .example("cp -s ./test1.txt -t ./test2.txt", "模拟原生cp方法，复制文件");
    },
    argv => cp(argv["source"], argv["target"])
  )
  .command(
    "web",
    "web [Options]",
    yargs => {
      return yargs
        .reset()
        .option("p", {
          alias: "port",
          demand: true,
          describe: "simple web serve",
          type: "string"
        })
        .example("web -p 3030", "create server by 3030");
    },
    argv => web(argv["port"])
  );
