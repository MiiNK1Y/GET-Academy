updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        ${taskbarView()}
        ${cardView()}
    `;
}


function taskbarView() {
    const lists = function() {
        const lists = Object.entries(model.data.tasklist.lists);
        const selectedList = model.data.tasklist.current;

        let li = "";

        for (const [key] of lists){
            const s = (key == selectedList) ? "selected" : "";
            li += /*HTML*/ `<option value="${key}" ${s}>${key}</option>`;
        }

        return li;
    }

    const html = /*HTML*/ `
        <div id="taskbar">
            <select name="lists" id="task-lists" onchange="listSelector(this.value)">
                ${lists()}
            </select>
            <button onclick="makeTask()">New task</button>
            <button onclick="makeList()">New task-list</button>
            <button onclick="removeAll()">Remove all</button>
            <button onclick="exportLists()">Export</button>
        </div>
    `;

    return html;
}


function cardView() {
    let html = /*HTML*/ `<div class="card">`;
    if (model.app.view.list && model.app.view.newTask) html += `${addTaskView()} ${listView()}</div>`;
    else if (model.app.view.list) html += `${listView()}</div>`;

    return html;

    // add more views here when they are completed.
}


function listView() {
    const cur = model.data.tasklist.current;
    const list = Object.entries(model.data.tasklist.lists[cur]);
    let coloring = true;
    let html = "";

    for (const [key, value] of list) {
        coloring = coloring ? false : true;
        let backgroundColor = coloring ? "task-item_bg" : "task-item_bg-1";
        const c = value.complete ? "checked" : "";

        html += /*HTML*/ `
            <div class="task-item ${backgroundColor}">
                <input type="checkbox" ${c} onchange="checkItem(${value.id})" />
                <div class="text">${value.task}</div>
                <div class="do-date">${value.doDate}</div>
                <div class="complete-by-date">${value.completeByDate}</div>
            </div>
        `;
    }

    return html;
}


function addTaskView() {
    const html = /*HTML*/ `
        <div class="add-task">
            <div class="wrapper">
                <div class="text">Task:&nbsp;<input id="task-text" type="text" /></div>
                <div>
                    <div class="date">Date:&nbsp;<input id="do-date" type="date" /></div>
                    <div class="date">Complete by:&nbsp;<input id="complete-by-date" type="date" /></div>
                </div>
            </div>
            <button onclick="addTask()">ADD</button>
        </div>
    `;

    return html;
}


function addListView() {
    //
}
