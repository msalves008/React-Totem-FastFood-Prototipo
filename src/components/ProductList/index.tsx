import { Container } from "./styles";
import { useRequest } from "../../hooks/useRequest";
import {useContext} from 'react'
import {ProductIdContext} from '../../context/useProductIdContext'
import loadingIcon from '../../assets/spinning-loading.gif'

interface Products {
  Products: Array<Product>;
}
interface Product {
  Products: string;
  id: string;
  name: string;
  description: string;
  value: number;
  situation: boolean;
  imageUrl: string;
}
interface ProductListProps {
  onOpenNewModal: () => void 
}

export function ProductList( {onOpenNewModal }: ProductListProps) {
  const productContext = useContext(ProductIdContext);

  const { data } = useRequest<Products>("http://localhost:4000/products");
  
 
  function setItemsSelect(idProduct: string,amount: number) {
    onOpenNewModal(); 
    productContext?.setProductId({
      productId: idProduct
    });
    productContext?.setAmountOrder({
      amountOrder: amount
    })
    
    
  }
  if (!data) {
    return <>
      <img src={loadingIcon} alt="" className="spinningLoading"/>
    </>;
  }


  return (
    <Container>
      <div className="section-hamburger">
        {data.Products.map((d) => (
          <button
            onClick={() => {
              setItemsSelect(d.id, d.value)           

            }}
            key={d.id}
          >
            <img src={d.imageUrl} alt="" />
            <div className="info-item-hamburger">
              <h3>{d.name}</h3>
              <div className="item-value-container">
                <span>R$</span>
                <h3 className="item-value-hamburger">{d.value}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>
     
    </Container>
    
  );
}
