import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/itemCard';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Store = ({onAdd,cart,onRemove,handleSize,cartLength}) => {
    const [list,setList] = useState([]);
    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get('https://wild-ruby-cricket-toga.cyclic.app /api/product');
                setList(res.data.products);
            }
            catch(err){
                console.log(err);
            }
        }
        getProducts();
    },[])
    return (
        <React.Fragment>
            <Header onAdd={onAdd} cart={cart} onRemove={onRemove} handleSize={handleSize} cartLength={cartLength}/>
            <main className="main">
                <section className="section apparel">
                    <div className="wrapper">
                        <div className="boxes">
                            {list.map((item,i)=>{
                                return <Link to={`/storeSingle/${item._id}`} key={i}><Item title={item.title} price={'$' + item.price} image={`../assets/${item.image[0].originalname}`}/></Link>
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    );
}
 
export default Store
