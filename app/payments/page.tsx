import { columns, Payment } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      fullName: 'mohamed',
      userId: '728ed52f',
    },
    {
      id: 'a4f5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      fullName: 'testuser',
      userId: '728ed5ec2f',
    },
    {
      id: 'b7e23f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      fullName: 'user3',
      userId: '728edsfds52f',
    },
    {
      id: 'c9d4e5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      fullName: 'sfsfs',
      userId: '728ed5erv2f',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      fullName: 'mohamed',
      userId: '728ed5fvbrf2f',
    },
    {
      id: 'a4f5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      fullName: 'testuser',
      userId: '728ed52f222',
    },
    {
      id: 'b7e23f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      fullName: 'user3',
      userId: '728ed5bb2f',
    },
    {
      id: 'c9d4e5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      fullName: 'sfsfs',
      userId: '728ed52wwf',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      fullName: 'mohamed',
      userId: '728ed5nn2f',
    },
    {
      id: 'a4fsvedv5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      fullName: 'testuser',
      userId: '728ed52fbn ',
    },
    // ...
  ];
}

export default async function PaymentsPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
