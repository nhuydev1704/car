import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import { desc, eq } from 'drizzle-orm';
import Link from 'next/link';
import React from 'react';

import { db } from '@/libs/DB';
import { categorySchema, productSchema } from '@/models/Schema';

const AdminProduct = async () => {
  const products = await db
    .select()
    .from(productSchema)
    .leftJoin(categorySchema, eq(categorySchema.id, productSchema.category_id))
    .orderBy(desc(productSchema.id))
    .all();
  console.log('🚀 ~ AdminProduct ~ products:', products);

  return (
    <div className="flex justify-center p-[20px]">
      <div className="w-full max-w-screen-2xl">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Quản lý sản phẩm</h1>
          <Link href="/admin/category/add" className="btn btn-sm">
            Thêm mới
            <PlusIcon />
          </Link>
        </div>

        <div className="mt-4 overflow-x-auto">
          {products && products.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th aria-label="empty" />
                  <th>Tên xe</th>
                  <th aria-hidden className="w-[100px]" />
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {products.map(({ product }) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask  size-12">
                              {/* {product.image && (
                                <img
                                  src={product.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              )} */}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{product.name}</td>
                      <th aria-hidden className="w-[100px]">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/product/${product.id}`}
                            className="btn btn-sm"
                          >
                            <Pencil1Icon />
                          </Link>
                          {/* <DeleteCategory id={product.id} /> */}
                        </div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <tr className="flex w-full justify-center py-[40px]">
              Chưa có bản ghi
            </tr>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
