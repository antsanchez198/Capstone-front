import React from "react";

export default function CartPage() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div class="container p-4 my-5 bg-secondary text-black rounded">
        <div class="container-sm  bg-light">
          <div class="row">
            <div class="col text-center h2">Menu Item</div>
            <div class="col text-center h2">Price</div>
            <div class="col  text-center h2">Quantity</div>
          </div>
        </div>
      </div>
      <div class="container p-4 my-5 bg-secondary text-black rounded">
        <div class="container-md  bg-light">
          <div class="row">
            <div class="col text-center h2">Menu Item</div>
            <div class="col text-center h2">Price</div>
            <div class="col text-center h2">Quantity</div>
          </div>
        </div>
      </div>
      <div class="container p-4 my-5 bg-secondary text-black rounded">
        <div class="container-md bg-light">
          <div class="row">
            <div class="col text-center h2">Menu Item</div>
            <div class="col text-center h2">Price</div>
            <div class="col text-center h2">Quantity</div>
          </div>
        </div>
      </div>
      <div className="ms-5 ps-5 ">
        <h2>Total Price: $0.00 </h2>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-endd-grid gap-2 d-md-flex justify-content-md-end me-5 pe-5">
        <button className="btn btn-primary btn-lg" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
}
