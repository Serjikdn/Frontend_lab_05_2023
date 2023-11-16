const addInfoButton = document.querySelector('#addInfo');
const tbody = document.querySelector('tbody');
const form = document.forms.myForm;
let count = 1;

function addUserRow(firstName, lastName) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    cell1.textContent = (count++).toString();
    cell2.textContent = firstName;
    cell3.textContent = lastName;
    row.append(cell1, cell2, cell3);
    tbody.append(row);
}

function getStringForm(name) {
    const string = form.elements[name].value;
    if (string !== "") {
        return string;
    }
    return null;
}

addInfoButton.addEventListener('click', (event) => {
    event.preventDefault();

    const first = getStringForm('firstName');
    const last = getStringForm('lastName');
    if (first && last) addUserRow(first, last);
    form.elements.firstName.value = "";
    form.elements.lastName.value = "";
});
