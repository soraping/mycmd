import * as qrcode from "qrcode-terminal";
import Logger from "../utils/log";
const logger = new Logger("qrcode");

export const qr = (val: string) => {
  if (!val) {
    logger.error("缺少 -u 参数");
    return;
  }
  qrcode.generate(val, code => {
    logger.log(`生成二维码 => ${val}`);
    logger.log(code);
  });
};
