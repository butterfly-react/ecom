import { getMyCart } from '@/lib/actions/cart.actions'
import CartForm from './cart-form'
import { APP_NAME } from '@/lib/constants'

export const metadata = {
  title: `Shopping Cart - ${APP_NAME}`,
}

export default async function CartPage() {
  const cart = await getMyCart()

  return (
    <div className="space-y-8 flex-1 wrapper h-screen">
      <CartForm cart={cart} />

    </div>
  )
}
