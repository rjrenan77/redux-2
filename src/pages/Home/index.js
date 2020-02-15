import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_detalhe1.jpg?ims=240x240"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrion</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_detalhe1.jpg?ims=240x240"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrion</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_detalhe1.jpg?ims=240x240"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrion</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_detalhe1.jpg?ims=240x240"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrion</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_detalhe1.jpg?ims=240x240"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrion</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_detalhe1.jpg?ims=240x240"
          alt="Tênis"
        />
        <strong> Tênis muito legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrion</span>
        </button>
      </li>
    </ProductList>
  );
}
