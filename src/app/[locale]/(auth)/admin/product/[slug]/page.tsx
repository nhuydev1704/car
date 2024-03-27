import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import FormProduct from '@/components/FormProduct';

export async function generateMetadata() {
  return {
    title: 'Update product',
  };
}

export default function Index() {
  return (
    <div className="flex justify-center p-[20px]">
      <div className="w-full max-w-screen-2xl">
        <div className="flex items-center gap-2">
          <Link href="/admin/product" className="btn btn-sm">
            <ArrowLeftIcon />
          </Link>
          <h1 className="font-bold underline">Cập nhật sản phẩm</h1>
        </div>

        <FormProduct />
      </div>
    </div>
  );
}
