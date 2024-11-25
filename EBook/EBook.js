document.addEventListener("DOMContentLoaded", function () {
    const bookshelf = document.getElementById("bookshelf");
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    const booksData = [
        {
            "author": "Abdul Kalam",
            "country": "TamilNadu",
            "imageLink": "https://bookstech.in/cdn/shop/products/Wings-of-Fire-bookstech.in_280x.jpg?v=1639237131",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)",
            "pages": 342,
            "title": "Wings of Fire: An Autobiography of Abdul Kalam",
            "year": 1800,
            "price": 900
        },
        {
            "author": "Abdul Kalam",
            "country": "TamilNadu",
            "imageLink": "https://images.meesho.com/images/products/150658697/b7dzz_1200.jpg",
            "language": "English",
            "link": "https://unacademy.com/content/general-awareness/list-of-25-inspiring-books-written-by-dr-apj-abdul-kalam/",
            "pages": 320,
            "title": "You Are Born To Blossom",
            "year": 1952,
            "price": 1200
        },
        {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "https://cdn.marvel.com/u/prod/marvel/i/mg/6/f0/66797712f0eae/clean.jpg",
            "language": "English",
            "link": "https://www.marvel.com/comics/creators/9364/rod_reis",
            "pages": 209,
            "title": "X-MEN: BLOOD HUNT - MAGIK #1",
            "year": 2001,
            "price": 1100
        },
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg",
            "language": "Danish",
            "link": "https://www.marvel.com/comics/creators/9364/rod_reis",
            "pages": 784,
            "title": "A.X.E.: JUDGMENT DAY ",
            "year": 2022,
            "price": 1000
        },
        {
            "author": "Dante Alighieri",
            "country": "Italy",
            "imageLink": "https://cdn.marvel.com/u/prod/marvel/i/mg/4/d0/667977665c9cb/portrait_uncanny.jpg",
            "language": "Italian",
            "link": "https://www.marvel.com/comics/creators/9364/rod_reis",
            "pages": 928,
            "title": "GODZILLA #1 FACSIMILE EDITION",
            "year": 2024,
            "price": 800
        },
        {
            "author": "Unknown",
            "country": "Sumer and Akkadian Empire",
            "imageLink": "https://cdn.marvel.com/u/prod/marvel/i/mg/1/60/66797712f067e/portrait_uncanny.jpg",
            "language": "Akkadian",
            "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
            "pages": 160,
            "title": "Little Marvels",
            "year": 2024,
            "price": 800
        },

        {
            "author": "Unknown",
            "country": "India Iran Iraq Egypt Tajikistan",
            "imageLink": "https://cdn.marvel.com/u/prod/marvel/i/mg/4/50/66797712f1e9b/clean.jpg",
            "language": "Arabic",
            "link": "https://www.marvel.com/comics/creators/9364/rod_reis",
            "pages": 288,
            "title": "X-MEN: HEIR OF APOCALYPSE",
            "year": 1200,
            "price": 23.55
        },
        {
            "author": "Benjamin Percy",
            "country": "Iceland",
            "imageLink": "https://cdn.marvel.com/u/prod/marvel/i/mg/4/80/66797752bd6c7/clean.jpg",
            "language": "Old Norse",
            "link": "https://www.marvel.com/comics/creators/9364/rod_reis",
            "pages": 384,
            "title": "HELLVERINE ",
            "year": 2024,
            "price": 1800
        },
        {
            "author": "Greg Weisman",
            "country": "United Kingdom",
            "imageLink": "https://cdn.marvel.com/u/prod/marvel/i/mg/4/10/6679774ff2a03/clean.jpg",
            "language": "English",
            "link": "https://www.marvel.com/comics/creators/10174/greg_weisman",
            "pages": 226,
            "title": "THE SPECTACULAR SPIDER-MEN ",
            "year": 2024,
            "price": 1300
        },
        {
            "author": "james",
            "country": "France",
            "imageLink":"https://cdn.marvel.com/u/prod/marvel/i/mg/3/90/66154192d7df1/portrait_uncanny.jpg" ,
            "language": "French",
            "link": "https://www.marvel.com/comics/series/34717/invincible_iron_man_2022_present",
            "pages": 443,
            "title": "INVINCIBLE IRON MAN ",
            "year": 2024,
            "price": 99.99
        },
        {
            "author": "Albet",
            "country": "Republic of Ireland",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405532474i/22733729.jpg",
            "language": "French, English",
            "link": "https://www.goodreads.com/author/show/17650479.Becky_Chambers",
            "pages": 256,
            "title": "The Long Way to a Small, Angry Planet",
            "year": 2022,
            "price":1800
        },
        {
            "author": "Giovanni Boccaccio",
            "country": "Italy",
            "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679948186i/123850255.jpg",
            "language": "Italian",
            "link": "https://www.goodreads.com/author/show/17650479.Becky_Chambers",
            "pages": 1024,
            "title": "Monje y robot",
            "year": 2012,
            "price": 1000
        },
        {
            "author": "Thiruvaluvar",
            "country": "TamilNadu",
            "imageLink": "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/mzj190.webp",
            "language": "Tamil",
            "link": "https://www.exoticindia.com/book/details/different-interpretations-of-valluar-tamil-mzj190/",
            "pages": 224,
            "title": "Different Interpretations of Valluar ",
            "year": 70,
            "price": 900
        },
       
        {
            "author": "Ryan March",
            "country": "Algeria, French Empire",
            "imageLink": "https://books.disney.com/content/uploads/2024/05/9781368081788.jpg",
            "language": "English",
            "link": "https://books.disney.com/book/camp-mickey-and-minnie-one-wild-summer/",
            "pages": 185,
            "title": "Camp Mickey and Minnie: One Wild Summer",
            "year": 2014,
            "price": 1500
        },
      
        {
            "author": "Kirk Reedstrom",
            "country": "France",
            "imageLink": "https://books.disney.com/content/uploads/2023/11/duckandmoosemooseblastsoff-280x415.jpg",
            "language": "English",
            "link": "https://books.disney.com/book/duck-and-moose-moose-blasts-off/",
            "pages": 505,
            "title": "Duck and Moose: Moose Blasts Off!",
            "year": 2023,
            "price": 62.66
        },
        {
            "author": "Rick Riordan",
            "country": "Spain",
            "imageLink": "https://books.disney.com/content/uploads/2023/08/lightningthieftiein-280x411.jpg",
            "language": "English",
            "link": "https://books.disney.com/book/percy-jackson-and-the-olympians-book-one-lightning-thief-disney-tie-in-edition/",
            "pages": 1056,
            "title": "Percy Jackson and the Olympians",
            "year": 2024,
            "price": 1500
        },
        {
            "author": "Ashley Poston",
            "country": "England",
            "imageLink": "https://books.disney.com/content/uploads/2023/05/hawkeyeking-280x414.jpg",
            "language": "English",
            "link": "https://books.disney.com/book/hawkeye-bishop-takes-king/",
            "pages": 544,
            "title": "Hawkeye: Bishop Takes King",
            "year": 2023,
            "price": 900
        },
        {
            "author": " National Geographic Kids",
            "country": "Russia",
            "imageLink": "https://books.disney.com/content/uploads/2023/02/9781426374197-280x373.jpg",
            "language": "English",
            "link": "https://books.disney.com/book/my-first-atlas-of-the-world-3rd-edition/",
            "pages": 194,
            "title": "My First Atlas Of the World",
            "year": 2014,
            "price": 500
        },
        {
            "author": "Joseph Conrad",
            "country": "United Kingdom",
            "imageLink": "https://books.disney.com/content/uploads/2023/08/9781368094696-280x420.jpg",
            "language": "English",
            "link": "https://books.disney.com/book/pack-light/",
            "pages": 320,
            "title": "Pack Light",
            "year": 2023,
            "price": 450
        },
        {
            "author": "Justina Ireland, Tessa Gratton",
            "country": "Germany",
            "imageLink": "https://books.disney.com/content/uploads/2023/11/starwarsthehighrepublicdefythestorm-280x414.jpg",
            "language": "German",
            "link": "https://books.disney.com/book/star-wars-the-high-republic-defy-the-storm/",
            "pages": 600,
            "title": "Star Wars: The High Republic: Defy the Storm",
            "year": 1929,
            "price": 1200
        },
       
    ];
    const colors = ["white", "white", "white", "white", "white",
                     "white", "white", "white", "white", "white",
                    "white", "white", "white", "white", "white",
                    "white", "white", "white", "white", "white",];

                    let cart = [];
                    let totalCost = 0;
                
                    function showBooks() {
                        bookshelf.innerHTML = "";
                        booksData.forEach((book, index) => {
                            const bookElement = document.createElement("div");
                            bookElement.classList.add("book");
                            bookElement.innerHTML = `
                        <img src="${book.imageLink}" alt="${book.title}">
                        <h4>${book.title}</h4>
                        <p class="price">Price: $${book.price}</p>
                        <div class="details">
                          <p>By ${book.author}</p>
                          <p>Year:${book.year}</p>
                          <p>Language:${book.language}</p>
                          <p>Country:${book.country}</p>
                          <p>Pages:${book.pages}</p>
                          <a href=${book.link}>Link</a>
                          <br>
                          <br>
                          <button class="add-to-cart">Add to Cart</button>
                        </div>
                        `;
                            const style = document.createElement("style");
                            style.textContent = `.book:nth-child(${index + 1}):hover .details { background-color: ${colors[index % colors.length]}; }`;
                            document.head.appendChild(style);
                
                            const addToCartButton = bookElement.querySelector(".add-to-cart");
                            addToCartButton.addEventListener("click", () => {
                                cart.push(book);
                                totalCost += parseFloat(book.price);
                                updateCartDisplay();
                            });
                            bookshelf.appendChild(bookElement);
                        });
                    }
                    showBooks();
                
                    function updateCartDisplay() {
                        const cartItemsElement = document.getElementById("cart-items");
                        const totalPriceElement = document.getElementById("total-price");
                        cartItemsElement.innerHTML = "";
                        cart.forEach((book) => {
                            const cartItemElement = document.createElement("li");
                            cartItemElement.innerHTML = `
                                <div>
                                    <img src="${book.imageLink}" alt="${book.title}" width="150px">
                                    <h6>${book.title}</h6>
                                    <p>Price: $${book.price}</p>
                                </div>
                            `;
                            cartItemsElement.appendChild(cartItemElement);
                        });
                    
                        totalPriceElement.textContent = `$${totalCost.toFixed(2)}`;
                        saveCartToStorage();
                    }
                
                    const cartLink = document.getElementById("cartLink");
                    cartLink.addEventListener("click", (event) => {
                        event.preventDefault();
                        main.innerHTML = "";
                        const cartContainer = document.createElement("div");
                        cartContainer.id = "cart";
                        cartContainer.innerHTML = `
                    <h2>Cart Items <i class='bx bx-shopping-bag bx-tada' style='color:#171717'  ></i></h2>
                    <ul id="cart-items"></ul>
                    <p>Total: <span id="total-price">$0</span></p>
                  `;
                        main.appendChild(cartContainer);
                        updateCartDisplay();
                    });
                
                    booksLink.addEventListener("click", function (event) {
                        event.preventDefault();
                        main.innerHTML = `
                        <div id="bookshelf">
                            <a href="Ebook.html"></a>
                        </div>
                    `;
                        main.appendChild(bookshelf);
                        header.style.display = "none";
                    });
                });
                
                

                const tabCard = document.querySelectorAll("[data-tab-card]");
                
                let lastTabCard = tabCard[0];
                
                const navigateTab = function () {
                  lastTabCard.classList.remove("active");
                  this.classList.add("active");
                  lastTabCard = this;
                }
                
                addEventOnelem(tabCard, "click", navigateTab);



                var myIndex = 0;
                carousel();
                
                function carousel() {
                  var i;
                  var x = document.getElementsByClassName("mySlides");
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                  }
                  myIndex++;
                  if (myIndex > x.length) {myIndex = 1}    
                  x[myIndex-1].style.display = "block";  
                  setTimeout(carousel, 2000); // Change image every 2 seconds
                }



                