function getArray(text){
    let arr = text.value.split('\n');
    console.log(arr);
    return arr.map((value)=> value.split(''));
}

function draw(arr){
    result.textContent = '';
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    for (let i = 0; i < arr.length; i++){
        const tr = document.createElement('tr');
        for (let j = 0; j < arr[i].length; j++){
            const td = document.createElement('td');
            if (arr[i][j] === '1'){
                td.style.backgroundColor = '#333';
            } else {
                td.style.backgroundColor = '#fff'
            }
            td.classList.add('size');
            tr.append(td);
        }
        tbody.append(tr)
    }
    table.append(tbody);
    result.append(table);
}

function launch(){
    console.log(text.value);
    let arr = getArray(text);
    draw(arr);
}

const text = document.querySelector('#test');
const result = document.querySelector('#result');
