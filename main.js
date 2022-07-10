window.addEventListener('load', () => {
    /**
     * resource message
     * @author vmquang1 10.7.2022
     */
    const message = {
        errorEmptyNewtask: "New task cant be Empty",
        edit: "Edit",
        edit: "Delete"
    }

    /**
     * init Title
     */
    initTitle();

    const formNewTask = document.querySelector('#new-task-form');
    const inputNewTask = document.querySelector('#new-task-input');
    const formListTask = document.querySelector('#tasks');

    /**
     * Event add new task  to List
     */
    formNewTask.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTaskValue = inputNewTask.value;

        if (!newTaskValue || newTaskValue.replace(/ /g, "").length === 0) {
            return alert(message.errorEmptyNewtask);
        }

        //init a task
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');


        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.type = 'text';
        task_input_el.classList.add('text');
        task_input_el.value = newTaskValue;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');


        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';


        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);
        formListTask.appendChild(task_el);
        inputNewTask.value = '';

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLocaleLowerCase() == 'edit') {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = 'Save';
            }
            else {
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            }
        })

        task_delete_el.addEventListener('click', () => {
            formListTask.removeChild(task_el);
        })
    })

})

/**
 * get Current year
 * @author vmquanglc 10.7.2022
 */
initTitle = () => {
    const title = document.querySelector('.title-app');
    title.innerText = `Task List in ${new Date().getFullYear()}`;
}