import React, { Component } from 'react';

/*
* Footer component
*/
export default class Footer extends Component {
  render() {
    return (
      <footer className="row footer">
        <div className="about col-md-8">
          <h3>Kuhusu</h3>
          <hr></hr>
          <p>
            <a href="https://codefornigeria.org/" target="_blank">Code for Tanzania</a> ni asasi ya kiteknolojia isiyo kuwa na faida.
            Ni mtandao wa raia waliojitolea ambao huchangia vipaji vyao, ujuzi na maarifa ya jamii kama zana za kiteknolojia ili kuboresha huduma za umma, kuipa serikali nafasi, na kukuza habari za kufanya maamuzi: kutumia taarifa za wazi + vyombo vya habari, ambayo imeambatana na timu ya msingi ya kiteknolojia.
          </p>
        </div>
        <div className="social-icons col-md-3">
          <p className="clickable"><i className="fa fa-facebook-square"></i><a href="https://facebook.com/CodeForAfrica" target="_blank"> Like us on Facebook</a></p>
          <p className="clickable"><i className="fa fa-twitter-square"></i><a href="https://twitter.com/code4africa" target="_blank"> Follow us on Twitter</a></p>
          <p className="clickable"><i className="fa fa-github"></i><a href="https://github.com/CodeForTanzania/medicine-prices-app" target="_blank">Fork this on Github</a></p>
        </div>
        <div className="data-sources col-md-12">
          <h3>Vyanzo vya taarifa</h3>
          <hr></hr>
          <a href="http://apps.who.int/medicinedocs/en/m/abstract/Js21983en/"> Shirika la Afya Duniani</a>
          <p className="built-by">Imetengenezwa na <a href="https://codefortanzania.org/" target="_blank">Code for Tanzania</a>, kwa muongozo wa mawazo kutoka</p>
          <hr></hr>
          <a href="http://www.icfj.org" target="_blank"><img className="sponsors" alt="ICFJ" src="/icfj.png" /></a>
          <a href="http://www.codeforafrica.org" target="_blank"><img className="sponsors" alt="Code for Africa" src="/cfafrica.png" /></a>
        </div>
      </footer>
    )
  }
}
