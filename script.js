// Seleção do container onde os personagens serão inseridos
const charactersContainer = document.getElementById('characters-container');

/**
 * Função principal para buscar os personagens da API
 * Utiliza o comando FETCH conforme solicitado no edital.
 */
async function fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';

    try {
        const response = await fetch(url);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json();
        
        // Limpa o container (remove o texto de "Carregando")
        charactersContainer.innerHTML = '';

        // Percorre a lista de resultados e cria os cards
        data.results.forEach(character => {
            createCharacterCard(character);
        });

    } catch (error) {
        console.error('Erro:', error);
        charactersContainer.innerHTML = `<div class="loading" style="color: red;">Falha ao carregar personagens. Verifique sua conexão.</div>`;
    }
}

/**
 * Função para criar os elementos do card de forma DINÂMICA
 * Utiliza createElement e appendChild conforme exigido pelo professor.
 */
function createCharacterCard(character) {
    // 1. Cria a div principal do card
    const card = document.createElement('div');
    card.classList.add('character-card');

    // 2. Cria o elemento de imagem
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;

    // 3. Cria a div de conteúdo (texto)
    const content = document.createElement('div');
    content.classList.add('card-content');

    // 4. Cria o título (Nome)
    const name = document.createElement('h3');
    name.textContent = character.name;

    // 5. Cria o wrapper de status
    const statusWrapper = document.createElement('div');
    statusWrapper.classList.add('status-wrapper');

    // Indicador visual de status (bolinha colorida)
    const statusCircle = document.createElement('span');
    statusCircle.classList.add('status-circle');
    
    // Define a cor da bolinha baseada no status
    if (character.status === 'Alive') {
        statusCircle.classList.add('status-alive');
    } else if (character.status === 'Dead') {
        statusCircle.classList.add('status-dead');
    } else {
        statusCircle.classList.add('status-unknown');
    }

    // Texto de Status e Espécie
    const statusText = document.createElement('span');
    statusText.textContent = `${character.status} - ${character.species}`;

    // Monta o statusWrapper
    statusWrapper.appendChild(statusCircle);
    statusWrapper.appendChild(statusText);

    // 6. Cria informações adicionais (Última localização conhecida)
    const locationLabel = document.createElement('span');
    locationLabel.classList.add('info-label');
    locationLabel.textContent = 'Última localização conhecida:';

    const locationValue = document.createElement('span');
    locationValue.classList.add('info-value');
    locationValue.textContent = character.location.name;

    // 7. MONTAGEM FINAL DO DOM (Hierarchy)
    // Parent: content
    content.appendChild(name);
    content.appendChild(statusWrapper);
    content.appendChild(locationLabel);
    content.appendChild(locationValue);

    // Parent: card
    card.appendChild(img);
    card.appendChild(content);

    // Parent: container principal (main)
    charactersContainer.appendChild(card);
}

// Inicializa a busca quando a página carrega
window.addEventListener('DOMContentLoaded', fetchCharacters);
