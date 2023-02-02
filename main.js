const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
      
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `Pão brioche, blend bovino 160 gramas, queijo cheddar fatiado, bacon crocante, cebola caramelizada, molho especial. Acompanha porção de batata 200g, molho da casa! `,
      history: `As origens do hambúrguer são incertas e permeadas de mitos e histórias, porém é bem provável que tenha sido preparado pela primeira vez da maneira como o conhecemos hoje em fins do século XIX ou começo do século XX. Em 1904, nos Estados Unidos, na feira mundial de Saint Louis, capital de Missouri, foi apresentada oficialmente esta iguaria ao público americano. `,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 8,
      title: "American Classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    },
    {
      id: 10,
      title: "Bison Steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      history: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum est ullam illum harum obcaecati voluptas rerum a maxime soluta.  magnam repudiandae ea corporis `,
    
    }
  ]

  const produtos = document.querySelector('.produtos');
  const listaBotao = document.querySelectorAll('.menu__botoes');
  window.addEventListener('DOMContentLoaded', function(){
    carregaProdutos(menu);
    filtro();
  
  })

  function carregaProdutos(dispMenu){
    let displayMenu = dispMenu.map(function(item){
      return `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="produtos__produto">
            <img src="${item.img}" alt="" class="produto__img">
            <div class="produto__info">
                <header>
                <h4 class="produto__titulo">${item.title}</h4>
                <h4 class="produto__preco">R$${item.price}</h4>
                </header>
            </div>
                <p class="produto__texto">${item.desc}</p>
             
          </div>
        </div>
        <div class="flip-card-back">
        <h4 class="produto__titulo">Você sabia que?!</h4>
          <p class="produto__texto">${item.history}</p>
        </div>
      </div>
    </div> `
      
    })
    displayMenu = displayMenu.join("");
    //console.log(displayMenu)
   produtos.innerHTML = displayMenu;
   //console.log(produtos)
  }
 

  function filtro(){
    listaBotao.forEach(function (item){
      item.addEventListener('click',function(btn){
        //console.log(btn.target.dataset.id);
        const botaoClicado = btn.target.dataset.id;
        const categoria = menu.filter(function(menuitem){
          if(menuitem.category === botaoClicado){
            return menuitem;
          }
        });
        if(botaoClicado === "all"){
          carregaProdutos(menu);
        } else{
          carregaProdutos(categoria);
        }
      });
    });
  }

  

  document.getElementById('darkMode').addEventListener('click', function(){
    
    document.body.classList.toggle("dark-mode");
  })