import React, { Component } from 'react';
//import axios from 'axios';
import "./Turnstile.scss";
import axios from 'axios';

//const site = "https://embedded.carddex.konstructor.online/api/dw";
const site = "http://172.16.3.81:9999/api/dw";
//let model = 0;
class Turnstille extends Component {
    constructor() {
        super()
        this.state = {
            turnstile: [],
            loadingData: false,
            error: "Нет данных."
        }
    }
    componentDidMount() {
        this.setState({...this.state, loadingData: true})
        axios.post(`${site}/turnstile`,
                {
                    "app_id": "54654654654",
                    "trigger": 0,
                    "trigger_state": 0,
                    "seria": 0,
                    "module_selectors": [
                        {
                            "module": 0,
                            "state": 0
                        },
                        {
                            "module": 1,
                            "state": 0
                        },
                        {
                            "module": 2,
                            "state": 0
                        },
                        {
                            "module": 3,
                            "state": 0
                        },
                        {
                            "module": 4,
                            "state": 0
                        },
                        {
                            "module": 5,
                            "state": 0
                        },
                        {
                            "module": 6,
                            "state": 0
                        },
                        {
                            "module": 7,
                            "state": 0
                        }
                    ]
                }
            )
            //.then(res => res.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    turnstile: data.data,
                    loadingData: false
                })
        })
        .catch(err => console.log(err))
        //console.log(this.state.turnstile)
    }
    
    render() {
        const { turnstile } = this.state;
        console.log(turnstile.page_view)
        let caption =  turnstile.page_view ? turnstile.page_view.caption : null;
        let broshure = turnstile.page_view ? turnstile.page_view.download_broshure_button_link : null;
        let model_name = turnstile.page_view ? turnstile.page_view.model_name : null;
        let model_price = turnstile.page_view ? turnstile.page_view.model_price : null;

        let carousel_images = turnstile.page_view ? turnstile.page_view.carousel_images[0].image_source : null;
        carousel_images = site + carousel_images

        //Bottom-center Blocks
        let model_module_list = turnstile.page_view ? turnstile.page_view.model_module_list[0].caption : null;

        //Price
        let price = turnstile.page_view ? turnstile.page_view.model_module_list[0].price : null;

        //Seria Buttons Top left
        let seria_buttons_name_top_left = turnstile.page_view ? turnstile.page_view.seria_buttons[0].name : null;
        let seria_buttons_caption_top_left = turnstile.page_view ? turnstile.page_view.seria_buttons[0].caption : null;
        let seria_buttons_image_top_left = turnstile.page_view ? turnstile.page_view.seria_buttons[0].image_source : null;
            seria_buttons_image_top_left = site + seria_buttons_image_top_left;

        //Seria Buttons Top Right
        let seria_buttons_name_top_right = turnstile.page_view ? turnstile.page_view.seria_buttons[1].name : null;
        let seria_buttons_caption_top_right = turnstile.page_view ? turnstile.page_view.seria_buttons[1].caption : null;
        let seria_buttons_image_top_right = turnstile.page_view ? turnstile.page_view.seria_buttons[1].image_source : null;
            seria_buttons_image_top_right = site + seria_buttons_image_top_right;

        //Seria Buttons Bottom Left
        let seria_buttons_name_bottom_left = turnstile.page_view ? turnstile.page_view.seria_buttons[2].name : null;
        let seria_buttons_caption_bottom_left = turnstile.page_view ? turnstile.page_view.seria_buttons[2].caption : null;
        let seria_buttons_image_bottom_left = turnstile.page_view ? turnstile.page_view.seria_buttons[2].image_source : null;
            seria_buttons_image_bottom_left = site + seria_buttons_image_bottom_left;

        //Seria Buttons Bottom Right
        let seria_buttons_name_bottom_right = turnstile.page_view ? turnstile.page_view.seria_buttons[3].name : null;
        let seria_buttons_caption_bottom_right = turnstile.page_view ? turnstile.page_view.seria_buttons[3].caption : null;
        let seria_buttons_image_bottom_right = turnstile.page_view ? turnstile.page_view.seria_buttons[3].image_source : null;
            seria_buttons_image_bottom_right = site + seria_buttons_image_bottom_right;

        //Module Selectors
        let module_selectors_one = turnstile.page_view ? turnstile.page_view.module_selectors[0].caption : null;
        let module_selectors_one_name = turnstile.page_view ? turnstile.page_view.module_selectors[0].name : null;
        let state_module_one = turnstile.page_view ? turnstile.page_view.module_selectors[0].state : null;
        

        let module_selectors_two = turnstile.page_view ? turnstile.page_view.module_selectors[1].caption : null;
        let module_selectors_two_name = turnstile.page_view ? turnstile.page_view.module_selectors[1].name : null;
        let state_module_two = turnstile.page_view ? turnstile.page_view.module_selectors[1].state : null;
        

        let module_selectors_three = turnstile.page_view ? turnstile.page_view.module_selectors[2].caption : null;
        let module_selectors_three_name = turnstile.page_view ? turnstile.page_view.module_selectors[2].name : null;
        let state_module_three = turnstile.page_view ? turnstile.page_view.module_selectors[2].state : null;
       

        let module_selectors_four = turnstile.page_view ? turnstile.page_view.module_selectors[3].caption : null;
        let module_selectors_four_name = turnstile.page_view ? turnstile.page_view.module_selectors[3].name : null;

        let module_selectors_five = turnstile.page_view ? turnstile.page_view.module_selectors[4].caption : null;
        let module_selectors_five_name = turnstile.page_view ? turnstile.page_view.module_selectors[4].name : null;
        let state_module_five = turnstile.page_view ? turnstile.page_view.module_selectors[4].state : null;
        

        let module_selectors_six = turnstile.page_view ? turnstile.page_view.module_selectors[5].caption : null;
        let module_selectors_six_name = turnstile.page_view ? turnstile.page_view.module_selectors[5].name : null;
        let state_module_six = turnstile.page_view ? turnstile.page_view.module_selectors[5].state : null;
        //if(state_module_six === -1) {
        //    let state = document.getElementsByClassName(".wrapper-select")
        //    state.classList.add("opacity");
        //}

        let module_selectors_seven = turnstile.page_view ? turnstile.page_view.module_selectors[6].caption : null;
        let module_selectors_seven_name = turnstile.page_view ? turnstile.page_view.module_selectors[6].name : null;

        let module_selectors_eight = turnstile.page_view ? turnstile.page_view.module_selectors[7].caption : null;
        let module_selectors_eight_name = turnstile.page_view ? turnstile.page_view.module_selectors[7].name : null;

        return(
            <div className="wrapper-main">
                <p className="main-description">{caption}</p>
                <div className="wrapper-main-content">

            {/**                     CENTRAL BLOCK                        */}

                    <div className="wrapper-left-block__turnstille">
                        <div className="block">
                            <div className="wrapper-left__top__block">
                                <img src={seria_buttons_image_top_left} className="left-top-block__photo" alt=""></img>
                                <div className="left-top-block__description">
                                    Компактные турникеты<br />&emsp;&emsp;&emsp;серии "STR"
                                </div>
                            </div>
                            <div className="wrapper-right__top__block">
                                <img src={seria_buttons_image_top_right} className="right-top-block__photo" alt=""></img>
                                <div className="right-top-block__description">
                                    Тумбовые турникеты<br />&emsp;&emsp;серии "STR"
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper-left__bottom__block">
                                <img src={seria_buttons_image_bottom_left} className="left-bottom-block__photo" alt=""></img>
                                <div className="left-bottom-block__description">
                                    Тумбовые турникеты<br />&emsp;&emsp;серии "STX"
                                </div>
                            </div>
                            <div className="wrapper-right__bottom__block">
                                <img src={seria_buttons_image_bottom_right} className="right-bottom-block__photo" alt=""></img>
                                <div className="right-bottom-block__description">
                                    Тумбовые турникеты<br />&emsp;&emsp;серии "STX"
                                </div>
                            </div>
                        </div>
                    </div>

            {/**                     CENTRAL BLOCK                        */}

                    <div className="wrapper-center-block__turnstille">
                        <div className="center-block__top">
                            
                                <img className="center-block__top" src={carousel_images} alt="" />
                               {/* <img src={model_module_list} alt="" />
                                <img src={model_module_list} alt="" />
                                <img src={model_module_list} alt="" /> */}
                            
                        </div>
                        <div className="center-block__carousel">
                          
                           <div className="arrow-left"></div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div className="arrow-right"></div>
                            
                        </div>
                        <div className="center-block__bottom">
                            <div className="center-block__description">Комплектация:</div>
                            <div className="center-block__list">
                                <ul className="list">
                                    <li>{model_module_list}</li>
                                    <li>{model_module_list}</li>
                                    <li>{model_module_list}</li>
                                </ul>
                                <ul className="list-price">
                                    <li>{price}</li>
                                    <li>{price}</li>
                                    <li>{price}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

            {/**                     RIGHT BLOCK                        */}

                    <div className="wrapper-right-block__turnstille">
                        <div className="right-block__top">
                            <div className="right-block__top-description">
                                <div className="description-model">Модель</div>
                                <div className="description-price">{model_price}</div>
                            </div>
                            <div className="right-block__bottom-description">
                                <div key={module_selectors_one_name} className="description-model">{model_name}</div>
                                <a className="description-button" href={broshure} target="_blank" rel="noopener noreferrer">
                                    Скачать описание
                                </a>
                            </div>
                        </div>
                        <div className="right-block__bottom">
                            <div className="wrapper-select">
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="header-checkbox"/>
                                    <label className="onoffswitch-label" htmlFor="header-checkbox">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_one_name} className="right-block__select-description">{module_selectors_one}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch2">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch2-checkbox" id="header2-checkbox"/>
                                    <label className="onoffswitch2-label" htmlFor="header2-checkbox">
                                        <span className="onoffswitch2-inner"></span>
                                        <span className="onoffswitch2-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_two_name} className="right-block__select-description">{module_selectors_two}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch3">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch3-checkbox" id="header3-checkbox"/>
                                    <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                        <span className="onoffswitch3-inner"></span>
                                        <span className="onoffswitch3-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_three_name} className="right-block__select-description">{module_selectors_three}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch4">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch4-checkbox" id="header4-checkbox"/>
                                    <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                        <span className="onoffswitch4-inner"></span>
                                        <span className="onoffswitch4-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_four_name} className="right-block__select-description">{module_selectors_four}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch5">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch5-checkbox" id="header5-checkbox"/>
                                    <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                        <span className="onoffswitch5-inner"></span>
                                        <span className="onoffswitch5-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_five_name} className="right-block__select-description">{module_selectors_five}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch6">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch6-checkbox" id="header6-checkbox"/>
                                    <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                        <span className="onoffswitch6-inner"></span>
                                        <span className="onoffswitch6-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_six_name} className="right-block__select-description">{module_selectors_six}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch7">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch7-checkbox" id="header7-checkbox"/>
                                    <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                        <span className="onoffswitch7-inner"></span>
                                        <span className="onoffswitch7-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_seven_name} className="right-block__select-description">{module_selectors_seven}</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch8">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch8-checkbox" id="header8-checkbox"/>
                                    <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                        <span className="onoffswitch8-inner"></span>
                                        <span className="onoffswitch8-switch"></span>
                                    </label>
                                </div>
                                <div key={module_selectors_eight_name} className="right-block__select-description">{module_selectors_eight}</div>    
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Turnstille;