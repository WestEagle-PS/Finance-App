const fields = {
  name: {
    label: 'User name',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: 'First name',
  },
  email: {
    label: 'User email',
    name: 'email',
    type: 'email',
    required: true,
    placeholder: 'User email',
  },
  password: {
    label: 'User password',
    name: 'password',
    type: 'password',
    required: true,
    placeholder: 'User password',
  },
  confirm_password: {
    label: 'confirm_password',
    name: 'confirm_password',
    type: 'password',
    required: true,
    placeholder: 'Confirm_ password',
  },
};

export default fields;
