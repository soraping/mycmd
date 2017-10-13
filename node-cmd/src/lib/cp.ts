import * as fs from "fs";
import * as path from "path";
import { echo } from "shelljs";

export const cp = (source: string, target: string) => {
  if (!source) {
    return;
  }
  let filename = source.split("/").slice(-1)[0];
  // 目标文件不存在则默认复制到桌面
  target = target || `/Users/soraping/Desktop/${filename}`;
  fs.createReadStream(source).pipe(fs.createWriteStream(target));
};
