import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

export type DropdownMenuOption = {
  title: string;
  icon?: JSX.Element;
  onClick: () => void;
};

export interface DropdownMenuProps {
  renderIcon: Function;
  options?: DropdownMenuOption[];
  buttonSize?: 'small' | 'medium';
  noOptionsText?: string;
  icon?: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  buttonSize = 'small',
  renderIcon,
  options,
  noOptionsText,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const emptyMenuItem = (text: string | undefined) => (
    <MenuItem key="emptyMenuitem">{text}</MenuItem>
  );

  const renderOptions = () => {
    if (options && options.length > 0) {
      return options.map(opt => (
        <MenuItem
          key={opt.title}
          onClick={() => {
            opt?.onClick();
            handleClose();
          }}
        >
          {opt.icon}
          {opt.title}
        </MenuItem>
      ));
    }
    return emptyMenuItem(noOptionsText);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        size={buttonSize}
        onClick={handleClick}
      >
        {renderIcon()}
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {renderOptions()}
      </Menu>
    </>
  );
};

DropdownMenu.defaultProps = {
  noOptionsText: 'Sem opções',
  options: [],
};

export { DropdownMenu };
