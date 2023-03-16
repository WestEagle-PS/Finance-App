import Select, { components } from 'react-select';
import useMediaQuery from 'shared/hooks/useMediaQuery';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L10 10L19 1" stroke="black" />
      </svg>
    </components.DropdownIndicator>
  );
};

const Dropdown = ({ options = [], value = '', onChange }) => {
  const isTabletOrDesctop = useMediaQuery('(min-width: 479px)');

  return (
    <Select
      options={options}
      maxMenuHeight={157}
      components={{ DropdownIndicator }}
      value={value}
      onChange={onChange}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          width: isTabletOrDesctop ? '160px' : '100%',
          height: '50px',
          border: '1px solid #000000',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'background-color 400ms',
          backgroundColor: 'transparent',
          '&:hover': null,
          boxShadow: 'none',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        indicatorsContainer: () => ({
          paddingRight: '10px',
        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          transform: state.isFocused ? 'rotate(180deg)' : '',
          transition: 'transform 400ms',
        }),
        valueContainer: baseStyles => ({
          ...baseStyles,
          paddingLeft: '16px',
        }),
        singleValue: baseStyles => ({
          ...baseStyles,
          fontFamily: 'Circe',
          fontSize: '16px',
          lineHeight: 'calc(24px / 16px)',
        }),
        menu: () => ({
          width: isTabletOrDesctop ? '160px' : '100%',
          padding: '12px 0',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(25px)',
          borderRadius: '20px',
        }),
        option: (_, state) => ({
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '20px',
          fontFamily: 'Circe',
          fontSize: '16px',
          lineHeight: 'calc(24px / 16px)',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: state.isSelected ? '' : 'white',
          },
          backgroundColor: state.isSelected ? '#24CCA7' : '',
          color: state.isSelected ? '#ffffff' : '#000000',
        }),
        menuList: base => ({
          ...base,
          '::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
          },
        }),
      }}
    />
  );
};

export default Dropdown;

// Приклад використання
// const [value, setValue] = useState({ label: 'One', value: 'one' });

// <Dropdown
//   options={[
//     { label: 'One', value: 'one' },
//     { label: 'Two', value: 'two' },
//     { label: 'Three', value: 'three' },
//   ]}
//   value={value}
//   onChange={setValue}
// />;
