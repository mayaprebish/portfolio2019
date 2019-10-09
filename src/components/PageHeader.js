import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../styles/index.style.css';
import Media from "react-bootstrap/Media";

export default class PageHeader extends Component {
    render() {
        return (
            <div className="container page-heading">
                <Media>
                    <img
                        width={100}
                        height={100}
                        className="mr-3"
                        src="https://live.staticflickr.com/65535/48868152947_668a79a95e_n.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                </Media>

                <div>
                    <Link to='/about'>About </Link>
                    <Link to='/portfolio'>Portfolio </Link>
                    <Link to='/contact'>Contact </Link>
                    <Link to='/resume'>Resume </Link>
                </div>
            </div>
        )
    }


}