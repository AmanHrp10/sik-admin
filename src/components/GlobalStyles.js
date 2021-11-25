import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => {
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        backgroundColor: '#f4f6f8',
        height: '100%',
        width: '100%'
      },
      a: { textDecoration: 'none' },
      '#root': {
        height: '100%',
        width: '100%'
      },

      // Font-Style

      // Menu side title
      '.menu-side': {
        fontSize: 12,
        fontWeight: '500'
      },
      // Text
      '.text-muted': { color: 'red' },

      // Button
      '.button-instagram': {
        // background: '#d6249f',
        background:
          'radialGradient(circleAt 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
      }
    }
  });
});

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
