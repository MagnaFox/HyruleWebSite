document.getElementById('link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var img = document.getElementById('sword-image');
    img.style.display = img.style.display === 'none' || img.style.display === '' ? 'block' : 'none';
});
