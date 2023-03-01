# Disclaymer this is just a Draft! ..... 
# Using Vue Components with vite in ASP .NET Core MVC Project

First thing first I'm writing about this because this is a personal approach to using vue with vite and .Netcore that I happen to like. I come from years of Laravel Development and happend to see this approache there. 

1. Create the .Netcore Project. 
``` Bash 
dotnet new mvc -o ProjectName
```
2. Build and run the project. 
``` Bash 
dotnet build &&  dotnet run
```
3. Once you have your .netcore project running we are going to create the Vite project inside the .net one. 
```Bash
npm create vite@latest
```
4. We simply run the wizzard and select vue and js for the current tutorial. 
5. `cd` into your vue project, I happened to call mine vue for simplicity purposes.
6. If you run npm run dev you happen to have your vite project inside a .netcore one. That's good but we want to tinker this a little more.
7. We are going to configure our `vite.config.js` in order to have two things: A) server port and B) the output dir will point to our wwwroot folder. 

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // We define the port
  server: {
    port: 5000
  },
  // And the build target
  build:{
    outDir:"../wwwroot/client"
  }
})
```

8. We are going to tinker this a little bit. We can delete lots of stuff that we are not going to use but for now. 
We are going to open the main.js file in the `src` folder and we are going to use the esm-bundler. 
```js
import { createApp } from 'vue/dist/vue.esm-bundler'

createApp().mount('#app')
```
9. After this we go back to our .netcore project. And in our `_Layout.cshtml` file we do the following. 

```Html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - DotVue</title>
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="~/css/site.css" asp-append-version="true" />
    <link rel="stylesheet" href="~/DotVue.styles.css" asp-append-version="true" />
    @* We add the view Libs *@
    @*Development in order to see the live changes *@
    <script type="module" src="http://localhost:5000/src/main.js" defer></script>
    @*Prod we get the file from what vite compiles.*@
    @* <script type="module" src="~/client/assets/index.js" defer></script> *@
</head>
<body>
    <div id="app" >
      <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">DotVue</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
      <div class="container">
        <main role="main" class="pb-3">
            @RenderBody()
        </main>
      </div>

    </div>
    
    <footer class="border-top footer text-muted">
        <div class="container">
            &copy; 2023 - DotVue - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </div>
    </footer>
    <script src="~/lib/jquery/dist/jquery.min.js"></script>
    <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="~/js/site.js" asp-append-version="true"></script>
    @await RenderSectionAsync("Scripts", required: false)
</body>
</html>
```
9. Lets test our app. `cd` into the vite app and run `npm run dev`. Start the dotnet app in the root folder of the project. `dotnet run` 

10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!10. Voila! Now if we open the developer tools we are able to see the Vuejs Devtools! But Lets create a component!
11. We create a Vue component in the Components folder. 
12. we add the component in the main.js file
13. We add the component to one of the asp files. 
14. Now we can see the data that was declared in the vue component. 
