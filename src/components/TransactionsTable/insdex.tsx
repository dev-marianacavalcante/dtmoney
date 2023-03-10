import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

  interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

  export function TransactionTable(){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[]);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}

/* <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>casa</td>
            <td>02/10/2022</td>
          </tr> */