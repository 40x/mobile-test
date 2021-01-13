const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const outputDir = 'www';
const isProd = process.argv.includes('--prod');

const CMD = `./node_modules/.bin/builder run build:app:static ${isProd ? '': '-- --mode=development'}`;

execSync(CMD, {
    cwd: path.join(__dirname, '..')
});

fs.ensureDirSync(outputDir);
fs.emptyDirSync(outputDir);

// Taken from seismic-devtools
glob.sync('target/**/*.{js,js.map}')
    .forEach(script => {
        console.log();
        fs.copySync(
            script, 
            path.join(
                outputDir, 
                path.basename(
                    script
                        .replace('.dev', '')
                        .replace('.min', '')
                )
            )
        );
    });

fs.copySync('example/index.js',path.join(outputDir,'index.js'))
fs.copySync('scripts/index.html',path.join(outputDir,'index.html'))



