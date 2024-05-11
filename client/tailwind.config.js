/** @type {import('tailwindcss').Config} */

export default {
  
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  purge: {
    enabled: false,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    colors: {
      'blue': '#0f172a',
      'gray': '#7c7772',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'black': '#000000',
      'green': '#56d71e',
      'ivory': '#FFFFF0',
      'red': '#FF0000', 
      'lightBrown':'#95785e', 
      'brown': '#45382c',
      'yellow': '#FFEA00',
      'brown3' : '#f7f4f2'
       },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      zeyada: ["Zeyada", "cursive"],
      rubik: ["Rubik Scribble", "system-ui"],
      inter: ["Inter", "sans-serif"]
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },

      backgroundImage: {
        'hero': "url('https://c7.alamy.com/comp/2BP0EWN/dubai-uae-may-13-2020-worlds-largest-shopping-center-empty-dubai-mall-during-quarantine-top-vew-2BP0EWN.jpg')",
        'hero2': "url('https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'hero3': "url('https://i.postimg.cc/PqV6G3W0/background-Image.jpg')",
        'hero4': "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'hero5': "url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'hero6': "url('https://i.postimg.cc/ncYBhZ2d/bg1.png')"
      }
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)'},
        to: {transform: 'translateX(-100%)'}
      }
    }
  },
  plugins:[],
  darkMode: "class"
}