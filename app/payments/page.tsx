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
      username: 'mohamed',
    },
    {
      id: 'a4f5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e23f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4e5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4f5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e23f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4e5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4fsvedv5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e23fdc2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4e5f6dd',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '728cdced52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4f5c6ddcd1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e23fss2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4e5weewf6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '728ed5wewe2f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4sdsdf5c6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e2sdcdsv3f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4sddse5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '728sdded52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4f5csdds6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e2sds3f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4e5fsadsf6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '728ed5assfs2f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4f5c6weewd1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7asdse23f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4dssdve5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
    },
    {
      id: '72df8ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
      username: 'mohamed',
    },
    {
      id: 'a4f5csdfs6d1',
      amount: 250,
      status: 'success',
      email: 'test@test.com ',
      username: 'testuser',
    },
    {
      id: 'b7e2sdfds3f2a',
      amount: 75,
      status: 'failed',
      email: 'test3@test.com',
      username: 'user3',
    },
    {
      id: 'c9d4esdfs5f6',
      amount: 150,
      status: 'processing',
      email: 'sfs@sffs.com',
      username: 'sfsfs',
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
