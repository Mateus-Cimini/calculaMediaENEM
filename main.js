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

let sum = 0;
let median = 0;


document.getElementById('input-discipline').value = disciplines[0];

form.addEventListener('submit', function(e) {
    e.preventDefault();


    const inputDisciplines = document.getElementById('input-discipline')
    const inputScoreTest = document.getElementById('input-score');
    const score = Number(inputScoreTest.value);

    if (scores.length >= 5) {
        alert('Todas as 5 notas ja foram inseridas!');
        return;
    } 

    scores.push(score);

    calculateFinalAverage();
    updateFinalAverage();

    const newLine = `<tr>
    <td>${disciplines[scores.length - 1]}</td>
    <td>${score}</td>
    </tr>`;

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML += newLine;
    inputScoreTest.value = '';


    const tdFinalAverage = document.getElementById('final-Average');
    tdFinalAverage.textContent = median;
    const finalAverage = `<td>${median}</td>`;

    if (scores.length < disciplines.length) {
        inputDisciplines.value = disciplines[scores.length];
    } else {
        inputScoreTest.value = '';
        inputDisciplines.value = '';
    }




});

function calculateFinalAverage() {
     // somando resultado e salvando na variavel "sum"
    sum = 0;
    for (const scoreTest of scores) {
        sum += scoreTest;
    }
     //salvando media do aluno e salvando na variavel "median"
    median = sum / 5
}



function updateFinalAverage() {
    console.log(`Nota total: ${sum}, media: ${median}`);
    
    
    
}

