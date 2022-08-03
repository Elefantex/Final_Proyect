import React from "react";
import './inicio.css';
import ReactDOM from 'react-dom';
import { Component } from "react";
import Carousel from "react-simply-carousel";



class Inicio extends Component {

    state = {
        activeSlideIndex: 0,
    };

    setActiveSlideIndex = (newActiveSlideIndex) => {
        this.setState({
            activeSlideIndex: newActiveSlideIndex,
        });
    };

    render() {
        return (
            <div>
                <h2 class="AlCentro">
                    Ultimos productos en la tienda
                </h2>
                <div >
                    <Carousel
                        activeSlideIndex={this.state.activeSlideIndex}
                        onRequestChange={this.setActiveSlideIndex}
                        itemsToShow={4}
                        itemsToScroll={1}
                    >
                        <div class="ocultar">
                            <a href="/camisetas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Camiseta Adidas</p></div></a>
                            <a href="/camisetas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Camisetas Nike</p></div></a>
                            <a href="/calcetines" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Calcetin Unico</p></div></a>
                            <a href="/calcetines" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Calcetin Rojo</p></div></a>
                            <a href="/chaquetas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Chaqueta nueva</p></div></a>
                            <a href="/camisas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Camisa Reebok</p></div></a>
                            <a href="/camisas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Camisa Adidas</p></div></a>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Inicio;