import { injectable } from 'inversify';

const APPCONFIG = require('../../app-config.json');
// eslint-disable-next-line no-unused-vars
import { Config } from './config';

@injectable()
export class AppConfig implements Config {
  load(): void {
    throw new Error('Method not implemented.');
  }
  config() {
    return APPCONFIG;
  }
}
