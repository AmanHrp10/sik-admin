import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { NavLink as RouteLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Search as SearchIcon } from 'react-feather';

const Index = (props) => {
  const { title, button, toAdd } = props;
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>Import</Button>
        <Button sx={{ mx: 1 }}>Export</Button>
        {button ? (
          <Button
            component={RouteLink}
            color="primary"
            variant="contained"
            to={toAdd}
          >
            {button}
          </Button>
        ) : (
          ''
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder={title}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

Index.propTypes = {
  button: PropTypes.string,
  title: PropTypes.string,
  toAdd: PropTypes.string
};

export default Index;
