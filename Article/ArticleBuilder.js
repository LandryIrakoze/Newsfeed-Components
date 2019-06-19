class ArticleBuilder {
    constructor(articleElement) {
        this.articleElement = articleElement;
        
        this.articleContainer = document.createElement('div');
        this.closeButton = document.createElement('span');
        this.title = document.createElement('h2');
        this.date = document.createElement('p');
        this.content = document.createElement('p');
        this.expandButton = document.createElement('span');
  
        this.buildArticle();
    }
  
    buildArticle() {
        this.articleContainer.classList.add('article');
        this.closeButton.className = 'closeButton btn-hide';
        this.closeButton.textContent = 'close';
        this.date.classList.add('date');
        this.date.textContent = 'Nov 5th, 2017'; //Make Dynamic Later
        this.expandButton.textContent = 'expand';
        this.expandButton.className = 'expandButton';
  
        this.title.textContent = this.articleElement.articleTitle;  //Make Dynamic Later
        this.content.textContent = this.articleElement.articleContent; //Make Dynamic Later
  
        this.articleContainer.appendChild(this.closeButton);
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
  const test3 = new ArticleBuilder(siteContent[3]);