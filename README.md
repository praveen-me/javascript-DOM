# javascript-DOM
This is a repo when i learning DOM. So, I want to share it.

### Q- What is DOM ?
The **Document Object Model (DOM)** specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.

## Table of Contents
- [Making Model of HTML Page](#making-model-of-html-page)
- [Working with DOM tree](#working-with-dom-tree)
- [Select an Individual Node](#select-an-individual-node)
- [Select Multiple Elemets(NodeLists)](#select-multiple-elements-nodelists)
- [Transversing b/w Elements Nodes](#transversing-b/w-elements-nodes)
- [Work on Element](#work-on-element)
- [Work with HTML Content](#work-with-html-content)
- [Access or Update Attribute values](#access-or-update-attribute-values)
- [Methods that return One or More Elements(As a NodeList)](#method-that-return-one-or-more-elements-as-a-nodelists)
- [Selecting Elements using ID attributes](#selecting-elements-using-id-attribute)
- [NodeList : DOM queries that return More than one Element](#nodelists-dom-queries-that-return-more-than-one-element)
- [Live NodeList](#live-nodelist)
- [Static NodeList](#static-nodelist)
- [Selecting an Element from a NodeList](#selecting-an-element-from-a-nodelist)
- [The item() method](#the-item-method)
- [The Array Method](#the-array-method)
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

##### Access the Elements:

Select an individual element:-
1. `getElementById()`<br />
Uses the value of an element's id attribute
2. `querySelector()`<br />
Uses a CSS selectors, and returns the first matching element.

Select multiple elements(nodelist):-
1. `getElementsByClassName()`<br />
Selects all elements that have a specific value for their class attribute.
2. `getElementsByTagName()`<br />
Selects all eleement that have the specified tag name.
3. `querySelectorAll()`<br />
Uses a  CSS selector to match all amtching elements.

Tranversing b/w elements nodes:-
1. `parentNode`<br/>
Selects the parent of the  current element node.
2. `previousSibling / nextSibling`<br/>
Selects the previous or next sibling from the DOM tree.
3. `firstChild / lastChild`<br/>
Selects the first or last child of the current element.







