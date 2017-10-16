/**
 * qrcode-terminal 库封装
 */
declare module "qrcode-terminal" {
  namespace qrcodeTerminal {
    interface ICodeCb {
      (code: string): void;
    }
    interface ICodeOptions {
      small: boolean;
    }
    interface IQrcode {
      error?: string;
      generate: (
        value: string,
        options?: ICodeOptions | ICodeCb,
        cb?: ICodeCb
      ) => void;
      setErrorLevel?: (error: string) => void;
    }
  }
  var qrcode: qrcodeTerminal.IQrcode;
  export = qrcode;
}
