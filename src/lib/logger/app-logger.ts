/* eslint-disable no-unused-vars */
import { inject, injectable } from 'inversify';
import { Type } from '../../di.type';

import { Level, Logger } from './logger';

@injectable()
export class AppLogger implements Logger {
  @inject(Type.ExternalLogger) private externalLogCall: any;
  
  isApplyMessageFormat: boolean = false;

  private execute(level: Level, message: string, optional?: any): void {
    if (this.isApplyMessageFormat) {
      this.externalLogCall(this.messageFormat(level, message, optional));
    } else {
      this.externalLogCall(level, message, optional);
    }
  }

  messageFormat(level: Level, message: string, optional?: any): string {
    let result: string = 'Information';
    switch (level) {
    case Level.error:
      result = 'Error';
      break;
    case Level.warn:
      result = 'Warning';
      break;
    case Level.info:
      result = 'Information';
      break;
    case Level.verbose:
      result = 'Verbose';
      break;
    case Level.debug:
      result = 'Debug';
      break;
    case Level.silly:
      result = 'Silly';
      break;
    }

    return optional? `${result}: ${message} - ${JSON.stringify(optional)}`: `${result}: ${message}`;
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
