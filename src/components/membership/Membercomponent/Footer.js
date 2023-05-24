import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id="Footer">
        <div className="Footer-image"><img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/wordmark.svg" alt="" /></div>
        <div id="idea">Every idea needs a medium</div>
        <div className="footer-content-cnt">
            <a href="https://medium.com/about"><span>About</span></a>
            <a href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"><span>Term</span></a>
            <a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"><span>Privacy</span></a> 
            <a href="https://help.medium.com/hc/en-us"><span>Help</span></a>
        </div>
    </div>
  )
}

export default Footer