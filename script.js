        // Array de exemplo com projetos
        const projetos = [
            {
                titulo: "Sistema de chamados",
                imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                descricao: "Sistema interno de gerenciamento de chamados, com os módulos da TI, Manutenção, Compras, Assistência Social, Psicologia,Higienização, Almoxarifado e Hotelaria.",
                dataInicio: "2022-05-01",
                dataFim: "2022-09-01",
                link: "http://192.168.8.12"
            }
        ];

        function formatarData(dataInicio, dataFim) {
            const formatoData = (data) => {
                const date = new Date(data);
                return date.toLocaleDateString('pt-BR', { 
                    month: 'short', 
                    year: 'numeric' 
                });
            };
            
            return `${formatoData(dataInicio)} - ${formatoData(dataFim)}`;
        }

        function criarItemTimeline(projeto, index) {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.style.animationDelay = `${index * 0.2}s`;
            
            item.innerHTML = `
                <div class="timeline-content">
                    <img src="${projeto.imagem}" alt="${projeto.titulo}" class="timeline-image">
                    <h3 class="timeline-title">${projeto.titulo}</h3>
                    <div class="timeline-date">${formatarData(projeto.dataInicio, projeto.dataFim)}</div>
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
            tooltipDates.textContent = formatarData(projeto.dataInicio, projeto.dataFim);

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

        function renderizarTimeline() {
            const timeline = document.getElementById('timeline');
            timeline.innerHTML = '';

            projetos.forEach((projeto, index) => {
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
        }

        // Simular carregamento e renderizar timeline
        setTimeout(() => {
            renderizarTimeline();
        }, 1000);

        // Adicionar suporte a teclado para acessibilidade
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                esconderTooltip();
            }
        });