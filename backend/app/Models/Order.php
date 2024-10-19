<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'status', 'total_amount', 'payment_method', 'payment_status'];
    const PAID = 1;
    const UNPAID = 2;
    const PENDING = 1;

    public static function createOrder($user, $paymentMethod, $addressOrder, $city)
    {
        $order = self::create([
            'user_id' => $user->id,
            'status' => Order::PENDING,
            'payment_status' => Order::UNPAID,
            'total_amount' => 0,
            'payment_method' => $paymentMethod,
        ]);

        OrderAddresses::create([
            'order_id' => $order->id,
            'address_order' => $addressOrder,
            'city' => $city,
        ]);

        return $order;
    }

    public function addItem($productVariantId, $quantity, $price)
    {
        OrderItem::create([
            'order_id' => $this->id,
            'product_variant_id' => $productVariantId,
            'quantity' => $quantity,
            'price' => $price,
        ]);
    }

    public function updateTotalAmount($totalAmount)
    {
        $this->update(['total_amount' => $totalAmount]);
    }
}
