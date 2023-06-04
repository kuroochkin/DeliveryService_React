import './cart.scss';
import {
    FaAngleUp,
    FaAngleDown}
    from 'react-icons/fa';

const Cart = ({cartItems, setCartItems}) => {

    console.log(cartItems);
    console.log(cartItems);

    const renderItems = (data) => {

        return (
            <section class="section-cart">
                <header class="section-cart__header">
                    <div class="container1">
                        <h1 class="title-1">Корзина товаров</h1>
                    </div>
                </header>

                <div class="section-cart__body">
                    <div class="container1">

                <section class="cart">
                    <header class="cart-header">
                        <div class="cart-header__title">наименование</div>
                        <div class="cart-header__count">количество</div>
                        <div class="cart-header__cost">стоимость</div>
                    </header>

                    {data.map((product) => (
                        <section class="product">
                            <div class="product__img"><img src={'./img/' + product.thumbnail} alt="Apple MacBook Air 13"/></div>
                                <div class="product__title">{product.title}</div>
                                    <div class="product__count">
                                        <div class="count">
                                            <div class="count__box">
                                                <input type="number" class="count__input" min="1" max="100" value="1"/>
                                            </div>
                                            <div class="count__controls">
                                                <button type="button" class="count__up">
                                                    <div className="icon">{<FaAngleUp/>}</div>
                                                </button>
                                                <button type="button" class="count__down">
                                                <div className="icon">{<FaAngleDown/>}</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                <div class="product__price">.</div>
                                <div class="product__controls">
                                <button type="button">
                                    <img src="./img/icons/cross.svg" alt="Delete"/>
                                </button>
                        </div>
                        </section>
                    ))}
                    

                
                    <footer class="cart-footer">
                        <div class="cart-footer__count"></div>
                        <div class="cart-footer__price"></div>
                    </footer>
                </section>

            </div>
        </div>
    </section>


        )
    }

    let items;
    if(cartItems !== null){
        items = renderItems(cartItems);
    }

    return(
        <>
        {items}
        </>
    )
}  


export default Cart;