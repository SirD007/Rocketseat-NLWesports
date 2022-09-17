import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';
import logoImg from './assets/logo.svg';
import { NewAddBanner } from './components/NewAdBanner';
import { GameBanner } from './components/GameBanner';
import { CreateAdDialog } from './components/CreateAdDialog';

import axios from 'axios'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads:number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3002/games')
    .then(response =>{
      setGames(response.data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-[64px] text-white font-black mt-20'>Seu <span className='text-transparent bg-clip-text bg-nlw_gradient'>duo </span>está aqui</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
          {games.map(game =>{
            return (
              <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              />
            )
          })}
      </div>
      <Dialog.Root>
        <NewAddBanner />

        <CreateAdDialog/>
      </Dialog.Root>

    </div>

  )
}

export default App
