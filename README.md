#Office Hours Website

## How to Develop for this website

### Running the project
1. Open iTerm
2. `cd office-hours-website`. It should show you what branch you are on
3. checkout a branch `git checkout <branch name>`
4. Run the project by running `yarn start`. This starts the node server

### Noah's steps to success
1. Create a new branch for what you want to work on `git checkout -b <branch-name>`
2. Create a new Component for what you want to add
3. Add your Component to the page Component
4. If it is a new page, add it to the Router
5. When you are finished, make sure everything is all cleaned up. 
6. `git add .` `git commit -m "message here"` `git push`
7. Open a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) from 
your `feature/` branch into the `develop` branch.
8. Make sure that the [CI](https://help.github.com/en/actions) passes
9. When all is good - Merge your Pull Request
10. To go live with your new code - merge `develop` into `master` and it will
automatically deploy to [heroku](https://www.heroku.com/what)

### Components

This website uses basic functional React components. Each component is in the
`/components` directory, and has an `index.js` and an `index.css`. 

`index.js`
```js
import React from 'react';
import './index.css';

function MyComponent() {
  return (
    <div className="my-component">
        <p>My component's text</p>
    </div>
  );
}

export default MyComponent;
```

`index.css`
```css
.my-component {
    display: flex;
    color: red;
}
```

Write your HTML (technically, it's JSX, but just pretend it's HTML) in the
`render` function of each component.

When you want to make a new page, create a new component by copy and pasting
an existing one, and changing it to be what you need.

### Routing
This project uses `react-router` to manage URL navigation.

The Router lives in `App.js`. When you want to add a new page to the website,
add a new `<Route>` inside the `<Switch>` that has your page component in it.

## How to add an Episode

In `App.js` there is a JSON object of Epsiodes. Carefully add a new episode to this object, and it will
by added throughout the site. 

### Branches

- `master` - This branch auto-deploys to Production.
- `develop` - Development Branch
- `feature/*` - Feature branches

### Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
