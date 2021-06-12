import { Platform } from 'react-native'

const theme = {
  colors: {
    appBar: {
      background: '#24292e',
      foreground: 'white',
    },
    input: {
      normal: 'gray',
      error: '#d73a4a',
    },
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textButton: 'white',
    button: '#0366d6',
    primary: '#0366d6',
    backgroundPrimary: 'white',
    backgroundSecondary: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
}

export default theme
