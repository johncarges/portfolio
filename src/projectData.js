import vakitchenGeneral from './assets/VaKitchen-general.png'
import vakitchenFrontEnd from './assets/VaKitchen-front-end.png'
import vakitchenAPI from './assets/VaKitchen-API.png'

import bestBoyGeneral from './assets/BestBoyGeneral.png'
import bestBoyBackend from './assets/BestBoyBackend.png'
import bestBoyFrontend from './assets/BestBoyFrontend.png'
import bestBoyApi from './assets/BestBoyApi.png'

import caveCrawlerMap from './assets/CaveCrawlerMap.png'
import caveCrawlerDB from './assets/CaveCrawlerDB.png'
import caveCrawlerEnemy from './assets/CaveCrawlerEnemy.png'


export const projectData = [
    {
        name: 'VaKitchen',
        subtitle:"Full Stack Web App for kitchen appliance rental service.",
        description:"Loosely based on the rental service Rent The Runway, this mock website imagines a service that would allow users to rent kitchen appliances through a monthly subscription plan. Users can create an account with ",
        detailUrl:"vakitchen",
        githubLink:'https://github.com/johncarges/VaKitchen',
        currentlyDeployed: false,
        deployLink: 'a',
        tags: ['Python', 'Javascript','React.js','FastAPI','PostgreSQL'],
        image:vakitchenGeneral,
        collaborators: null,
        sections:[
            {
                title: 'Front End',
                image: vakitchenFrontEnd,
                description: 'This app is built in React. Navigation is built with React Router, paying particular attention to many of the tools and paradigms new to React Router 6, such as loaders, actions, and RouterProviders.'
            },
            {
                title: 'API',
                image: vakitchenAPI,
                description: "Having worked with Flask and SQLAlchemy (an ORM) during my Flatiron bootcamp, with my first project post-graduation, I wanted to try to learn as many new technologies as possible. With that in mind, I built the API using FastAPI, with model classes inherting from Pydantic's BaseModel class for data validation and easy debugging. "
            },
            {
                title: 'Database',
                image: null,
                description:'The database is a PostgreSQL database hosted on ElephantSQL.com. Rather than use an ORM, I chose to write SQL queries as individual SQL files, which are read in by the various Python files that define the API routes. Not my favorite way to accomplish database interaction (especially in fetches with a variety of parameters, such as fetching items with multiple filters, a sort method, and user validations), but good practice!'
            }
        ],
        display: true,
    },
    {
        name: "The Best Boy",
        subtitle: "Full stack web app for scheduling and hiring on film productions",
        description:`
        Designed for film and television professionals working on set, The Best Boy App is a web app that allows users to store contact information, schedule production days, create open roles, and assign contacts to those roles. Users can view projects and save project-wide information like notes, core crew, or contract terms, and they can also click into individual days to store information on a per-day basis.
        <br>
        (A best boy is a member of a lighting or grip department, in charge of hiring and managing schedules, personnel, and equipment).
        `,
        detailUrl:"thebestboy",
        githubLink:'https://github.com/johncarges/TheBestBoy',
        currentlyDeployed: false,
        deployLink: 'a',
        tags: ['Python','Flask','SQLite3','Javascript','React.js'],
        image: bestBoyGeneral,
        collaborators: null,
        sections:[
            {
                title: 'Front End',
                image: bestBoyFrontend,
                description: "The front end is built in React, with React Router 5 for routing and navigation. Various React Bootstrap components were used to provide a streamlined visual experience, including buttons, forms, and modals. For calendar pages, FullCalendar's React component was used, allowing users to view upcoming shootdays, click in for further details, or select days to update and delete."
            },
            {
                title: 'API',
                image: bestBoyApi,
                description: 'The API was written using Flask, and in particular the Resource class from the flask_restful library. Because all functionality requires a logged in user, all routes involve checks to make sure that the active user is tied to the particular data (production, crewmember contact, etc.) that is being requested. Upon login, the user id is stored in session.'
            },
            {
                title: 'Database and Models',
                image: bestBoyBackend,
                description:''
            }
        ],
        display: true,
    },
    {
        name: "Cave Crawler",
        subtitle: "Command Line choose-your-own-adventure game",
        description:"Built in Python with calls to a SQLite3 database, Cave Crawler is a command line game in which players can explore a cave network, encountering numerous creatures, traps, and hidden treasures along the way. This project was a collaboration with BreElle Wells. BreElle was responsible for user functionality and game and menu design (including the incredible ASCII art!), and I was responsible for the game models and logic, though all work was done with input and feedback from each other.",
        detailUrl:"cavecrawler",
        githubLink:'https://github.com/johncarges/Phase-3-CLI-Cave-Crawler',
        currentlyDeployed: false,
        deployLink: '',
        image: caveCrawlerMap,
        collaborators:['BreElle Wells'],
        tags: ['Python','SQLite3'],
        sections:[
            {
                title: 'Game Logic',
                image: caveCrawlerEnemy,
                description: `Built entirely in Python, the main classes include:
                <br>- User class, representing a logged in user with play history, stats, and settings,
                <br>- Player class, representing the current instance of a player within one instance of the game (a user may play multiple times, each with a new Player instance),
                <br>- World class, representing the cave the player is exploring. This is procedurally generated with randomized encounters and paths, so that each new playthrough is unique. As such, there are numerous checks when generating new rooms to make sure that players are, for example, not hitting too many dead-ends, or encountering powerful enemies too early.
                <br>- Room class: each world is built on a series of rooms which can be of various types, such as treasure rooms, creature encounters, or forks in the road. Each have their own text elements and player interaction loops`
            },
            {
                title: 'Database',
                image: caveCrawlerDB,
                description:"Players can create accounts in order to save their play history and statistics. With a wide variety of creatures and treasures to encounter, it's not possible to see everything in one playthrough of the game. As users have new encounters, their discoveries are logged to a SQLite3 database, and they can view their discoveries from the main menu, with details such as the number of times a creature has been encountered, and whether a player has succesfully dispactched the creature."
            }
        ],
        display: true
    },
    {
        name: 'Concert Finder',
        subtitle:"Web app utilizing Seatgeek's public API to search and save concert information",
        description:'',
        detailUrl:'concertfinder',
        githubLink:'',
        currentlyDeployed:false,
        deployLink: '',
        image: '',
        collaborators: ['Nial Johnson'],
        tags: ['Javascript', 'React.js'],
        sections: [],
        display: false,

    }

]