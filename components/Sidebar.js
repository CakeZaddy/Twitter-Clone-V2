import Image from 'next/image'
import SidebaMenuItem from './SidebaMenuItem'
import { HomeIcon } from '@heroicons/react/solid'
import { HashtagIcon } from '@heroicons/react/outline'
import { BellIcon } from '@heroicons/react/outline'
import { InboxIcon } from '@heroicons/react/outline'
import { BookmarkIcon } from '@heroicons/react/outline'
import { ClipboardIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className='hidden sm:flex flex-col p-2 x:items-start fixed h-full xl:ml-20'>
      {/* Logo */}
      <div className='hoverEffect p-0 hover:bg-transparent xl:px-1'>
        <Image
          width='50'
          height='50'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
        ></Image>
      </div>

      {/* Menu */}
      <div className='mt-4 mb-2.5 xl:items-start'>
        <SidebaMenuItem text='Home' Icon={HomeIcon} active />
        <SidebaMenuItem text='Explore' Icon={HashtagIcon} />
        {session && (
          <>
            <SidebaMenuItem text='Notifications' Icon={BellIcon} />
            <SidebaMenuItem text='Messages' Icon={InboxIcon} />
            <SidebaMenuItem text='Bookmark' Icon={BookmarkIcon} />
            <SidebaMenuItem text='Lists' Icon={ClipboardIcon} />
            <SidebaMenuItem text='Profile' Icon={UserIcon} />
            <SidebaMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>

      {/* Button */}

      {session ? (
        <>
          <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
            Tweet
          </button>

          {/* Mini-Profile */}

          <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-5'>
            <img
              onClick={signOut}
              src={session.user.image}
              alt='user-img'
              className='h-10 w-10 rounded-full xl:mr-2'
            />
            <div className='leading-5 hidden xl:inline'>
              <h4 className='font-bold'>{session.user.name}</h4>
              <p className='text-gray-500 '>@{session.user.username}</p>
            </div>
            <DotsHorizontalIcon className='h-5 xl:ml-8 xl:inline hidden xl:inline' />
          </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className='bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'
        >
          Sign In
        </button>
      )}
    </div>
  )
}
