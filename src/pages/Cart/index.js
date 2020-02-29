/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(cartOne => (
            <tr>
              <td>
                <img src={cartOne.image} alt={cartOne.title} />
              </td>
              <td>
                <strong>{cartOne.title}</strong>
                <span>{cartOne.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(cartOne)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={cartOne.amount} />
                  <button type="button" onClick={() => increment(cartOne)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{cartOne.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeToCart(cartOne.id))}
                >
                  <MdDelete size="20" color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
