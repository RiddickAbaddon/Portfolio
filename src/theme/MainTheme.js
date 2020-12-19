const MainTheme = {
   bgMain: 'hsl(0, 3%, 20%)',
   bgPrimary: 'hsl(0, 3%, 25%)',
   bgSecondary: 'hsl(0, 3%, 30%)',
   bgBadge: 'hsl(0, 2%, 22%)',
   fontPrimary: 'hsl(0, 0%, 100%)',
   fontSecondary: 'hsl(0, 0%, 77%)',
   accentColor: 'hsl(32, 100%, 50%)',
   errorColor: 'hsl(0, 100%, 60%)',

   transparent: {
      white: {
         soft: 'hsla(0, 0%, 100%, 0.1)',
         mid: 'hsla(0, 0%, 100%, 0.2)',
      },
   },
   gradient: {
      accent: 'linear-gradient(125.64deg, hsl(29, 100%, 50%) 22.46%, hsl(338, 100%, 50%) 77.9%)',
      preload:
         'linear-gradient(90deg, hsl(0, 2%, 22%) 0%, hsl(0, 0%, 35%) 30%, hsl(0, 0%, 35%) 40%, hsl(0, 2%, 22%) 100%)',
      glow:
         'radial-gradient(50% 100% at 50% 0%, hsla(40, 100%, 50%, 0.17) 0%, hsla(40, 100%, 50%, 0) 100%)',
      slider: 'linear-gradient(to left, black 0%, transparent 100%)',
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
      soft: '0px 5px 25px -5px hsla(0, 0%, 0%, 0.25)',
      hard: '0px 5px 25px -5px hsl(0, 0%, 0%)',
      glow: '0px 0px 15px hsla(40, 100%, 50%, 0.35)',
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
         mobile: '(max-width: 576px)',
         tablet: '(max-width: 768px)',
         desktop: '(max-width: 1200px)',
      },
      min: {
         mobile: '(min-width: 577px)',
         tablet: '(min-width: 769px)',
         desktop: '(min-width: 1201px)',
      },
   },
}

export default MainTheme
