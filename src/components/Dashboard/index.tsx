import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable/insdex";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable/>
    </Container >
  );
}