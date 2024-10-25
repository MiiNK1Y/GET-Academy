function listSelector(list) {
    model.data.tasklist.current = list;
    updateView()
}


function showAddListView() {
    model.app.view.newList = true;
    updateView();
}


function cancelAddTask() {
    model.app.view.newTask = false;
    updateView();
}


function showAddTaskView() {
    // set todays date in the date-input.
    let dates = model.input.add.task;
    dates.doDate = dates.completeByDate = todayDate();

    model.app.view.newTask = true;
    updateView();
}


function todayDate() {
    const td = new Date();
    const fd = String(td.getDate());
    const d = (fd.length == 2) ? fd : ("0" + fd);
    const fm = String(td.getMonth() + 1);
    const m = (fm.length == 2) ? fm : ("0" + fm);
    const y = td.getFullYear();
    const today = y + "-" + m + "-" + d; // HTML5 compliance.

    return today;
}


function checkItem(taskId) {
    const curList = model.data.tasklist.current;
    const list = model.data.tasklist.lists[curList];
    const taskIndex = list.findIndex(x => x.id === taskId);
    const task = list[taskIndex];

    task.complete = task.complete ? false : true;
}


function addTask() {
    const genID = function() {
        const id = model.data.tasklist.awaitingId;
        model.data.tasklist.awaitingId += 1;
        return id;
    };

    // convert the default HTML5 date format for ISO compliance (dd/mm/yyyy)
    const convertDate = function(date) {
        let sDate = date.split("-");
        let nDate = "";
        for (let val of sDate) {
            nDate = val + "." + nDate;
        }
        nDate = nDate.slice(0, -1); // remove the last dot in the string.
        return nDate;
    };

    const taskData = {
        id: genID(),
        complete: false,
        task: model.input.add.task.task,
        doDate: convertDate(document.getElementById("do-date").value),
        completeByDate: convertDate(document.getElementById("complete-by-date").value),
    };

    const cur = model.data.tasklist.current;

    // able to add to beginning of list (unshift) or end of list (push()).
    model.data.tasklist.lists[cur].unshift(taskData);

    updateView();
}


function addList() {
    //
}


function removeAll() {
    //
}


function exportList() {
    //
}
