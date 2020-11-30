const MainTheme = {
   bgMain: '#353232',
   bgPrimary: '#444141',
   bgSecondary: '#504B4B',
   bgBadge: '#3F3B3B',
   fontPrimary: '#FFFFFF',
   fontSecondary: '#C4C4C4',
   accentColor: '#FF8A00',

   transparent: {
      white: {
         soft: 'rgba(255, 255, 255, 0.1)',
         mid: 'rgba(255, 255, 255, 0.2)',
      },
   },
   gradient: {
      accent: 'linear-gradient(125.64deg, #FF7A00 22.46%, #FF005C 77.9%)',
      preload: 'linear-gradient(90deg, #3F3B3B 0%, #646464 30.2%, #646464 43.46%, #3F3B3B 100%)',
      glow:
         'radial-gradient(50% 100% at 50% 0%, rgba(255, 168, 0, 0.17) 0%, rgba(255, 168, 0, 0) 100%)',
   },
   fontSize: {
      xl: '7.2rem',
      l: '3.6rem',
      m: '2.4rem',
      s: '1.6rem',
      xs: '1.2rem',
   },
   fontWeight: {
      regular: 400,
      bold: 700,
   },
   fontFamily: {
      primary: `'Montserrat', sans-serif`,
   },
   shadow: {
      soft: '0px 5px 25px -5px rgba(0, 0, 0, 0.25)',
      hard: '0px 5px 25px -5px #000000',
      glow: '0px 0px 15px rgba(255, 168, 0, 0.35)',
   },
   radius: {
      primary: '20px',
      secondary: '10px',
   },
   line: {
      main: '1.5em',
      mainNumber: 1.5,
   },
   easing: {
      primary: 'cubic-bezier(0.4, 0.96, 0.87, 0.98)',
   },
   breakpoints: {
      max: {
         xs: '(max-width: 320px)',
         sm: '(max-width: 576px)',
         md: '(max-width: 768px)',
         lg: '(max-width: 992px)',
         xl: '(max-width: 1200px)',
         xxl: '(max-width: 1400px)',
      },
      min: {
         xs: '(min-width: 321px)',
         sm: '(min-width: 577px)',
         md: '(min-width: 769px)',
         lg: '(min-width: 993px)',
         xl: '(min-width: 1201px)',
         xxl: '(min-width: 1401px)',
      },
   },
}

export default MainTheme
