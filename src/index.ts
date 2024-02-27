export class Log_lume {
  static success(msg: string) {
    console.log(`%c ${msg} `, "color:black;background:green");
  }
  static warning(msg: string) {
    console.log(`%c ${msg} `, "color:black;background:red");
  }
  static info(msg: string) {
    console.log(`%c ${msg} `, "color:black;background:orange");
  }
}
