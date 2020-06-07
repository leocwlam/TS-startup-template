import * as APPCONFIG from '../app-config.json';
// eslint-disable-next-line no-unused-vars
import { Config } from './config.interface';

export class AppConfig implements Config {
  load(): void {
    throw new Error('Method not implemented.');
  }
  config() {
    return APPCONFIG;
  }
}
