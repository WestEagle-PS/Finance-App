const fields = {
  username: {
    name: 'username',
    type: 'text',
    required: true,
    placeholder: 'First name',
  },
  email: {
    name: 'email',
    type: 'email',
    required: true,
    placeholder: 'User email',
  },
  password: {
    name: 'password',
    type: 'password',
    required: true,
    placeholder: 'User password',
  },
  confirm_password: {
    name: 'confirm_password',
    type: 'password',
    required: true,
    placeholder: 'Confirm password',
  },
};

export default fields;
