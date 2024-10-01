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