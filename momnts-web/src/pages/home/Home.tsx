import { Dock, DockItem, DockIcon, DockLabel } from '../../../components/motion-primitives/dock'
import { CakeIcon, HouseIcon, UserIcon } from "@phosphor-icons/react"

const data = [
  {
    title: 'Home',
    icon: (
      <HouseIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Events',
    icon: (
      <CakeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Me',
    icon: (
      <UserIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  }
];

const Home = () => {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  )
}

export default Home