
# GithubFinder

This is a robust, fully featured React App. This GitHub Finder allow user to find existing user on GitHub and also checkout some Trending Repository and Developers.

## Tech Stack

React, JavaScript, Html, CSS, Chakra-UI


## Deployment Link
https://resplendent-granita-966ca8.netlify.app/

## Features

- Navigation Bar and Footer is well aligned.
- Fetching API for displaying the data along with there github stats.
- Github Stars section is provided where top Github Contributors along with their github statistics is provided.
- Searching Functionality is also provided.
- Trending Repo section where all Trending Projects is mentioned along with Contributors and particulars.
- All components are cross-device compatible.



## Installation

Clone the Repository from Github. Then do the following steps:

```bash
    npm install

    npm run start
```
    
## Screenshots

 ### Home Page
 This is the landing page when user visits the website for first time.

![App Screenshot](https://i.postimg.cc/d0vJxyRH/Web-capture-29-11-2022-141352-resplendent-granita-966ca8-netlify-app.jpg)

 ### Finder Section
Once user search for any particular username cards will be available in this manner.

![App Screenshot](https://i.postimg.cc/gjBvMpfs/Web-capture-29-11-2022-141648-resplendent-granita-966ca8-netlify-app.jpg)

 ### Github Stars
 This section shows the Developers who made considerable constribution on GitHub platform including their stats.
 
![App Screenshot](https://i.postimg.cc/sDhcnQgZ/Web-capture-29-11-2022-142022-resplendent-granita-966ca8-netlify-app.jpg)

  ### Trending Repo
 This section shows the Repository that are trending on GitHub.
 
![App Screenshot](https://i.postimg.cc/sXPtt6cb/Web-capture-29-11-2022-142444-resplendent-granita-966ca8-netlify-app.jpg)

 ### About Page
 This is the concluding page where some useful links related to get in touch is provided.
 
![App Screenshot](https://i.postimg.cc/tRSrYGY2/Web-capture-29-11-2022-142627-resplendent-granita-966ca8-netlify-app.jpg)


## API Reference

#### Get All Users from Github API

```http
  GET : `https://api.github.com/search/users?q=${user}&page=1&per_page=${limit}&order=asc`
```

#### Get Trending Repo API

```http
  GET : https://gtrend.yapie.me/
```
