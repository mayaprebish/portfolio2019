const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <Router>
            <div>
                <Header/>

                <Route exact path='/' component={About} id='nav-about'/>
                <Route path='/about' component={About} id='nav-about'/>
                <Route path='/portfolio' component={Portfolio} id='nav-portfolio'/>
                <Route path='/contact' component={Contact} id='nav-contact'/>
                <Route path='/resume' component={Resume} id='nav-resume'/>
            </div>
        </Router>
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <h1>about me</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
        </div>
    }
}

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <h1>work</h1>
        </div>
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <h1>contact</h1>
        </div>
    }
}

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <h1>resume</h1>
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
                                College of Computer Sciences, looking to expand my knowledge of the field and
                                gain experience, especially in software engineering and web development.</p>
                            <p className="lead"> Please note this site is a work in progress as of October 2019.</p>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
    marginLeft: '50px',
    padding: '0px',
    margin: '0px'
}

const buttonStyle = {
    margin: '10px',
    borderRadius: '0px'
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
