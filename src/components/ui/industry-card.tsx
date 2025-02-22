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
import PlaneSpiral from '../plane-spiral';

const IndustryCard = () => {
  return (
<Card className="relative w-[300px] h-[250px] overflow-hidden bg-[#29292e] border-none rounded-xl">
  <CardHeader>
    <CardTitle>Airline Industry</CardTitle>
  </CardHeader>
  <CardContent></CardContent>

  <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[300px] h-[170px] flex justify-center overflow-hidden">
    <PlaneSpiral />
  </div>

  <BorderBeam
    duration={8}
    size={100}
    colorFrom="#ffffff"
    colorTo="#50B4E5"
  />
  <BorderBeam
    duration={8}
    delay={4}
    size={100}
    colorFrom="#ffffff"
    colorTo="#50B4E5"
  />
</Card>
  );
};

export default IndustryCard;
