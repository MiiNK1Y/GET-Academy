const model = {
    app: {
        html: document.getElementById("app"),

        demoMode: false,

        currentUser: null, // user ID of user.

        currentPage: "home",

        page: [
            "home",
            "search",
            "catalogue",
            "rate",
            "catProfile",
            "profilePage",
            "login",
            "newUserPage",
            "editUser",
            "addCat",
            "editCat",
            "catCard",
        ],

        selectedProfile: null,
        selectedCat: null,
        isRating: false,
        givenRating: null,
        isSearching: false,

        catalogueSorting: [
            "default",
            "alphabetical",
            "alphabeticalReverse",
            "age",
            "popularity",
            "gender",
        ],
        currentCatalogueSorting: "default",

        currentError: "",

        error: {
            wrongPassword: "Feil brukernavn eller passord",
            passwordNotMatching: "Passord matcher ikke",
            emptyField: "Husk å fylle inn alle felter",
        },

        cataloguePage: {
            sort: {
                by: "",
                sortBy: ["name", "age", "rating"],
            },
        },
    },

    input: {
        search: "",

        constantInput: {
            searchBar: null, // string
        },

        signIn: {
            username: null, // string
            password: null, // string
        },

        signUp: {
            username: null, // string
            password: null, // string
            repeatPassword: null, // string
            email: null, // string
            profilePhoto: null, // path-string
        },

        newCat: {
            name: null, // string
            photo: null, // path-string 
            birthday: null, // number
            gender: null, // string
            race: null, // string
            color: null, // string
            furLength: null, // list of path-strings
            about: null, // string
            photos: [String], // list of path-strings
        },
    },

    data: {
        searchResult: "",

        maxRating: 10, // the max rating allowed for a cat, may be edited later.
        furLength: ["langhåret", "korthåret", "hårløs"], // list of path-strings, only two values are to be used.

        catalogueSort: ["Sist lagt til", "Mest populær", "Tilfeldige", "Alder", "Kjønn", "Farge", "Navn A-Å", "Rase"],

        cat: [
            {
                id: 0,
                name: "Thiccest Boy", // string
                photo: "img/UserID_0/CatID_0/",
                birthday: 20220811, // number
                gender: "Han", // string
                race: "Vet ikke", // string
                color: "Sort", // string
                furLength: "korthåret", // string
                about: "Koset. Grisete. Matvrak. Vet ikke helt hvor han kom fra.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 9,
                    },
                    {
                        userID: 4,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 1,
                name: "Sir Meowsallot The First", // string
                photo: "img/UserID_1/CatID_4/",
                birthday: 20010710, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "hvit", // string
                furLength: "langhåret", // string
                about: "Siste overlevende fra den store atom krisen", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 10,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 2,
                name: "Kairo", // string
                photo: "img/UserID_2/CatID_2/",
                birthday: 20230324, // number
                gender: "Hann", // string
                race: "Bengal", // string
                color: "Brun og sort", // string
                furLength: "korthåret", // string
                about: "Favoritt hobby: Rive ned stua.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 10,
                    },
                    {
                        userID: 7,
                        ratingGiven: 10,
                    },
                    {
                        userID: 6,
                        ratingGiven: 10,
                    },
                    {
                        userID: 9,
                        ratingGiven: 10,
                    },
                    {
                        userID: 2,
                        ratingGiven: 10,
                    },
                ],
            },
            {
                id: 3,
                name: "Larry the Cat&Puss", // string
                photo: "img/UserID_3/CatID_5/",
                birthday: 20150918, // number
                gender: "Han", // string
                race: "Norsk Skogskatt", // string
                color: "hvit", // string
                furLength: "langhåret", // string
                about: "Liker å putte på en hatt og forsvinne tilfeldig, sover mye ellers", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 2,
                    },
                    {
                        userID: 5,
                        ratingGiven: 10,
                    },
                    {
                        userID: 2,
                        ratingGiven: 2,
                    },
                ],
            },
            {
                id: 4,
                name: "Mikel", // string
                photo: "img/UserID_4/CatID_3/",
                birthday: 20230215, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Oransje og Hvit", // string
                furLength: "langhåret", // string
                about: "Koselig pus som elsker ostepop og vafler", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 10,
                    },
                    {
                        userID: 2,
                        ratingGiven: 10,
                    },
                    {
                        userID: 10,
                        ratingGiven: 10,
                    },
                    {
                        userID: 9,
                        ratingGiven: 9,
                    },
                    {
                        userID: 8,
                        ratingGiven: 9,
                    },
                ],
            },
            {
                id: 5,
                name: "McFeast", // string
                photo: "img/UserID_5/CatID_1/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "hvit og sort", // string
                furLength: "langhåret", // string
                about: "Han elsker det.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 9,
                    },
                    {
                        userID: 2,
                        ratingGiven: 7,
                    },
                    {
                        userID: 3,
                        ratingGiven: 7,
                    },
                    {
                        userID: 4,
                        ratingGiven: 7,
                    },
                    {
                        userID: 5,
                        ratingGiven: 6,
                    },
                    {
                        userID: 6,
                        ratingGiven: 6,
                    },
                ],
            },
            {
                id: 6,
                name: "Bilbo Baggins", // string
                photo: "img/UserID_8/CatID_6/",
                birthday: 20200117, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "hvit og orange", // string
                furLength: "langhåret", // string
                about: "Må ha fem måltider om dagen.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 6,
                        ratingGiven: 2,
                    },
                    {
                        userID: 2,
                        ratingGiven: 7,
                    },
                    {
                        userID: 7,
                        ratingGiven: 5,
                    },
                ],
            },
            {
                id: 7,
                name: "Mr Fluffy Paws", // string
                photo: "img/UserID_10/CatID_7/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Brun og hvit", // string
                furLength: "korthåret", // string
                about: "Har myke og fantastiske poter.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 8,
                        ratingGiven: 8,
                    },
                    {
                        userID: 9,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 8,
                name: "Snarly Mc.Clawkins", // string
                photo: "img/UserID_7/CatID_8/",
                birthday: 20210811, // number
                gender: "Hun", // string
                race: "Orange", // string
                color: "Orange", // string
                furLength: "korthåret", // string
                about: "Jeg får hun ikke ut av huset mitt.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 10,
                        ratingGiven: 1,
                    },
                    {
                        userID: 4,
                        ratingGiven: 10,
                    },
                ],
            },
            {
                id: 9,
                name: "Bubbsy", // string
                photo: "img/UserID_6/CatID_9/",
                birthday: 20170518, // number
                gender: "Han", // string
                race: "British Shorthair", // string
                color: "Grå", // string
                furLength: "korthåret", // string
                about: "Vet ikke hva personal space er", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 5,
                        ratingGiven: 8,
                    },
                    {
                        userID: 10,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 7,
                    },
                ],
            },
            {
                id: 10,
                name: "Francis", // string
                photo: "img/UserID_9/CatID_10/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Dwarf", // string
                color: "Brun", // string
                furLength: "langhåret", // string
                about: "The most handsome little guy in the whole world", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 1,
                    },
                    {
                        userID: 5,
                        ratingGiven: 1,
                    },
                ],
            },
            {
                id: 11,
                name: "Oscar", // string
                photo: "img/UserID_2/CatID_11/",
                birthday: 20240320, // number
                gender: "Han", // string
                race: "Ragdoll, hellig birma", // string
                color: "Hvit og Sort", // string
                furLength: "langhåret", // string
                about: "Matvrak. Halvt banshee.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 8,
                        ratingGiven: 10,
                    },
                    {
                        userID: 3,
                        ratingGiven: 10,
                    },
                    {
                        userID: 4,
                        ratingGiven: 10,
                    },
                    {
                        userID: 5,
                        ratingGiven: 10,
                    },
                    {
                        userID: 2,
                        ratingGiven: 10,
                    },
                ],
            },
            {
                id: 12,
                name: "Salem", // string
                photo: "img/UserID_9/CatID_12/",
                birthday: 20240316, // number
                gender: "Han", // string
                race: "Bombay", // string
                color: "Sort", // string
                furLength: "korthåret", // string
                about: "Currently serving 100 years as a cat as punishment for attempting to take over the world.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 4,
                    },
                    {
                        userID: 3,
                        ratingGiven: 3,
                    },
                    {
                        userID: 5,
                        ratingGiven: 4,
                    },
                ],
            },
            {
                id: 13,
                name: "Poptart", // string
                photo: "img/UserID_7/CatID_13/",
                birthday: 20200212, // number
                gender: "Hun", // string
                race: "Sphynx", // string
                color: "hvit", // string
                furLength: "korthåret", // string
                about: "Sweet and thick.", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 7,
                        ratingGiven: 8,
                    },
                    {
                        userID: 5,
                        ratingGiven: 7,
                    },
                    {
                        userID: 3,
                        ratingGiven: 8,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                    {
                        userID: 6,
                        ratingGiven: 8,
                    },
                    {
                        userID: 9,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 14,
                name: "Potet", // string
                photo: "img/UserID_8/CatID_14/",
                birthday: 20240802, // number
                gender: "Hun", // string
                race: "Blandet", // string
                color: "Brun og hvit", // string
                furLength: "langhåret", // string
                about: "Sleepy", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 4,
                    },
                    {
                        userID: 2,
                        ratingGiven: 6,
                    },
                    {
                        userID: 8,
                        ratingGiven: 3,
                    },
                    {
                        userID: 5,
                        ratingGiven: 6,
                    },
                ],
            },
            {
                id: 15,
                name: "Corn", // string
                photo: "img/UserID_10/CatID_15/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "British Shorthair", // string
                color: "Brun og hvit", // string
                furLength: "korthåret", // string
                about: "Jeg vet ikke hvor brillene kommer fra", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 3,
                        ratingGiven: 3,
                    },
                    {
                        userID: 7,
                        ratingGiven: 3,
                    },
                ],
            },
            {
                id: 16,
                name: "Turbo", // string
                photo: "img/UserID_11/CatID_16",
                birthday: 20201010, // number
                gender: "Han", // string
                race: "Streetmix", // string
                color: "Grå", // string
                furLength: "korthåret", // string
                about: "Turbo er en livlig liten tass som elsker å leke, kose og slappe av på snåle plasser. Han har mye personlighet og ganske verbal av seg når han vil noe. Han liker godt både å være inne og ute", // string
                rating: null, // float
                givenRatings: [
                    {
                        userID: 2,
                        ratingGiven: 10,
                    },
                    {
                        userID: 7,
                        ratingGiven: 10,
                    },
                    {
                        userID: 5,
                        ratingGiven: 10,
                    },
                    {
                        userID: 0,
                        ratingGiven: 10,
                    },
                ],
            },
        ],

        user: [
            {
                id: 0,
                username: "demo", // string
                password: "123",
                photo: "img/UserID_0/profile.jpg", // path-string
                about: "love my thicc boi.", // string
                cats: [0], // list of ID numbers
            },
            {
                id: 1,
                username: "BeatriceTheQueen3", // string
                password: "thisisaPassword4",
                photo: "img/UserID_1/profile.jpg", // path-string
                about: "Katte ekspert og frilufts pro.", // string
                cats: [4], // list of ID numbers
            },
            {
                id: 2,
                username: "bbthina", // string
                password: "Testing123",
                photo: "img/UserID_2/profile.jpg", // path-string
                about: "Slowly making my way to becoming a crazy catlady", // string
                cats: [2, 11], // list of ID numbers
            },
            {
                id: 3,
                username: "McLover", // string
                password: "McLover123",
                photo: "img/UserID_3/profile.jpg", // path-string
                about: "Jeg elsker katter mest av alt, eller, nesten like mye som jeg elsker en god burger", // string
                cats: [5], // list of ID numbers
            },
            {
                id: 4,
                username: "Average_CAT_Enjoyer_69", // string
                password: "lovemesomePUSSY420",
                photo: "img/UserID_4/profile.jpg", // path-string
                about: " I love a good CAT.", // string
                cats: [3], // list of ID numbers
            },
            {
                id: 5,
                username: "Nyamaster_Master", // string
                password: "Ilovecats45",
                photo: "img/UserID_5/profile.jpg", // path-string
                about: "Liker katter, spesielt den som ikke er min.", // string
                cats: [1], // list of ID numbers
            },
            {
                id: 6,
                username: "Feline_Fellow06", // string
                password: "fellowMellow12",
                photo: "img/UserID_6/profile.jpg", // path-string
                about: "?", // string
                cats: [9], // list of ID numbers
            },
            {
                id: 7,
                username: "TheOneWhoMeows1999", // string
                password: "meowPassword99",
                photo: "img/UserID_7/profile.jpg", // path-string
                about: "meow meow", // string
                cats: [8, 13], // list of ID numbers
            },
            {
                id: 8,
                username: "Purrfect_Owner", // string
                password: "thePurrfectPassword1",
                photo: "img/UserID_8/profile.jpg", // path-string
                about: "Kvinne. 54. Akershus. Bilbo <3 ", // string
                cats: [6, 14], // list of ID numbers
            },
            {
                id: 9,
                username: "FurryFuzzman", // string
                password: "FurrypassworD84",
                photo: "img/UserID_9/profile.jpg", // path-string
                about: "Jeg liker å kle meg som en katt og hilse på andre som har kledd seg som katter", // string
                cats: [10, 12], // list of ID numbers
            },
            {
                id: 10,
                username: "NotAClosetFurry_2", // string
                password: "secretlyaFurry123",
                photo: "img/UserID_10/profile.jpg", // path-string
                about: "Jeg kler meg ikke ut som en katt.", // string
                cats: [7, 15], // list of ID numbers
            },
            {
                id: 11,
                username: "EllieMarie", // string
                password: "Passord1234",
                photo: "img/UserID_11/profile.jpg", // path-string
                about: "Little Pink Kitty :3 MeowMeow", // string
                cats: [16], // list of ID numbers
            },
        ],
    },
};
