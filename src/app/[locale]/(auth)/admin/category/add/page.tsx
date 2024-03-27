import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import FormCategory from '@/components/FormCategory';

export async function generateMetadata() {
  return {
    title: 'Add product',
  };
}

export default function Index() {
  return (
    <div className="flex justify-center p-[20px]">
      <div className="w-full max-w-screen-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/admin/category" className="btn btn-sm">
              <ArrowLeftIcon />
            </Link>
            <h1 className="font-bold underline">Thêm mới danh mục</h1>
          </div>
        </div>

        <FormCategory />
      </div>
    </div>
  );
}
