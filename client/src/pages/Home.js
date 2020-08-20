import React, { useState, useEffect } from 'react';
import "../styles/DataArea.css"
import CityList from "../components/CityList"
import API from "../utils/API"
import { Redirect } from 'react-router-dom';
import { CityState } from '../utils/CityAtom';
import { useRecoilState } from 'recoil';


function Home() {
    const [cities, setCities] = useState([]);
    const [pathname, setPathname] = useState('')
    const [cityOptions, setCityOptions] = useRecoilState(CityState);

    useEffect(() => {
        loadCities()
    }, [])

    function loadCities() {
        API.getCities()
            .then((res) =>
                setCities(res.data)
            )
            .catch(err => console.log(err));
    };

    //redirects to search page and displays selected city
    const handleChange = (event) => {
        //updates filteredCities array
        const filter = event.target.value.toLowerCase()
        console.log(filter);
        const result = cities.filter(city => city.city.toLowerCase().includes(filter))
        console.log(result[0]);
        setCityOptions(result[0]);
        setPathname('/search');
    }

    return pathname ? <Redirect to={pathname} /> : (
        <div>
            {/* <!-- Header - set the background image for the header in the line below --> */}
            <header>
                <div className="box">
                    <img className="coverphoto onehundred-percent" src="views.jpg" alt="" height="971" />

                    <div className="banner__text">
                        <h1 className="heading-1">
                            Find your next favorite trail
                        </h1>
                        {/* <form className="algolia-search styles-module__form___3hC1t undefined" data-reactroot="">
                            <input type="text" autoComplete="off" autoCorrect="off" className="styles-module__input___28bDf" placeholder="Enter a city" spellCheck="false" />
                            <input type="submit" className="styles-module__btn___I-OkD  " title="Search" value="Search" />
                        </form> */}
                        <CityList className="utahcities" cities={cities} handleChange={handleChange} />

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
                    <h1>Explore Utah with us! </h1>
                    <p className="lead">
                        Using our app you can search for any trail in Utah right at your finger tips!</p>
                    <p> "Look deep into nature and you will understand everything better." - Albert Einstein</p>
                </div>
            </section>

            <div className="row">
                <div className="col-md-6 pad">
                    {<img className="img-fluid d-block mx-auto" src="little.jpg" alt="" class="img-thumbnail" height="480" width="650" />}
                </div>
                <div class="col-md-6">
                    {<img className="image" src="rocks.jpg" alt="tibblefork" class="img-thumbnail" height="845" width="650" />}
                </div>
            </div>


            <section className="py-5">
                <div className="container">
                    <h1>Hike with confidence using our app!</h1>
                    <p className="lead">
                        This app is for those who love the outdoors! wether you are going on a quick hike or a long hike we got it!</p>
                    <p> "Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity." - John Muir</p>
                </div>
            </section>

            <div className="row">
                <div className="col-md-6 pad">
                    {<img className="img-fluid d-block mx-auto" src="moabb.JPG" alt="" class="img-thumbnail" height="480" width="650" />}
                    <h5>"And to the forest i go, to lose my mind and find my soul"</h5>
                </div>
                <div class="col-md-6">
                    {<img className="image" src="girlsss.jpg" alt="tibblefork" class="img-thumbnail" height="845" width="650" />}

                </div>
            </div>



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