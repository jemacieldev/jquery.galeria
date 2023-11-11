$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    // Selecionando o botão de adicionar foto e implementando comportamento de abrir aba ao clicar.

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });

    // Selecionando o botão de adicionar e implementando função de adicionar foto no conteúdo principal da página.

    $('form').on('submit', function (event) {
        event.preventDefault();
        const urlNovaImg = $('#imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        // display none serve para fazer com que consiga add uma transicão ao add uma nova imagem
        $(`<img src="${urlNovaImg}" />`).appendTo(novoItem);
        $(`
    <div class="imagem-link">
        <a href="${urlNovaImg}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
    </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        // fadeIn é para add a transição de imagem
        $('#imagem-nova').val('');
    });
});
