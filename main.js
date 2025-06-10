// const doubts = window.document.getElementById('');
// const courses = window.document.getElementById('');

const form = document.getElementById('form-score');
const btnAdd = window.document.getElementById('btn-add');
const scores = []

const disciplines = [
    'Ciências da Natureza',
    'Ciências Humanas',
    'Matemática',
    'Linguagens e Códigos',
    'Redaçao'
]


document.getElementById('input-discipline').value = disciplines[0];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputDisciplines = document.getElementById('input-discipline')
    const inputScoreTest = document.getElementById('input-score');
    const score = inputScoreTest.value;

    if (scores.length >= 5) {
    alert('Todas as 5 notas ja foram inseridas!')
    return;
} 

scores.push(score);


const newLine = `<tr>
<td>${disciplines[scores.length - 1]}</td>
<td>${score}</td>
</tr>`;

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML += newLine;
    inputScoreTest.value = '';

    if (scores.length < disciplines.length) {
        inputDisciplines.value = disciplines[scores.length];
    } else {
        inputScoreTest.value = '';
        inputDisciplines.value = '';
    }

});


