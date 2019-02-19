import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import NovoTweet from './components/NovoTweet';
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <NovoTweet />
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        <Tweet
                            user="@qualquercoisa"
                            name="Guilhermino da Silva"
                            likes="34"
                        >
                            Lorem, ipsum dolor sit <a href="/trends/#amet" data-reactroot="">#amet</a> consectetur adipisicing <a href="/trends/#elit" data-reactroot="">#elit</a>. Adipisci ut cumque tempora? Quam velit vitae voluptatum tempora iste, mollitia, sa
                        </Tweet>
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
