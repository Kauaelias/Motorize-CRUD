function buscarMotos() {
    const busca = document.getElementById('busca').value;

    if (busca.length < 1) {
        document.getElementById('resultado').innerHTML = '';
        return;
    }

    fetch('conexao.php?busca=' + encodeURIComponent(busca))
        .then(response => response.json())
        .then(data => {
            let resultadoHTML = '';

            if (data.length > 0) {
                data.forEach(item => {
                    resultadoHTML += `<a href="editar.php?id=${item.id}" class="buscacard">
                                        <img src="imgs/${item.img || 'SemImagem.png'}">
                                        <h1>${item.modelo}</h1>
                                      </a>`;
                });
            } else {
                resultadoHTML = '<div class="item">Não encontramos</div>';
            }

            document.getElementById('resultado').innerHTML = resultadoHTML;
        })
        .catch(error => console.error('Erro:', error));
}