import React from 'react';
import beers from '../data/beers';

const Home = ({ setPage }) => {
  return (
    <div className="m-5">
      <h1 className="title is-1">My best beers, by me only</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil temporibus cumque, inventore totam doloremque esse doloribus incidunt quam id iusto tempora dolorum qui aliquam earum vel illo? Esse, temporibus.
        Exercitationem temporibus qui ipsam hic consectetur quo sint minima eum veritatis, ipsum veniam recusandae a repellendus dolorum quos et suscipit nam. Consequuntur quibusdam, ducimus obcaecati eos aut atque rem temporibus.</p>
      <button className="button is-black m-5" onClick={() => setPage({ name: "AllProduct", id: null })}>See All my beers now !!!</button>
      <div className="columns m-5">
        {beers.slice(1, 5).map((beer) => {
          return <button className="column m-2" onClick={() => setPage({ name: "OneProduct", id: 10 })} >
            <img src={beer.image_url} alt={beer.name} className="card_image" />
          </button>
        })}
      </div>
    </div>
  )
}

export default Home