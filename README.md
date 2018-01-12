# javascript-DOM
This is a repo when i learning DOM. So, I want to share it.

### Q- What is DOM ?
The **Document Object Model (DOM)** specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.

## Table of Contents
- [Making Model of HTML Page](#making-model-of-html-page)
- [Working with DOM tree](#working-with-dom-tree)
- [Select an Individual Node](#select-an-individual-node)
- [Select Multiple Elements](#select-multiple-elements)
- [Transversing Elements Nodes](#transversing-elements-nodes)
- [Work on Elements](#work-on-elements)
- [Work with HTML Content](#work-with-html-content)
- [Access or Update Attribute values](#access-or-update-attribute-values)
- [Selecting Elements using ID attributes](#selecting-elements-using-id-attributes)
- [NodeList DOM queries that return More than one Element](#nodelist-dom-queries-that-return-more-than-one-element)
- [Live NodeList](#live-nodelist)
- [Static NodeList](#static-nodelist)
- [Selecting an Element from a NodeList](#selecting-an-element-from-a-nodelist)
- [Selecting Elements using Class attributes](#selecting-elements-using-class-attributes)
- [Selecting Elements by Tag name](#selecting-elements-by-tag-name)
- [Selecting Elements Using CSS Selectors](#selecting-elements-using-selectors)
- [Repeating Actions for Entire NodeList](#repeating-actions-for-entire-nodelist)
- [Looping Through a NodeList](#looping-through-a-nodelist)
- [Tranversing the DOM](#transversing-the-dom)
- [Previous and Next Sibling](#pravious-and-next-sibling)
- [First and Last Child](#first-and-last-child)
- [Access and Update a Text Node with NodeValue](#access-and-update-a-text-node-with-nodevalue)
- [Accessing and Changing a Text Node](#accessing-and-changing-a-text-node)
- [Accessing and Update text with TextContent](#accessing-and-update-text-with-textContent)
- [Accessing Text Only](#accessing-text-only)
- [Adding or Removing HTML content](#adding-or-removing-html-content)
- [Cross Site Scripting(XSS)](#cross-site-scripting)
- [Attribute Nodes](#attribute-nodes)
- [Check for an Attribute and Get it's Values](#check-for-an-attribute-and-get-its-values)


### Making Model of HTML Page
When the browser loads a web page, it creates a model of the page in the memory. The DOM is called an object model (the DOM tree) is made of objects.
Each object represents a different part of the page located in the browser window.
It makes by using four types of node:
- Document Node
- Element Node
- Attribute Node
- Text Node


### Working with DOM tree
Access and updating the DOM tree involves two steps:-
- Locate the node that represents the element you want to work with.
- Use it's text content, child elements, and attributes.

#### Select an Individual Node
1. `getElementById()`<br />
Uses the value of an element's id attribute
2. `querySelector()`<br />
Uses a CSS selectors, and returns the first matching element.

#### Select Multiple Elements
1. `getElementsByClassName()`<br />
Selects all elements that have a specific value for their class attribute.
2. `getElementsByTagName()`<br />
Selects all eleement that have the specified tag name.
3. `querySelectorAll()`<br />
Uses a  CSS selector to match all amtching elements.

#### Transversing Elements Nodes
1. `parentNode`<br/>
Selects the parent of the  current element node.
2. `previousSibling / nextSibling`<br/>
Selects the previous or next sibling from the DOM tree.
3. `firstChild / lastChild`<br/>
Selects the first or last child of the current element.

#### Work on Elements
We can access or update content of a text node by `nodeValue`.

#### Work with HTML Content
These methods let us create nodes, add nodes to a tree and remove nodes from tree. These are:-<br/>
- `createElement()`
- `createTextNode()`
- `appendChild() / removeChild()`

#### Access or Update Attribute values
- `className / id`
- `hasAttribute()`
- `getAttribute()`
- `setAttribute()`
- `removeAttribute()`

#### Selecting Elements using ID attributes
```
var set_one = document.getElementById('one');
set_one.className = 'cool';
```
#### NodeList DOM queries that return More than one Element
When a DOM method can return more than one element, it returns a NodeList(even a nodeList is a collection of elements nodes.Each node is given an index number(a number that start at zero, just like an array).<br/>
When a DOM query returns a NodeList we may want to:-<br/>
- Select one element from the nodeList.
- Loop through each item in the nodeList and perform the same statement on each of the elements nodes.<br/>
NodeList look like array and are numbered like array, but they are not actually arrays, they are a type of collection called **collection**.<br/>
- The `length` property tells us how many item are in nodeList.
- The `item()` method returns a specific node from the nodeList when we tell it the index number of the item.

#### Live NodeList
In that , when our script updates the page, the nodeList is updated at the same time. The methods beginning `getElementsBY---` methods return live nodeList.

#### Static NodeList
When our script updates the page, the nodeList is not updated to reflect the changes mede by the script.The new methods that begin `querySelector()` return static nodeList.

#### Selecting an Element from a NodeList
There are two ways to select an element from a nodeList:-<br./>
- The `item()` method  and
- The array syntax<br/>
Both require the index number of the element you want.<br/>

##### 1. The `item()` method:-<br/>
NodeList have a method called `item()` which will return an individual node from the nodeList. We specify the index number of the element we want the parameter of the  method.
```
var elements  = document.getElementsByClassName('hot');
if(elements.length >= 1){
  var firstItem = element.item(0);
}
```
##### 2. The array method:-<br/>
Array syntax is preffered over the `item()` method because it is faster. Before selecting a node from a nodeList check that it contains nodes. If we repeatedly use the nodeList, store it in a variable.
```
var elements = document.getElementByClassName('hot');
if (elements.length >= 1){
  var firstItem = elements[0];
}
```

#### Selecting Elements using Class attributes
```
var element = document.getElementsyClassName('hot'){
if(element.length >= 1){
  element[2].className = 'cool';
}
```
#### Selecting Elements by Tag name
```
var elements = document.getElementsByTagName('li'){
if (elements.length > 0){
  elements[1].className = 'cool';
}
```
#### Selecting Elements Using CSS Selectors
```
var element = document.querySelector('li.hot');
element.className = 'cool'
var element = document.querySelectorAll('li.hot');
element[1].className= 'normal';
```

#### Repeating Actions for Entire NodeList
When you have nodeList, we can loop through each node in the collection and apply the same statements to each.
```
var hotItems = document.querySelectorAll('li.hot');
for(var i = 0; i < hotItems.length; i++){
  hotItems[i].className = 'cool';
}
```

#### Looping Through a NodeList
```
var element = document.querySelectorAll('li.hot')
if(element.length > 0){
  for(var i = 0; i <element.length; i++){
    element[i].className = 'cool';
    }
}
```

#### Tranversing the DOM
When we have an element node, we can select another element in relation to it using thses five properties:-
- `parentNode`
- `previousSibling / nextSibling`
- `firstChild / lastChild`

#### Previous and Next Sibling
```
var startItem = document.getElementById('two');
startItem.previousSibling.className = 'cool';
startItem.nextSibling.className = 'normal';
```

#### First and Last Child
```
var startItem = document.getElementysByTagName('ul')[0];
startItem.firstChild.className = 'cool';
startItem.lastChild.className = 'normal';
```
#### Accessing and Update text with TextContent
The `textContent` property allows us to collect or update just the text that is in the containing element (and its children).<br/>
`<li id="one"><em>fresh</em>figs</li>`<br/>
In that above element, to collect the text from the `<li>` element(and ignore any markup inside the element), we can use the `textContent` property on the containg `<li>` element.<br/>

#### Accessing Text Only
``` 
var msg = document.getElementById('one').textContent;
document.getElementById('get_it').textContent = msg;
var set_it = document.getElementById('one');
set_it.textContent = 'Dates';
```

#### Adding or Removing HTML content
There are two ways to adding and removing content from a DOM tree:- 
- The `innerHTML` property and
- DOM Manipulation method

##### 1. The `nnerHTML`method
The `innerHTML` can be used on any element node. It is used both to retrieve and replace content. To update an element, new content is provided as a string. It can contain markup for descendent elements.

##### 2. The DOM Manipulation
DOM Manipulation easily targets individual nodes in the DOM tree, whereas `innerHTML` is better suited to updating entire fragments. It refers to a set of DOM methods that allows us to create element and text nodes, and then attach them to the DOM tree or remove from them to DOM tree.

###### Adding Content
To add content, we can use a DOM method to create new content one node at a time and store it in a variable. Then another DOM method is used to attach it to the  right place in the DOM tree.

###### 1.Access and Update Text and Markup with `innerHTML`:
The `innerHTML` property will get the content of an element and return it as one long string, including any markup that the elements contains.
```
var elementn = document.getElementById('one');
element.innerHTML;
element.innerHTML='<a href=\"http://www.github.com\">'+element.innerHTML+'</a>'
```
###### 2. Adding element using DOM Manipulation:
DOM Manipulation offers another technique to add new content to a page (rather than `innerHTML`). It involves three steps:-</br>
- Create the Element<br/>
`createElement()`
- ive it Content<br/>
`createTextNode()`
- pp







