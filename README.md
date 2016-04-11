# PWA-weather

Google's Progressive App showing :
- Registering, installing and activating serviceWorker
- Caching static assets in local cache
- Calling API in the first request and then saving the response in cache to future requests
- Demo of 2 async requests - one to the local cache and other to live API to show the initial rendering from local app and then update as soon as live api responds. Heart of progressive web app behavior
- Usage of app in offline environment

# To test
```
git clone https://github.com/abhagupta/PWA-weather.git pwa-weather
cd pwa-weather
npm install
npm start

```
# Live app
https://weather-pwa.herokuapp.com/

# Investigate Service Worker
 - Open Chrome Dev Tools > Resources > Service Worker
 - You can also open chrome://serviceworker-internals/ to see the service worker for the app. The status should be RUNNING.

## Checking cache
- The web app will load the weather data for New York by default.
- The very first load will save the static assets in browser's `caches` object available in `window`
- The user can add the preferred city by clicking `+` button in header.
- The weather data for the new city is fetched from the API and the response is  saved in cache for future use.
- Checking the network tab for repeated views , you will notice the assets are fetched from ServiceWorkers.
- Cache objects can be cleared and managerd from Chrome Dev tools > Service Workers  or Chrome Dev tools > Cache Storage
- Availablity of app even in offline environment. Disable Wi-Fi or network connection and refresh the app. The app will still be available. This is because the assets and API is served from cache. This can be confirmed by going in the Network Tab and investigating the XHR requests. The XHR will return 404 but another set of requests will return 200 which are basically served by cache. 
