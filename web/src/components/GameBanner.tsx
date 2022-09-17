interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden hover:scale-110 duration-500 origin-bottom transition'>
            <img src={props.bannerUrl} alt="" />

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='text-white font-bold block'>{props.title}</strong>
                <span className='text-sm text-zinc-300'>{props.adsCount} anúncio(s)</span>
            </div>
          </a>
    )
}