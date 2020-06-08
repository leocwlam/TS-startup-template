import { Type, container } from './di.config';
// eslint-disable-next-line no-unused-vars
import { AppConfig } from './config/app-config';

async function start() {
  const appConfig = container.get<AppConfig>(Type.AppConfig).config();

  console.log(`Welcome to [${appConfig.name}]`);
}

start();
