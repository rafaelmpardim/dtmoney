import { Summary } from "../Summary"
import { TransactionTable } from "../TransactionTable"

import { Containter } from "./styles"

export function Dashbord() {
  return (
    <Containter>
      <Summary />
      <TransactionTable />
    </Containter>
  )
}