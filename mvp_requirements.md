# Assignment Overview: Lab for Class 2

- Your assignment will be to create an "About Me" HTML and JS project, and to also verify that you know how to use your Learning Journal. These are two separate projects; your learning journal will be a gist that you will update, while the "About Me" page will need its own GitHub repository.

- There is an example of the Learning Journal in `learning-journal` directory. Take a look and use it as a guide and as inspiration.

- Note that as we progress through the week, new user stories will be added to the "About Me" project to guide the development of new features.

### User Stories for "About Me" (MVP)

("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

This is our first exposure to user stories. This is a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

- As a student, I want to create an About Me page as a demonstration of my skills with HTML.
- As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
-- Requirement: About me page must include sections for a short bio, my education, overview of my job experience, and my goals.
- As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
-- NOTE: Make sure to include info about myself that would not normally appear in a portfolio page.
- As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
-- NOTE: Use markup to create sections for each category of info on the page.
- As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
-- NOTE: Carefully design my scripts = use pseudocode to validate the logic prior to writing any code.
- As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user
-- REQUIREMENT: Create JavaScript file and link to index.html page.
- As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
-- REQUIREMENT: Prompt the user to enter their name when the page loads.
As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
-- REQUIREMENT: Create 5 Y/N questions using prompts so the user can submit their guesses. 
- As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
-- REQUIREMENT: After the user sumbits their answer to a question, provide another prompt letting them know if their answer was correct or incorrect. Also provide a little more detail if appropriate. Ideally, style the prompt UI so the user sees separate Yes / No buttons instead of forcing them to enter text (as a separate branch - need to take input for validation logic part of the project).
- As a developer, I want to be able to debug my code by using well structured console messages.
-- REQUIREMENT: Create meaningful console.log messages to validate successful execution and/or possible bugs.
- As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.
-- REQUIREMENT: Use git / github with appropriate commit messages.

### Technical Requirements for "About Me"

- A new GitHub repo called `about_me` will be initialized for this assignment (with a README and a license, of course)
-- DONE

- Clone this repo to the root level of your `~/codefellowspdx/201/` directory on your computer.
-- DONE

- Add an `index.html` file, a `css` folder with a `style.css` file, and a `js` folder with an `app.js` file to your repo, and get the files "wired up together" so to speak.
- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.
- Your JS file contains a 'use strict' declaration at the top. Always.
- Design a guessing game about you that involves **FIVE** yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
- The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either `.toUpperCase()` or `.toLowerCase()` used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
- Useful and descriptive `console.log()` messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
- Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.

### Stretch Goals
- Find and use another built in String method in your code. 
- Decide what colors you want to use and use CSS variables to manage them.
- Use a child selector in your CSS.

### Supporting Information

#### Git

- Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

##### Git command basics:

- `git status`              Provides a detailed description of current state in working directory

- `git add <file/s>`          Include file/s in staged/tracked status of working directory; you can use `.` as a wildcard to capture all files

- `git commit -m "Your commit message"`        Snapshot the tracked changes in current working directory, with a brief message describing the changes

- `git push <destination> <branch>`                Push local commits to GitHub

### Add, Commit, Push (ACP): Learn it. Know it. Live it.

### *Remember to submit this link on Canvas so that your work can be graded*