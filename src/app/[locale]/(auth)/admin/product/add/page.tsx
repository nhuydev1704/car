import { PlusIcon } from '@radix-ui/react-icons';

export async function generateMetadata() {
  return {
    title: 'Add product',
  };
}

const AdminProduct = () => (
  <div className="p-[20px]">
    <div className="flex items-center justify-between">
      <h1 className="font-bold">Quản lý sản phẩm</h1>
      <button type="button" className="btn btn-sm">
        Thêm mới
        <PlusIcon />
      </button>
    </div>

    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Add a new product
        </h2>
        <div>
          <div className="w-[200px]">img</div>
          <div>product</div>
        </div>
      </div>
    </section>
  </div>
);

export default AdminProduct;
