/* eslint-disable no-unused-vars */
import { inject, injectable } from 'inversify';
import { Type } from '../../di.type';

import { Logger } from './logger';

export const enum Level {
  error,
  warn,
  info,
  verbose,
  debug,
  silly,
}

@injectable()
export class AppLogger implements Logger {
  @inject(Type.ExternalLogger) private externalLogCall: any;

  private execute(level: Level, message: string, optional?: any): void {
    this.externalLogCall(level, message, optional);
  }

  error(message: string, optional?: any): void {
    this.execute(Level.error, message, optional);
  }

  warn(message: string, optional?: any): void {
    this.execute(Level.warn, message, optional);
  }

  log(message: string, optional?: any): void {
    this.execute(Level.info, message, optional);
  }

  verbose(message: string, optional?: any): void {
    this.execute(Level.verbose, message, optional);
  }

  debug(message: string, optional?: any): void {
    this.execute(Level.debug, message, optional);
  }

  silly(message: string, optional?: any): void {
    this.execute(Level.silly, message, optional);
  }
}
