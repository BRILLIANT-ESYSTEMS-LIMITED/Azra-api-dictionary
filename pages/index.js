import Head from 'next/head'
import Image from 'next/image'

// import '../public/css/style.css'

export default function Home() {
  return (
    <div>
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top"><img src="assets/img/logo.png" alt="..." width={100} height={100} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars ms-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#services">Designed and Developed by Azra from Brilliant esystems Limited</a></li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Masthead*/}
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">Welcome To Azra API Dictionary</div>
        <div className="masthead-heading text-uppercase">Use Your Time Wisely</div>
        <a className="btn btn-primary btn-xl text-uppercase" href="/dictionary">Dictionary</a>
      </div>
    </header>
    {/* Portfolio Grid*/}
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Dictionary</h2>
          <h3 className="section-subheading text-muted">Words: so innocent and powerless as they are, as standing in a dictionary, how potent for good and evil they become in the hands of one who knows how to combine them.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            
            {/* Portfolio item 4*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Keep your head up!!!</div>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            {/* Portfolio item 5*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">The only place success comes before work is in the dictionary.</div>
            
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* Portfolio item 6*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Be Brave!!!</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  n
    {/* Footer*/}
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">Copyright ?? Your Website 2022</div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
    {/* Portfolio Modals*/}
    {/* Portfolio item 1 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Threads
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Illustration
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 2 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Explore
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Graphic Design
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 3 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Finish
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Identity
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 4 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Lines
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Branding
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 5 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Southwest
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Website Design
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Portfolio item 6 modal popup*/}
    <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details*/}
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Window
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Photography
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Bootstrap core JS*/}
    {/* Core theme JS*/}
    {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
    {/* * *                               SB Forms JS                               * **/}
    {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
    {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  </div>
  )
}
