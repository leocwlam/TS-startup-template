export interface Logger {
  error(message: string, optional?: any): void;
  warn(message: string, optional?: any): void;
  log(message: string, optional?: any): void;
  verbose(message: string, optional?: any): void;
  debug(message: string, optional?: any): void;
  silly(message: string, optional?: any): void;
}
