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
                <Route path='/bulletgame' component={BulletGame} id='bulletgame'/>
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
                            <img
                                src={this.state.imgsrc}
                                width='70%'/>
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
        return <div>
            <div className="container">
                <div className="row" style={listStyle}>
                    <div className="col-4">
                        <img src="https://live.staticflickr.com/65535/48882028043_081b73c769_o.jpg"
                             alt="about photo"
                             width="100%"
                             className="photo"/>
                    </div>
                    <div className="col-8 text-left">
                        <h3>About Me</h3>
                        <p>I am a second-year at Northeastern University seeking a BA in Computer Science. My topics of
                            interest in the CS field are software engineering and web development. I've been involved in
                            programming since high school, but have always been fascinated by the history and
                            development of
                            modern computing.</p>

                        <p>I'm a thorough worker who picks up new languages quickly. I love to learn, and I thrive in
                            environments where I'm immersed in topics that are brand new to me. The primary traits I
                            have to offer in a professional environment are my ability to communicate, my ability to
                            work independently, and my consistency and attention to detail.</p>
                    </div>
                </div>

                <div className="row" style={listStyle}>
                    <div className="col-8 text-right">
                        <h3>Interests</h3>

                        <p>Outside of school, my biggest passion is music, and I play with my friends whenever
                            I get the chance. My instruments of choice are guitar, bass and drums, and I played in
                            several bands throughout high school. I also helped host several live concerts a year
                            through my club, Live Expression.</p>

                        <p>My next favorite activity is gaming. I like to stay updated on the gaming industry and I've
                            dabbled in videogame programming in and out of school. My favorite genres are RPG games
                            (Skyrim,
                            Fable, Fire Emblem), puzzle/adventure games (Legend of Zelda, Pokemon) and casual/relaxing
                            games
                            (Animal Crossing, Stardew Valley).</p>

                        <p>I'm also interested in digital art. I've always liked to draw, and I like making sketches
                            of people and places from my life. I hope to be a skilled digital artist at some point
                            in the future.</p>
                    </div>
                    <div className="col-4">
                        <img src="https://live.staticflickr.com/65535/48882240643_bdcf5595cd_o.png"
                             alt="about photo"
                             width="100%"
                             className="photo"/>
                    </div>
                </div>

                <div className="row" style={listStyle}>
                    <div className="col-4">
                        <img src="https://live.staticflickr.com/65535/48883505998_cd7d028f9b_o.png"
                             alt="about photo"
                             width="100%"
                             className="photo"/>
                    </div>
                    <div className="col-8 text-left">
                        <h3>Academics</h3>
                        <p><b>GPA: 3.0/4</b></p>
                        <p>Relevant Coursework: Web Development*, Algorithms & Data*, Computer Systems*, Object-Oriented
                            Design, Discrete Structures, Fundamentals of Computer Science, Calculus 1 & 2&nbsp;
                        <i>(*Currently Enrolled)</i></p>
                        <p>*Unofficial transcript available upon request</p>
                    </div>
                </div>

            </div>
            <footer className="nav" style={{marginTop: '200px'}}>
                <div className="container">
                    <p className="float-right" style={{fontSize: 14}}>Image sources:&nbsp;
                        <a href="https://i2.wp.com/cornellsun.com/wp-content/uploads/2017/01/alabama-shakes.jpg?fit=600%2C600">Sound
                            & Color, </a>
                        <a href="https://thehub.musiciansfriend.com/images/interviews/Courtney-Barnett-Header.jpg">Courtney
                            Barnett, </a>
                        <a href="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/11/link-zelda-1200x600.png">Legend
                            of Zelda, </a>
                        <a href="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Northeastern_University_seal.svg/1200px-Northeastern_University_seal.svg.png">
                            Northeastern Logo
                        </a>
                    </p>
                </div>
            </footer>
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
                                        graph 3D movement of subjects over time.</p>
                                </div>
                                <div className="row">
                                    <Link to='/matlab'>
                                        <button style={buttonRowStyle} type="button" className="btn btn-secondary">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>}
                        />

                        <Card title="Bullets" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>A bullet game rendered in Java using a linked-list data
                                        structure to track collisions.</p>
                                </div>
                                <div className="row">
                                    <Buttons
                                        style={buttonRowStyle}
                                        to='/bulletgame'
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

                        <Card title="AcuityView" body={
                            <div>
                                <div className="row">
                                    <p style={bodyTextStyle}>Figures produced using the R program AcuityView for
                                        the paper <i>Effects of limited acuity on Anolis dewlaps</i>, currently in
                                        review by the Journal of Herpetology.</p>
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
            <div className="container">
                <h2>MATLAB: Lizard Data</h2>
                <p>I wrote this fairly simple program while helping with research at Union College alongside Professor
                    Leo J. Fleishman, who studies animal behavior--in particular, movement and vision of the lizard
                    genus
                    Anolis. For this project, I was asked to create a 3D graph tracking X, Y and Z movement of subjects
                    in their enclosure over time.</p>
                <p>For this program, I learned the basics of MATLAB in order to produce a Live Script that researchers
                    can
                    use to track movement over specific periods of time from a table of data.</p>
                <div className="row">
                    <div className="col">
                        <img src="https://media.giphy.com/media/JNOUPvQtrgE7kP2gd1/source.gif" width="100%"
                             frameBorder="0"></img>
                    </div>

                    <div className="col">
                        <img src="https://live.staticflickr.com/65535/48883978527_24d1770258_o.jpg" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

class Excellence extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h2>ExCellence</h2>
                <p>ExCellence is an application I created in Java with partner Jada Letts for CS3500 (Object Oriented
                    Design).
                    The purpose of the application is to produce and edit simple animations made using specially
                    formatted
                    text files. This project implemented the Model-View-Controller style of OO Design.</p>
                <p>Please <Link to='/contact'>contact me </Link> for access to the GitHub repository for this program.
                </p>
            </div>
        </div>
    }
}

class Minesweeper extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h2>Minesweeper</h2>
                <p>I created a replica of Minesweeper for Fundamentals of Computer Science II. I used a breadth-first
                    search algorithm to maintain state in the puzzle and implement the "flooding" behavior.</p>
                <p>Please <Link to='/contact'>contact me </Link>for access to the GitHub repository for this program.
                </p>
            </div>
        </div>
    }
}

class AcuityView extends React.Component {
    render() {
        return <div>
            <div className="container">
                <h2>AcuityView</h2>
                <p>One of my tasks while helping with research at Union College this Summer was to produce figures
                    for the paper <i>Effects of limited acuity on Anolis dewlaps</i>, which is under review by the
                    Journal of Herpetology as of September 2019.</p>
                <p>I used the AcuityView program in R (along with Gimp editing software) to produce the figures,
                    which can be viewed toward the bottom of the document below. I developed a working knowledge
                    of the R language while learning to use this program. More information about AcuityView can be
                    found <a href="https://eleanorcaves.weebly.com/acuityview-software.html">here.</a></p>
                <iframe
                    width="80%"
                    height="800px"
                    src="https://docs.google.com/document/d/e/2PACX-1vQirphRe5tYechlsrC-plaKXsXcChl0DEPJtbcd84OV5y4vKzuOhqZw9yLkHsYBIvRzXTU5pJs0WkWFnWsOhd8/pub?embedded=true"></iframe>
            </div>
        </div>
    }
}

class BulletGame extends React.Component {
    render() {
        return <div className="container">
            <h2>Bullet Game</h2>
            <p>I created this small game as an assignment for Fundamentals of Computer Science II along with
                team partner Nicole Danuwidjaja. The game implements the concepts of linked-list structures and
                dynamic dispatch to track collisions and maintain state.</p>

            <p>Please <Link to='/contact'>contact me </Link> for access to the GitHub repository for this program.</p>

            <img src="https://media.giphy.com/media/H5HHoJ6o9fsMbIyX0i/source.gif"></img>
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
                        <p style={liStyle}><b>Email:</b> prebish.m@husky.neu.edu</p>
                    </div>
                    <i className="fa fa-envelope" style={iconStyle}></i>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <p style={liStyle}><b>LinkedIn:</b>&nbsp;
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
                <button className="btn btn-secondary"
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
