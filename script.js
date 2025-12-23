const projetos = [
      {
        titulo: "Sistema de chamados",
        imagem: "https://i.ibb.co/1t7Pn3Dt/chamados.png",
        descricao: "Sistema interno de gerenciamento de chamados, com os módulos da TI, Manutenção, Compras, Assistência Social, Psicologia, Higienização, Almoxarifado e Hotelaria.",
        dataInicio: "2022-05-01",
        dataFim: "2022-09-01",
        finalizado: true,
        link: "http://192.168.8.12/chamados"
    },
    {
        titulo: "Inventário da Manutenção",
        imagem: "https://i.ibb.co/YBw6J0gS/invent-rio.png",
        descricao: "Inventário de equipamentos do HRSJ, com controle de manutenção preventiva e corretiva.",
        dataInicio: "2023-06-01",
        dataFim: "2023-06-23",
        finalizado: true,
        link: "http://192.168.8.12/chamados"
    },
    {
        titulo: "HRSJEducamais",
        imagem: "https://i.ibb.co/vChqtXJW/treinamentos.png",
        descricao: "Plataforma de ensino a distância para capacitação dos colaboradores do HRSJ.",
        dataInicio: "2023-09-01",
        dataFim: "2023-12-07",
        finalizado: true,
        link: "http://moodle.hsjeronimo.com.br"
    },
    {
        titulo: "Site Institucional",
        imagem: "https://i.ibb.co/PsWTVRXj/site.png",
        descricao: "Site oficial do Hospital São Jerônimo, com informações para pacientes e visitantes.",
        dataInicio: "2023-08-17",
        dataFim: "2025-05-01",
        emMelhoria: true,
        melhoria: "Realizando as alterações solicitadas na reunião de 09/09/2025. Melhorías de design e alterações de conteúdo",
        finalizado: true,
        link: "http://www.hsjeronimo.com.br/"
    },
    {
        titulo: "SBAR - Passagem de plantão",
        imagem: "https://i.ibb.co/rGmYbx7Q/sbar.png",
        descricao: "Sistema de passagem de plantão da enfermagem digital, utilizando a metodologia SBAR (Situação, Background, Avaliação, Recomendação).",
        dataInicio: "2024-04-01",
        dataFim: "2025-01-31",
        finalizado: true,
        link: "http://192.168.8.12/sbar"
    },
    {
        titulo: "Relatórios com base no SIGH",
        imagem: "https://i.ibb.co/jjJmtS2/relatorios.png",
        descricao: "Geração de relatórios não previstos no SIGH a partir dos dados do sistema de gestão.",
        dataInicio: "2024-09-11",
        dataFim: "2024-09-19",
        finalizado: true,
        emMelhoria: true,
        melhoria: 'Criando um relatório dinâmico para o SA e um dashboard em tempo real de procedimentos solicitados no ambulatório.',
        link: "http://192.168.8.12/relatorios_hrsj"
    },
    {
        titulo: "Sistema de compra de vales",
        imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        descricao: "Sistema de gerenciamento de compra de vales almoço para os colaboradores do HRSJ.",
        dataInicio: "2024-12-02",
        finalizado: false,
        etapa: "Funcionalidades prontas: Compra de vales, cadastro de cardápios, registrar interesse em cardápios, edição de cardápios, gerar lista de interessados em almoçar/jantar. Falta a nutrição poder cadastrar manualmente alguém após às 08:45h",
        link: "#"
    },
    {
        titulo: "Atalhos da intranet",
        imagem: "https://i.ibb.co/RkB9633Q/atalhos.png",
        descricao: "Sistema de atalhos personalizados na intranet para acesso rápido a sistemas e recursos frequentes.",
        dataInicio: "2025-05-08",
        dataFim: "2025-05-14",
        finalizado: true,
        link: "http://192.168.8.12"
    },
    {
        titulo: "Lista de ramais telefônicos",
        imagem: "https://i.ibb.co/8n4N6XBM/ramais.png",
        descricao: "Sistema de atalhos personalizados na intranet para acesso rápido a sistemas e recursos frequentes.",
        dataInicio: "2025-06-18",
        dataFim: "2025-06-20",
        finalizado: true,
        link: "http://192.168.8.12/ramais/hrsj"
    },
    {
        titulo: "Painel da Emergência",
        imagem: "https://i.ibb.co/CsD5ZnSz/painel.png",
        descricao: "Sistema de monitoramento em tempo real dos exames pendentes para reavaliação na emergência.",
        dataInicio: "2025-06-10",
        dataFim: "2025-08-20",
        finalizado: true,
        link: "http://192.168.93.115/painel-emergencia"
    },
    {
        titulo: "Sistema de alta administrativa",
        imagem: "https://i.ibb.co/KxFQVZTj/alta.png",
        descricao: "Sistema para realizar alta administrativa, integrando com o sistema de gestão hospitalar e com o AD.",
        dataInicio: "2025-07-28",
        dataFim: "2025-08-21",
        finalizado: true,
        link: "http://192.168.8.12/sistema_alta_administrativa"
    },
    {
        titulo: "Ideias de Inovação",
        imagem: "https://lh4.googleusercontent.com/proxy/22XoaPBCo5Hi3NESQx5bHW7dMIRaWHf3g0SU-vdDPT6xeDABrle8xGG5nQet_6AA-vZ8HQfv08LiUosvsvWsRQ5I9Zf5KYEsk0G-MxRQ4FGQVVEitnUtypnxKgxFzZd1",
        descricao: "Plataforma para submissão e votação de ideias de inovação pelos colaboradores do HRSJ.",
        dataInicio: "2025-09-01",
        dataFim: "2025-09-19",
        finalizado: true,
        link: "https://www.figma.com/proto/IRXtdbWLIrzN5VvmmHI30J/sistema-de-gest%C3%A3o-de-ideias?node-id=64-11&t=2opc99odnPUglx3q-1&scaling=contain&content-scaling=fixed&page-id=0%3A1"
    },
    {
        titulo: "Intranet Corporativa",
        imagem: "https://www.sabesim.com.br/wp-content/images/2016/01/21142413/gestao-de-equipes.jpg",
        descricao: "Nova intranet corporativa para melhorar a comunicação interna e o acesso a recursos pelos colaboradores.",
        dataInicio: "2025-08-18",
        finalizado: false,
        etapa: "Base construída. Os módulos de Ideias, gerenciamento de módulos, atalhos, ramais e documentos institucionais estão prontos. Criando o módulo de vales",
        link: "#"
    },
    {
        titulo: "Nova versão do sistema de chamados",
        imagem: "https://i.ytimg.com/vi/yX0hYG-vdsA/maxresdefault.jpg",
        descricao: "Atualização completa do sistema de chamados, com novas funcionalidades e melhorias na interface.",
        dataInicio: null,
        finalizado: false,
        etapa: "Em fase de planejamento e levantamento de requisitos",
        link: "#"
    },
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
        titulo: "Módulo de solicitações para a nutrição",
        imagem: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
        descricao: "Registro de solicitações de cafés, salgados e bolos para eventos institucionais, com geração de custos por setor, visando controle e conscientização sobre o uso de recursos.",
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
    
    return dataFim ? `${formatoData(dataInicio)} - ${formatoData(dataFim)}` : `${formatoData(dataInicio)} - Atualmente`;
}

function criarItemTimeline(projeto, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    // Adicionar classes baseadas no status
    if (projeto.emMelhoria) {
        item.classList.add('em-melhoria');
        item.classList.add('finalizado');
    } else if (projeto.finalizado) {
        item.classList.add('finalizado');
    } else if (projeto.dataInicio) {
        item.classList.add('pendente-com-inicio');
    } else {
        item.classList.add('pendente-sem-inicio');
    }
    
    item.style.animationDelay = `${index * 0.2}s`;
    
    const statusIndicator = projeto.emMelhoria ? 
        ('<div class="status-badge finalizado">Finalizado</div>',
        '<div class="status-badge em-melhoria">Em Melhoria</div>') :
        projeto.finalizado ? 
            '<div class="status-badge finalizado">Finalizado</div>' :
            projeto.dataInicio ? 
                '<div class="status-badge pendente-inicio">Em andamento</div>' :
                '<div class="status-badge pendente-sem-inicio">Planejamento</div>';
    
    item.innerHTML = `
        <div class="timeline-content">
            ${statusIndicator}
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="timeline-image">
            <h3 class="timeline-title">${projeto.titulo}</h3>
            <div class="timeline-date">${formatarData(projeto.dataInicio, projeto.dataFim, projeto.finalizado)}</div>
        </div>
    `;

    // Adicionar eventos
    item.addEventListener('mouseenter', (e) => mostrarTooltip(e, projeto));
    item.addEventListener('mouseleave', esconderTooltip);
    item.addEventListener('mousemove', moverTooltip);
    item.addEventListener('click', () => {
        window.open(projeto.link, '_blank');
    });

    return item;
}

function mostrarTooltip(event, projeto) {
    const tooltip = document.getElementById('tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDescription = document.getElementById('tooltip-description');
    const tooltipDates = document.getElementById('tooltip-dates');

    tooltipTitle.textContent = projeto.titulo;
    tooltipDescription.textContent = projeto.descricao;
    tooltipDates.textContent = formatarData(projeto.dataInicio, projeto.dataFim, projeto.finalizado);

    // Remover informações anteriores de etapa/melhoria
    const existingInfo = tooltip.querySelector('.etapa, .melhoria');
    if (existingInfo) {
        existingInfo.remove();
    }

    // Adicionar informação da melhoria se o projeto estiver em melhoria
    if (projeto.emMelhoria && projeto.melhoria) {
        const melhoriaDiv = document.createElement('div');
        melhoriaDiv.className = 'melhoria';
        melhoriaDiv.innerHTML = `<strong>Melhoria em Desenvolvimento:</strong>${projeto.melhoria}`;
        tooltip.appendChild(melhoriaDiv);
    }
    // Adicionar informação da etapa se o projeto não estiver finalizado e não estiver em melhoria
    else if (!projeto.finalizado && projeto.etapa) {
        const etapaDiv = document.createElement('div');
        etapaDiv.className = 'etapa';
        etapaDiv.innerHTML = `<strong>Etapa Atual:</strong>${projeto.etapa}`;
        tooltip.appendChild(etapaDiv);
    }

    tooltip.classList.add('show');
    moverTooltip(event);
}

function esconderTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('show');
}

function moverTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    const x = event.pageX + 15;
    const y = event.pageY - 15;
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

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

    if (projetosFiltrados.length === 0) {
        timeline.innerHTML = '<div class="loading">Nenhum projeto encontrado para este filtro</div>';
        return;
    }

    projetosFiltrados.forEach((projeto, index) => {
        const item = criarItemTimeline(projeto, index);
        timeline.appendChild(item);
    });

    // Adicionar animação de entrada
    const items = timeline.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });

    // Atualizar contadores
    atualizarContadores();
}

function atualizarContadores() {
    const todos = projetos.length;
    const finalizados = projetos.filter(p => p.finalizado || p.emMelhoria).length;
    const pendentes = projetos.filter(p => !p.finalizado && !p.emMelhoria).length;
    const melhorias = projetos.filter(p => p.emMelhoria).length;

    document.getElementById('count-todos').textContent = todos;
    document.getElementById('count-finalizados').textContent = finalizados;
    document.getElementById('count-pendentes').textContent = pendentes;
    document.getElementById('count-melhorias').textContent = melhorias;
}

function inicializarFiltros() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            button.classList.add('active');
            
            const filtro = button.dataset.filter;
            if (filtro) {
                renderizarTimeline(filtro);
            }
        });
    });
}

// Simular carregamento e renderizar timeline
setTimeout(() => {
    renderizarTimeline();
    inicializarFiltros();
}, 1000);

// Adicionar suporte a teclado para acessibilidade
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        esconderTooltip();
    }
});