## Tailwind Bun Starter file

1. run command `bun add -d tailwindcss`

2. run command `bun run tailwindcss init`

3. Create two css file, one is `tailwind.css` for tailwind directives and `main.css` is for output file

4. put directives
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
into `tailwind.css` file

5. configure `tailwind.config.js` file, change content as, `content: ['./**/*.html'],`    

6. Create automated scripts command into `package.json` file, as 
```
"scripts": {
    "build": "bunx tailwindcss -i ./tailwind.css -o ./main.css",
    "watch": "bunx tailwindcss -i ./tailwind.css -o ./main.css --watch"
}
```

7. finally run command for tailwind build and watch css `bunx tailwindcss -i ./tailwind.css -o ./main.css --watch`

8. We can now add this `main.css` file to index.html file to view out final output. 