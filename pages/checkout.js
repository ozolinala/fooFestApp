import Head from "next/head";
import { StoreContext } from "@/contexts/storeContext";
import { useContext, useEffect, useState } from "react";
import styles from "@/styles/Basket.module.css";

export default function Checkout() {
  const state = useContext(StoreContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data } = useContext(StoreContext);

  useEffect(() => {
    let amount = 0;
    let price = 0;

    data.basket.forEach((item) => {
      amount += item.amount;
      price += item.price * item.amount;
    });

    setTotalAmount(amount);
    setTotalPrice(price);
  }, [data.basket]);

  const handleInputChange = (event, item) => {
    // Update the item details in the context
    const updatedBasket = data.basket.map((basketItem) => {
      if (basketItem.id === item.id) {
        return {
          ...basketItem,
          [event.target.name]: event.target.value,
        };
      }
      return basketItem;
    });
    state.updateBasket(updatedBasket);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Perform any additional logic or actions here
    console.log("Form submitted!");
  };

  return (
    <>
      <Head>
        <title>fooFest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <h1>Checkout</h1>
        <ul>
          {state.data.basket.map((item) => (
            <li className={styles.ticketFormList} key={item.id}>
              {item.name} X {item.amount}
              {[...Array(item.amount)].map((_, index) => (
                <form
                  onSubmit={handleSubmit}
                  className={styles.userInfoForm}
                  key={`${item.id}-${index}`}
                >
                  <p>Ticket {index + 1}</p>
                  <div className={styles.formContainer}>
                    <div>
                      <div className={styles.labelAndInput}>
                        <label>Name</label>
                        <input
                          type="text"
                          name={`name-${item.id}-${index}`}
                          placeholder="Write here.."
                          required
                          onChange={(e) => handleInputChange(e, item)}
                        />
                      </div>
                      <div className={styles.labelAndInput}>
                        <label>Last name</label>
                        <input
                          type="text"
                          name={`name-${item.id}-${index}`}
                          placeholder="Write here.."
                          required
                          onChange={(e) => handleInputChange(e, item)}
                        />
                      </div>
                    </div>
                    <div>
                      <div className={styles.labelAndInput}>
                        <label>E-mail</label>
                        <input
                          type="email"
                          name={`email-${item.id}-${index}`}
                          placeholder="Write here.."
                          required
                          onChange={(e) => handleInputChange(e, item)}
                        />
                      </div>
                      <div className={styles.labelAndInput}>
                        <label>Date of birth</label>
                        <input
                          type="date"
                          name={`email-${item.id}-${index}`}
                          placeholder="Write here.."
                          required
                          onChange={(e) => handleInputChange(e, item)}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              ))}
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <p>
            <strong>Total amount of tickets:</strong> {totalAmount}
          </p>
          <p>
            <strong>Total price:</strong> DKK {totalPrice},-
          </p>
        </div>
        <button onClick={handleSubmit}>Buy now</button>
      </div>
    </>
  );
}
