const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const package = require('../package.json');
const commands = [
    'npm install',
    'npm install @capacitor/core @capacitor/cli -S',
    'mkdir www && touch www/index.html',
    `npx cap init ${package.name} com.app.sample --npm-client=npm`,
    'npx cap add ios'
]

commands.forEach((cmd) => {
    execSync(cmd, {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
    });
})

const newScript = {
    'build:mobile': 'node scripts/build && npx cap copy',
    'cap:open:ios': 'npm run build:mobile && npx cap open ios',
    'cap:open:android': 'npm run build:mobile && npx cap open android',
}

const updatedPackage = {
    ...package,
    scripts: {
        ...package.scripts,
        ...newScript
    }
}

fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(updatedPackage, null, 4));