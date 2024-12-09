import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header />
    <main>
      { /** Main Content Section */}
      <section className='content'>
        <div className="content-wrapper row-reverse">
          <picture className='content-image' alt="an egg on a yellow background" >
            <source srcSet='/assets/images/desktop/image-transform.jpg' media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-transform.jpg" alt="an egg on a yellow background" />
          </picture>
          <div className='content-info__wrapper'>
            <h2 className='content-title'>Transform your brand</h2>
            <p className='content-blurb'>  We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="" className="content-learn-more__link">Learn more</a>
          </div>
        </div>
        <div className="content-wrapper">
          <picture className='content-image' alt="an egg on a yellow background" >
            <source srcSet='/assets/images/desktop/image-stand-out.jpg' media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-stand-out.jpg" alt="an egg on a yellow background" />
          </picture>
          <div className="content-info__wrapper">
            <h2 className='content-title'>Stand out to the right audience</h2>
            <p className='content-blurb'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <a href="" className="content-learn-more__link"> Learn more</a>
          </div>
        </div>
        <div className='content-wrapper'>
          <div className='content-bg-image__1'>
            <div className='content-bg-image__wrapper'>
              <h2 className="content-bg-image__title">Graphic design</h2>
              <p className="content-bg-image-info">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
          </div>
          <div className='content-bg-image__2'>
            <div className='content-bg-image__wrapper'>
              <h2 className="content-bg-image__title">Photography</h2>
              <p className="content-bg-image-info">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </div>
      </section>

      {/** Testimonials Section */}
      <section className='testimonials'>
        <h2 className="testimonials-title">Client testimonials</h2>
        <div className="testimonials-card">
          <img src="" alt="" />
          <p className="testimonial-card__info">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <p className="testimonial-card__name">Emily R.</p>
          <p className="testimonial-card__title"> Marketing Director</p>
        </div>
        <div className="testimonials-card">
          <img src="" alt="" />
          <p className="testimonial-card__info">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <p className="testimonial-card__name">Thomas S.</p>
          <p className="testimonial-card__title">Chief Operating Officer</p>
        </div>
        <div className="testimonials-card">
          <img src="" alt="" />
          <p className="testimonial-card__info">  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <p className="testimonial-card__name"> Jennie F.</p>
          <p className="testimonial-card__title">Business Owner</p>
        </div>
      </section>

      {/** Hero Images Section */}
      <section className='hero'>

      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
