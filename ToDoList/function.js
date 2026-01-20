function addTask() {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML =
            '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
            '<input type="button" class="important" onclick="important(this.parentNode)" value="&#33;" />' + 
              '  ' +newTask;
        document.getElementById("tasks").appendChild(item);

        input.value = "";
        input.placeholder = "Enter next task...";
    }
}

function markDone(item) {
    item.className = "finished";
}

function remove(item) {
    item.remove();
}

let t=true;
function important(item){
    (t)? item.className = "imp" : item.className = "li";
    t= !t;
}

function doAbout() {
    divabout.innerText = "This ToDo list is created by Kishore";
    AdBUT.value="Clear About";
}

function clearAbout() {
    divabout.innerText = "";
    AdBUT.value="About";
}

let f=true;
function AbBut(){
    (f)? doAbout():clearAbout();
    f= !f;
}
