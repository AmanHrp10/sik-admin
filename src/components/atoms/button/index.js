import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

Index.propTypes = { children: PropTypes.elementType };

export default Index;
