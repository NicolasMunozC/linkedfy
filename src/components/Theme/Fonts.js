import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
@font-face {
  font-family: 'Poppins';
  font-weight: 100;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Thin.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 100;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-ThinItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 200;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-ExtraLight.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 200;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 300;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Light.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 300;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-LightItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 400;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 400;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Italic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 500;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Medium.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 500;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-MediumItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 600;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-SemiBold.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 600;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 700;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Bold.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 700;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-BoldItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 800;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-ExtraBold.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 800;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 900;
  font-style: normal;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-Black.ttf) format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-weight: 900;
  font-style: italic;
  src: local('Poppins'), url(./assets/fonts/Poppins/Poppins-BlackItalic.ttf) format('truetype');
}
      `}
  />
)

export default Fonts