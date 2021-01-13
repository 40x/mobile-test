prereq

tectonic cli
xcode install
sudo gem install cocoapods

app

mkdir hello-world5
tectonic project --name=hello-world5 --scope=x_hello_world --offline

update build/index.html to use new projects name in js file
update example to export index.js
import 'babel-polyfill’; in project root

copy scripts
node scripts/init

npm i -S @servicenow/now-tabs @servicenow/now-content-tree @servicenow/now-card

build app
add now-tabs


ready to deploy 

npm run build:mobile
npm run cap:open:ios

build and run in xcode