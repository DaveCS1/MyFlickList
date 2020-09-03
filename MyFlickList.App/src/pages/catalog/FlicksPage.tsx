import React from 'react';
import api from '../../infra/api';
import { FlickOrder } from '../../infra/api.generated';
import Breadcrumb from '../../shared/Breadcrumb';
import DataLoader from '../../shared/DataLoader';
import Meta from '../../shared/Meta';
import Paginator from '../../shared/Paginator';
import useQueryParams from '../../shared/useQueryParams';
import { routes } from '../PageRouter';
import FlickTable from './shared/FlickTable';

export default function FlicksPage() {
  const { order, filterTag, page } = useQueryParams();
  const pageNumber = Number(page) || 1;

  return (
    <DataLoader
      getData={() => api.flicks.getFlicks(order as FlickOrder, filterTag, pageNumber)}
      deps={[order, filterTag, pageNumber]}
      render={(flicks) => (
        <div>
          <Meta title={`${order} Flicks`} />

          <Breadcrumb segments={[{ title: 'Home', href: routes.home() }, { title: 'Flicks' }]} />

          <FlickTable flicks={flicks.items} startingPosition={1 + (pageNumber - 1) * 10} />

          <Paginator
            currentPage={pageNumber}
            lastPage={flicks.totalPages}
            getPageHref={(p) => routes.flicks({ order: order as FlickOrder, filterTag, page: p })}
          />
        </div>
      )}
    />
  );
}