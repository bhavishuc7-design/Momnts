import { Outlet, useNavigate, useLocation } from 'react-router';
import { Dock, DockItem, DockIcon, DockLabel } from '../../components/motion-primitives/dock'
import { CakeIcon, HouseIcon, UserIcon } from "@phosphor-icons/react"


const DashboardLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const dockItems = [
    {
      title: 'Home',
      icon: <HouseIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      onClick: () => navigate('/dashboard'),
      active: location.pathname === '/dashboard',
    },
    {
      title: 'Events',
      icon: <CakeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      onClick: () => navigate('/events'),
      active: location.pathname === '/events',
    },
    {
      title: 'Me',
      icon: <UserIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      onClick: () => navigate('/profile'),
      active: location.pathname === '/profile',
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <header className="p-4 flex justify-between">
        <p className='font-logo text-4xl'>Momnts</p>
      </header>
      
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
      
      <div className='pb-2'>
        <Dock className='items-end pb-3 mx-auto'>
          {dockItems.map((item, idx) => (
            <DockItem
              key={idx}
              onClick={item.onClick}
              className={`aspect-square rounded-full cursor-pointer ${
                item.active 
                  ? 'bg-slate-200 dark:bg-slate-500' 
                  : 'bg-gray-200 dark:bg-neutral-800'
              }`}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  )
}

export default DashboardLayout
