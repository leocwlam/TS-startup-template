import { Container } from 'inversify';
import 'reflect-metadata';
import { AppConfig } from './config/app-config';

export const Type = {
  AppConfig: Symbol('AppConfig'),
};

export const container = new Container();
container.bind<AppConfig>(Type.AppConfig).to(AppConfig);
