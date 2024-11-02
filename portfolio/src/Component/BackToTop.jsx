
import './css/backtotop.css';
import React, { Component } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.toggleVisible = this.toggleVisible.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisible);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleVisible);
    }

    toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        this.setState({ visible: scrolled > 300 });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    render() {
        const { visible } = this.state;

        return (
            <div style={{ display: visible ? 'inline' : 'none' }} className='backToTop'>
                <button onClick={this.scrollToTop} aria-label='Back to top'>
                    <IoIosArrowDropupCircle style={{ fontSize: '3rem', color: '#0964d374' }} />
                </button>
            </div>
        );
    }
}

export default BackToTop;
