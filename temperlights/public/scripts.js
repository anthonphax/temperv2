
// Implemente validação rigorosa de entrada no backend para evitar ataques como SQL Injection ou XSS (Cross-Site Scripting).
// No frontend, limite os caracteres permitidos no campo de busca (por exemplo, apenas números para IDs).
function addTag() {
    const searchString = document.getElementById("searchInput").value.trim();

    if (!/^[a-zA-Z0-9]+$/.test(searchString)) {
        alert("Entrada inválida! Use apenas letras e números.");
        return;
    }

    console.log("Searching for:", searchString);
    // Envie para o backend ou tome a ação necessária
}


// Sanitize todos os dados exibidos no frontend para evitar a execução de scripts maliciosos.
function sanitizeHTML(str) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = str;
    return tempDiv.innerHTML;
}

// Exemplo de uso:
document.getElementById("pedido-header").textContent = sanitizeHTML(`Lotes do Pedido #${pedidoId} - ${cliente}`);


//  tokens CSRF para proteger ações críticas, como filtragem ou busca.
// No backend, gere tokens CSRF e insira no frontend como campos ocultos ou cabeçalhos de requisição.

const csrfToken = document.getElementById('csrf-token').value;

fetch('/buscar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'CSRF-Token': csrfToken
    },
    body: JSON.stringify({ search: searchString })
});
