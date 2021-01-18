import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Right } from '../../assets/images';

const routes = [
  { path: '/', breadcrumb: 'teft' },
  { path: '/circles', breadcrumb: 'Circles' },
  { path: '/circles/purple', breadcrumb: 'Purple circles', matchOptions: { exact: true } },
];

export function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  const length = breadcrumbs.length;
  
  return (
    <div className="flex justify-center center-content mt-32 space-x-16">
      {breadcrumbs.map(({ breadcrumb, match: { url } }, index) => {
        const isLast = index === length - 1;

        return (
          <div key={`${index}-bread`} className={`flex space-x-16 items-center text-sm font-bold ${!isLast && 'text-primary'}`}>
            <Link to={url}>
              {breadcrumb}
            </Link>
            {!isLast && <Right />}
          </div>
        );
      })}
    </div>
  );
}
