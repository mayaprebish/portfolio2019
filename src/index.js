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
            <div className="media" style={listStyle}>
                <div className="media-body text-right">
                    <h3 className="mt-0">About Me</h3>
                </div>
                <img src="https://live.staticflickr.com/65535/48879221932_8164bc770e_o.jpg"
                     className="mr-3"
                     alt="about photo"
                     width="600px"/>
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

                        <Card title="AcuityView" body={<p>acuityview</p>}/>
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
