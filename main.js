const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');

        });
    });





});

window.onload = () => {

    const uploadFile = document.getElementById("upload-file");
    const uploadBtn = document.getElementById("upload-btn");
    const uploadText = document.getElementById("upload-text");


    uploadBtn.addEventListener("click", function () {
        uploadFile.click();
    });

    uploadFile.addEventListener("change", function () {
        if (uploadFile.value) {
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        } else {

            uploadFile.innerText = "Файл не выбран"

        }
    });
};



