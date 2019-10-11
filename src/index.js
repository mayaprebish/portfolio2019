const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const React = window.React;
const ReactDOM = window.ReactDOM;
const Button = window.React.Button;
const Overlay = window.React.Overlay;
const $ = window.jQuery;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <Router>
            <div>
                <Header/>

                <Route exact path='/' component={Resume} id='nav-resume'/>
                <Route path='/portfolio' component={Portfolio} id='nav-portfolio'/>
                <Route path='/about' component={About} id='nav-about'/>
                <Route path='/contact' component={Contact} id='nav-contact'/>
                <Route path='/resume' component={Resume} id='nav-resume'/>
                <Route path='/matlab' component={MatLab} id='matlab'/>
                <Route path='/excellence' component={Excellence} id='excellence'/>
                <Route path='/minesweeper' component={Minesweeper} id='minesweeper'/>
                <Route path='/acuityview' component={AcuityView} id='acuityview'/>
            </div>
        </Router>
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
            imgsrc: this.props.imgsrc
        }
    }

    render() {
        return (
            <div className='card-container' style={cardStyle}>
                <div className='card-body'>
                    <div className="row">
                        <h3 style={titleStyle}>{this.state.title}</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.state.body}
                        </div>
                        <div className="col">
                            <img src={this.state.imgsrc}
                                 width='300px'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <div className="row" style={listStyle}>
                <div className="col-4">
                    <img src="https://live.staticflickr.com/65535/48882028043_081b73c769_o.jpg"
                         alt="about photo"
                         width="100%"/>
                </div>
                <div className="col-8 text-left">
                    <h3>About Me</h3>
                    <p>I am a second-year at Northeastern University seeking a BA in Computer Science. My topics of
                        interest in the CS field are software engineering and web development. I've been involved in
                        programming since high school, but have always been fascinated by the history and development of
                        modern computing.</p>

                    <p>I'm a thorough worker who picks up new languages quickly. I love to learn, and I thrive in
                        environments where I'm immersed in topics that are brand new to me. The primary traits I
                        have to offer in a professional environment are my ability to communicate, my ability to
                        work independently, and my instinct to work thoroughly and consistently until a job gets
                        done.</p>
                </div>
            </div>

            <div className="row" style={listStyle}>
                <div className="col-8 text-right">
                    <h3>Interests</h3>

                    <p>Outside of school, my biggest passion is music. I have a new favorite album every
                        week, and I play music with my friends whenever I get the chance. My instruments of choice
                        are guitar, bass and drums.</p>

                    <p>I also love playing games in my free time. My favorite genres are RPG games (Skyrim, Fable,
                        Archeage), puzzle/adventure games (Legend of Zelda, Pokemon) and casual/relaxing games
                        (Animal Crossing, Stardew Valley). I like to stay updated on the gaming industry and I've
                        dabbled in game programming in and out of school.</p>

                    <p>Finally, I'm interested in digital art. I've always liked to draw, and I like making sketches
                        of people and places from my life.</p>

                    <p style={{fontSize: 12}}>Image sources:
                        <a href="https://i2.wp.com/cornellsun.com/wp-content/uploads/2017/01/alabama-shakes.jpg?fit=600%2C600">Sound
                            & Color, </a>
                        <a href="https://thehub.musiciansfriend.com/images/interviews/Courtney-Barnett-Header.jpg">Courtney
                            Barnett, </a>
                        <a href="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/11/link-zelda-1200x600.png">Legend
                            of Zelda</a>
                    </p>
                </div>
                <div className="col-4">
                    <img src="https://live.staticflickr.com/65535/48882240643_bdcf5595cd_o.png"
                         alt="about photo"
                         width="100%"/>
                </div>
            </div>

        </div>
    }
}

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container-fluid portfolio">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card title="Portfolio site" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>This site was created using HTML, CSS, Node.js, React.js,
                                        and Bootstrap.</p>
                                </div>
                                <div className="row">
                                    <a target="_blank"
                                       href="https://github.com/mayaprebish/mayaprebish.github.io">
                                        <button style={buttonRowStyle}
                                                type="button"
                                                className="btn btn-secondary">
                                            View code on GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        }
                        />

                        <Card title="MATLAB" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>A MATLAB Live Script which can be used to
                                        track movement of subjects over time visually.</p>
                                </div>
                                <div className="row">
                                    <Buttons style={buttonRowStyle}
                                             to='/matlab'/>
                                </div>
                            </div>
                        }
                        />

                        <Card title="ExCellence" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>A Java program which renders specially formatted
                                        text files into visual animations, using the Model-View-Controller design
                                        strategy.</p>
                                </div>
                                <div className="row">
                                    <Buttons
                                        style={buttonRowStyle}
                                        to='/excellence'
                                        alert={<p>For academic privacy reasons, please
                                            <Link to='/contact'> contact me</Link> for access to this repo.</p>}/>
                                </div>
                            </div>
                        }/>

                        <Card title="Minesweeper" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>A replica of the Minesweeper computer game in Java
                                        using a breadth-first search strategy for rendering current state.</p>
                                </div>
                                <div className="row">
                                    <Buttons
                                        style={buttonRowStyle}
                                        to='/minesweeper'
                                        alert={<p>For academic privacy reasons, please
                                            <Link to='/contact'> contact me</Link> for access to this repo.</p>}/>
                                </div>
                            </div>
                        }/>

                        <Card title="AcuityView" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>Figures produced using the R program AcuityView for
                                        the paper Effects of limited acuity on Anolis dewlaps, currently in review by
                                        the Journal of Herpetology.</p>
                                </div>
                                <div className="row">
                                    <Link to='/acuityview'>
                                        <button
                                            style={buttonRowStyle}
                                            type="button"
                                            className="btn btn-secondary">
                                            View details & full paper
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        }/>
                    </div>
                </div>

            </div>
        </div>
    }
}

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: '',
            alert: this.props.alert,
            to: this.props.to
        }
    }

    handleClick(compName, e) {
        console.log(compName);
        this.setState({render: compName});
    }

    renderAlert() {
        if (this.state.render == 'render') {
            return <Alert message={this.state.alert}/>
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Link to={this.state.to} style={buttonRowStyle}>
                        <button style={alignRight} type="button" className="btn btn-secondary">Details</button>
                    </Link>
                    <button style={buttonRowStyle} type="button" className="btn btn-secondary"
                            onClick={this.handleClick.bind(this, 'render')}>
                        GitHub
                    </button>
                </div>
                <div className="row" style={buttonRowStyle}>
                    {this.renderAlert()}
                </div>
            </div>
        );
    }
}

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    render() {
        return <div>
            {this.state.message}
        </div>
    }
}

class MatLab extends React.Component {
    render() {
        return <div>
            <h1>matlab</h1>
        </div>
    }
}

class Excellence extends React.Component {
    render() {
        return <div>
            <h1>excellence</h1>
        </div>
    }
}

class Minesweeper extends React.Component {
    render() {
        return <div>
            <h1>minesweeper</h1>
        </div>
    }
}

class AcuityView extends React.Component {
    render() {
        return <div className="container">
            <iframe
                width="90%"
                height="1500px"
                src="https://docs.google.com/document/d/e/2PACX-1vQirphRe5tYechlsrC-plaKXsXcChl0DEPJtbcd84OV5y4vKzuOhqZw9yLkHsYBIvRzXTU5pJs0WkWFnWsOhd8/pub?embedded=true"></iframe>
        </div>
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <ul className="list-group" style={listStyle}>
                <li className="list-group-item d-flex justify-content-between align-items-center vertical-align-center">
                    <div>
                        <p style={liStyle}> Email: prebish.m@husky.neu.edu</p>
                    </div>
                    <i className="fa fa-envelope" style={iconStyle}></i>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <p style={liStyle}>LinkedIn:
                            <a style={liStyle} target="_blank"
                               href="https://www.linkedin.com/in/maya-prebish-24b146194">Maya Prebish</a>
                        </p>
                    </div>
                    <i className="fa fa-linkedin-square" style={iconStyle}></i>
                </li>
            </ul>
        </div>
    }
}

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <a target="_blank"
               href="https://docs.google.com/document/d/1NQcSp1peqMEnJ2zk0xbswHT1uhnCitKlUpvXvwyN304/edit?usp=sharing">
                <button className="btn btn-dark"
                        style={buttonStyle}>View on Google Drive
                </button>
            </a>

            <div className="container-fluid">
                <img
                    src="https://live.staticflickr.com/65535/48873516518_017d939083_o.jpg"
                    width="80%"
                    alt="Maya Prebish - Resume"/>
            </div>
        </div>
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="header">
            <div className="jumbotron jumbotron-fluid bg-dark" style={jumboStyle}>
                <div className="container">

                    <h1 className="display-4">Maya Prebish</h1>

                    <div className="row">
                        <div className="col">
                            <p className="lead">I am a second year CS student at Northeastern University's Khoury
                                College of Computer Sciences looking to expand my knowledge of the field and
                                gain experience, especially in software engineering and web development.</p>
                            <p className="lead"> Please note this site is a work in progress as of October 2019.</p>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarStyle}>
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resume' className='nav-link'>Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    }
}

const jumboStyle = {
    padding: '20px',
    margin: '0px',
    color: 'white'
}

const navbarStyle = {
    paddingLeft: '0px'
}

const buttonStyle = {
    marginTop: '20px',
}

const iconStyle = {
    margin: '0px',
    padding: '0px'
}

const cardStyle = {
    marginTop: '20px',
    marginBottom: '20px'
}

const liStyle = {
    marginTop: '0px',
    marginBottom: '0px'
}

const listStyle = {
    marginTop: '20px'
}

const titleStyle = {
    marginTop: '0px',
    paddingTop: '0px,',
    marginLeft: '5px'
}

const buttonRowStyle = {
    marginLeft: '10px',
    marginBottom: '10px'
}

const bodyTextStyle = {
    marginLeft: '10px'
}

const alignRight = {
    marginLeft: '10px'
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
