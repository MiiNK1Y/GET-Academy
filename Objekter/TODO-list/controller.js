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


function addTask(){
    const genID = function() {
        const id = model.data.tasklist.awaitingId;
        model.data.tasklist.awaitingId += 1;
        return id;
    };

    const convertDate = function(date) {
        //
    }

    const taskData = {
        id: genID(),
        complete: false,
        task: document.getElementById("task-text").value,
        doDate: document.getElementById("do-date").value,
        completeByDate: document.getElementById("complete-by-date").value,
    };

    const cur = model.data.tasklist.current;
    model.data.tasklist.lists[cur].push(taskData);

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