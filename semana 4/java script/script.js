// async indica que a função é assíncrona
async function fetchUsers() {
    try {
    // Faz a requisição para a API
    const response = await fetch(&#39;https://jsonplaceholder.typicode.com/users&#39;);
    // Verifica se houve erro na resposta
    if (!response.ok) {
    throw new Error(&quot;Erro na requisição&quot;);
    }
    // Converte os dados para JSON
    const users = await response.json();
    // Chama a função para exibir os usuários
    displayUsers(users);
    } catch (error) {
    // Exibe erro no console
    console.error(&quot;Erro ao buscar usuários:&quot;, error);
    }
    }