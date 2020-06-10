/* eslint-disable no-unused-vars */
export const enum Level {
  error,
  warn,
  info,
  verbose,
  debug,
  silly,
}

export interface Logger {
  messageFormat(level: Level, message: string, optional?: any): string;
  error(message: string, optional?: any): void;
  warn(message: string, optional?: any): void;
  log(message: string, optional?: any): void;
  verbose(message: string, optional?: any): void;
  debug(message: string, optional?: any): void;
  silly(message: string, optional?: any): void;
}
