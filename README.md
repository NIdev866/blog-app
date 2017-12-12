NOTES:

'npm install' and then you have to run both 'npm run start' and 'npm run apiserver' 
in two separate terminals for it to work

there is use of 'setTimeout' in 'componentDidMount's in responses from API only due to slow updating 
of the json-server package 




# ROI Ltd Technical Test

## Blogger.

Application to read blog posts, and when logged into the application you can create/edit/delete posts.

When a user is not logged in they should be given a login screen without displaying any blog data.

When a user is logged in they should be give a list of their blogs displaying only the title. When clicking a blog item, this should navigate to a screen that has the title and the description, along with a button to then edit or delete the blog. When the edit button is click, the user should be navigated to an edit screen to update or change the blog details. Clicking delete will delete the blog.

You will not be required to authenticate against the server but get the user details from the json server.

## Example Web Api calls

Please consider the json server as another external API that you will require to request data from.

* Get All. `http://localhost:3000/posts`
* Get single. `http://localhost:3000/posts/1`
* Delete post. `http://localhost:3000/posts/1`
* Post for new blog post. `http://localhost:3000/posts`
* Post for updating blog post. `http://localhost:3000/posts/1`

## Test Output
The aim of this test is to produce a http server to serve a html file, bundle.js, and vendor.js file with the json server acting as an external restful service to query data from. Additional styling of the html is not expected other than using standard bootstrap css.

In the package.json there is already a script to start a json-server (`npm run json:server`) which will handle the restful api for the data for http://localhost:3000. This data is read and writen to the db.json file in this project.

The steps that are required would be completed to:
* install react and any other packages that are required
* setup webpack to create the bundle file and the vendor file to be served.
* create web application with React
    * query json server from React.
* code a http server using a javascript framework of your choosing
    * serve web application

Create-React-App can also be used to complete this test. Please amended the package.json file to include a script to launch the json server.

All react code should be added to the `public\src` folder and index.js has been created for server side code.

Please ensure that all packages installed are saved to the package.json using `npm install <package> --save` and your working solution to be uploaded to a github repository that is externally accessible.
