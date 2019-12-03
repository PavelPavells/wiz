import React, { Component } from 'react';
//import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "./Main.scss";

//const site = "https://embedded.carddex.konstructor.online/api/dw";
const site = "http://172.16.3.81:9999/api/dw/"

class Main extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    render() {
        const caption = this.props.main.page_view ? this.props.main.page_view.caption : null;
        let photo_left_block = this.props.main.page_view ? this.props.main.page_view.device_buttons[0].image_source : null; 
        photo_left_block = site + photo_left_block;
        //console.log(photo_left_block)

        let photo_right_block = this.props.main.page_view ? this.props.main.page_view.device_buttons[1].image_source : null;
        photo_right_block = site + photo_right_block;

        //const description_left_block = this.props.main.page_view ? this.props.main.page_view.device_buttons[0].caption : null;
        //const description_right_block = this.props.main.page_view ? this.props.main.page_view.device_buttons[1].caption : null;
        //console.log(this.props.main);
        return (
            <div className="wrapper-main">
                <p className="main-description">{caption}</p>
                <div className="wrapper-main-content">
                    <div className="wrapper-left-block">
                        <p className="left-block-description">
                            {/*{photo_left_block}*/}
                            &emsp;&emsp;&emsp;Шлагбаумы<br />для парковок и стоянок
                        </p>
                        <NavLink exact activeClassName="link-barrier" to="/barrier">
                            <div className="left-block-image">
                                <div className="image">
                                    <img className="image" src={photo_left_block} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="wrapper-right-block">
                        <p className="right-block-description">
                            {/*{description_right_block}*/}
                            &emsp;&emsp;&emsp;Турникеты<br />для контроля доступа
                        </p>
                        <NavLink exact activeClassName="link-turnstille" to="/turnstile">
                            <div className="right-block-image">
                                <div className="image">
                                    <img className="image" src={photo_right_block} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;