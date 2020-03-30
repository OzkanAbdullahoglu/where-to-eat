# Where-to-eat
A single page webapp with Google maps and Yelp API.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`
Launches the test runner in the interactive watch mode.<br />

## Application Setup

The application was created with create-react-app and requires only npm install and npm start to get it installed and launched. App has to be run in production mode to see If service worker is working properly. App is live and working in this [link.](https://ozkanabdullahoglu.github.io/where-to-eat/)


## User Guide

Perform a search to find out restaurants in any location or in your location, default location of App is user location.
<p align="center">
<img src="./public/demo.gif" alt="perform a search in google map" width="640px" height=320px>
</p>


## Built with

*  [Google Map API](https://cloud.google.com/maps-platform/) is used for implementation of Google Map into the app also Its Geocode service is used to find an exact location which is searched by user.
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* [react-google-maps](https://tomchentw.github.io/react-google-maps/) is used to implementation of Google Map into the App.
* [Yelp API](https://www.yelp.com/developers/graphql/guides/intro) to find out restaurants in a specific area.
* [Apollo Client](https://www.apollographql.com/docs/react/) to communicate Yelp graphQL API.
* [Jest](https://jestjs.io/en/) for unit testing.
* [Redux](https://redux.js.org/) for state management.
* [Styled-components](https://styled-components.com/) to create resuable and more organised components.
* 
## App Structure
```bash
├── README.md
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   ├── manifest.json
│   └── index.html # HTML 
└── src
    ├── Client.js #Yelp API management
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    ├── setupTests.js # main tests setup
    ├── store.js # redux store
    ├── tempPolyfills.js
    ├── components
    │   ├── app
    │   │    ├──__snapshots__
    │   │    │       └── App.test.js.snap
    │   │    ├── App.test.js
    │   │    ├── App.js # This is the root of the app.
    │   │    └── App.css # Styles for the app.
    │   ├── main
    │   │     ├── Map
    │   │     │     ├──__snapshots__
    │   │     │     │      └── Map.test.js.snap
    │   │     │     ├── Map.js # Google map handler
    │   │     │     └── Map.test.js    
    │   │     ├── left-panel   
    │   │     │     ├──__snapshots__
    │   │     │     │      └── LeftPanel.test.js.snap
    │   │     │     ├── LeftPanel.js # like a hamburger menu, a panel for found places
    │   │     │     └── LeftPanel.test.js    
    │   │     ├── search-map   
    │   │     │     ├──__snapshots__
    │   │     │     │      └── SearchMap.test.js.snap
    │   │     │     ├── SearchMap.js # search bar handler with geocode autocomplete
    │   │     │     └── SearchMap.test.js    
    │   │     └── GoogleMapComponent.js
    │   ├── styled-components 
    │   │     ├── LeftPane
    │   │     │     ├──__snapshots__
    │   │     │     │      └── LeftPane.test.js.snap
    │   │     │     ├── LeftPane.js
    │   │     │     └── LeftPane.test.js  
    │   │     ├── PaneOnlyToggleButton
    │   │     │     ├──__snapshots__
    │   │     │     │      └── PanelOnlyToggleButton.test.js.snap
    │   │     │     ├── PanelOnlyToggleButton.js
    │   │     │     └── PanelOnlyToggleButton.test.js  
    │   │     ├── PanelToggleButton
    │   │     │     ├──__snapshots__
    │   │     │     │      └── PanelToggleButton.test.js.snap
    │   │     │     ├── PanelToggleButton.js
    │   │     │     └── PanelToggleButton.test.js 
    │   │     ├── SearchBoxContainer
    │   │     │     ├──__snapshots__
    │   │     │     │      └── SearchBoxContainer.test.js.snap
    │   │     │     ├── SearchBoxContainer.js
    │   │     │     └── SearchBoxContainer.test.js 
    │   │     ├── Tooltip
    │   │     │     ├──__snapshots__
    │   │     │     │      └── Tooltip.test.js.snap
    │   │     │     ├── Tooltip.js
    │   │     │     └── Tooltip.test.js 
    │   └── view
    │         ├── AlertModal
    │         │     ├──__snapshots__
    │         │     │      └── AlertModal.test.js.snap
    │         │     ├── AlertModal.js
    │         │     └── AlertModal.test.js  
    │         ├── ItemDetail
    │         │     ├──__snapshots__
    │         │     │      └── ItemDetail.test.js.snap
    │         │     ├── ItemDetail.js
    │         │     └── ItemDetail.test.js  
    │         ├── ItemRating
    │         │     ├──__snapshots__
    │         │     │      └── ItemRating.test.js.snap
    │         │     ├── ItemRating.js
    │         │     └── ItemRating.test.js 
    │         ├── LeftPaneHeader
    │         │     ├──__snapshots__
    │         │     │      └── LeftPaneHeader.test.js.snap
    │         │     ├── LeftPaneHeader.js
    │         │     └── LeftPaneHeader.test.js 
    │         ├── List
    │         │     ├──__snapshots__
    │         │     │      └── List.test.js.snap
    │         │     ├── List.js
    │         │     └── List.test.js 
    │         ├── ListItem
    │         │     ├──__snapshots__
    │         │     │      └── ListItem.test.js.snap
    │         │     ├── ListItem.js
    │         │     └── ListItem.test.js 
    │         └── RatingStar
    │               ├──__snapshots__
    │               │      └── RatingStar.test.js.snap
    │               ├── RatingStar.js
    │               └── RatingStar.test.js 
    ├── reducers 
    │      ├── index.js
    │      ├── actions.test.js # unit tests for actions
    │      ├── mapReducer.js            
    │      └── reducers.test.js # unit tests for reducers
    └── utils 
           ├── helper.js # helper functions
           └── testUtils.js # mock functions for unit tests
```




