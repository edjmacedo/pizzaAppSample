import { Message } from "semantic-ui-react";

const OrderEmpty = () => (
  <Message negative>
    <Message.Header>You do not have any order in progress</Message.Header>
    <p>Please, order something to check status here</p>
  </Message>
);

export default OrderEmpty;
