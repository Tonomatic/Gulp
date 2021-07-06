import './Footer.css'


function Footer() {

    return (
        <div id="footer">
            <div id="icon">
                <i className="fab fa-github footerIcon" onClick={() => window.open('https://github.com/Tonomatic/Gulp')} />
            </div>
        </div>
    )
}

export default Footer;
