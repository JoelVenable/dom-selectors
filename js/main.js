
const body = document.querySelector('body'),
  articleObject = {
  header: "Welcome to my blog",
  content: "Copper mug small batch meh plaid flexitarian. Before they sold out occupy chartreuse hot chicken, la croix fingerstache offal VHS air plant.  Humblebrag blue bottle  cred af jean shorts etsy copper mug chicharrones cronut art party scenester pabst chillwave.Distillery 8 - bit  pabst fashion axe, tousled cloud bread bushwick roof party franzen quinoa fixie.",
  aside_header: 'Very important box header',
  aside_content: 'Messenger bag sriracha tote bag intelligentsia air plant  leggings.',
  footer: "Author: Joel Venable"
}




createArticle(articleObject);


//  Assignment 1
var articleHeader = document.querySelector('.article__header');
articleHeader.textContent = "Welcome to the Joel Venable Blog";

//  Assignment 2 
var allHeaders = document.querySelectorAll('.article__header');
allHeaders.forEach(header => {
  header.classList.add('important');
});















function createHtmlElement(tag, parent, content, classArray) {
  var element = document.createElement(tag);
  element.textContent = content;
  if (classArray !== undefined) {
    classArray.forEach(className => {
      element.classList.add(className);
    });
  };
  parent.appendChild(element);
  return element;
}

function createArticle(articleObject) {
  let article = createHtmlElement('article',body,'',['article']);
  createHtmlElement('section',article,articleObject.header,['article__header']);
  createHtmlElement('section',article,articleObject.content,['article__content']);
  let aside = createHtmlElement('aside',article,'',['aside_box--dark', 'dashed']);
  let div = createHtmlElement('div',aside,articleObject.aside_header,['article__header']);
  createHtmlElement('p',aside,articleObject.aside_content);
  createHtmlElement('section',article,articleObject.footer,['article__footer']);
}