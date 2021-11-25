import { NavLink, matchPath, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { ChevronDown, ChevronLeft } from 'react-feather';
import { useState } from 'react';

const Index = ({ items = [], href, icon: Icon, title, ...rest }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const location = useLocation();
  console.log(location);

  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false
        },
        location.pathname
      )
    : false;

  return items.length > 0 ? (
    <>
      <ListItem
        disableGutters
        sx={{
          display: 'flex',
          py: 0
        }}
        {...rest}
        onClick={handleClick}
      >
        <Button
          sx={{
            color: 'text.secondary',
            fontWeight: 'medium',
            justifyContent: 'space-between',
            letterSpacing: 0,
            py: 1.25,
            textTransform: 'none',
            width: '100%',
            '& svg': { mr: 1 }
          }}
        >
          <div style={{ display: 'flex' }}>
            {Icon && <Icon size="20" />}
            <ListItemText primary={title} />
          </div>
          {open ? <ChevronDown /> : <ChevronLeft />}
        </Button>
      </ListItem>
      <Collapse in={open} timeout={800} unmountOnExit>
        <List component="div" disablePadding>
          {items.map((child) => {
            const { icon: SubIcon } = child;
            const subActive = child.href
              ? !!matchPath(
                  {
                    path: child.href,
                    end: false
                  },
                  location.pathname
                )
              : false;

            return (
              <ListItem
                key={child.title}
                disableGutters
                sx={{
                  display: 'flex',
                  py: 0
                }}
                {...rest}
              >
                <Button
                  component={NavLink}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 'medium',
                    justifyContent: 'space-between',
                    letterSpacing: 0,
                    py: 1.25,
                    textTransform: 'none',
                    width: '100%',
                    ...(subActive && { color: 'primary.main' }),
                    '& svg': { mr: 1 }
                  }}
                  to={child.href}
                >
                  <div style={{ marginLeft: '10px' }}>
                    {child.icon && <SubIcon size="20" />}
                    <span>{child.title}</span>
                  </div>
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  ) : (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0
      }}
      {...rest}
    >
      <Button
        component={NavLink}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'space-between',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && { color: 'primary.main' }),
          '& svg': { mr: 1 }
        }}
        to={href}
      >
        <div>
          {Icon && <Icon size="20" />}
          <span>{title}</span>
        </div>
      </Button>
    </ListItem>
  );
};

Index.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  items: PropTypes.array
};

export default Index;
