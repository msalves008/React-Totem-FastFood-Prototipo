import { Container } from "./styles";
import { useProduct } from "../../hooks/useProducts";
import {useContext} from 'react'
import {ProductIdContext} from '../../context/useProductIdContext'

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
interface HamburguesProps {
  onOpenNewModal: () => void
 
}

export function Hamburgues( {onOpenNewModal }: HamburguesProps) {
  const productContext = useContext(ProductIdContext);
  /* const {productId, setProductId} = useProductId(); */

  const { data } = useProduct<Products>("http://localhost:4000/products");

  function setItemsSelect(idProduct: string) {
    onOpenNewModal(); 
    productContext?.setProductId({
      productId: idProduct
    });
    
    
  }
  if (!data) {
    return <></>;
  }
/*   console.log(data); */

  return (
    <Container>
      <div className="section-hamburger">
        {data.Products.map((d) => (
          <button
            onClick={() => setItemsSelect(d.id)}
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
