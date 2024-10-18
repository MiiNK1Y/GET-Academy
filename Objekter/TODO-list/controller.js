function listSelector(list) {
    model.data.tasklist.current = list;
    updateView()
}


function checkItem(taskId) {
    const cur = model.data.tasklist.current;
    const list = Object.entries(model.data.tasklist.lists[cur]);
    
    for (const [key, value] of list) {
        if (value.id == taskId) {
            value.complete = value.complete ? false : true;
            break;
        }
    }
}


function showAddTaskView() {
    model.app.view.newTask = true;
    updateView();
}


function showAddListView() {
    model.app.view.newList = true;
    updateView();
}


function addTask(){
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
        task: document.getElementById("task-text").value,
        doDate: convertDate(document.getElementById("do-date").value),
        completeByDate: convertDate(document.getElementById("complete-by-date").value),
    };

    const cur = model.data.tasklist.current;

    // able to add to beginning of list (unshift) or end of list (push()).
    model.data.tasklist.lists[cur].unshift(taskData);

    updateView();
}


function cancelAddTask() {
    model.app.view.newTask = false;
    console.log(model.app.view.newTask);
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
