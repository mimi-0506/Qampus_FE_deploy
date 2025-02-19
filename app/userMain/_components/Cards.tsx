'use client';

import {useState} from 'react';
import Card from './Card';

export default function Cards() {
  const [nowOpen, setNowOpen] = useState<number>(0);

  return (
    <>
      <Card
        index={1}
        open={nowOpen === 1 ? true : false}
        setNowOpen={setNowOpen}
      />
      <Card
        index={2}
        open={nowOpen === 2 ? true : false}
        setNowOpen={setNowOpen}
      />
      <Card
        index={3}
        open={nowOpen === 3 ? true : false}
        setNowOpen={setNowOpen}
      />
    </>
  );
}
