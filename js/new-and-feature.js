const product_list = document.getElementById('product-list');

const prod_list = [
    {
    img: "./img/new-feature-page/Feature-4.png",
    status: 'Just In',
    name: 'Duck',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$120'
    },
        {
    img: "./img/new-feature-page/Feature-5.jpeg",
    status: 'Just In',
    name: 'Air Jordan 1 Retro',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$180'
    },
        {
    img: "./img/new-feature-page/Featur-6.png",
    status: 'Just In',
    name: 'Nike Duck Low',
    sub_name : "Men's shoes",
    color :'1 colors',
    price : '$90'
    },
        {
    img: "./img/new-feature-page/Feature-7.png",
    status: 'Just In',
    name: 'Nike Air Max 97',
    sub_name : "Men's shoes",
    color :'1 colors',
    price : '$180'
    },
        {
    img: "./img/new-feature-page/Feature-8.png",
    status: 'Just In',
    name: 'Duck',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$120'
    },
        {
    img: "./img/new-feature-page/Feature-9.png",
    status: '',
    name: 'Spizke1 Low ',
    sub_name : "Men's shoes",
    color :'1 colors',
    price : '$175'
    },
        {
    img: "./img/new-feature-page/Feature-10.png",
    status: '',
    name: 'Nike Tech Pack',
    sub_name : "Men's shoes",
    color :'1 colors',
    price : '$155'
    },
        {
    img: "./img/new-feature-page/Feature-11.png",
    status: 'Just In',
    name: 'Duck',
    sub_name : "Kid's shoes",
    color :'21colors',
    price : '$80'
    },
        {
    img: "img/new-feature-page/Feature-12.png",
    status: 'Just In',
    name: 'Nike SB',
    sub_name : "Men's shoes",
    color :'1 colors',
    price : '$50'
    },
        {
    img: "./img/new-feature-page/Feature-13.png",
    status: 'Just In',
    name: 'Jordan',
    sub_name : "Women's Shoes",
    color :'2 colors',
    price : '$120'
    },
        {
    img: "img/new-feature-page/Featrue-14.png",
    status: 'Launching in SNKRS',
    name: 'Jumpman Jack TR',
    sub_name : "Men's shoes",
    color :'1 colors',
    price : '$120'
    },
        {
    img: "./img/new-feature-page/Feature-15.png",
    status: '',
    name: 'Jordan 1 Mid SE',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$120'
    },
        {
    img: "./img/new-feature-page/Feature-16.jpeg",
    status: 'Just In',
    name: 'Jordan 2/3',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$120'
    },
        {
    img: "./img/new-feature-page/Feature-17.png",
    status: '',
    name: 'Nike Air Max Dn',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$160'
    },
        {
    img: "./img/new-feature-page/Feature-18.png",
    status: 'Just In',
    name: 'Air Jordan 1 Mid SE Craft',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$135'
    },
        {
    img: "./img/new-feature-page/Feature-19.png",
    status: 'Just In',
    name: 'Duck',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$120'
    },
        {
    img: "./img/new-feature-page/Feature-20.png",
    status: '',
    name: 'Nike Dunck Low',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$130'
    },
        {
    img: "./img/new-feature-page/Feature-21.png",
    status: 'Just In',
    name: 'Nike Air Max DN',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$160'
    },
        {
    img: "./img/new-feature-page/Red_Air.png",
    status: 'Just In',
    name: 'Duck',
    sub_name : "Men's shoes",
    color :'2 colors',
    price : '$120'
    },
    {
      img: "img/new-feature-page/Feature-22.png",
      status: 'Just In',
      name: 'Air Jordan 1 Retro Hight OG',
      sub_name : "Men's shoes",
      color :'1 colors',
      price : '$180'
      },

]

prod_list.forEach((item,i)=>{
    product_list.innerHTML = product_list.innerHTML + `
    <a href="#" class="product-info-style">
    <img src="${item.img}" alt="" width="100%" >
    <div class="product-info">
      <div class="status">
        <p>${item.status}</p>
      </div>
      
      <div class="product-name">
        <p>${item.name}</p>
        <div class="sub-name">
          <p>${item.sub_name}</p>
          <p>${item.color}</p>
        </div>
       
      </div>
      <div class="price">
        <p>${item.price}</p>
      </div>

    </div>


</a>
    `
})
