class ArticleBuilder {
  constructor(articleElement) {
      this.articleElement = articleElement;
      
      this.articleContainer = document.createElement('div');
      // this.closeButton = document.createElement('span');
      this.title = document.createElement('h2');
      this.date = document.createElement('p');
      this.content = document.createElement('p');
      this.expandButton = document.createElement('span');

      this.buildArticle();
  }

  buildArticle() {
      this.articleContainer.classList.add('article');
      // this.closeButton.className = 'closeButton btn-hide';
      // this.closeButton.textContent = 'close';
      this.date.classList.add('date');
      this.date.textContent = 'Nov 5th, 2017'; //Make Dynamic Later
      this.expandButton.textContent = 'expand';
      this.expandButton.className = 'expandButton';

      this.title.textContent = this.articleElement.articleTitle;  //Make Dynamic Later
      this.content.textContent = this.articleElement.articleContent; //Make Dynamic Later

      // this.articleContainer.appendChild(this.closeButton);
      this.articleContainer.appendChild(this.title);
      this.articleContainer.appendChild(this.date);
      this.articleContainer.appendChild(this.content);
      this.articleContainer.appendChild(this.expandButton);

      const mainContainer = document.querySelector('.articles');
      mainContainer.appendChild(this.articleContainer);
  }
}

const siteContent = [
  {
      articleTitle: "Hello World",
      articleContent: "If you can read this, its working!"
  },
  {
    articleTitle: "Test Two",
    articleContent: "Heres another article to check out"
  },
  {
    articleTitle: "Finally",
    articleContent: "Its working as intended"
  }
]

const test1 = new ArticleBuilder(siteContent[0]);
const test2 = new ArticleBuilder(siteContent[1]);
const test3 = new ArticleBuilder(siteContent[2]);

// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.closeButton = this.domElement.querySelector('.closeButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // this.closeButton.textContent = 'close';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // this.closeButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.classList.toggle('btn-hide');
    // this.closeButton.classList.toggle('btn-hide');
    console.log('expand Button',this.expandButton);
    console.log('close Button', this.closeButton);
  }
}



/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(articleElement => new Article(articleElement));

