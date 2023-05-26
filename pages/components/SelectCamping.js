import React from "react";
import styles from "@/styles/Checkout.module.css";
import Basket from "@/components/Basket";

function SelectCamping() {
  return (
    <div className={styles.CampingFlex}>
      <div className={styles.CampingTypeFlex}>
        <div className={styles.CampingType}>
          <p>01</p>
          <h3>Green camping</h3>
          <p>
            The tents are made from recycled materials and FooFest loves
            sustainability.
          </p>
          <span className={styles.Price}>DKK 249,-</span>
        </div>
        <div className={styles.CampingType}>
          <p>02</p>
          <h3>Tent Set-up Service</h3>
          <p>
            The crew will set up tents for you. The tents are included in the
            price.
          </p>
          <span className={styles.Price}>DKK 299,-</span>
        </div>
      </div>

      <Basket />
    </div>
  );
}

export default SelectCamping;
