# Welcome to Planeo WorkForce v2!
This is a new version of Planeo WorkForce

## Build
### Before starting
You need to prepare your machine environment with the next software/packages
- Instalar Firebase CLI
- Instalar python
- Instalar Visual Studio Build Tools [https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools]
- Instalar dependencias de node
    - npm --add-python-to-path='true' --debug install --global windows-build-tools
    - npm install --global node-gyp
    - npm prefix -g | % {npm config set node_gyp "$_\node_modules\node-gyp\bin\node-gyp.js"}
    - npm install -g firebase-tools
- Abrir CMD o Terminal y revisar que comando "firebase" no sea desconocido
### App creation
This app was built by using yarn and a base typescript template:
- yarn create react-app workforce --template typescript
### Install app libraries
- yarn install (If your app is not installed and you want to install all packages)
- yarn update (If your app is already installed but you want to update all packages)


## Testing
The next commands are needed if you want to test your app
### Run local
- yarn start

## CORS
Because of CORS restrictions there is a file "cors.json" on the root project.
It was necessary to set some policys to the storages buckets:
- gsutil cors set cors.json gs://planeo-workforce-dev.appspot.com

## Firebase
Remember you need first select a firebase project before continue
### Select a Firebase's project to work
    - firebase use
    - firebase use <project_alias/name> (default/dev)
### init your firebase proyect characteristics:
- firebase init
- Fill field like this:
    - Choose hosting, functions (with Space key)
    - What do you want to use as your public directory? build
    - Configure as a single-page app (rewrite all urls to /index.html)? Yes 
    - Set up automatic builds and deploys with GitHub? No
    - File build/index.html already exists. Overwrite? No
### init your firebase functions:
This has been done already, you don't need to use it again or it will change the configuration
- firebase init functions
    - Fill field like this:
        - Are you ready to proceed? Yes
        - What language would you like to use to write Cloud Functions? Typescript
        - Do you want to use ESLint to catch probable bugs and enforce style? No
        - Do you want to install dependencies with npm now? Yes
The firebase cloud functions were built using TypeScript, that's why before emulate or export the functions you need to compile it via:
-  Inside the functions folder type:
    - npm run-script build
- It will create a "lib" folder which contains the exportable code, so when you deploy be careful to use the "lib" folder already compiled.
- Then you can run the firebase functions locally on the emulator
### Run firebase emulator
If you want to run all firebase emulator apps
- ```javascript
            firebase serve --host=192.168.1.130 --port=5001
### Run firebase functions locally
You can setup an lite firebase's server to test endpoints with Postman by using:
- On the project's root folder:
    - ```javascript
        firebase serve --only functions --host=192.168.1.130 --port=5001

## Deploy
Remember you need first to generate & compile your app before deploy
### Generate & compile
    - npm run-script build
### Deploy app hosting
For the app deploy we're going to use firebase-cli:
- Remember to have already generated & compiled the app.
- firebase deploy --only hosting
### Deploy app function/s
- firebase deploy --only functions
- firebase deploy --only functions:CreateCertificatePDF
### Deploy all firebase setted characteristics
- firebase deploy

# Firebase/Google Cloud Functions
Firebase share the functions with Google Cloud and are managed by Google Cloud, so if you need to check anything to to Google Cloud->Cloud functions.
- This app is using Google/Firebase's cloud functions, the definitions of those functions are under ./functions/index.js.
