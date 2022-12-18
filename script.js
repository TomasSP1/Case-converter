

document.getElementById("upper-case").addEventListener("click", function() {
    let words = document.querySelector('textarea').value.toUpperCase();
    document.querySelector('textarea').value = words;
});

document.getElementById("lower-case").addEventListener("click", function() {
    let words = document.querySelector('textarea').value.toLowerCase();
    document.querySelector('textarea').value = words;
});

document.getElementById("proper-case").addEventListener("click", function() {
    let words = document.querySelector('textarea').value.split(' ').map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    }).join(' ');
    document.querySelector('textarea').value = words;
});

document.getElementById("sentence-case").addEventListener('click', function () {
    let words = document.querySelector('textarea').value.split(". ").map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    }).join('. ');
    document.querySelector('textarea').value = words;
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.querySelector('textarea').value;
    let filename = "text.txt"
    download(filename, text);
});