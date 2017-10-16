import { exec } from "shelljs";

export const getIp = () => {
  exec("ifconfig | grep inet");
};
