const textInp = document.querySelector('#textInput'),
      taskContainer = document.querySelector('#task-container');

callData()

function addTask() {
    if(textInp.value.trim() === "") alert('You must write something!')
    else {
        let li = document.createElement('li');
        li.innerHTML = textInp.value;
        taskContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = `\u00d7`;
        li.appendChild(span);
        saveTask()
    }
    textInp.value = ''
}

taskContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        saveTask()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask()
    }
}, false)

function saveTask() {
    localStorage.setItem('inputs', taskContainer.innerHTML);
}

function callData() {
    taskContainer.innerHTML = localStorage.getItem('inputs')
}