# Tailwind CSS advance Setup

## In Tailwind custom css can be adjusted by two way

* as regular custom.css (or whatever wish you name your file) file added into html files
* configure into tailwind.config.css file, let check here 

1. If we have custom color pallete then we can add color in tailwind.config.css file,like as

```
theme: {
    extend: {
        colors: {
         "custom-color-red": "#B20600",
         "custom-color-orange": "#FF5F00"
        }
    }
}

```
### uses of custom color -->

* if we want to use specific custom color as a **text color** then **Tailwind class** will be like 

```
<div class="text-custom-color-red">Some text</div>

```

* if we want to use specific custom color as a **background color** then **Tailwind class** will be like 

```
<div class="bg-custom-color-orange">Some text</div>

```

2. If we center container and make paddding, which is important and basic utility, then we use,

```
theme: {
    extend: {
        container: {
            center: true,
            padding: "1rem"
      }
    }
}
```
3. If we want to define our screen breakpoint as ourself then we need to define as, 

```
theme: {
    extend: {
        container: {
            center: true,
            padding: "1rem"
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px",
            }
        }
    }
}
```
4. If we want to use google font we need to first add into source css file then tailwind config file, as like,

```@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");```

then into tailwind config file,

```
theme: {
    extend: {
            fontFamily: {
                Poppins: ["Poppins, sans-serif"]
            }
        }
    }
}
```

4. If we want to use **custom universal group stylesheet**, then we need to **apply** into source tailwind css file, like as, 

after base, components, utilities file we add as,

```
.btn {
    @apply shadow-md py-3 px-6 rounded-md transition duration-300;
}
```

or anything like as we want.