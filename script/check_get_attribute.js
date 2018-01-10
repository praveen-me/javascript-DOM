var element = document.getElementById('one');
if (element.hasAttribute('class')) {
    var attr = element.getAttribute('class');
    
    document.getElementById('get_it').innerHTML = 'The first Item has class name : ' + attr;
}