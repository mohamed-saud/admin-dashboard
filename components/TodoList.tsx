'use client';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar1 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from './ui/button';

const todos = [
  {
    id: 1,
    title: 'Accept terms and conditions',
    completed: true,
  },
  {
    id: 2,
    title: 'Finish the project documentation',
    completed: false,
  },
  {
    id: 3,
    title: 'Review pull requests',
    completed: false,
  },
  {
    id: 4,
    title: 'Plan the next sprint',
    completed: true,
  },
  {
    id: 5,
    title: 'Plan the next sprint',
    completed: false,
  },
  {
    id: 6,
    title: 'Plan the next sprint',
    completed: false,
  },
  {
    id: 7,
    title: 'Plan the next sprint',
    completed: true,
  },
  {
    id: 8,
    title: 'Plan the next sprint',
    completed: false,
  },
  {
    id: 9,
    title: 'Plan the next sprint',
    completed: false,
  },
];
export default function TodoList() {
  const [todoItems, setTodoItems] = useState(todos);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);

  function handleToggle(e: React.MouseEvent<HTMLDivElement>, id: number) {
    e.preventDefault();
    setTodoItems((items) =>
      items.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <div className=''>
      <h1 className='text-lg font-medium mb-4'>Todo Items</h1>
      <Popover
        open={open}
        onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className='w-full'>
            <Calendar1 />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-lg  w-full max-h[200px]'
          />
        </PopoverContent>
      </Popover>

      {/*TODO List */}
      <ScrollArea className='max-h-[400px] mt-4 overflow-auto'>
        {/* LIST ITENS  */}
        <div className='flex gap-2 flex-col'>
          {todoItems.map((todo) => (
            <Card
              id='todo-item-li'
              className='rounded-sm p-3  hover:bg-accent'
              onClick={(e) => handleToggle(e, todo.id)}
              key={todo.id}>
              <div className='flex gap-2 items-center '>
                <Checkbox
                  id='terms'
                  checked={todo.completed}
                />
                <Label
                  htmlFor='terms'
                  className={cn(
                    'font-normal',
                    todo.completed && 'line-through text-muted-foreground'
                  )}>
                  {todo.title}
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
