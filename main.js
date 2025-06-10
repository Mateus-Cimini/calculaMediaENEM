
// const courses = window.document.getElementById('');


const form = document.getElementById('form-score');
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

// Seleciona os elementos de input e da tabela no HTML
const inputDisciplines = document.getElementById('input-discipline');
const inputScoreTest = document.getElementById('input-score');
const tableBody = document.querySelector('tbody');
const tdFinalAverage = document.getElementById('final-Average');

inputDisciplines.value = disciplines[0];

// Evento acionado ao enviar o formulário (clicar em "Adicionar" ou submit)
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const score = Number(inputScoreTest.value);

    if (isFormFull()) {
        alert('Todas as 5 notas ja foram inseridas!');
        return;
    } 

    scores.push(score);               // Adiciona nota ao array
    addScoreToTable(score);          // Cria nova linha na tabela
    calculateFinalAverage();         // Atualiza soma e média
    updateFinalAverage();            // Exibe a média no HTML e console
    updateDisciplibeInput();         // Mostra próxima disciplina no input
    resetInputs();                   // Limpa campo da nota
});

// Verifica se o formulário já recebeu 5 notas
function isFormFull() {
    return scores.length >=5;
}

// Adiciona nova linha na tabela
function addScoreToTable(score) {
    const newLine = `<tr>
        <td>${disciplines[scores.length - 1]}</td>
        <td>${score}</td>
    </tr>`;
    tableBody.innerHTML += newLine;
}

// Atualiza campo da próxima disciplina
function updateDisciplibeInput() {
    if (scores.length < disciplines.length) {
        inputDisciplines.value = disciplines[scores.length];
    } else {
        inputDisciplines.value = '';
    }
}

// Limpa campo de nota
function resetInputs() {
    inputScoreTest.value = '';
}

// Calcula média
function calculateFinalAverage() {
    sum = 0;
    for (const scoreTest of scores) {
        sum += scoreTest;
    }
    median = sum / 5;
}

// Atualiza média no console e na tabela
function updateFinalAverage() {
    tdFinalAverage.textContent = median;
    console.log(`Nota total: ${sum}, media: ${median}`);
};


// Seleciona os elementos modal de ajuda
const modalHelp = window.document.getElementById('modal-help');
const btnOpenModalHelp = document.getElementById('open-modal-help');
const btnCloseModalHelp = document.getElementById('close-modal-help');

btnOpenModalHelp.addEventListener('click', () => {
    modalHelp.style.display = 'block';
});

btnCloseModalHelp.addEventListener('click', () => {
    modalHelp.style.display = 'none';
});

// fecha a janela do modal caso o usuario clique fora do modal
window.addEventListener('click', (event) => {
    if (event.target === modalHelp) {
        modalHelp.style.display = 'none';
    }
});
