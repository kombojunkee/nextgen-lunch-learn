## Sanity.io Integration:

Discover how to build robust content management systems with Sanity.io. Our lessons guide you through the process of integrating Sanity.io into your Next.js applications, empowering you to create dynamic and scalable content-driven websites.

## Getting Started:

If you want to start your own fresh Movie Starter project with document types and fields created, but don't want the sample content that comes with it, skip these steps. Instead, search the codebase for "YOUR_PROJECT_ID" and replace this string with your own Sanity.io project ID instead.

Otherwise, follow the instructions below to start using Sanity.io:

### First, login to your Sanity account from the CLI with

`sanity login`

### Next, create a new project called Movie Starter or whatever name you want with:

`pnpm create sanity@latest`

```
@DESKTOP-D5JI0D2:~/sites/sanity$ pnpm create sanity@latest
.../share/pnpm/store/v3/tmp/dlx-18155    | +153 +++++++++++++++
.../share/pnpm/store/v3/tmp/dlx-18155    | Progress: resolved 175, reused 153, downloaded 0, added 153, done
You're setting up a new project!
We'll make sure you have an account with Sanity.io. Then we'll
install an open-source JS content editor that connects to
the real-time hosted API on Sanity.io. Hang on.

Press ctrl + C at any time to quit.

Prefer web interfaces to terminals?
You can also set up best practice Sanity projects with
your favorite frontends on https://www.sanity.io/templates

Looks like you already have a Sanity-account. Sweet!

✔ Fetching existing projects
```

### Decide on a project name. I named mine "Movie Starter"

```
? Project name: Movie Starter
Your content will be stored in a dataset that can be public or private, depending on
whether you want to query your content with or without authentication.
```

### For the remaining questions, I chose the defaults:

```
The default dataset configuration has a public dataset named "production".
? Use the default dataset configuration? Yes
✔ Creating dataset
? Project output path: /home/chister/sites/sanity/movie-starter
? Select project template Movie project (schema + sample data)
? Do you want to use TypeScript? Yes
? Add a sampling of sci-fi movies to your dataset on the hosted backend? Yes
✔ Bootstrapping files from template
✔ Resolving latest module versions
✔ Creating default project files
? Package manager to use for installing dependencies? pnpm
Running 'pnpm install'
Packages: +911
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 955, reused 911, downloaded 0, added 911, done

dependencies:
+ @sanity/vision 3.34.0
+ react 18.2.0
+ react-dom 18.2.0
+ react-icons 3.11.0 (5.0.1 is available)
+ react-is 18.2.0
+ sanity 3.34.0
+ styled-components 6.1.8

devDependencies:
+ @sanity/eslint-config-studio 3.0.1
+ @types/react 18.2.67
+ eslint 8.57.0
+ prettier 3.2.5
+ typescript 5.4.2

Done in 5.7s
✔ [100%] Fetching available datasets
╭───────────────────────────────────────────────╮
│                                               │
│ Importing to:                                 │
│ projectId: YOUR_PROJECT_ID_WILL_APPEAR_HERE   │
│ dataset: production                           │
│                                               │
╰───────────────────────────────────────────────╯

✔ [100%] Reading/validating data file (53ms)
✔ [100%] Importing documents (1.24s)
✔ [100%] Importing assets (files/images) (35s)
✔ [100%] Setting asset references to documents (735ms)
✔ [100%] Strengthening references (800ms)
Done! Imported 205 documents to dataset "production"


If you want to delete the imported data, use
  sanity dataset delete production
and create a new clean dataset with
  sanity dataset create <name>


Success! Now, use these commands to continue:

First: cd /home/chister/sites/sanity/movie-starter - to enter project’s directory
Then: pnpm dev - to run Sanity Studio

Other helpful commands
sanity docs - to open the documentation in a browser
sanity manage - to open the project settings in a browser
sanity help - to explore the CLI manual

Before you continue...
To access your content, you need to add the following URL as a CORS origin to your Sanity project.
```

### Click continue to be taken to the add cors origin page and select Add CORS origin
![Screenshot 2024-03-18 123630](https://github.com/kombojunkee/nextgen-lunch-learn/assets/134183650/5eed6ed4-d8d8-47e9-af0c-0a5210fe6c5a)

![Screenshot 2024-03-18 124136](https://github.com/kombojunkee/nextgen-lunch-learn/assets/134183650/6dd8e52a-4f9d-45fc-af8e-7181a5a27a8f)


### Now authenticate and you should be all set!

## Branches:

This repository contains various feature branches, each dedicated to a specific lesson in the NextGen Lunch and Learn course. As you progress through the course, you'll explore different branches, each focusing on a particular topic or technology.

## How to Use:

To get started, clone this repository to your local machine and checkout the branch corresponding to the lesson you're interested in. Each branch contains detailed documentation and example code to help you grasp the concepts covered in that lesson.

Whether you're a seasoned developer looking to stay up-to-date with the latest technologies or a newcomer eager to learn, NextGen Lunch and Learn provides a comprehensive and accessible learning experience for all skill levels.

Join us on the journey to mastering modern web development. Happy coding!

## Contributors:

- Kombo Junkee

Feel free to contribute to the repository by submitting pull requests, reporting issues, or sharing your insights and experiences with the community. Together, we can make NextGen Lunch and Learn the ultimate resource for mastering the next generation of web development technologies.
