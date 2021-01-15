import useBreadcrumbs from 'use-react-router-breadcrumbs';

export function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  return <>{breadcrumbs.map(({ breadcrumb }) => breadcrumb)}</>;
}