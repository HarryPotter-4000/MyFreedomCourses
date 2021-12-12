const body = document.querySelector('body');
const input = document.getElementById('tasks');
const buttonSend = document.querySelector('button.send');

buttonSend.addEventListener('click', (event) => {
    const div = document.createElement('div');
    body.appendChild(div);
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    div.style.alignItems = 'center';

    const checkbox = document.createElement('input');
    div.appendChild(checkbox);
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', (event) => {
        if (checkbox.checked) {
            textTask.style.textDecoration = 'line-through';
        } else {
            textTask.style.textDecoration = 'none';
        }
    });

    const textTask = document.createElement('p');
    div.appendChild(textTask);
    textTask.innerHTML = `<b>${input.value}</b>`;
    textTask.style.margin = '8px';
    const select = document.querySelector('select');
    let textPriority = document.createElement('p');
        div.appendChild(textPriority);
    if (select.value === 'urgent') {
        textPriority.innerHTML = `<b>Срочные</b>`;
        textPriority.style.margin = '8px';
    } else if (select.value === 'non-urgent') {
        textPriority.innerHTML = `<b>Несрочные</b>`;
        textPriority.style.margin = '8px';
    }
    const buttonEdit = document.createElement('button');
    div.appendChild(buttonEdit);
    buttonEdit.innerHTML = `<b>Edit</b>`;
    buttonEdit.style.background = 'lightyellow';
    buttonEdit.style.marginRight = '8px';
    buttonEdit.style.border = '2px grey solid';
    buttonEdit.style.borderRadius = '4px';
    buttonEdit.style.color = 'grey';

    buttonEdit.addEventListener('click', (event) => {
    const divEdit = document.createElement('div');
        div.appendChild(divEdit);
        divEdit.style.display = 'flex';
        divEdit.style.flexDirection = 'column';
        divEdit.style.padding = '8px';
    const inputEdit = document.createElement('input');
        divEdit.appendChild(inputEdit);
        inputEdit.style.border = '2px grey solid';
        inputEdit.style.borderRadius = '4px';
        inputEdit.style.marginBottom = '8px';

    const buttonSave = document.createElement('button');
    divEdit.appendChild(buttonSave);
    buttonSave.textContent = 'Сохранить';
    buttonSave.style.background = 'lightyellow';
    buttonSave.style.marginRight = '8px';
    buttonSave.style.border = '2px grey solid';
    buttonSave.style.borderRadius = '4px';
        buttonSave.style.color = 'grey';
        buttonSave.style.marginBottom = '8px';
        
    const selectEdit = document.createElement('select');
    divEdit.appendChild(selectEdit);
        selectEdit.style.borderRadius = '4px';
        selectEdit.style.padding = '2px';
        selectEdit.style.border = '2px grey solid';

    const optionUrgentEdit = document.createElement('option');
    optionUrgentEdit.value = 'urgent';
    optionUrgentEdit.textContent = `Срочные`;
    selectEdit.appendChild(optionUrgentEdit);

    const optionNonUrgentEdit = document.createElement('option');
    optionNonUrgentEdit.value = 'non-urgent';
    optionNonUrgentEdit.textContent = `Несрочные`;
    selectEdit.appendChild(optionNonUrgentEdit);

        buttonSave.addEventListener('click', (event) => {
            console.log(selectEdit);
        if (selectEdit.value === 'urgent') {
            textPriority.innerHTML = `<b>Cрочные</b>`;
        } else if (selectEdit.value === 'non-urgent') {
            textPriority.innerHTML = `<b>Несрочные</b>`;
        }

        if (textTask.innerText !== input.value &&  inputEdit.value !== '') {
            textTask.innerHTML = `<b>${inputEdit.value}</b>`;
        }
        
        inputEdit.remove();
        buttonSave.remove();
        selectEdit.remove();
    })
        
    });

    const buttonDelete = document.createElement('button');
    div.appendChild(buttonDelete);
    buttonDelete.innerHTML = `<b>Delete</b>`;
    buttonDelete.style.background = 'red';
    buttonDelete.style.border = '2px grey solid';
    buttonDelete.style.borderRadius = '4px';
    buttonDelete.style.color = 'white';
    buttonDelete.addEventListener('click', (event) => {
        div.remove();
    });
    
    input.value = '';
})



