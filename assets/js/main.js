document.getElementById('link').addEventListener('click', function () {
    var img = document.getElementById('sword-image');
    if (img.style.display === 'none') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});