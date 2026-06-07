// Dados dos jogos da Copa do Mundo 2026
const copaGames = {
    // Fase de Grupos - Junho 2026
    '2026-06-08': [
        { teams: 'Holanda vs Senegal', time: '14:00', phase: 'Grupos' },
        { teams: 'Argentina vs Arábia Saudita', time: '18:00', phase: 'Grupos' }
    ],
    '2026-06-09': [
        { teams: 'França vs Austrália', time: '12:00', phase: 'Grupos' },
        { teams: 'Alemanha vs México', time: '16:00', phase: 'Grupos' }
    ],
    '2026-06-10': [
        { teams: 'Espanha vs Costa Rica', time: '14:00', phase: 'Grupos' },
        { teams: 'Brasil vs Sérvia', time: '18:00', phase: 'Grupos' }
    ],
    '2026-06-11': [
        { teams: 'Bélgica vs Canadá', time: '13:00', phase: 'Grupos' },
        { teams: 'Marrocos vs Croácia', time: '17:00', phase: 'Grupos' }
    ],
    '2026-06-12': [
        { teams: 'Dinamarca vs Tunísia', time: '12:00', phase: 'Grupos' },
        { teams: 'Portugal vs Uruguai', time: '16:00', phase: 'Grupos' }
    ],
    '2026-06-13': [
        { teams: 'Polônia vs México', time: '14:00', phase: 'Grupos' },
        { teams: 'Argentina vs Polônia', time: '18:00', phase: 'Grupos' }
    ],
    
    // Continuação da Fase de Grupos
    '2026-06-21': [
        { teams: 'Brasil vs Suíça', time: '14:00', phase: 'Grupos' },
        { teams: 'Camarões vs Sérvia', time: '18:00', phase: 'Grupos' }
    ],
    '2026-06-22': [
        { teams: 'Holanda vs Equador', time: '12:00', phase: 'Grupos' },
        { teams: 'Senegal vs Catar', time: '16:00', phase: 'Grupos' }
    ],
    '2026-06-23': [
        { teams: 'Gales vs Irã', time: '14:00', phase: 'Grupos' },
        { teams: 'França vs Dinamarca', time: '18:00', phase: 'Grupos' }
    ],
    '2026-06-24': [
        { teams: 'Espanha vs Alemanha', time: '13:00', phase: 'Grupos' },
        { teams: 'Costa Rica vs Japão', time: '17:00', phase: 'Grupos' }
    ],
    
    // Oitavas de Final - Julho 2026
    '2026-07-02': [
        { teams: '1º Grupo A vs 2º Grupo B', time: '14:00', phase: 'Oitavas de Final' },
        { teams: '1º Grupo B vs 2º Grupo A', time: '18:00', phase: 'Oitavas de Final' }
    ],
    '2026-07-03': [
        { teams: '1º Grupo C vs 2º Grupo D', time: '12:00', phase: 'Oitavas de Final' },
        { teams: '1º Grupo D vs 2º Grupo C', time: '16:00', phase: 'Oitavas de Final' }
    ],
    '2026-07-04': [
        { teams: '1º Grupo E vs 2º Grupo F', time: '14:00', phase: 'Oitavas de Final' },
        { teams: '1º Grupo F vs 2º Grupo E', time: '18:00', phase: 'Oitavas de Final' }
    ],
    '2026-07-05': [
        { teams: '1º Grupo G vs 2º Grupo H', time: '12:00', phase: 'Oitavas de Final' },
        { teams: '1º Grupo H vs 2º Grupo G', time: '16:00', phase: 'Oitavas de Final' }
    ],
    
    // Quartas de Final - Julho 2026
    '2026-07-09': [
        { teams: 'Vencedor OF 1 vs Vencedor OF 2', time: '14:00', phase: 'Quartas de Final' },
        { teams: 'Vencedor OF 3 vs Vencedor OF 4', time: '18:00', phase: 'Quartas de Final' }
    ],
    '2026-07-10': [
        { teams: 'Vencedor OF 5 vs Vencedor OF 6', time: '14:00', phase: 'Quartas de Final' },
        { teams: 'Vencedor OF 7 vs Vencedor OF 8', time: '18:00', phase: 'Quartas de Final' }
    ],
    
    // Semifinais - Julho 2026
    '2026-07-14': [
        { teams: 'Vencedor QF 1 vs Vencedor QF 2', time: '16:00', phase: 'Semifinal' }
    ],
    '2026-07-15': [
        { teams: 'Vencedor QF 3 vs Vencedor QF 4', time: '16:00', phase: 'Semifinal' }
    ],
    
    // Final - Julho 2026
    '2026-07-19': [
        { teams: 'Vencedor SF 1 vs Vencedor SF 2', time: '14:00', phase: 'FINAL' }
    ]
};

let currentDate = new Date(2026, 5, 1); // Junho 2026
let selectedDate = null;

// Elementos do DOM
const calendar = document.getElementById('calendar');
const currentMonthSpan = document.getElementById('currentMonth');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const gamesInfo = document.getElementById('gamesInfo');
const modal = document.getElementById('gamesModal');
const modalTitle = document.getElementById('modalTitle');
const modalGames = document.getElementById('modalGames');
const closeBtn = document.querySelector('.close');
const openInGoogleBtn = document.getElementById('openInGoogle');

// Nomes dos meses
const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// Função para renderizar o calendário
function renderCalendar() {
    calendar.innerHTML = '';
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Atualizar título do mês
    currentMonthSpan.textContent = `${monthNames[month]} de ${year}`;
    
    // Primeiro dia do mês
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    // Dias do mês anterior (cinzento)
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'day other-month';
        day.textContent = daysInPrevMonth - i;
        calendar.appendChild(day);
    }
    
    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Verificar se tem jogos neste dia
        if (copaGames[dateStr]) {
            dayElement.classList.add('has-games');
        }
        
        // Verificar se é o dia selecionado
        if (selectedDate === dateStr) {
            dayElement.classList.add('selected');
        }
        
        // Evento de clique
        dayElement.addEventListener('click', () => {
            selectDate(dateStr, dayElement);
        });
        
        calendar.appendChild(dayElement);
    }
    
    // Dias do próximo mês (cinzento)
    const totalCells = calendar.children.length;
    const remainingCells = 42 - totalCells; // 6 linhas x 7 dias
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day other-month';
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    }
}

// Função para selecionar uma data
function selectDate(dateStr, dayElement) {
    // Remover classe 'selected' de todos os dias
    document.querySelectorAll('.day.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Adicionar classe 'selected' ao dia clicado
    dayElement.classList.add('selected');
    selectedDate = dateStr;
    
    // Mostrar informações dos jogos
    displayGames(dateStr);
}

// Função para exibir os jogos de uma data
function displayGames(dateStr) {
    if (copaGames[dateStr]) {
        const games = copaGames[dateStr];
        const date = new Date(dateStr + 'T00:00:00');
        const dayName = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date);
        const formattedDate = new Intl.DateTimeFormat('pt-BR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }).format(date);
        
        gamesInfo.innerHTML = `
            <h2 style="color: #1e3c72; margin-bottom: 20px;">
                ${dayName.charAt(0).toUpperCase() + dayName.slice(1)}, ${formattedDate}
            </h2>
            <div class="games-list">
                ${games.map((game, index) => `
                    <div class="game-card">
                        <h3>Jogo ${index + 1}</h3>
                        <div class="teams">${game.teams}</div>
                        <div class="game-info">
                            <p><strong>⏰ Horário:</strong> ${game.time}</p>
                            <p><strong>📅 Data:</strong> ${formattedDate}</p>
                        </div>
                        <span class="phase">${game.phase}</span>
                    </div>
                `).join('')}
            </div>
            <button onclick="openInGoogle('${dateStr}')" class="btn-primary" style="margin-top: 20px;">
                🔍 Buscar no Google
            </button>
        `;
    } else {
        gamesInfo.innerHTML = `
            <div class="no-selection">
                <p>❌ Nenhum jogo marcado para este dia</p>
            </div>
        `;
    }
}

// Função para abrir no Google
function openInGoogle(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const formattedDate = new Intl.DateTimeFormat('pt-BR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }).format(date);
    
    const searchQuery = `Copa do Mundo 2026 jogos ${formattedDate}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    
    window.open(googleSearchUrl, '_blank');
}

// Event listeners para navegação
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Fechar modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Renderizar calendário ao carregar a página
renderCalendar();

// Mostrar mensagem inicial
gamesInfo.innerHTML = `
    <div class="no-selection">
        <p>👆 Clique em um dia para ver os jogos</p>
    </div>
`;
