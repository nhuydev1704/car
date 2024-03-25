import { PlusIcon } from '@radix-ui/react-icons';

export async function generateMetadata() {
  return {
    title: 'Admin product',
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

    <div className="mt-4 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th aria-label="empty" />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle size-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>

            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminProduct;
