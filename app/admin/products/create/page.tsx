import ProductForm from '@/components/shared/admin/product-form'
import { APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Create product - ${APP_NAME}`,
}

export default async function UpdateProductPage() {
  return (
    <>
      <div className="space-y-2 max-w-5xl mx-auto flex-1 wrapper ">
      <h1 className="h2-bold">Create Product</h1>
        <ProductForm type="Create" />
      </div>
    </>
  )
}
