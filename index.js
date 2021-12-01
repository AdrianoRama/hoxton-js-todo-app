const showcompletedCheckbox = document.querySelector(`.show-completed-checkbox`)

const addTodoForm = document.querySelector(`.add-item`)

const todoList = document.querySelector(`.todo-list`)

const completedList = document.querySelector(`.completed-list`)


const state = {
    todos: [ {
        title: "Get a Tesla",
        completed: false
    },
    {
        title: "Eat  better",
        completed: true
    },
    {
        title: "Become a good software engineer",
        completed: false
    }
],
showCompleted: true
}


function getCompletedTodos() {
return state.todos.filter(function (todo) {
return todo.completed
})}
   function getIncompleteTodos() {
return state.todos.filter(function (todo) {
    return !todo.completed
    })}

    function switchTodo(todo) {
    todo.completed = !todo.completed
    }
    
    function addTodo(todo) {
        state.todos.push(todo)
    }

    function removeTodo(text) {
      state.todos =  state.todos.filter(function (todo) {
         return todo.title !== text
        })
    }

    function renderCompletedTodos() {
        const completedTodos = getCompletedTodos()
        completedList.innerHTML = ''

        for (const todo of completedTodos){
            const liEl = document.createElement(`li`)
            liEl.setAttribute = (`class`, `todo`)
        

        const completedSection = document.createElement(`div`)
        completedSection.setAttribute = (`class`, `completed-section`)
        const completedCheckboxInput = document.createElement(`input`)
        completedCheckboxInput.setAttribute = (`class`, `completed-checkbox`)

        completedSection.append(completedCheckboxInput)

        const textSection = document.createElement(`div`)
        textSection.setAttribute = (`class`, `text-section`)
        const textEl = document.createElement(`p`)
        textEl.setAttribute = (`class`, `text`)
        textEl.textContent = todo.title
        textSection.append(textEl)

        const buttonSection = document.createElement(`div`)
        buttonSection.setAttribute = (`class`, `button-section`)
        const editEl = document.createElement(`button`)
        editEl.setAttribute = (`class`, `edit`)
        editEl.textContent = `Edit`
        const deleteEl = document.createElement(`button`)
        deleteEl.setAttribute = (`class`, `delete`)
        deleteEl.textContent = `Delete`
        buttonSection.append(editEl, deleteEl)

        liEl.append(completedSection, textSection, buttonSection)
        completedList.append(liEl)

        completedCheckboxInput.checked = todo.completed
        completedCheckboxInput.addEventListener('click', function(){
            switchTodo(todo)
            render()
        })
        deleteEl.addEventListener('click', function(){
            removeTodo(todo.title)
            render()
        })
    }
    }
    
function renderIncompleteTodos(){
    const incompleteTodos = getIncompleteTodos()
    todoList.innerHTML = ''

    for (const todo of incompleteTodos){
        const liEl = document.createElement(`li`)
        liEl.setAttribute = (`class`, `todo`)
    

    const completedSection = document.createElement(`div`)
    completedSection.setAttribute = (`class`, `completed-section`)
    const completedCheckboxInput = document.createElement(`input`)
    completedCheckboxInput.setAttribute = (`class`, `completed-checkbox`)

    completedSection.append(completedCheckboxInput)

    const textSection = document.createElement(`div`)
    textSection.setAttribute = (`class`, `text-section`)
    const textEl = document.createElement(`p`)
    textEl.setAttribute = (`class`, `text`)
    textEl.textContent = todo.title
    textSection.append(textEl)

    const buttonSection = document.createElement(`div`)
    buttonSection.setAttribute = (`class`, `button-section`)
    const editEl = document.createElement(`button`)
    editEl.setAttribute = (`class`, `edit`)
    editEl.textContent = `Edit`
    const deleteEl = document.createElement(`button`)
    deleteEl.setAttribute = (`class`, `delete`)
    deleteEl.textContent = `Delete`
    buttonSection.append(editEl, deleteEl)

    liEl.append(completedSection, textSection, buttonSection)
    completedList.append(liEl)

    completedCheckboxInput.checked = todo.completed
    completedCheckboxInput.addEventListener('click', function(){
        switchTodo(todo)
        render()
    })
    deleteEl.addEventListener('click', function(){
        removeTodo(todo.title)
        render()
    })
}
}


function render() {
    console.log(state)
    renderCompletedTodos()
    renderIncompleteTodos()
}
render()
