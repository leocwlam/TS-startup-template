import { Container } from 'inversify';
import 'reflect-metadata';
import { Type } from './di.type';

import { AppConfig } from './config/app-config';
import { AppLogger } from './lib/logger/app-logger';

export const container = new Container();
container.bind<AppConfig>(Type.AppConfig).to(AppConfig);
container.bind<AppLogger>(Type.AppLogger).to(AppLogger);
// eslint-disable-next-line no-console
container.bind(Type.ExternalLogger).toFunction(console.log);
