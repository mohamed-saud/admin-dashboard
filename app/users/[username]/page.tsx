import CardList from '@/components/CardList';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Progress } from '@/components/ui/progress';
import { BadgeCheck, Candy, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditUser from '@/components/EditUser';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppLineChart from '@/components/AppLineChart';
export default function SingleUserPage() {
  return (
    <div className='mt-4 flex flex-col xl:flex-row gap-8'>
      {/* LEFT */}
      <div className='w-full xl:w-1/3 space-y-6'>
        {/* USER BADGES CONTAINER */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
          <h1 className='text-2xl font-bold mb-4'>User Badges</h1>
          <div className='flex gap-2 mt-4'>
            <HoverCard>
              <HoverCardTrigger>
                <BadgeCheck
                  size={36}
                  className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className='font-bold mb-2'>Verified User</h1>
                <p className='text-sm text-muted-foreground'>
                  This user has been verified by the nadmin
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Shield
                  size={36}
                  className='rounded-full bg-red-500/30 border-1 border-red-500/50 p-2'
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className='font-bold mb-2'>Verified User</h1>
                <p className='text-sm text-muted-foreground'>
                  This user has been verified by the nadmin
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <Candy
                  size={36}
                  className='rounded-full bg-green-500/30 border-1 border-green-500/50 p-2'
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className='font-bold mb-2'>Verified User</h1>
                <p className='text-sm text-muted-foreground'>
                  This user has been verified by the nadmin
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        {/* INFORMATION CONTAINER */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
          <div className='flex items-center gap-2 justify-between'>
            <h1 className='text-2xl font-bold mb-4'>User Information</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Edit User</Button>
              </SheetTrigger>
              <EditUser />
            </Sheet>
          </div>
          <div className='space-y-4 mt-4 text-sm'>
            <div className='flex flex-col gap-2 mb-8'>
              <p className='text-sm text-muted-foreground'>
                Profile completion
              </p>
              <Progress
                value={70}
                className='w-full'
              />
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Username :</span>
              <span className=''>Johan.doe</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Email :</span>
              <span className=''>Johan.doe@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Phone :</span>
              <span className=''>+1 234 567 8901</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Location :</span>
              <span className=''>New York, USA</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Role :</span>
              <Badge>Admin</Badge>
            </div>
            <p className='text-sm text-muted-foreground mt-2'>
              Joined on 2025.01.01
            </p>
          </div>
        </div>
        {/* CARD LIST CONTAINER */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
          <CardList title='Recent Transactions' />
        </div>
      </div>
      {/* RIGHT  */}
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
            harum voluptatem neque animi vitae non aliquid consequatur
            dignissimos numquam veniam voluptate.
          </p>
        </div>
        {/* ACTIVITY CHART CONTAINER */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
          <h1 className='text-2xl font-semibold mb-4'>User Activity</h1>

          <AppLineChart />
        </div>
      </div>
    </div>
  );
}
