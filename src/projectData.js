export const projectData = [
    {
        name: 'VaKitchen',
        subtitle:"",
        description:"",
        detailUrl:"vakitchen",
        githubLink:'https://github.com/johncarges/VaKitchen',
        image:'',
        sections:[
            {
                title: 'Front End',
                image: '',
                description: 'This app is built in React. Navigation is built with React Router, paying particular attention to many of the tools and paradigms new to React Router 6, such as loaders, actions, and RouterProviders.'
            },
            {
                title: 'API',
                image: '',
                description: 'Having worked with Flask and SQLAlchemy (an ORM) during my Flatiron bootcamp, with my first project post-graduation, I wanted to try to learn as many new technologies. Thus, the API for this project was built using FastAPI'
            },
            {
                title: 'Database',
                image: '',
                description:''
            }
        ]
    },
    {
        name: "The Best Boy",
        subtitle: "Full stack web app for scheduling and hiring on film productions",
        description:`
        Designed for film and television professionals working on set, The Best Boy App is a web app that allows users to store contact information, schedule production days, create open roles, assign contacts to those roles. Users can view projects and save project-wide information like notes, core crew, or contract terms, and they can also click into individual days to store information on a per-day basis.
        `,
        detailUrl:"thebestboy",
        githubLink:'https://github.com/johncarges/TheBestBoy',
        image: "",
        sections:[
            {
                title: 'Front End',
                image: '',
                description: ''
            },
            {
                title: 'API',
                image: '',
                description: ''
            },
            {
                title: 'Database',
                image: '',
                description:''
            }
        ]
    },
    {
        name: "Cave Crawler",
        subtitle: "Command Line choose-your-own-adventure game",
        description:"Built in Python with calls to a SQLite3 database, Cave Crawler is a command line game in which players can explore a cave network, encountering numerous creatures, traps, and hidden treasures along the way. This project was a collaboration with BreElle Wells. BreElle was responsible for user functionality and game and menu design (including the incredible ASCII art!), and I was responsible for the game models and logic, though all work was done with input and feedback from each other.",
        detailUrl:"cavecrawler",
        githubLink:'https://github.com/johncarges/Phase-3-CLI-Cave-Crawler',
        image: "",
        sections:[
            {
                title: 'Game Logic',
                image: '',
                description: `Built entirely in Python, the main classes include:
                <br>- User class, representing a logged in user with play history, stats, and settings,
                <br>- Player class, representing the current instance of a player within one instance of the game (a user may play multiple times, each with a new Player instance),
                <br>- World class, representing the cave the player is exploring. This is procedurally generated with randomized encounters and paths, so that each new playthrough is unique. As such, there are numerous checks when generating new rooms to make sure that players are, for example, not hitting too many dead-ends, or encountering powerful enemies too early.
                <br>- Room class: each world is built on a series of rooms which can be of various types, such as treasure rooms, creature encounters, or forks in the road. Each have their own text elements and player interaction loops`
            },
            {
                title: 'Database',
                image: '',
                description:"Players can create accounts in order to save their play history and statistics. With a wide variety of creatures and treasures to encounter, it's not possible to see everything in one playthrough of the game. As users have new encounters, their discoveries are logged to a SQLite3 database, and they can view their discoveries from the main menu, with details such as the number of times a creature has been encountered, and whether a player has succesfully dispactched the creature."
            }
        ]
    },


]