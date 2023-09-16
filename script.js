const segurandobotao = document.querySelector ('.segurando_botao')
const segurandoiconbotao = document.querySelector('.segurando_botao i')
const dropDownMenu = document.querySelector('.dropdown_menu')

segurandobotao.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const estaaberto = dropDownMenu.classList.contains('open')

    segurandoiconbotao.classList = estaaberto
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
