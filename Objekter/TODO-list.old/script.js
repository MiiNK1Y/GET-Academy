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
        current: taskLists[0],
        showing: false,
        adding: false,
        add: {
            name: null, // name of the new list.
        },
    },

    task: {
        adding: true,
        add: {
            task: null, // what to do.
            completeBefore: null, // time.
        },
    },
};


// view ---------------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${taskbarView()}
        ${cardView()}
    `;
}

function taskbarView() {
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

function cardView() {
    if (model.list.showing) return listView();
    else if (model.task.adding) return addTaskView();
    else if (model.list.adding) return addListView();
}

function getList() {
    let coloring = true;

    let html = ``;
    for (let [key, value] of Object.entries(model.list.current.tasks)){

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

    return html;
}

function listView() {
    let html = /*HTML*/ `<div class="list">${getList()}</div>`;
    return html;
}

function addTaskView() {
    let html = /*HTML*/ `
        <div class="list">
            <div class="list__add-task-item">
                <div class="list__add-task-item__fields">
                    <div class="list__add-task-item__fields-top">
                        <div class="text">
                            Task:&nbsp;
                            <input id="task_text" class="text_input" type="text" />
                        </div>
                    </div>
                    <div class="list__add-task-item__fields-bottom">
                        <div class="date">
                            Date:&nbsp;
                            <input id="do_date" class="date_input" type="date"/>
                        </div>
                        <div class="complete_by">
                            Complete by:&nbsp;
                            <input id="complete_date" class="date_input" type="date"/>
                        </div>
                    </div>
                </div>
                <div class="list__add-task-item__button">
                    <button onclick="makeTask()">ADD</button>
                </div>
            </div>

            ${getList()}

        </div>
    `;

    return html;
}

function addListView() {
    //
}


// controller ---------------------------------------------
function curListController() {
    // control what list are currently showing.
}

function makeTask() {
    let text = document.getElementById("task_text").value;
    let doDate = document.getElementById("do_date").value;
    let completeDate = document.getElementById("complete_date").value;

    let ifDoDate = doDate ? doDate : "N";
    let ifCompleteDate = completeDate ? completeDate : "A";

    let task = `${text} (${ifDoDate} / ${ifCompleteDate})`;

    model.list.current.tasks[task] = false;
    updateView();
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