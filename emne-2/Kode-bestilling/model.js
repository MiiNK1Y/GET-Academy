let model = {
    app: {
        startPageNotLoggedIn: {
            topRatedYear: [1, 2, 3], //film ID
            topRatedWeek: [6, 7, 8], //film ID
        },

        startPageLoggedIn: {
            topRatedYear: [1, 2, 3], //film ID
            forYou: [null], //film ID
        },
        
        page: [
            'startPage', //logged in or not (home)
            'loginPage',
            'signUpPage',
            'filmPage', //shows the movie you clicked on
            'profilePage',
            'searchPage',
            'cataloguePage',
            'addMoviePage',
        ],
    },

    input: {
        main: {
            searchBar: null,
        },

        login: {
            username: null,
            password: null,
        },

        signUp: {
            username: null,
            email: null,
            password: null,
            repeatPassword: null,
        },

        addMovie: {
            id: null,
            rating: null,
            title: null,
            coverPhoto: null,
            genre: null,
            releaseDate: null, 
            director: [null],
            actors: [null],
            duration: null, // minutes
            description: null,
            synopsis: null,
            comments: [null],
        },

        addUser: {
            userName: null,
            userPhoto: null,
            about: null,
            favoriteGenres: [null],
            favoriteMovies: [null],
        },
    },

    data: {
        films: [
            {
                id: 1,
                rating: 999,
                title: "Film 1",
                coverPhoto: "img/example_1.png",
                genre: "Example",
                releaseDate: 2000, 
                director: [
                    "Name One",
                    "Name Two"
                ],
                actors: [
                    "Name One",
                    "Name two"
                ],
                duration: 120, // minutes
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                comments: [
                    {
                        userID: 10,
                        rating: 890,
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    },

                    {
                        userID: 50,
                        rating: 673,
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    }
                ],
            },

            {
                id: 2,
                rating: 891,
                title: "Film 2",
                coverPhoto: "img/example_2.png",
                genre: "Example 2",
                releaseDate: 1990, 
                director: [
                    "Name One",
                    "Name Two"
                ],
                actors: [
                    "Name One",
                    "Name two"
                ],
                duration: 116, // minutes
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                comments: [
                    {
                        userID: 30,
                        rating: 989,
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    },

                    {
                        userID: 55,
                        rating: 373,
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    },
                ],
            },
        ],

        users: [
            {
                userID: 30,
                userName: "example",
                userPhoto: "img/profilePhoto/ID30.png",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                favoriteGenres: [
                    "action",
                    "anime"
                ],
                favoriteMovies: [1, 2, 3],
                moviesSeen: [9, 18, 983, 12, 2, 1, 764, 214,], // systemet kan så legge til eye (seen) symbol
                contributions: {
                    ratings: [
                        {
                            id: 1, //filmID
                            rating: 890,
                        },
                        
                        {
                            id: 3, //filmID
                            rating: 803,
                        },
                    ],

                    comments: [
                        {
                            id: 1, //filmID
                            comment: "Lorem ipsum...",
                        },
                        {
                            id: 3, //filmID
                            comment: "Lorem ipsum...",
                        },
                    ],
                },
            },

            {
                userID: 50,
                userName: "example",
                userPhoto: "img/profilePhoto/ID50.png",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                favoriteGenres: [
                    "horror",
                    "anime",
                ],
                favoriteMovies: [5, 6, 7, 8],
                moviesSeen: [1, 118, 98, 2, 232, 41, 76, 4,], // systemet kan så legge til eye (seen) symbol
                contributions: {
                    ratings: [
                        {
                            id: 112, //filmID
                            rating: 320,
                        },
                        
                        {
                            id: 45, //filmID
                            rating: 803,
                        }
                    ],

                    comments: [
                        {
                            id: 112, //filmID
                            comment: "Lorem ipsum...",
                        },

                        {
                            id: 45, //filmID
                            comment: "Lorem ipsum...",
                        },
                    ],
                }
            }
        ]
    },
}

/*
## Split the model
---
*APP*
What handels the site:
    - language
    - darkmode
    - different view / pages
    - main ID element

*INPUT*
What stores the user-inputs:
    - shopping cart
    - account info etc

*DATA*
"database", storage for varibale data on the site:
    - inventory
    - user-profiles
6

*/