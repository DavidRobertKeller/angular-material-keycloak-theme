#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const bdir = pkg.bdir;
const themeName = pkg.kcThemeName;

console.log(`bdir is ${bdir}`);

// Create theme directories
const dirs = [
  `${bdir}${themeName}/account`,
  `${bdir}${themeName}/admin`,
  `${bdir}${themeName}/login/resources`,
  `${bdir}${themeName}/welcome`,
];

for (const dir of dirs) {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created: ${dir}`);
}

// Copy index.html → login.ftl
const loginFtlSrc = path.join(bdir, 'index.html');
const loginFtlDest = path.join(bdir, themeName, 'login', 'login.ftl');
fs.copyFileSync(loginFtlSrc, loginFtlDest);
console.log(`Copied: ${loginFtlSrc} -> ${loginFtlDest}`);

// Copy resources (.css, .js, .txt, .ico) into login/resources
const resourcesDir = path.join(bdir, themeName, 'login', 'resources');
const extensions = new Set(['.css', '.js', '.txt', '.ico']);

for (const file of fs.readdirSync(bdir)) {
  if (extensions.has(path.extname(file))) {
    const src = path.join(bdir, file);
    const dest = path.join(resourcesDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
  }
}
