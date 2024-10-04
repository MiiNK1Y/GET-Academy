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
            <button onclick="showAddTaskView()">New task</button>
            <button onclick="showAddListView()">New task-list</button>
            <button onclick="removeAll()">Remove all</button>
            <button onclick="exportList()">Export</button>
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
    let colorSw = true; // 'color-switch'
    let bgColor, check;
    let html = "";

    for (const [key, value] of list) {
        colorSw = colorSw ? false : true; // color-switch
        bgColor = colorSw ? "task-item_bg" : "task-item_bg-1";
        check = value.complete ? "checked" : "";

        html += /*HTML*/ `
            <div class="task-item ${bgColor}">
                <input name="task-status_${value.id}" type="checkbox" ${check} onchange="checkItem(${value.id})" />
                <div class="text">${value.task}</div>
                <div class="do-date">${value.doDate}</div>
                <div class="complete-by-date">${value.completeByDate}</div>
            </div>
        `;
    }

    return html;
}


function addTaskView() {
    const todayDate = function() {
        const td = new Date();

        const fd = String(td.getDate());
        const d = (fd.length == 2) ? fd : ("0" + fd);

        const fm = String(td.getMonth() + 1);
        const m = (fm.length == 2) ? fm : ("0" + fm);

        const y = td.getFullYear();

        const today = y + "-" + m + "-" + d; // HTML5 compliance.

        return today;
    }

    const html = /*HTML*/ `
        <div class="add-task">
            <div class="wrapper">
                <div class="text">Task:&nbsp;<input id="task-text" type="text" /></div>
                <div class="dates">
                    <div class="date">Date:&nbsp;<input id="do-date" type="date" value="${todayDate()}" /></div>
                    <div class="date">Complete by:&nbsp;<input id="complete-by-date" type="date" value="${todayDate()}" /></div>
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
