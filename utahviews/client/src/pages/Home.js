import React from 'react';
import "../styles/DataArea.css"


function Home() {
    return (
        <div>
        {/* <!-- Header - set the background image for the header in the line below --> */}
            <header>
                <div className = "box">
                <img className="img-fluid d-block mx-auto" src="views.jpg" alt=""height="500" />
                
                    <div className="banner__text">
                        <h1 className="heading-1">
                            Find your next favorite trail
                        </h1>
                        <form className="algolia-search styles-module__form___3hC1t undefined" data-reactroot="">
                                            <input type="text" autocomplete="off" autocorrect="off" className="styles-module__input___28bDf" placeholder="Enter a city, park or trail name" spellcheck="false" />
                                            <input type="submit" className="styles-module__btn___I-OkD  " title="Search" value="Search" />
                                        </form>
                    </div>
                    </div>
                    <div className="search-form-holder">
                        <div className="container">
                            <div className="search-form" action="#">
                                <div className="inputs-holder-border"></div>
                                <div className="inputs-holder">
                                    <div data-react-className="AlgoliaSearchBox" data-react-props="{&quot;searchIconButton&quot;:false,&quot;homePage&quot;:true,&quot;defaultLatLng&quot;:[38.97850036621094,-76.49220275878906],&quot;currentUser&quot;:null,&quot;languageRegionCode&quot;:&quot;en-US&quot;}" data-hydrate="t" data-react-cache-id="AlgoliaSearchBox-0">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </header>
        {/* <!-- Content section --> */}
            <section className="py-5">
                <div className="container">
                    <h1>Explore Utah with us! please</h1>
                        <p className="lead">Using our app you can search for any trail in Utah right at your finger tips!</p>
                        <p></p>
                </div>
            </section>

            <div className="row">
  <div className="column">
        { <img className="img-fluid d-block mx-auto" src="mountains.jpg" alt="" class="img-thumbnail" height="480" width="650"/>}
        </div>
        <div class="column">
    {<img ClassName="image" src="tibblefork.jpg" alt="tibblefork" class="img-thumbnail" height="815" width="650"/>}
  </div>
</div>

            <section className="py-5">
                <div className="container">
                    <h1>Hike with confidence using our app</h1>
                        <p className="lead">We have all the trails you could want to explore in Utah</p>
                        <p>This app is for those who love the outdoors! wether you are going on a quick hike or a long hike we got it!</p>
                </div>
            </section>

        {/* <!-- Footer --> */}
            <footer className="py-5 bg-dark">
                <div className="container">
                
                    <p className="m-0 text-center text-white">Made with love by Miro, Erin and Robert Copyright &copy; 2020</p>
                </div>
        {/* <!-- /.container --> */}
            </footer>
        </div>
    );
  }
  
  export default Home;