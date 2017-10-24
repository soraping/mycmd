import * as args from "yargs";
import { web, cp, getIp, qr, weather } from "./lib";
const packAge = require("../package");

/**
 * 自制命令行工具
 */
args
  .usage("Usage: csp [Commands] [Options]")
  // 查看天气
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
      weather(argv["city"]);
    }
  )
  // 复制文件
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
  // 创建一个简单服务
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
  )
  // 生成二维码
  .command(
    "qr",
    "qr [Options]",
    yargs => {
      return yargs
        .reset()
        .option("u", {
          alias: "qrcode",
          demand: true,
          describe: "url path(二维码值)",
          type: "string"
        })
        .example("qr -u http://www.baidu.com", "生成二维码");
    },
    argv => qr(argv["qrcode"])
  )
  // 获取本机ip
  .command("ip", "ip", {}, argv => getIp())
  .demandCommand(5)
  .help("h")
  .alias("h", "help")
  .version("version", packAge.version)
  .alias("v", "version").argv;
