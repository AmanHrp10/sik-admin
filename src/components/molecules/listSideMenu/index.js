import { List, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '..';

const Index = ({ label, items }) => (
  <List>
    <Typography color="textSecondary" variant="body2">
      <div className="menu-side">{label && label.toUpperCase()}</div>
    </Typography>

    {items.map((item) => (
      <NavItem
        href={item.href}
        key={item.title}
        title={item.title}
        icon={item.icon}
        items={item.items && item.items}
      />
    ))}
  </List>
);

Index.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array
};

export default Index;
