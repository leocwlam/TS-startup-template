import { expect } from 'chai';
import { describe, it } from 'mocha';

import { Type } from '../../../src/di.type';
import { container } from '../../../src/di.config';
import { AppConfig } from '../../../src/config/app-config';

describe('appConfig Test', function () {
  it('Success get config ', function () {
    const appConfig = new AppConfig();
    expect(appConfig.config()).to.not.equal(null);
    expect(appConfig.config().name).to.equal('Application Name');
    expect(appConfig.config().description).to.equal('Application Description');
    expect(appConfig.config().version).to.equal('1.0.0');
  });

  it('Fail to load config throw exception', function () {
    const appConfig = container.get<AppConfig>(Type.AppConfig);
    expect(appConfig.config()).to.not.equal(null);
    expect(() => appConfig.load()).to.throw();
  });
});
