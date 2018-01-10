var n_element = document.createElement('li');
var n_textNode = document.createTextNode('Quino');
n_element.appendChild(n_textNode);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(n_element);