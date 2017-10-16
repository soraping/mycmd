import * as fs from "fs";
import * as path from "path";
import Logger from "../utils/log";

const logger = new Logger("cp");

export const cp = (source: string, target: string) => {
  if (!source) {
    logger.error("缺少 -s 参数");
    return;
  }
  let filename = source.split("/").slice(-1)[0];
  // 目标文件不存在则默认复制到桌面
  target = target || `/Users/soraping/Desktop/${filename}`;
  fs.createReadStream(source).pipe(fs.createWriteStream(target));
  logger.log(`复制 ${source} => ${target} 成功`);
};
