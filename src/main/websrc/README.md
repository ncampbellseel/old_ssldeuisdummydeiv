[![Circle CI](https://circleci.com/gh/SopraSteriaUX/ss-white-label-angular/tree/master.svg?style=shield)](https://circleci.com/gh/SopraSteriaUX/ss-white-label-angular/tree/master)

<img width="450" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Sopra_Steria_logo.svg/1280px-Sopra_Steria_logo.svg.png"/>

## ss-white-label-angular
White Label - AngularJS SPA.

---
<img width="200" align="right" src="https://nodejs.org/static/images/logos/nodejs.png"/>
### Installation
<span style="color:red;"><b>DO NOT CLONE OR FORK THIS REPOSITORY</b></span>

Download a zip version of the this project to kick-off your project.

#### oAuth Token Request
Vitally important - When creating a new project that isn't for testing/playing you MUST request an oAuth token from bryce.wilson@soprasteria.com

#### oAuth Token Update
Once you have recieved your token, update 'ss-clone.sh' with your unique token. This is your secret handshake for that project without giving away access to any other SopraSteria UX git repo. DO NOT distribute this token and keep it soley within this project. Any unauthorised use of this token will automatically revoke access and disable builds for that project until a new token is generated.

#### Installing Node.js
Download and install the latest **Node.js** software located here [https://nodejs.org/en/download/] (https://nodejs.org/en/download/)

TL;DR - npm install -g npm@latest


#### Installing Gulp
Download Gulp **globally** via the command line:
 
 ```sh
$ npm install -g gulp
```

*NB: Installing Gulp.js globally will enable you to run the ‘gulp’ command in your command prompt.*

*Troubleshooting: You may have to define an environment variable on windows to link gulp to the command line. To remedy this, add an environment variable called NODE_PATH and set it to %AppData%\npm\node_modules. More on how to set up env variables here - http://stackoverflow.com/a/9674051*


Use **node** to install **bower**

```sh
$ npm install -g bower
```

Create your user-config.sh file by copying 'user-config-example.sh' and changing your required details (leave username and password blank if you do not require an authenticated proxy). Change IP and port to your specific proxy address.

'user-config.example.sh' should remain in your project and checked into GIT for other users to create. 'user-config.sh' should remain an ignored file so it does not overwrite other users configs.

Downloads and install **npm modules** and **bower components** specified in **package.json** (Please be aware your oAuth token must be updated before this)

```sh
$ npm run init
```

*Troubleshooting: if this throws a 406 exception error, change the 'https://' to 'git://' in the package file which loads any git modules*


---
<img width="200" align="right" src="http://ahmed-badawy.com/blog/wp-content/uploads/2015/02/gulp.png"/>
#### Run a local server and watch for changes on *.html, *.js, *.json & *.sass files and runs tasks accordingly.

```sh
$ gulp
```

App location:
[http://localhost:3030](http://localhost:3030) - *Available once you have ran your first build (see below)*

Styleguide location:
[http://localhost:4040](http://localhost:4040) - *Available once you have ran your first build (see below)*

Dummy API location:
[http://localhost:5050](http://localhost:5050) - *Available once you have ran your first build (see below)*

Docs location:
[http://localhost:6060](http://localhost:5050) - *Available once you have ran your first build (see below)*

---

#### Build a 'dist' folder which the runs here - [http://localhost:3030](http://localhost:3030)

Production **dist** with or without running **unit tests**
```sh
$ npm run build
$ npm run build:skip
```

Development **dist** with or without running **unit tests**
```sh
$ npm run build:dev
$ npm run build:dev:skip
```

Java Env **dist** with or without running **unit tests**
```sh
$ npm run build:java
$ npm run build:java:skip
```

---

#### Updating SS Packages
To update the SopraSteria Packages, run 'npm run ss-update' within the project root. You will be required to run a build to see the updates.

---

#### Run Unit Tests

Runs **standalone** available unit tests found in /tests/unit
```sh
$ gulp test
```
---

#### Mac Issue - NPM location

Depending on your set up - your npm path may be set to the wrong location. Follow the steps here to remedy.

https://docs.npmjs.com/getting-started/fixing-npm-permissions

#### Upgrade NPM

Any issues with npm version - see here
```sh
https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows
```
---

#### SublimeText 3
Download and install the latest **Sublime Text 3** software located here [https://www.sublimetext.com/3] (https://www.sublimetext.com/3)

Install **Sublime Text 3 Package Control** via the instructions located here [https://packagecontrol.io/installation] (https://packagecontrol.io/installation)

Using Package Manager, install the following modules:

- AngularJS
- CSS Extended Completions
- File History
- HTML/CSS/JS Prettify
- Sass Beautify
- Sidebar / Sidebar Enhancements
- CSScomb

---

#### Proxy Issues

Accessing **git/npm/bower** when behind a proxy:

## New Method

See above with user-config.sh & user-config.example.sh

## Old Method

###### .gitconfig
In the **root** project folder, edit or create your **.gitconfig** file to read as follow:

*NB: Only use 'username:password@' if your setup requires you to authenticate outside of the proxy*
```sh
[user]
name = username
email = youremails@company.com
[http]
proxy = http://username:password@ip_address_here:the_port_number_here
[https]
proxy = http://username:password@ip_address_here:the_port_number_here

```


###### .npmrc
In the **root** project folder, edit or create your **.npmrc** file to read as follow:

*NB: Only use 'username:password@' if your setup requires you to authenticate outside of the proxy*
```sh
proxy=http://username:password@ip_address_here:the_port_number_here
https-proxy=http://username:password@ip_address_here:the_port_number_here
strict-ssl = false
registry = http://registry.npmjs.org/

```


###### .bowerrc
In the **root** project folder, edit or create your **.bowerrc** file to read as follow:

*NB: Only use 'username:password@' if your setup requires you to authenticate outside of the proxy*
```sh
{
  "registry": "http://bower.herokuapp.com",
  "strict-ssl": false,
  "proxy":"http://username:password@ip_address_here:the_port_number_here",
  "https-proxy":"username:password@ip_address_here:the_port_number_here"
}

```
---
