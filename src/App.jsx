import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header />
    <main>
      { /** Main Content Section */}
      <section className='content'>
        <div className="content-wrapper row-reverse content-wrapper--reverse">
          <picture className='content-image' alt="an egg on a yellow background" >
            <source srcSet='/assets/images/desktop/image-transform.jpg' media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-transform.jpg" alt="an egg on a yellow background" />
          </picture>
          <div className='content-info__wrapper'>
            <h2 className='content-title'>Transform your brand</h2>
            <p className='content-blurb'>  We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="" className="content-learn-more__link content-learn-more__link--1">Learn more</a>
          </div>
        </div>
        <div className="content-wrapper">
          <picture className='content-image' alt="A pink cup on a pink background" >
            <source srcSet='/assets/images/desktop/image-stand-out.jpg' media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-stand-out.jpg" alt="A pink cup on a pink background" />
          </picture>
          <div className="content-info__wrapper">
            <h2 className='content-title'>Stand out to the right audience</h2>
            <p className='content-blurb'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <a href="" className="content-learn-more__link content-learn-more__link--2"> Learn more</a>
          </div>
        </div>
        <div className='content-wrapper'>
          <div className='content-bg-image--1'>
            <div className='content-bg-image__wrapper'>
              <h2 className="content-bg-image__title">Graphic design</h2>
              <p className="content-bg-image-info">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
          </div>
          <div className='content-bg-image--2'>
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
        <div className="testimonials-wrapper">
          <figure className="testimonials-card">
            <img src="/assets/images/image-emily.jpg" alt="Emily sitting in a canyon with her hair of to the side" />
            <blockquote className="testimonials-card__info">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</blockquote>
            <figcaption className='testimonials-card-info__wrapper'>
              <p className="testimonials-card__name">Emily R.</p>
              <span className="testimonials-card__title"> Marketing Director</span>
            </figcaption>
          </figure>
          <figure className="testimonials-card">
            <img src="/assets/images/image-thomas.jpg" alt="Thomas smiling" />
            <blockquote className="testimonials-card__info">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</blockquote>
            <figcaption className='testimonials-card-info__wrapper'>
              <p className="testimonials-card__name">Thomas S.</p>
              <span className="testimonials-card__title">Chief Operating Officer</span>
            </figcaption>
          </figure>
          <figure className="testimonials-card">
            <img src="/assets/images/image-jennie.jpg" alt="Jennie smiling with sunshine hitting her face standing on a beach" />
            <blockquote className="testimonials-card__info">  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</blockquote>
            <figcaption className='tesimonials-card-info__wrapper'>
              <p className="testimonials-card__name"> Jennie F.</p>
              <span className="testimonials-card__title">Business Owner</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/** Hero Images Section */}
      <div className='hero'>
        <div className="hero-wrapper">
          <picture>
            <source srcSet='/assets/images/desktop/image-gallery-milkbottles.jpg' media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-gallery-milkbottles.jpg" alt="Milk bottles with sky background and cotton balls for clouds" />
          </picture>
          <picture>
            <source  srcSet="/assets/images/desktop/image-gallery-orange.jpg" media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-gallery-orange.jpg" alt="Half a cut orange on a white plate with a blue rim" />
          </picture>
          <picture>
            <source  srcSet="/assets/images/desktop/image-gallery-cone.jpg" media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-gallery-cone.jpg" alt="An empty waffle-style ice cream cone" />
          </picture>
          <picture>
            <source  srcSet="/assets/images/desktop/image-gallery-sugarcubes.jpg" media='(min-width: 1026px)'/>
            <img src="/assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="Square cut sugar cubes stacked on top of each other like a wall" />
          </picture>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default App
