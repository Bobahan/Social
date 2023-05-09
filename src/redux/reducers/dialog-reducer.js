let initialState = {
  dialogs: ['Владимир', 'Степан', 'Дмитрий', 'Алексей'],
  messages: [
    { id: 1, message: 'Hello how are you?' },
    { id: 2, message: 'Iam fine' },
    { id: 3, message: 'Good morning' },
  ],
};

export const dialogReducer = (state = initialState, action) => {
  let newMessage = {
    id: 5,
  };

  let stateCopy = {
    ...state,
    messages: [...state.messages, { id: 5, message: 'Hello Hello Hello' }],
  };

  switch (action.type) {
    default:
      return state;
  }
};
