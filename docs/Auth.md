## Authentication using Google

### Create client id and secret
- signin to cloud.google.com and open console
- create new project
- add project name and go to the newly created project
- go to apps and services in the side navbar
- on Oauth consent screen - choose external and create
- next page - give app name and chose the email and now create and next till move to dashboard

- on credentials from sidebar - create credentials
- application type : web app and name of the app
- add urls as http://localhost:3000 initially and create
- copy the client id and secret and paste in the .env.local file in the project

### using id and secret
- copy the [...nextauth].js file from next-auth official page docs to '/pages/api/auth/'
- replace github provider with google provider
- in the providers array , add- 
```
GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

```
- also add the pages after providers 
```
 pages: {
    signIn: "/auth/signin",
  },

``` 
- this means the page to open on signIn(from next-auth/react) is present in '/pages/auth/signin.js'


### signin.js
- get the providers from getProviders (imported from next-auth/react) and pass it as props from getServerSideProps
- use signIn function from next-auth/react to perform signin 


### _app.js
- wrap the component under SessionProvider with session={session} so that the session can be used in the components
- this session comes from the pageprops(passed from the getServerSideProps) in signin.js


### header component
- usesession , signIn and signOut from 'next-auth/react'
- get session from useSession() and use it to check if the user is signed in or not
- if signed in - show the shignout button or the name of user (any ui element)
- if signed out , show the sign in button

