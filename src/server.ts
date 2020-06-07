import { AppConfig } from './config/app-config';

async function start() {
  const appConfig = new AppConfig().config();

  console.log(`Welcome to [${appConfig.name}]`);
}
start();
