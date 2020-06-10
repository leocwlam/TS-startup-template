import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Container } from 'inversify';

import { Type } from '../../../../src/di.type';
import { container } from '../../../.././src/di.config';
import { Level } from '../../../../src/lib/logger/logger';
import { AppLogger } from '../../../../src/lib/logger/app-logger';

describe('AppLogger Test', function () {
  it('Success call all log functions', function () {
    const container = new Container();
    container.bind<AppLogger>(Type.AppLogger).to(AppLogger);
    container.bind(Type.ExternalLogger).toFunction(
      (level: Level, message: string, optional?: any) => {
        if ((level < Level.error) || (level > Level.silly)) {
          throw new Error('Fail Level information');
        }
        if (!(message)) {
          throw new Error('Missing message');
        }
        if (!optional) {
          throw new Error('Missing optional value');
        } else if (!optional.trace) {
          throw new Error('Missing optional trace value');
        }
      });

    const appLogger = container.get<AppLogger>(Type.AppLogger);
    expect(() => appLogger.error('Error Message', {trace: 'test'})).to.not.throw();
    expect(() => appLogger.warn('Warning Message', {trace: 'test'})).to.not.throw();
    expect(() => appLogger.log('Log Message', {trace: 'test'})).to.not.throw();
    expect(() => appLogger.verbose('Verbose Message', {trace: 'test'})).to.not.throw();
    expect(() => appLogger.debug('Debug Message', {trace: 'test'})).to.not.throw();
    expect(() => appLogger.silly('Silly Message', {trace: 'test'})).to.not.throw();
  });

  it('Success call all log functions from app', function () {
    const appLogger = container.get<AppLogger>(Type.AppLogger);
    appLogger.isApplyMessageFormat = true;
    expect(() => appLogger.error('Error Message', {trace: 'test'})).to.not.throw();
    expect(() => appLogger.warn('Warning Message')).to.not.throw();
    expect(() => appLogger.log('Log Message')).to.not.throw();
    expect(() => appLogger.verbose('Verbose Message')).to.not.throw();
    expect(() => appLogger.debug('Debug Message')).to.not.throw();
    expect(() => appLogger.silly('Silly Message')).to.not.throw();
  });
});
