import { components } from 'react-select';
import Select from 'react-select';


const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L10 10L19 1" stroke="black" />
      </svg>
    </components.DropdownIndicator>
  );
};

const Dropdown = ({ items = [], value = '', onChange }) => {
  const options = items.map(label => {
    const normalizedItem = label.toLowerCase();
    return { value: normalizedItem, label };
  });

  return (
    <Select
      options={options}
      defaultInputValue={options[0].label}
      components={{ DropdownIndicator }}
      // value={value}
      onChange={onChange}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          minWidth: '160px',
          width: '100%',
          height: '50px',
          border: '1px solid #000000',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'background-color 400ms',
          backgroundColor: 'transparent',
          color: 'black',
          '&:hover': null,
          outline: 'none',
          mediaquery: {
            width: '400px',
          },
        }),
        indicatorSeparator: (baseStyles, state) => ({
          display: 'none',
        }),
        indicatorsContainer: (baseStyles, state) => ({
          paddingRight: '10px',
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused ? 'red' : 'blue',
          transform: state.isFocused ? 'rotate(180deg)' : '',
          transition: 'transform 400ms',
        }),
        valueContainer: (baseStyles, state) => ({
          ...baseStyles,
          paddingLeft: '16px',
        }),
        menu: (baseStyles, state) => ({
          maxWidth: '160px',
          maxHeight: '157px',
          overflowY: 'scroll',
          overflowBlock: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(25px)',
          borderRadius: '20px',
        }),
        option: (baseStyles, state) => ({
          paddingLeft: '20px',
          fontFamily: 'Circe',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#000000',
          cursor: 'pointer',
          paddingTop: '2px',
          paddingBottom: '2px',
          ':hover': {
            backgroundColor: 'white',
          },
        }),
        menuList: (baseStyles, state) => ({
          ...baseStyles,
          // paddingLeft: '16px',
        }),
      }}
    />
  );
};

export default Dropdown;

// clearIndicator;
// container;
// control;
// dropdownIndicator;
// group;
// groupHeading;
// indicatorsContainer;
// indicatorSeparator;
// input;
// loadingIndicator;
// loadingMessage;
// menu;
// menuList;
// menuPortal;
// multiValue;
// multiValueLabel;
// multiValueRemove;
// noOptionsMessage;
// option;
// placeholder;
// singleValue;
// valueContainer;
