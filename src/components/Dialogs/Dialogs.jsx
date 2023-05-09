import React from 'react';
import styled from 'styled-components';
import Dialog from './Dialog';
import Message from './Message';

const StyledDialogs = styled.div`
  display: flex;
`;

const StyledDialog = styled.div`
  flex-grow: 1;
`;
const StyledMessage = styled.div`
  flex-grow: 3;
`;

const Dialogs = (props) => {
  return (
    <StyledDialogs>
      <StyledDialog>
        <div>DIALOGS</div>
        {props.dialogPage.dialogs.map((dialog, index) => (
          <Dialog key={index} name={dialog} id={index + 1} />
        ))}
      </StyledDialog>
      <StyledMessage>
        <div>MESSAGES</div>
        {props.dialogPage.messages.map((message, index) => (
          <Message key={index} message={message.message} />
        ))}
      </StyledMessage>
    </StyledDialogs>
  );
};

export default Dialogs;
