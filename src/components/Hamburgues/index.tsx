import React from 'react';
import combBurger from './../../assets/items/combo-burger.png'
import combBurgerCoca from './../../assets/items/combo-burger-coca.png'
import combBurgerSudae from './../../assets/items/combo-burger-sundae.png'
import combBatata from './../../assets/items/doble-batata.png'
import combTriploBatata from './../../assets/items/triplo-batata.png'
import TriploBatataCoca from './../../assets/items/triplo-batata-coca.png'
import { Container } from './styles';

const Hamburgues: React.FC = () => {
  const data = [
    {
      "id": "A07080354-57ee-4348-93ce-2b2b01d9f279",
      "name": "2 TRIPLO-BACON",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 17.99,
      "situation": true,
      "imageUrl": combBurger
    },
    {
      "id": "B07080354-57ee-4348-93ce-2b2301d9f279",
      "name": "TRIPLO-BACON + COCA",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 25.90,
      "situation": true,
      "imageUrl": combBurgerCoca
    },
    {
      "id": "C07080354-57ee-4348-93ce-2b5b01d9f279",
      "name": "TRIPLO-BACON + TOP SUNDAE",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 28.99,
      "situation": true,
      "imageUrl": combBurgerSudae
    },
    {
      "id": "D07080354-57ee-4358-93ce-2b2b01d9f279",
      "name": "2 - BATATAS CANOA",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 14.99,
      "situation": true,
      "imageUrl": combBatata
    },
    {
      "id": "07080354-57ee-43432-3ce-2b2b01d9f279",
      "name": "3 - BATATAS CANOA",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 22.99,
      "situation": true,
      "imageUrl": combTriploBatata
    },
    {
      "id": "07080554-57ee-4348-93ce-2b2b01d9f279",
      "name": "TRIPLO-BACON, BT CANOA,+ COCA-COLA",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 31.99,
      "situation": true,
      "imageUrl": TriploBatataCoca
    },
    {
      "id": "07080354-57ee-4348-93ce-2b2b01d9f279",
      "name": "2 TRIPLO-BACON",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 17.99,
      "situation": true,
      "imageUrl": combBurger
    },
    {
      "id": "07010354-57ee-4348-93ce-2b2b01d9f279",
      "name": "2 TRIPLO-BACON",
      "description": "Pão, 2 Hamburguers, Ovo,2 Salsichas, Presunto, Mussarela, Batata Palha e Salada",
      "value": 17.99,
      "situation": true,
      "imageUrl": combBurger
    },
  ]

  function setItemsSelect(id: string){

    const localStorageContent = localStorage.getItem('itemsSelects')
    let itemsSelects;
    if (localStorageContent === null){
      itemsSelects = []
    }else{
      itemsSelects = JSON.parse(localStorageContent);
    }
    itemsSelects.push(id)  
    localStorage.setItem('itemsSelects', JSON.stringify(itemsSelects))
 
  }

  return (
    <Container>
      <div className="section-hamburger">
        {data.map((d)=>(
          <button className="base-show-item" onClick={() => setItemsSelect(d.id)}  key={d.id}>
            <img src={d.imageUrl} alt="" className="itemImage-hamburger" />
            <div className="info-item-hamburger">
              <h3 className="item-title-hamburger">{d.name}</h3>
              <h3 className="item-value-hamburger">R$ {d.value}</h3>
            </div>
          </button>
        ))}

      </div>
    </Container>
  );
};

export default Hamburgues;
