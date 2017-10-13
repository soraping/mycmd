import { echo, exec } from "shelljs";
export const web = (port: string): void => {
  echo("当前目录是 => ");
  exec("pwd");
  echo(`开启 ${port} 端口服务`);
  exec(`python -m SimpleHTTPServer ${port}`);
};
