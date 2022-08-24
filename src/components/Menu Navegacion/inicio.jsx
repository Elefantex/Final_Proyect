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
                    Last items in the store
                </h2>
                <div >
                    <Carousel
                        activeSlideIndex={this.state.activeSlideIndex}
                        onRequestChange={this.setActiveSlideIndex}
                        itemsToShow={4}
                        itemsToScroll={1}
                    >
                        <div class="ocultar">
                            <a href="/camisetas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio">  Adidas t shirt</p></div></a>
                            <a href="/camisetas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio"> Nike t shirt</p></div></a>
                            <a href="/calcetines" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio">  Unico sock</p></div></a>
                            <a href="/calcetines" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio">  Rojo sock</p></div></a>
                            <a href="/chaquetas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio">  Neva Jacket</p></div></a>
                            <a href="/camisas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio">  Reebok shirt</p></div></a>
                            <a href="/camisas" class="NoLink"><div style={{ width: 250, height: 90 }} class="reducir"><p class="roundInicio">  Adidas shirt</p></div></a>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Inicio;