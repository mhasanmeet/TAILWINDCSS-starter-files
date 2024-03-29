# Setup the basic environment

### 1. install tailwind css by npm 
<code>npm install -D tailwindcss</code>

This command will generate node modules and packages json files

### 2. install tailwind config file
<code>npx tailwindcss init</code>

This command will generate tailwind css "tailwind.config.js" file

### 3. configure template path
the "content: []," path file in "tailwind.config.js" need to updated. That means which JS files for Vue or React project or html file for basic project receive tailwind css stylesheet.

--> here for basic project we add, ```content: ["*.html"],``` <br/>
--> For vue or React project we add, ```content: ["*.{html,js}"],``` <br/>
--> Sometimes there may deep dive into paths ```["./src/**/*.{html,js}"],``` <br/>

### 4. Add source css file 
For source file we create "src" directory then add "input.css" file, where we add 


```
    @tailwind base;  
    @tailwind components;  
    @tailwind utilities;
```

### 5. create final or output css file and make watch between source file and output file

we create **"main.css"** as final file for css stylesheet

and for watch we need to run command as <code>npx tailwindcss -i ./src/input.css -o main.css --watch</code>

after watch command our every change will be watched by tailwind

### 6. create html file and link our main css file into html 

we create **"index.html"** as html file

then we link our main css file into html file as 
```css
    <link rel="stylesheet" href="main.css">
```

### 7. now we can code! 
now write tailwincss css into html file and see change into browser! 
