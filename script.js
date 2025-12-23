/**************************************************
 * DADOS DOS PROJETOS
 **************************************************/
const projetos = [
    {
        titulo: "Módulo de comunicação de acidentes do trabalho",
        imagem: "https://images.unsplash.com/photo-1581091870627-3f9c1a6c4f1b?w=400&h=300&fit=crop",
        descricao: "Portal na Intranet para comunicação de acidentes de trabalho, contendo conteúdos informativos e formulários iniciais do processo. Os formulários enviados serão encaminhados automaticamente por e-mail ao SESMT para inserção no processo de investigação.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Média",
        link: "#"
    },
    {
        titulo: "Módulo de gerenciamento de AIHs",
        imagem: "https://images.unsplash.com/photo-1580281657521-6c6c9c1d4f7d?w=400&h=300&fit=crop",
        descricao: "Módulo para cadastro e acompanhamento do status de AIHs eletivas e de emergência enviadas aos municípios, visando sistematizar e acelerar o processo de autorização.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Alta",
        link: "#"
    },
    {
        titulo: "Módulo de Patrimônio",
        imagem: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop",
        descricao: "Cadastro e gerenciamento de patrimônios hospitalares, incluindo movimentações como troca de setor e descarte. Integração com chamados de manutenção e inventário, sendo pré-requisito para ambos.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Alta",
        link: "#"
    },
    {
        titulo: "Módulo de Manutenções",
        imagem: "https://images.unsplash.com/photo-1581092918367-7a3c1f06f8b4?w=400&h=300&fit=crop",
        descricao: "Sistema para cadastro de manutenções preventivas e corretivas, vinculadas a chamados ou a equipamentos, facilitando o envio de informações à vigilância sanitária.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Alta",
        link: "#"
    },
    {
        titulo: "Módulo de limpeza e entrega de uniformes",
        imagem: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=400&h=300&fit=crop",
        descricao: "Módulo da higienização para controle da retirada e entrega de uniformes dos colaboradores.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Média",
        link: "#"
    },
    {
        titulo: "Módulo de solicitação de cafés para a nutrição",
        imagem: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
        descricao: "Registro de solicitações de cafés para a nutrição, com geração de custos por setor, visando controle e conscientização sobre o uso de recursos.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Baixa",
        link: "#"
    },
    {
        titulo: "Módulo de Treinamentos Institucionais",
        imagem: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
        descricao: "Cadastro e gerenciamento de treinamentos institucionais presenciais e online, permitindo acompanhamento e facilitando a gestão pelo setor de Gestão de Pessoas.",
        dataInicio: null,
        finalizado: false,
        etapa: "Não iniciado",
        prioridade: "Média",
        link: "#"
    }
];

/**************************************************
 * FUNÇÕES AUXILIARES
 **************************************************/
function formatarData(dataInicio, dataFim, finalizado) {
    const formatoData = (data) => {
        const date = new Date(data);
        return date.toLocaleDateString('pt-BR', {
            month: 'short',
            year: 'numeric'
        });
    };

    if (!dataInicio) {
        return finalizado && dataFim ? `Até ${formatoData(dataFim)}` : 'Data não definida';
    }

    if (!finalizado) {
        return `${formatoData(dataInicio)} - Atualmente`;
    }

    return dataFim
        ? `${formatoData(dataInicio)} - ${formatoData(dataFim)}`
        : `${formatoData(dataInicio)} - Atualmente`;
}

function criarBadgePrioridade(prioridade) {
    if (!prioridade) return '';

    const classe = prioridade.toLowerCase(); // alta | média | baixa
    return `
        <div class="priority-badge ${classe}">
            Prioridade: ${prioridade}
        </div>
    `;
}

/**************************************************
 * CRIAÇÃO DOS ITENS DA TIMELINE
 **************************************************/
function criarItemTimeline(projeto, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    // Classes por status
    if (projeto.emMelhoria) {
        item.classList.add('em-melhoria', 'finalizado');
    } else if (projeto.finalizado) {
        item.classList.add('finalizado');
    } else if (projeto.dataInicio) {
        item.classList.add('pendente-com-inicio');
    } else {
        item.classList.add('pendente-sem-inicio');
    }

    item.style.animationDelay = `${index * 0.2}s`;

    const statusIndicator = projeto.emMelhoria
        ? `<div class="status-badge em-melhoria">Em Melhoria</div>`
        : projeto.finalizado
            ? `<div class="status-badge finalizado">Finalizado</div>`
            : projeto.dataInicio
                ? `<div class="status-badge pendente-inicio">Em andamento</div>`
                : `<div class="status-badge pendente-sem-inicio">Planejamento</div>`;

    const prioridadeBadge = criarBadgePrioridade(projeto.prioridade);

    item.innerHTML = `
        <div class="timeline-content">
            ${statusIndicator}
            ${prioridadeBadge}
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="timeline-image">
            <h3 class="timeline-title">${projeto.titulo}</h3>
            <div class="timeline-date">
                ${formatarData(projeto.dataInicio, projeto.dataFim, projeto.finalizado)}
            </div>
        </div>
    `;

    // Eventos
    item.addEventListener('mouseenter', (e) => mostrarTooltip(e, projeto));
    item.addEventListener('mouseleave', esconderTooltip);
    item.addEventListener('mousemove', moverTooltip);
    item.addEventListener('click', () => {
        if (projeto.link && projeto.link !== '#') {
            window.open(projeto.link, '_blank');
        }
    });

    return item;
}

/**************************************************
 * TOOLTIP
 **************************************************/
function mostrarTooltip(event, projeto) {
    const tooltip = document.getElementById('tooltip');

    document.getElementById('tooltip-title').textContent = projeto.titulo;
    document.getElementById('tooltip-description').textContent = projeto.descricao;
    document.getElementById('tooltip-dates').textContent =
        formatarData(projeto.dataInicio, projeto.dataFim, projeto.finalizado);

    tooltip.querySelectorAll('.etapa, .melhoria, .prioridade').forEach(e => e.remove());

    if (projeto.prioridade) {
        const prioridadeDiv = document.createElement('div');
        prioridadeDiv.className = 'prioridade';
        prioridadeDiv.innerHTML = `<strong>Prioridade:</strong> ${projeto.prioridade}`;
        tooltip.appendChild(prioridadeDiv);
    }

    if (projeto.emMelhoria && projeto.melhoria) {
        const melhoriaDiv = document.createElement('div');
        melhoriaDiv.className = 'melhoria';
        melhoriaDiv.innerHTML = `<strong>Melhoria em desenvolvimento:</strong> ${projeto.melhoria}`;
        tooltip.appendChild(melhoriaDiv);
    } else if (!projeto.finalizado && projeto.etapa) {
        const etapaDiv = document.createElement('div');
        etapaDiv.className = 'etapa';
        etapaDiv.innerHTML = `<strong>Etapa atual:</strong> ${projeto.etapa}`;
        tooltip.appendChild(etapaDiv);
    }

    tooltip.classList.add('show');
    moverTooltip(event);
}

function esconderTooltip() {
    document.getElementById('tooltip').classList.remove('show');
}

function moverTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.left = event.pageX + 15 + 'px';
    tooltip.style.top = event.pageY - 15 + 'px';
}

/**************************************************
 * RENDERIZAÇÃO E FILTROS
 **************************************************/
function renderizarTimeline(filtro = 'todos') {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    let projetosFiltrados = projetos;

    if (filtro === 'finalizados') {
        projetosFiltrados = projetos.filter(p => p.finalizado || p.emMelhoria);
    } else if (filtro === 'pendentes') {
        projetosFiltrados = projetos.filter(p => !p.finalizado && !p.emMelhoria);
    } else if (filtro === 'melhorias') {
        projetosFiltrados = projetos.filter(p => p.emMelhoria);
    }

    if (!projetosFiltrados.length) {
        timeline.innerHTML = '<div class="loading">Nenhum projeto encontrado</div>';
        return;
    }

    projetosFiltrados.forEach((projeto, index) => {
        timeline.appendChild(criarItemTimeline(projeto, index));
    });

    atualizarContadores();
}

function atualizarContadores() {
    document.getElementById('count-todos').textContent = projetos.length;
    document.getElementById('count-finalizados').textContent =
        projetos.filter(p => p.finalizado || p.emMelhoria).length;
    document.getElementById('count-pendentes').textContent =
        projetos.filter(p => !p.finalizado && !p.emMelhoria).length;
    document.getElementById('count-melhorias').textContent =
        projetos.filter(p => p.emMelhoria).length;
}

function inicializarFiltros() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderizarTimeline(btn.dataset.filter);
        });
    });
}

/**************************************************
 * INICIALIZAÇÃO
 **************************************************/
setTimeout(() => {
    renderizarTimeline();
    inicializarFiltros();
}, 500);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        esconderTooltip();
    }
});
