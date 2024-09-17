import { lazy, useEffect } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';


import routes from './routes';

export default function AppRouter() {
  const location = useLocation();
  const { state: stateApp, appContextAction } = useAppContext();
  const { app } = appContextAction;

  // Kết hợp tất cả các route lại từ các object khác nhau trong 'routes'
  const routesList = Object.values(routes).flat();

  // Hàm để lấy tên ứng dụng dựa trên đường dẫn
  function getAppNameByPath(path) {
    for (const key in routes) {
      const foundRoute = routes[key].find(route => route.path === path);
      if (foundRoute) {
        return key;
      }
    }
    // Trả về 'default' nếu không tìm thấy route
    return 'default';
  }

  // Xử lý khi có thay đổi về đường dẫn
  useEffect(() => {
    if (location.pathname === '/') {
      app.default();
    } else {
      const appName = getAppNameByPath(location.pathname);
      app.open(appName);
    }
  }, [location, app]);

  // Sử dụng useRoutes để render các route trong routesList
  const element = useRoutes(routesList);

  return element;
}
