This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Next JS Complete Course
---

1. First we are going to use file based routing instead of code based routing
2. No more importing react-router-dom or using browserrouter, route
3. Instead we are going to create react component files and let Nexjs infer the routes form teh folder structure
4. The special /pages folder

### How File Based Routing Works ###

/pages
    - index.js
    - about.js
    - /products
      - index.js
      - [id].js

1. Based on index.js this is the starting page //inferred
2. Take the filename and applies to end of url mydomain.com/about  //inferred
   1. Only the index it doesn't take the filename

3. if we were to go to mydomain.com/products it would then load the index.js in the products subfolder
   1. the [id].js file will show as a dynamic, sucha  product detail page  
      1. for example mydomain.com/products/1


## Add Pages About and Update Index Content
--

1. Inside your index.js create a function called HomePage and export it
   1. In the return add a div with an h1 that says "The Home Page"
2. Inside our pages folder create about.js
   1. Create a function clled AboutPage and export default
   2. Inside the return add a div and h1 with "The About Page"

3 Lets create subfolder next portfolio and about inside our pages folder
    - create an index.js file and copy the content from about.js then delete about.js
    - create an index.js file inside the portfolio folder
    - the now if we go to /about or /portfolio the index.js file will load
    - next create a subfolder inside portfolio folder named list and add index.js
    - paste index.js content from about and update to reflect list
    - go to localhost:3000/portfolio/list and your page should now route
  
4. Now lets rename the index.js to list.js and move back into the portfolio folder. Then delete the list subfolder.
   1. now if we got to localhost:3000/portfolio our index loads our portfolio page.
   2. If you go to /portfolio/list we will get our list .js


## Dynamic Routing with Next.js
--

1. We want to create a component inside our portfolio folder called [projectId].js this will be a dynamic filename
2. Now if we go to any random page /portoflio/1 or /portfolio/ldfjalsd it will load the placeholder page
3. But if we go to portfolio/list and will be prioritized

## useRouter with next.js
    1. if we import {useRouter} from 'next/router'
    2. we can tap into router.pathname and router.query
    3. this will expose the pathname to get here [projectId.js]
    4. query will expose the queried name that hit that path