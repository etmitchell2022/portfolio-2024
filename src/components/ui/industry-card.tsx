import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from './button';
import { BorderBeam } from './border-beam';

const IndustryCard = () => {
  return (
    <Card className='relative w-[350px] overflow-hidden bg-[#29292e] border-none'>
      <CardHeader>
        <CardTitle>Airline</CardTitle>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <BorderBeam
        duration={8}
        size={100}
        colorFrom='#ffffff'
        colorTo='#50B4E5'
      />
      <BorderBeam
        duration={8}
        delay={4}
        size={100}
        colorFrom='#ffffff'
        colorTo='#50B4E5'
      />
    </Card>
  );
};

export default IndustryCard;
