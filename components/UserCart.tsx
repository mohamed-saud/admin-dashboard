import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import AppLineChart from './AppLineChart';

export default function UserCart() {
  return (
    <div className='w-full xl:w-2/3 space-y-6 '>
      {/* USER  CONTAINER */}
      <div className='bg-primary-foreground p-4 rounded-lg space-y-2'>
        <div className=' flex items-center gap-2'>
          <Avatar className='size-12'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className='text-xl font-semibold'>Johan Doe</h1>
        </div>
        <p className='mt-4 text-sm text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit
          debitis excepturi architecto, ea cupiditate itaque impedit dolorum
          harum voluptatem neque animi vitae non aliquid consequatur dignissimos
          numquam veniam voluptate.
        </p>
      </div>
      {/* ACTIVITY CHART CONTAINER */}
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <h1 className='text-2xl font-semibold mb-4'>User Activity</h1>
        <AppLineChart />
      </div>
    </div>
  );
}
