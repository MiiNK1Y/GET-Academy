updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        ${taskbarView()}
        <div class="card">
            ${cardView()}
        </div>
    `;
}


function taskbarView() {
    const lists = function() {
        const lists = Object.entries(model.data.tasklist.lists);
        const selectedList = model.data.tasklist.current;

        let li = "";

        for (const [key] of lists) {
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
    let html = "";

    // is this "legal" JS logic??
    const items = model.app.view;
    const itemMetaLinks = {
        list: [items.list, listView()],
        newTask: [items.newTask, addTaskView()],
        newList: [items.newList, addListView()],
    };

    for (const value of Object.values(itemMetaLinks)) {
        if (value[0]) html = (value[1]) + html;
    }

    return html;
}


// TODO add some small headers for the dates, so their purpose is known at a glance.
function listView() {
    const cur = model.data.tasklist.current;
    const list = Object.values(model.data.tasklist.lists[cur]);

    let colorSw = true; // 'color-switch'
    let bgColor, check;
    let html = "";

    for (const value of list) {
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
    const task = model.input.add.task;
    const html = /*HTML*/ `
        <div class="add-task">
            <div class="wrapper">
                <div class="text">Task:&nbsp;
                    <input
                        id="task-text"
                        type="text"
                        oninput="task.task=this.value"
                        value="${task.task}"
                    />
                </div>
                <div class="dates">
                    <div class="date">Date:&nbsp;
                        <input
                            id="do-date"
                            type="date"
                            oninput="task.doDate=this.value"
                            value="${task.doDate}"
                        />
                    </div>
                    <div class="date">Complete by:&nbsp;
                        <input
                            id="complete-by-date"
                            type="date"
                            oninput="task.completeByDate=this.value"
                            value="${task.completeByDate}"
                        />
                    </div>
                </div>
            </div>
            <div class="add-task-button_container">
                <button onclick="addTask()">ADD</button>
                <button onclick="cancelAddTask()">&#10005;</button>
            </div>
        </div>
    `;

    return html;
}


function addListView() {
    const html = /*HTML*/`
        <div class="add-list">
            <span>Name your list:&nbsp;</span>
            <input type="text" />
        </div>
    `;

    return html;
}
