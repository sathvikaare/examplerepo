
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        disabledgrey:"#a4a4a4",
        error: "#FF0000",
        primary: "#152a43",
        lightgrey:"#e9e9e9",
        gray:"#4D4D4D" ,
        whitegrey:"#F9F9FB",
        darkred:"#C00000",
        yellow:"#FF9900",
        green:"#92d050",
        lightgreen:"#00B050",
        resetBlue:"#1885F2",
        electricGreen: "#8600F0",
        veryHighColor:"#EAC4C4",
        highColor:"#F7C4C4",
        moderateColor:"#F7E3C4",
        lowColor:"#E1EED4",
        veryLowColor:"#C4E7D4",

      },
      fontFamily: {
        opensans:['Open Sans']
      },
      width: {
        '98':'98%',
        '68':'68%',
        '30':'30%',
        '320': "320px",
        '2':'2%'
      },
      minHeight: {
        30: "30px",
        50:"50px",
        320: "320px",
        170: "170px",
        100:"100px"

       
      },
      maxHeight: {
        30: "30px",
        230: "230px"
      },
      maxWidth: {
        30: "30px",
        320: "320px"
      },
      boxshadow: {
        xl: '-2px 2px 4px rgba(0, 0, 0, 0.1)',
        a:'-2px 2px 4px rgba(0, 0, 0, 0.1)'
      },
      inset:{
        '36': '36%',
        '39': '39%'
      },
      borderRadius: {
        'sm': '0.25rem',
      
      },
     
    },
  },
  plugins: [],
}

