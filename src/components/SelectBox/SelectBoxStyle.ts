//https://github.com/JedWatson/react-select/issues/2728
export const SelectBoxStyle = {
  control: (base: any, state: any) => ({
    ...base,
    borderRadius: '4px',
    outline: 'none',
    border: `1px solid #ec5990`,
    '&:hover': {},
    '&:disabled': {
      opacity: '0.4',
    },
    boxShadow: state.isFocused ? `0px 0px 8px rgba(0, 0, 0, 0.2)` : 0,
  }),
};
