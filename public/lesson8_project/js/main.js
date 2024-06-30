

document.addEventListener('DOMContentLoaded', function() {

    let headerText = document.querySelector('header').textContent;
    let headerParagraph = document.getElementById('headerText');
    headerParagraph.textContent = `The article title is  ${headerText} `;


    let paragraphs = document.getElementsByTagName('p').length;
    let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
    let listItemsCount = document.getElementById('list').getElementsByTagName('li').length;
    let links = document.getElementsByTagName('a').length;
    let maxlinks = 3;
let msg = ' '
    if (links > maxlinks) {
     msg = `This is too many links. The limit is ${maxlinks}.`
    } else {
         msg = 'Number of links is within the limit'
    }
        let paragraphItems = document.getElementById('paragraphitems');
        paragraphItems.textContent = `This article contains ${paragraphs} paragraphs, ${listItemsCount} list items, ${headings} heading tags, and ${links} links. ${msg}`;
    })