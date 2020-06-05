# <a name="TS-startup-template"></a>TS-startup-template

> Provide the basic TypeScript startup framework to help initial any project implementation. It can be easy to inject any logging mechanism and integrate with any service framework.

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/leocwlam/system-task/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/leocwlam/TS-startup-template.svg)](https://david-dm.org/leocwlam/TS-startup-template)
[![devDependency Status](https://david-dm.org/leocwlam/TS-startup-template/dev-status.svg)](https://david-dm.org/leocwlam/TS-startup-template?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Known Vulnerabilities](https://snyk.io/test/github/leocwlam/TS-startup-template/badge.svg)](https://snyk.io/test/github/leocwlam/TS-startup-template)

# Contents

---

<p align="center">
    <a href="#install">Installation</a> &bull;
    <a href="#build">Build</a> &bull;
    <a href="#run">Start application</a> &bull;
    <a href="#test">Run tests</a> &bull;
    <a href="#clean">Cleanup all compiled code</a> &bull;
    <a href="#format">Code format style fix</a> &bull;
    <a href="#deployment">Deployment application</a> &bull;
    <a href="#license">License</a>
</p>

---

# <a href="#TS-startup-template">^</a><a name="install"></a>Installation

- Install Node.js and typescript on your computer
- Install Dependency

```bash
$ git clone https://github.com/leocwlam/TS-startup-template.git project
$ cd project
$ npm install
```

# <a href="#TS-startup-template">^</a><a name="build"></a>Build

```bash
$ npm run build
```

# <a href="#TS-startup-template">^</a><a name="run"></a>Start application

**On deployed server**

- Make sure build before start

```bash
$ npm start
```

**On dev machine**

- No need to build

```bash
$ npm run start:dev
```

# <a href="#TS-startup-template">^</a><a name="test"></a>Run tests

**Run test and code coverage**

```bash
$ npm test
```

**Continue test**

```bash
$ npm run test:watch
```

# <a href="#TS-startup-template">^</a><a name="clean"></a>Cleanup all compiled code

```bash
$ npm run clean
```

# <a href="#TS-startup-template">^</a><a name="format"></a>Code format style fix

```bash
$ npm run lint
$ npm run format
```

# <a href="#TS-startup-template">^</a><a name="deployment"></a>Deployment application

**Make sure build before deployment**

Only need to deploy the following folders and files

- All files are under ./dist folder after build process
- node_modules folder
- .package.json

# <a href="#system-service">^</a><a name="license"></a>License

MIT
