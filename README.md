# A Simple Storage App

# User Flow

## Homepage /Public

- The user sees a registration site
- The User gets notification if logged in (un)successfully
- User is prompt to login with github oder email

## Inventar page /Private

- The user sees all available items as a table. User can sort by quantity
- The user can mark an item important
- The user can search for an item
- The user can add new item, increase, decrease available items.
- If an item’s quantity is lower than 3 the number is shown red
- The user can Logout
- The user gets notification if logged out and will be redirected to the homepage

## Add/Edit page /Private

- The user sees a form with name, quantity and image
- If editing the user sees form with filled inputs
- The user gets notification if add/edit a new item

## Profile Page /Private

- The User can change his password or username (just for practising)

## Admin Page / Private

- tbc

# Tech Stack behind

- Next js
- typescript
- axios
- nprogress
- Styled-jsx
- SWR
- react-hook-forms
- MongoDB / mongoose
- NextAuth
- Redux Toolkit
- Vercel

# Milestones

1. Start a new Next js App using typescript✅
   - create tsconfig.json ✅
   - add baseUrl and no relative paths✅
   - create relevant pages✅
     - /
     - /create
     - /inventar
     - /profile
2. Add MongoDB Atlas (backendish)
   - initialize a new Mongo DB✅
   - connect it to the App✅
   - create a new Item Schema with mongoose✅
   - create API Route to read and create items
     - /api/items
   - create API Route to read item by ID, delete and update item
     - /api/items/[id]
3. Style the pages using styled jsx
   - Create a Layout with Navigation to navigate through pages
   - use nprogress
   - Mobile Responsive
4. Connect App to Redux for State Management
   - notification state
   - user state (handle login, register and autoSignin)
5. Create Components from the frontend to call these functions
   - fetch users items on the homepage (useSWR)
   - use react-hook-forms for creating new items
   - create Icons to delete and update
   - use react-hook-forms for updating an old item => get items data in form
6. Add support for user auth with next auth

   - start with next auth credentials
   - redirect unlogged user to homepage
   - if logged in show user profile page with made items

7. User can search for items and filter, sort
8. Pagination
9. Do some SEO Stuffs and 404 page
10. Lauch on Vercel
    - add db into next.config.js ✅
    - deploy app
    - add env variables to vercel
