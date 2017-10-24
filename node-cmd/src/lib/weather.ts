import * as _ from "lodash";
import * as request from "request-promise";

import Logger from "../utils/log";
const logger = new Logger("weather");

// 百度api
const BAIDU_AK = "GKvUbiUtpPWC7o8lDZbdck5j1Qzzzw5c";

/**
 * 天气查询
 * @param city 城市名
 */
export const weather = (city: string) => {
  if (!city) {
    logger.error("缺少 -c 参数");
    return;
  }
  // 请求百度链接
  let queryUrl = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=${BAIDU_AK}`;
  logger.log(`请求百度链接 => ${queryUrl}`);
  request
    .get(queryUrl)
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      logger.error(e);
    });
};
