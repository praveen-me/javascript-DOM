var element = document.querySelectorAll('li.hot');
if (element.length > 0) {
    for (var i = 0; i element.length; i++) {
        element[i].className = 'cool';
    }
}