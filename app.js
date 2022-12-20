const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".btn-item")


window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu)
});


filterBtns.forEach(function(btn){
btn.addEventListener("click",function(e){
  const category = e.currentTarget.dataset.id;
  const menuCategory = menu.filter(function(menuItem){
   
    if(menuItem.category === category) {
      return menuItem
    }

  });
 
  if(category === "All") {
    displayMenuItems(menu);
  } else {
    displayMenuItems(menuCategory);
  }

});
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map (function(item) {
    
    return `
      <div class="menu-items col-sm-5">
          <div class="col-sm-4">
           <img class="photo" src=${item.img} alt=${item.title}>
         </div>
          <div class="col-sm-8">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 >${item.price}</h4>
            </div>
            <p class="menu-info">${item.desc}</p>
       </div>   
      </div>
    
  `;

  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML=displayMenu

}
const menu = [
  {
    id: 1,
    title: "Kazandibi",
    category: "Sütlü",
    price: 10.99,
    img:
      "https://www.kaloriver.com/uploads/nutrition/3042/kazandibi.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, doloremque? Velit quas totam mollitia minus, culpa iste aut itaque doloremque numquam vero ducimus.`,
  },
  {
    id: 2,
    title: "Frambuaz Küpü",
    category: "Pasta",
    price: 7.99,
    img:
      "https://www.tatligel.com/images/urunler/Frambuaz-Kupu-resim-64.png",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi assumenda laudantium corrupti. `,
  },
  {
    id: 3,
    title: "Profiterol",
    category: "Sütlü",
    price: 8.99,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/profiterol-b210f9f6-203c-450d-bcf1-2ea084c0dc4b.jpg",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit labore eaque, tempore a enim veritatis corrupti omnis repellat cumque iusto eius?`,
  },
  {
    id: 4,
    title: "Karadutlu Dondurma",
    category: "Dondurma",
    price: 5.99,
    img:
      "https://mado.com.tr/storage/images/1492067806_soc.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat nesciunt eaque possimus nobis excepturi quo ratione nulla rerum tempore ad quisquam, aliquam laborum iste minus incidunt explicabo itaque. Asperiores, tempora.
    `,
  },
  {
    id: 5,
    title: "Bademli Dondurma",
    category: "Dondurma",
    price: 12.99,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2016/05/bademli-dondurma.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptas at voluptates placeat tempore, dicta asperiores. `,
  },
  {
    id: 6,
    title: "Meyve Küpü",
    category: "Pasta",
    price: 9.99,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJG-JSl5ZSb76CWQOcFF3f51L3oGOn75zAxbvF7kq302jn9cZQsdNdb8HMTHKwzf0cSg&usqp=CAU",
    desc: `Et fugiat nesciunt eaque possimus nobis excepturi `,
  },
  {
    id: 7,
    title: "Fırın Sütlaç",
    category: "Sütlü",
    price: 15.99,
    img:
      "https://yemekyemek.net/wp-content/uploads/2019/11/firin-sutlac-tarifi.jpeg",
    desc: `Aliquam laborum iste minus incidunt explicabo itaque `,
  },
  {
    id: 8,
    title: "Antep Fıstıklı Dondurma",
    category: "Dondurma",
    price: 12.99,
    img:
      "https://www.alibabasut.com/wp-content/uploads/2021/08/IMG_0118.jpg",
    desc: `Ratione nulla rerum tempore ad quisquam`,
  },
  {
    id: 9,
    title: "Çikolatalı Pasta",
    category: "Pasta",
    price: 3.99,
    img:
      "http://www.livashop.com/Uploads/UrunResimleri/buyuk/cikolatali-fistikli-pasta-64af64.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptas at voluptates placeat tempore, dicta asperiores.`,
  },
  {
    id: 10,
    title: "Vişneli Dondurma",
    category: "Dondurma",
    price: 3.99,
    img:
      "https://mado.com.tr/storage/images/1491897668_soc.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptas at voluptates placeat tempore, dicta asperiores.`,
  },
  {
    id: 11,
    title: "Muhallebili Kadayıf",
    category: "Sütlü",
    price: 3.99,
    img:
      "https://www.denenmistarifler.net/wp-content/uploads/2020/12/95072685_521623885157038_2696234537477248812_n.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus voluptas at voluptates placeat tempore, dicta asperiores.`,
  },



];




