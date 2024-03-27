import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import dayjs from 'dayjs';
import { desc, eq } from 'drizzle-orm';
import Link from 'next/link';
import React from 'react';

import DeleteProduct from '@/components/FormProduct/DeleteProduct';
import ImageZoom from '@/components/ImageZoom';
import { db } from '@/libs/DB';
import { categorySchema, productSchema } from '@/models/Schema';
import { convertToVietnameseCurrency } from '@/utils';

export default async function Index() {
  const products = await db
    .select()
    .from(productSchema)
    .leftJoin(categorySchema, eq(categorySchema.id, productSchema.category_id))
    .orderBy(desc(productSchema.id))
    .all();

  return (
    <div className="flex justify-center p-[20px]">
      <div className="w-full max-w-screen-2xl">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Quản lý sản phẩm</h1>
          <Link href="/admin/product/add" className="btn btn-sm">
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
                  <th aria-label="empty">Hình ảnh</th>
                  <th>Tên xe</th>
                  <th>Giá</th>
                  <th>Hãng</th>
                  <th>Ngày tạo</th>
                  <th aria-hidden className="w-[100px]" />
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {products.map(({ product, category }) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <div className="flex flex-wrap items-center gap-3">
                          {product.images &&
                            product.images.split(',').map((image) => (
                              <ImageZoom key={image}>
                                <img
                                  className="max-w-[100px] border shadow-md"
                                  src={image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </ImageZoom>
                            ))}
                        </div>
                      </td>

                      <td>{product.name}</td>
                      <td>{convertToVietnameseCurrency(+product.price)}</td>
                      <td>{category?.name}</td>
                      <td>{dayjs(product.createdAt).format('YYYY-MM-DD')}</td>
                      <th aria-hidden className="w-[100px]">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/product/${product.id}`}
                            className="btn btn-sm"
                          >
                            <Pencil1Icon />
                          </Link>
                          <DeleteProduct id={product.id} />
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
}
