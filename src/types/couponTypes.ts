import { Cart } from "./cartType";

export interface Coupon {
     id: number;
     code: string;
     discountPercent: number;
     validityStartDate: string;
     validityEndDate: string;
     minimumOrderValue: number;
     active: boolean;
}

export interface CouponState {
     coupons: Coupon[];
     cart: Cart | null;
     loading: boolean;
     error: string | null;
     couponCreated: boolean;
     couponApplied: boolean;
}
