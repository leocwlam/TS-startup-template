import { Type } from './di.type';
import { container } from './di.config';
// eslint-disable-next-line no-unused-vars
import { AppConfig } from './config/app-config';
// eslint-disable-next-line no-unused-vars
import { AppLogger } from './lib/logger/app-logger';

async function start() {
  const appConfig = container.get<AppConfig>(Type.AppConfig).config();
  const logger = container.get<AppLogger>(Type.AppLogger);
  logger.isApplyMessageFormat = true;

  logger.log(`Welcome to '${appConfig.name}'`);
}

start();
