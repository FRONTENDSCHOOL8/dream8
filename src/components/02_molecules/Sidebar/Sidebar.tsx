import { useEffect, useState, useRef } from 'react';
import GlobalMenu from '../GlobalMenu/GlobalMenu';
import LoginOut from '../GlobalMenu/LoginOut';
import SidebarAlarm from '../GlobalMenu/SidebarAlarm';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        ref={sidebarRef}
        className={`top-0 right-0 w-[35vw] bg-blue-600 p-10 pl-35 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className="z-50 mt-14 text-4xl font-semibold text-white flex flex-col gap-10 items-center">
          <SidebarAlarm></SidebarAlarm>
          <LoginOut></LoginOut>
          <GlobalMenu direction={'flex-col'} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
