// model --------------------------------------------------
const app = document.getElementById("app");

// a demo list for first-visitors.
let taskLists = [
                    {
                        name: "demo list",
                        tasks: {
                            "get money": true,
                            "fuck bitches": false,
                        }
                    },
                ];

let curTaskList = taskLists[0];


// view ---------------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${taskbar()}
        ${list()}
    `;
}

function taskbar() {
    let html = /*HTML*/ `
        <div id="taskbar">
            <select name="lists" id="task-lists">
                <option value="test">test</option>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
            </select>
            <button onclick="makeTask()">New task</button>
            <button onclick="makeList()">New task-list</button>
            <button onclick="removeAll()">Remove all</button>
            <button onclick="exportLists()">Export</button>
        </div>
    `;

    return html;
}

function list() {
    // returns the list itself, containing the tasks and checkboxes.
    return ""; // tmp
}


// controller ---------------------------------------------
function makeList() {
    // adds a new list to the 'taskLists'.
}

function makeTask() {
    // adds a new task to the current list.
}

function removeAll() {
    // removes all items in the current list,
    // could give and option to remove all lists and their tasks.
}

function exportLists() {
    // exports all lists in a JSON (or TOML) format and is downloaded.
}