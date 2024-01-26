import { PrimaryDropdownProps, PrimaryDropdownVariant } from './primary-dropdown-types.ts';
import React, { Fragment, useCallback, useId, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Popover,
  PopoverOrigin,
  Select,
  SelectChangeEvent,
  Stack,
  useTheme,
} from '@mui/material';

import { InternalErrorMessage } from '../../../../constants/message-constants.ts';
import { primaryDropdownStyles } from './primary-dropdown.styles.ts';
import { ArrowDownIcon } from '../../../../icons/arrow-icons.tsx';
import { ButtonComponent } from '../../button/primary-button/primary-button.tsx';

const DefaultAnchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

const DefaultTransformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

function LinksDropdown({
  options,
  contentTopSpace,
  buttonContent,
  arrowSettings,
  anchorOrigin,
  transformOrigin,
  bottomLineDistance,
  wrapperSx,
  dataIntercomTarget,
}: PrimaryDropdownProps) {
  const styles = primaryDropdownStyles()({ ...arrowSettings, bottomLineDistance });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const isBottomLineVisible = isOpen && bottomLineDistance;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event?.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <ButtonComponent
        disableRipple
        onClick={handleClick}
        sx={{ padding: '0 16px' }}
        dataIntercomTarget={dataIntercomTarget}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={arrowSettings?.distance ?? 0.5}
          alignItems="center"
        >
          {buttonContent}

          {!arrowSettings?.isHidden && <ArrowDownIcon isUp={isOpen} />}
        </Stack>
        {isBottomLineVisible && <Box sx={styles.bottomLine} />}
      </ButtonComponent>

      <Popover
        anchorEl={anchorEl}
        open={isOpen}
        marginThreshold={contentTopSpace}
        onClose={handleClose}
        sx={styles.select}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <Box sx={wrapperSx}>
          {options.map((option) => {
            if (option.variant === PrimaryDropdownVariant.Standard)
              return <Fragment key={option.id}>option.content</Fragment>;

            return (
              <MenuItem sx={styles.selectItem} key={option.id} onClick={handleClose}>
                <Link
                  href={option.link}
                  target={option.openBlankPage ? '_blank' : undefined}
                  underline="none"
                  sx={{ width: '100%' }}
                >
                  {option.content}
                </Link>
              </MenuItem>
            );
          })}
        </Box>
      </Popover>
    </div>
  );
}

const StandardDropdown = ({
  options,
  labelText,
  onSelect,
  contentTopSpace,
  defaultValue,
  arrowSettings,
  anchorOrigin,
  transformOrigin,
  wrapperSx,
  selectSx,
  dataIntercomTarget,
}: PrimaryDropdownProps) => {
  const id = useId();
  const theme = useTheme();

  const [selectedItem, setSelectedItem] = useState<string | number>(() => {
    const firstOptionItemValue = options[0].value as string;
    return defaultValue ?? firstOptionItemValue;
  });

  const [isOptionHovered, setIsOptionHovered] = useState<boolean>(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const styles = primaryDropdownStyles(theme)({
    ...arrowSettings,
    isOptionHovered,
  });
  const selectSxStyles = Object.assign({}, styles.select, selectSx ?? {});

  const handleChange = (event: SelectChangeEvent) => {
    const selectedItem = event.target.value as string;
    setSelectedItem(selectedItem);
    onSelect?.(selectedItem);
  };

  const toggleSelectOpen = () => {
    setIsSelectOpen((prev) => !prev);
  };

  const IconComponent = useCallback(
    () => (
      <ArrowDownIcon
        style={{
          width: '30px',
          marginRight: '16px',
          color: '#bfbfbf',
          cursor: 'pointer',
          pointerEvents: 'none',
          position: 'absolute',
          right: '0',
        }}
        isUp={isSelectOpen}
      />
    ),
    [isSelectOpen]
  );

  return (
    <FormControl fullWidth sx={wrapperSx} data-intercom-target={dataIntercomTarget}>
      <InputLabel id={id}>{labelText}</InputLabel>
      <Select
        IconComponent={IconComponent}
        sx={selectSxStyles}
        labelId={id}
        value={String(selectedItem)}
        label={labelText}
        onChange={handleChange}
        MenuProps={{
          marginThreshold: contentTopSpace,
          anchorOrigin,
          transformOrigin,
          sx: styles.items,
        }}
        onOpen={toggleSelectOpen}
        onClose={() => {
          setIsOptionHovered(false);
          toggleSelectOpen();
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            onMouseEnter={() => setIsOptionHovered(!!option.value)}
            sx={styles.selectItem}
            value={option.value}
          >
            {option.content}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const PrimaryDropdown = ({
  variant = PrimaryDropdownVariant.Standard,
  options,
  buttonContent,
  labelText,
  onSelect,
  defaultValue,
  contentTopSpace,
  arrowSettings,
  anchorOrigin = DefaultAnchorOrigin,
  transformOrigin = DefaultTransformOrigin,
  bottomLineDistance,
  wrapperSx,
  selectSx,
  dataIntercomTarget,
}: PrimaryDropdownProps) => {
  switch (variant) {
    case PrimaryDropdownVariant.Link:
      return (
        <LinksDropdown
          contentTopSpace={contentTopSpace}
          arrowSettings={arrowSettings}
          options={options}
          buttonContent={buttonContent}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          bottomLineDistance={bottomLineDistance}
          wrapperSx={wrapperSx}
          dataIntercomTarget={dataIntercomTarget}
        />
      );

    case PrimaryDropdownVariant.Standard:
      return (
        <StandardDropdown
          contentTopSpace={contentTopSpace}
          defaultValue={defaultValue}
          options={options}
          onSelect={onSelect}
          labelText={labelText}
          selectSx={selectSx}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          wrapperSx={wrapperSx}
          dataIntercomTarget={dataIntercomTarget}
        />
      );
    default:
      return <span style={{ color: 'red' }}>{InternalErrorMessage.Dropdown()}</span>;
  }
};
