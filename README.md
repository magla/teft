# Teft website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project dependencies

**[TypeScript](https://www.typescriptlang.org/)**\

**[React Router](https://reactrouter.com/)**\

**[ESlint](https://eslint.org/) and prettier**\

**[react-tiny-slider](https://www.npmjs.com/package/react-tiny-slider)** - wrapper for [tiny-slider](https://github.com/ganlanyuan/tiny-slider). Chose this one because it is lightweight, has all the needed features, and supports touch events.\

**[Tailwindcss](https://www.npmjs.com/package/react-tiny-slider)** - haven't used it before, actually, but liked the features, so decided to try it out on this example. Happy with 90% of the workflow with it.\

**[use-react-router-breadcrumbs](https://www.npmjs.com/package/use-react-router-breadcrumbs)** - hook for displaying breadcrumbs

## Questions

**What are the benefits of using React?**\
React is a modern framework that allows you to make modular, component-based frontend. Compared to e.g. jQuery, it allows you more control over the specific component behavior and interactivity. Oragnization of code is usually also greatly improved.\
React provides only the View level (in a typical MVP), so it can be hooked up to a headless CMS or a Rest API. Vue is also a good candidate for this task, but frameworks like Angular are more suitable for web apps, where the focus is not on the contect, but functionality.

**Are there any drawbacks of using React?**\
React does not allow on easy content input/change. If using only React, a whole seperate project to create a user-friendly admin page would have to be developed. SEO with React is still a problem, although search engines have improved. 

**How could those drawbacks be improved?**\
SEO problems can be mitigated with server-side rendering.

## Additional explanations

- The structure of the project is rather flat, since the requirements were simple. If making a larger app, I would probably use an approach where components and containers are encapsulated within separate modules. - Also, the Context API was used instead of Redux, which I usually use in larger apps. 
- I tried to have the data layer mimick a situation where the data is retrieved via a Rest API, like it would be with WP Rest API. Some of the content is received as raw HTML, to show how I would handle that situation.
- There are some additional interactive elements added, but I did not assume what the e.g. mobile menu would look like
- Icons are pure SVG, I did not want to use Material UI because of some restrictions, and the bloat
- What I could also add to the existing code (if requested): 
  - responsive jpg image for mobile
  - better tablet version
  - testing
  - better accessibilty (aria)