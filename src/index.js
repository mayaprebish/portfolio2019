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

                <Route exact path='/' component={About}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/resume' component={Resume}/>
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
        return <div className="container-fluid header">
            <h1>Maya Prebish</h1>
            <p>
                I am a second year CS student at Northeastern University's Khoury College of Computer Sciences,
                looking to expand my knowledge of
                the field and gain experience, especially in software engineering and web development.
            </p>

            <p>
                Please note this site is a work in progress as of October 2019.
            </p>

            <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
            <Link to='/portfolio'>portfolio</Link>
            <Link to='/resume'>resume</Link>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
