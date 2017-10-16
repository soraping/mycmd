import { exec } from "shelljs";
import Logger from "../utils/log";
const logger = new Logger("web");
export const web = (port: string): void => {
  if (!port) {
    logger.error("缺少 -p 参数");
    return;
  }
  logger.log("当前目录是 => ");
  exec("pwd");
  logger.log(`开启 ${port} 端口服务`);
  exec(`python -m SimpleHTTPServer ${port}`);
};
