const {
  createApp
} = Vue



createApp({
  created() {

  },
  data() {
    return {

      //Preload cube
      cubeArrayOfObjct: [{
          id: '1',
          color: 'green',
        },
        {
          id: '2',
          color: 'blue',
        },
        {
          id: '3',
          color: 'yellow',
        },
        {
          id: '4',
          color: 'red',
        },
        {
          id: '5',
          color: 'pink',
        }
      ],

      headerTitle: ' Organica',
      headerImg: 'src/img/blog-1.jpg',
      menu: ['Home', 'About', 'Shop', 'Blog', 'Products', 'Contact'],
      menuArrayOfObjects: [{
          name: 'Home',
          link: 'home',
        },
        {
          name: 'About',
          link: 'about'
        },
        {
          name: 'Shop',
          link: 'shop'
        },
        {
          name: 'Blog',
          link: 'blog'
        },
        {
          name: 'Products',
          link: 'products'
        },
        {
          name: 'Contact',
          link: 'contact'
        },

      ],


    }
  },
  methods: {









  },
  computed: {

  },
  mounted() {







  }






}).mount('#app')



// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const circles = document.querySelectorAll('.progress__circle');






// prev.addEventListener('click', () => {

//   currentActive--;

//   if (currentActive > circles.length) {

//     currentActive = circles.length;
//   }

//   update();
// })

// next.addEventListener('click', () => {

//   currentActive++;

//   if (currentActive < 1) {

//     currentActive = 1;
//   }



//   update();

// })



// function update() {

//   circles.forEach((circle, idx) => {

//     if (idx < currentActive) {
//       circle.classList.add('active');
//     } else {
//       circle.classList.remove('active');
//     }
//   })


//   const actives = document.querySelectorAll('.active');

//   progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

//   console.log(progress)


//   if (currentActive === 1) {

//     prev.disabled = true;
//   } else if (currentActive === circles.length) {
//     next.disabled = true;
//   } else {

//     prev.disabled = false;
//     next.disabled = false;
//   }
// }



// const {
//   createApp
// } = Vue

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!!22',
//       title: 'titrle22222222222',
//       test: 'test1222',
//       image1: './src/img/1.jpg',
//       image2: './src/img/2.jpg',

//       zmiennaX: false,
//       activeIndex: 0,
//       number1: 0,
//       items: [{
//           title: 'item 1',
//           id: 1,
//           image: './src/img/1.jpg',
//         },
//         {
//           title: 'item 2',
//           id: 2,
//           image: './src/img/2.jpg',
//         },
//         {
//           title: 'item 3',
//           id: 3,
//           image: './src/img/3.jpg',
//         },
//         {
//           title: 'item 4',
//           id: 4,
//           image: './src/img/4.jpg',
//         },

//       ]

//     }
//   },
//   methods: {

//     inkrement() {
//       this.number1++;
//     }

//   },
//   computed: {
//     fullTitle() {
//       return this.message + ' ' + this.title
//     },
//     image() {
//       return this.items[this.activeIndex].image
//     }
//   },
//   mounted() {

//   }
// }).mount('#app')