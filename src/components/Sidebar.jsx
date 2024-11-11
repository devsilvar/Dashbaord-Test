import { BarChart2, Menu, ShoppingBag, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    icon: BarChart2,
    color: '#6366f1',
    href: '/',
  },
  { name: 'Add-Users', icon: Users, color: '#EC4899', href: '/addusers' },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    const resizeScreen = () => {
      if (window.innerWidth <= 600) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check
    resizeScreen();

    // Add event listener
    window.addEventListener('resize', resizeScreen);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', resizeScreen);
  }, []);
  return (
    <motion.div
      className={`relative z-10 transition-all  duration-300 ease-in-out flex-shrink-0 sm:w-10 bg-gray-200 ${
        isSidebarOpen ? 'w-60' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='h-full  p-4 flex flex-col border-r shadow-md'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-100 transition-colors max-w-fit'
        >
          <Menu size={24} />
        </motion.button>

        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors mb-2'>
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className='ml-4 whitespace-nowrap'
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
export default Sidebar;
