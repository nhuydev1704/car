'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { readMoney } from '@/utils';
import { productValidate } from '@/validations/GuestbookValidation';

import RichEditor from '../Editor/RichEditor';
import ImageUploadProduct from '../ImageUpload/ImageUploadProduct';

const FormProduct = () => {
  const { slug } = useParams();

  const [loading, setLoading] = React.useState(false);

  const {
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof productValidate>>({
    resolver: zodResolver(productValidate),
  });
  console.log('🚀 ~ FormProduct ~ errors:', errors);

  const price = watch('price');
  const categoryId = watch('category_id');
  const attribute = watch('attribute');
  const description = watch('description');

  const [logo, setLogo] = React.useState<any>('');

  const handleCreate = handleSubmit(async (data) => {
    const dataImages = logo;
    const images = [];
    // eslint-disable-next-line no-plusplus
    for (let i: any = 0; i < dataImages.length; i++) {
      const file = dataImages[i];
      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
      const formData = new FormData();
      formData.append('file', file.file);
      formData.append('upload_preset', 'qznfh3dk');

      // eslint-disable-next-line no-await-in-loop
      const res: any = await axios.post(url, formData);

      images.push(res.data.secure_url);
    }

    setLoading(true);
    if (slug) {
      await fetch(`/api/product`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: slug,
          name: data.name,
          category_id: data.category_id,
          price: data.price,
          description: data.description,
          attribute: data.attribute,
          images: images.join(','),
        }),
      });
    } else {
      await fetch(`/api/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          category_id: data.category_id,
          price: data.price,
          description: data.description,
          attribute: data.attribute,
          images: images.join(','),
        }),
      });
    }
    setLoading(false);
    window.location.href = '/admin/product';
    reset();
  });

  // React.useEffect(() => {
  //   if (slug) {
  //     fetch(`/api/product?id=${slug}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLogo(data.image);
  //         reset(data);
  //       });
  //   }
  // }, [slug]);

  const [categories, setCategories] = React.useState<any>([]);

  React.useEffect(() => {
    fetch(`/api/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <section className="mt-10 bg-white">
      <form onSubmit={handleCreate}>
        <div className="flex gap-[40px]">
          <div className="w-1/2">
            <div>
              <ImageUploadProduct
                value={logo}
                onChange={(imgs: any) => {
                  setLogo(imgs);
                }}
              />
              {(!logo || logo?.length === 0) && (
                <div className="my-2 text-xs italic text-red-500">
                  Vui lòng chọn ảnh
                </div>
              )}
            </div>
            <div>
              <div className="label">
                <span className="label-text">Mô tả</span>
              </div>
              <RichEditor
                // disabled={disabled}
                // handleCallbackContent={this.handleChangeFrom}
                handleCallbackContentNotDebounce={(content: any) =>
                  setValue('description', content)
                }
                refContent={description}
              />
            </div>
          </div>

          <div className="form-control w-1/2">
            <div>
              <div className="label">
                <span className="label-text">
                  Tên xe <span className="text-red-500">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Nhập tên xe"
                className="input input-bordered w-full"
                {...register('name')}
              />
              {errors.name?.message && (
                <div className="my-2 text-xs italic text-red-500">
                  {errors.name?.message}
                </div>
              )}
            </div>
            {/* category */}
            <div>
              <div className="label">
                <span className="label-text">
                  Hãng xe <span className="text-red-500">*</span>
                </span>
              </div>
              <select
                className="select select-bordered w-full"
                // {...register('category_id')}
                onChange={(e) => setValue('category_id', +e.target.value)}
                value={categoryId}
                defaultValue={0}
              >
                <option value={0}>Chọn hãng xe?</option>
                {categories.map((category: any) => (
                  <option key={category.id} value={+category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.name?.message && (
                <div className="my-2 text-xs italic text-red-500">
                  {errors.name?.message}
                </div>
              )}
            </div>
            {/* price */}
            <div>
              <div className="label">
                <span className="label-text">
                  Giá xe <span className="text-red-500">*</span>
                </span>
              </div>
              <div className="flex w-full items-center gap-2">
                <CurrencyInput
                  placeholder="Nhập giá xe"
                  decimalsLimit={2}
                  className="input input-bordered w-full"
                  decimalSeparator=","
                  groupSeparator="."
                  value={price}
                  // {...register('price')}
                  // suffix="000.000đ"
                  onValueChange={(value: any) => setValue('price', value)}
                />
                <div className="w-[120px] font-bold">triệu đồng</div>
              </div>
              <div className="mt-2 text-[12px] italic">
                {price && readMoney(`${price}000000`)}
              </div>

              {errors.price?.message && (
                <div className="my-2 text-xs italic text-red-500">
                  {errors.price?.message}
                </div>
              )}
            </div>
            <div>
              <div className="label">
                <span className="label-text">Thuộc tính</span>
              </div>
              <RichEditor
                // disabled={disabled}
                // handleCallbackContent={this.handleChangeFrom}
                handleCallbackContentNotDebounce={(content: any) =>
                  setValue('attribute', content)
                }
                refContent={attribute}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-[40px]">
          <button type="submit" className="btn btn-primary px-[40px]">
            Lưu
            {loading && <span className="loading loading-spinner" />}
          </button>
        </div>
      </form>
    </section>
  );
};

export default React.memo(FormProduct);
