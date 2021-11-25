import PropTypes from 'prop-types';
import { Collapse, ListItem, ListItemText, List } from '@material-ui/core';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { NavItem } from '..';

const Index = ({ item }) => {
  const { items: children, title, icon: Icon } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        {Icon && <Icon size="20" />}
        <ListItemText primary={title} />
        {open ? <ChevronDown /> : <ChevronUp />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child) => (
            <NavItem key={child.title} items={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

Index.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  item: PropTypes.array,
  items: PropTypes.array
};

export default Index;
