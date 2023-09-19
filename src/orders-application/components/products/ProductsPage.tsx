import { PageLayout } from '../layout/page-layout';
import { ProductsGrid } from './ProductsGrid';

export const ProductsPage = () => {
  return (
    <PageLayout disableSearch onSearch={() => {}}>
      <ProductsGrid />
    </PageLayout>
  );
};
