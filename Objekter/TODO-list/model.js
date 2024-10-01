let model = {
    app: {
        html: document.getElementById("app"),
        views: ["list", "new task", "new list", "edit task", "edit list"],
        view: {
            list: true,
            newTask: false,
            newList: false,
            editTask: false,
            editList: false,
        },
    },

    input: {
        add: {
            task: {
                task: null,
                doDate: null,
                completeByDate: null,
            },

            tasklist: {
                name: null,
            },
        },
    },

    data: {
        tasklist: {
            current: "demo list",
            adding: false,
            lists: {
                "demo list": [
                    {
                        id: 1,
                        complete: true,
                        task: "some task goes here",
                        doDate: "01.10.2024",
                        completeByDate: "08.10.2024",
                    },
                    {
                        id: 2,
                        complete: false,
                        task: "some other task goes here",
                        doDate: "02.10.2024",
                        completeByDate: "19.11.2024",
                    },
                ],

                "other demo list": [
                    {
                        id: 3,
                        complete: false,
                        task: "2 some task goes here",
                        doDate: "01.11.2024",
                        completeByDate: "08.10.2024",
                    },
                    {
                        id: 4,
                        complete: false,
                        task: "2 some other task goes here",
                        doDate: "02.11.2024",
                        completeByDate: "19.11.2024",
                    },
                    {
                        id: 5,
                        complete: true,
                        task: "2 some task goes here",
                        doDate: "01.11.2024",
                        completeByDate: "08.10.2024",
                    },
                    {
                        id: 6,
                        complete: false,
                        task: "2 some other task goes here",
                        doDate: "02.11.2024",
                        completeByDate: "19.11.2024",
                    },
                ],
                "third demo list": [
                    {
                        id: 7,
                        complete: false,
                        task: "3 some task goes here",
                        doDate: "01.11.2025",
                        completeByDate: "08.10.2025",
                    },
                    {
                        id: 8,
                        complete: true,
                        task: "3 some other task goes here",
                        doDate: "02.11.2025",
                        completeByDate: "19.11.2025",
                    },
                    {
                        id: 9,
                        complete: true,
                        task: "3 some third task goes here",
                        doDate: "02.11.2025",
                        completeByDate: "19.11.2025",
                    },
                ],
            },
        },
    },
}
