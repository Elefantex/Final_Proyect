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
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/camisetasM" class="NoLink">Camiseta Adidas</a></p></div>
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/camisetasM" class="NoLink">Camisetas Nike</a></p></div>
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/calcetines" class="NoLink">Calcetin Unico</a></p></div>
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/calcetines" class="NoLink">Calcetin Rojo</a></p></div>
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/chaquetas" class="NoLink">Chaqueta nueva</a></p></div>
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/camisasM" class="NoLink">Camisetas Adidas</a></p></div>
                            <div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"><a href="/camisasM" class="NoLink">Camisetas Adidas</a></p></div>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Inicio;