import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import { desc } from 'drizzle-orm';
import Link from 'next/link';
import React from 'react';

import DeleteCategory from '@/components/FormCategory/DeleteCategory';
import { db } from '@/libs/DB';
import { categorySchema } from '@/models/Schema';

const AdminCategory = async () => {
  const categories = await db
    .select()
    .from(categorySchema)
    .orderBy(desc(categorySchema.id))
    .all();

  return (
    <div className="flex justify-center p-[20px]">
      <div className="w-full max-w-screen-2xl">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Quản lý danh mục</h1>
          <Link href="/admin/category/add" className="btn btn-sm">
            Thêm mới
            <PlusIcon />
          </Link>
        </div>

        <div className="mt-4 overflow-x-auto">
          {categories && categories.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th aria-label="empty" />
                  <th>Tên thương hiệu</th>
                  <th aria-hidden className="w-[100px]" />
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {categories.map((category) => {
                  return (
                    <tr key={category.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask  size-12">
                              {category.image && (
                                <img
                                  src={category.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{category.name}</td>
                      <th aria-hidden className="w-[100px]">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/category/${category.id}`}
                            className="btn btn-sm"
                          >
                            <Pencil1Icon />
                          </Link>
                          <DeleteCategory id={category.id} />
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

export default AdminCategory;
