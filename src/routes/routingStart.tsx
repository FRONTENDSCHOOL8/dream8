import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';

function Exercise() {
  return (
    <HelmetProvider>
      <div className="flex flex-col space-y-1"></div>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
export default Exercise;
