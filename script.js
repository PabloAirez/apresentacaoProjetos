 const projetos = [
            {
                titulo: "Sistema de chamados",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema interno de gerenciamento de chamados, com os módulos da TI, Manutenção, Compras, Assistência Social, Psicologia,Higienização, Almoxarifado e Hotelaria.",
                dataInicio: "2022-05-01",
                dataFim: "2022-09-01",
                finalizado: true,
                link: "http://192.168.8.12/chamados"
            },
            {
                titulo: "Inventário da Manutenção",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Inventário de equipamentos do HRSJ, com controle de manutenção preventiva e corretiva.",
                dataInicio: "2023-06-01",
                dataFim: "2023-06-23",
                finalizado: true,
                link: "http://192.168.8.12/chamados"
            },
            {
                titulo: "HRSJEducamais",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Plataforma de ensino a distância para capacitação dos colaboradores do HRSJ.",
                dataInicio: "2023-09-01",
                dataFim: "2023-12-07",
                finalizado: true,
                link: "http://moodle.hsjeronimo.com.br"
            },
            {
                titulo: "Site Institucional",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Site oficial do Hospital São Jerônimo, com informações para pacientes e visitantes.",
                dataInicio: "2023-08-17",
                dataFim: "2025-05-01",
                finalizado: true,
                link: "http://www.hsjeronimo.com.br/"
            },
             {
                titulo: "SBAR - Passagem de plantão",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema de passagem de plantão da enfermagem digital, utilizando a metodologia SBAR (Situação, Background, Avaliação, Recomendação).",
                dataInicio: "2024-04-01",
                dataFim: "2025-01-31",
                finalizado: true,
                link: "http://192.168.8.12/sbar"
            },
            {
                titulo: "Relatórios com base no SIGH",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Geração de relatórios não previstos no SIGH a partir dos dados do sistema de gestão.",
                dataInicio: "2024-09-11",
                dataFim: "2024-09-19",
                finalizado: true,
                link: "http://192.168.8.12/relatorios_hrsj"
            },
            {
                titulo: "Sistema de compra de vales",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema de gerenciamento de compra de vales almoço para os colaboradores do HRSJ.",
                dataInicio: "2024-12-02",
                finalizado: false,
                etapa: "Em redefinição da lógica do sistema para integrar a nova Intranet",
                link: "#"
            },
            {
                titulo: "Atalhos da intranet",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema de atalhos personalizados na intranet para acesso rápido a sistemas e recursos frequentes.",
                dataInicio: "2025-05-08",
                dataFim: "2025-05-14",
                finalizado: true,
                link: "http://192.168.8.12"
            },
            {
                titulo: "Lista de ramais telefônicos",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema de atalhos personalizados na intranet para acesso rápido a sistemas e recursos frequentes.",
                dataInicio: "2025-06-18",
                dataFim: "2025-06-20",
                finalizado: true,
                link: "http://192.168.8.12/ramais/hrsj"
            },
            {
                titulo: "Painel da Emergência",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema de monitoramento em tempo real dos exames pendentes para reavaliação na emergência.",
                dataInicio: "2025-06-10",
                dataFim: "2025-08-20",
                finalizado: true,
                link: "http://192.168.93.115/painel-emergencia"
            },
            {
                titulo: "Sistema de alta administrativa",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema para realizar alta administrativa, integrando com o sistema de gestão hospitalar e com o AD.",
                dataInicio: "2025-07-28",
                dataFim: "2025-08-21",
                finalizado: true,
                link: "http://192.168.8.12/sistema_alta_administrativa"
            },
            {
                titulo: "Ideias de Inovação",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Plataforma para submissão e votação de ideias de inovação pelos colaboradores do HRSJ.",
                dataInicio: "2025-08-07",
                finalizado: false,
                link: "https://www.figma.com/proto/IRXtdbWLIrzN5VvmmHI30J/sistema-de-gest%C3%A3o-de-ideias?node-id=64-11&t=2opc99odnPUglx3q-1&scaling=contain&content-scaling=fixed&page-id=0%3A1"
            },
            {
                titulo: "Intranet Corporativa",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Nova intranet corporativa para melhorar a comunicação interna e o acesso a recursos pelos colaboradores.",
                dataInicio: null,
                finalizado: false,
                etapa: "Em fase de planejamento e levantamento de requisitos",
                link: "#"
            },
            {
                titulo: "Nova versão do sistema de chamados",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Atualização completa do sistema de chamados, com novas funcionalidades e melhorias na interface.",
                dataInicio: null,
                finalizado: false,
                etapa: "Em fase de planejamento e levantamento de requisitos",
                link: "#"
            },
            
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
            if (projeto.finalizado) {
                item.classList.add('finalizado');
            } else if (projeto.dataInicio) {
                item.classList.add('pendente-com-inicio');
            } else {
                item.classList.add('pendente-sem-inicio');
            }
            
            item.style.animationDelay = `${index * 0.2}s`;
            
            const statusIndicator = projeto.finalizado ? 
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

            // Adicionar informação da etapa se o projeto não estiver finalizado
            const existingEtapa = tooltip.querySelector('.etapa');
            if (existingEtapa) {
                existingEtapa.remove();
            }

            if (!projeto.finalizado && projeto.etapa) {
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
                projetosFiltrados = projetos.filter(p => p.finalizado);
            } else if (filtro === 'pendentes') {
                projetosFiltrados = projetos.filter(p => !p.finalizado);
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
            const finalizados = projetos.filter(p => p.finalizado).length;
            const pendentes = projetos.filter(p => !p.finalizado).length;

            document.getElementById('count-todos').textContent = todos;
            document.getElementById('count-finalizados').textContent = finalizados;
            document.getElementById('count-pendentes').textContent = pendentes;
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
                    renderizarTimeline(filtro);
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