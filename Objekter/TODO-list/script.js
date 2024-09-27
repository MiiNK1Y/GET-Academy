// model --------------------------------------------------
const app = document.getElementById("app");

// demo lists
let taskLists = [
    {
        name: "Demo list",
        tasks: {
            "Get money.": true,
            "Fuck bitches.": false,
            "Crank hog.": true,
        }
    },
    {
        name: "Demo list 2",
        tasks: {
            "Crank that soljia boi.": true,
            "Watch me whip, whip.": false,
        }
    },
];

let model = {
    list: {
        current: lists[0],
        showing: true,
        adding: false,
    },
    task: {
        adding: false,
    },
};


// view ---------------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${taskbar()}
        ${card()}
    `;
}

function taskbar() {
    let lists = function() {
        let li = "";
        for (let [key, value] of Object.entries(taskLists)){
            li += /*HTML*/ `<option value="${value.name}">${value.name}</option>`;
        }

        return li;
    }

    let html = /*HTML*/ `
        <div id="taskbar">
            <select name="lists" id="task-lists">${lists()}</select>
            <button onclick="makeTask()">New task</button>
            <button onclick="makeList()">New task-list</button>
            <button onclick="removeAll()">Remove all</button>
            <button onclick="exportLists()">Export</button>
        </div>
    `;

    return html;
}

function card() {
    if (showingList) return listView();
    else if (addingTask) return addTaskView();
    else if (addingList) return addListView();
}

function listView() {
    let coloring = true;

    let html = /*HTML*/ `<div class="list">`;
    for (let [key, value] of Object.entries(curTaskList.tasks)){

        coloring = coloring ? false : true;
        let backgroundColor = coloring ? "list__task-item-bg-1" : "list__task-item-bg-2";

        let checkbox;
        if (value) checkbox = "checked"
        else checkbox = null;

        html += /*HTML*/ `
            <div class="list__task-item ${backgroundColor}">
                <input class="list__task-status" type="checkbox" ${checkbox} />
                <div class="list__task-name">${key}</div>
            </div>
        `;
    }
    html += /*HTML*/ `</div>`;

    return html;
}

function addTaskView() {
    //
}

function addListView() {
    //
}


// controller ---------------------------------------------
function curListController() {
    // control what list are currently showing.
}

function makeTask() {
    // adds a new task to the current list.
}

function makeList() {
    // adds a new list to the 'taskLists'.
}

function removeAll() {
    // removes all items in the current list,
    // could give and option to remove all lists and their tasks.
}

function exportLists() {
    // exports all lists in a JSON (or TOML) format and is downloaded.
}