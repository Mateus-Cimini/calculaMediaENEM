const courses = [
    { name: "Letras - Português E Literaturas Da Língua Portuguesa", cutoffGrade: 618.305 },
    { name: "Alimentos", cutoffGrade: 558.079 },
    { name: "Música - Piano", cutoffGrade: 706.64},
    { name: "Design De Jogos", cutoffGrade: 694.06 },
    { name: "Gestão Do Agronegócio", cutoffGrade: 550.15},
    { name: "Ciências Sociais", cutoffGrade: 623.327 },
    { name: "Engenharia De Materiais", cutoffGrade: 629.152},
    { name: "Música - Composição", cutoffGrade: 714.105},
    { name: "Gestão Pública", cutoffGrade: 615.745},
    { name: "Letras - Japonês", cutoffGrade: 727.64},
    { name: "Ciências Do Estado", cutoffGrade: 696.38},
    { name: "Gemologia", cutoffGrade: 593.59},
    { name: "Engenharia Nuclear", cutoffGrade: 763.16},
    { name: "Comunicação Social - Audiovisual", cutoffGrade: 655.805},
    { name: "Enfermagem E Obstetrícia", cutoffGrade: 718.93},
    { name: "Letras - Espanhol", cutoffGrade: 583.401},
    { name: "Engenharia De Minas E Meio Ambiente", cutoffGrade: 774.77},
    { name: "Engenharia Naval E Oceânica", cutoffGrade: 741.77},
    { name: "Letras - Grego", cutoffGrade: 603.85},
    { name: "Música - Flauta Transversal", cutoffGrade: 612.88},
    { name: "Comunicação Social", cutoffGrade: 630.35},
    { name: "Letras - Espanhol E Português Como Línguas Estrangeiras", cutoffGrade: 550.62},
    { name: "Letras - Português E Latim", cutoffGrade: 623.04},
    { name: "Nota de corte do Sisu no Logística", cutoffGrade: 634.726},
    { name: "Engenharia Industrial Elétrica", cutoffGrade: 663.04},
    { name: "Construção De Edifícios", cutoffGrade: 518.245},
    { name: "Engenharia De Produção E Sistemas", cutoffGrade: 663.30},
    { name: "Administração", cutoffGrade: 657.947},
    { name: "Engenharia Elétrica - Robótica E Automação Industrial", cutoffGrade: 719.60},
    { name: "Redação E Revisão De Textos", cutoffGrade: 526.48},
    { name: "Zootecnia", cutoffGrade: 625.137},
    { name: "Abi - Letras Português", cutoffGrade: 703.53},
    { name: "Odontologia", cutoffGrade: 755.773},
    { name: "Hotelaria", cutoffGrade: 594.581},
    { name: "Letras - Inglês", cutoffGrade: 632.075},
    { name: "Gestão De Recursos Humanos", cutoffGrade: 635.552},
    { name: "Direito", cutoffGrade: 736.957},
    { name: "Engenharia De Transportes", cutoffGrade: 616.525},
    { name: "Matemática Aplicada", cutoffGrade: 620.885},
    { name: "Ciências Atuariais", cutoffGrade: 661.121},
    { name: "Engenharia Metalúrgica", cutoffGrade: 627.789},
    { name: "Engenharia De Mecatrônica", cutoffGrade: 821.95},
    { name: "Tecnológica E Industrial", cutoffGrade: 632.20},
    { name: "Interdisciplinar Em Educação Do Campo: Ciências Da Natureza", cutoffGrade: 487.54},
    { name: "Letras - Francês", cutoffGrade: 612.032},
    { name: "Fisioterapia", cutoffGrade: 715.219},
    { name: "Ciência Da Informação", cutoffGrade: 732.00},
    { name: "Radiologia", cutoffGrade: 674.524},
    { name: "Línguas Estrangeiras Aplicadas Às Negociações Internacionais", cutoffGrade: 680.72},
    { name: "Medicina", cutoffGrade: 819.729},
    { name: "Psicologia", cutoffGrade: 740.068},
    { name: "Engenharia Civil", cutoffGrade: 689.636},
    { name: "Enfermagem", cutoffGrade: 712.49},
    { name: "Nutrição", cutoffGrade: 709.784},
    { name: "Pedagogia", cutoffGrade: 610.432},
];

// Organizando o array courses em ordem decresente com base na nota
const cursosOrdenados = courses.sort((a, b) => b.cutoffGrade - a.cutoffGrade);


// Pegando a media do usuario que esta salva no localStorage
const userAverage = Number(localStorage.getItem('userAverage'));
console.log("Média do usuário:", userAverage);

// Funçao para verificar se foi aprovado
function checkApproval(userAverage, cutoffGrade) {
    return userAverage >= cutoffGrade ? "✅" : "❌";
}


// TABELA
const table = document.querySelector('tbody');

cursosOrdenados.forEach(course => {
    const aprovado = checkApproval(userAverage, course.cutoffGrade);
    const line = document.createElement('tr');

    line.innerHTML = `
    <td>${course.name}</td>
    <td>${course.cutoffGrade}</td>
    <td>${aprovado}</td>
    `;

    table.appendChild(line)

})


// MODAL
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


