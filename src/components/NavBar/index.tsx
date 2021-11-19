import React, { useCallback } from 'react';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { useRequest } from '../../hooks/useRequest';

interface NavBarCategories {
  Categories: Array<NavBarType>;
}
interface NavBarType{
  id: string;
  name: string;
  imageUrl: string;
}
const NavBar: React.FC = () => {

  const { data } = useRequest<NavBarCategories>("http://localhost:4000/categories");

  const history = useHistory();

  const handleCombos = useCallback(() => history.push('/list-products-combos'), [history]);
  
  function opemNewModal(id: any){
    alert('id: ' + id);
   /*  handleCombos(); */
  }

 
  if (!data) {
    return <></>;
  }
  console.log(data.Categories);
  return (
    <Container>
      <div className="main-navbar"> 
        {data.Categories.map((d)=>(
              <button className="base-navbar" onClick={() => opemNewModal(d.id)} key={d.id}>
              <img src={d.imageUrl} alt="" className="icon" />                
              </button>      
        ))}         
      </div>
    </Container>
  );
};

export default NavBar;
