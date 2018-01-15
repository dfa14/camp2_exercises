import React, { Component } from 'react';
import './Table.css';
import toto from "underscore";

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
];

function Row(props) {
  return (
  <tr>
    <td> {props.decathlon_id}</td>
    <td> {props.title}</td>
    <td> {props.price}</td>
  </tr>
);
}

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {products : products};
  }
  sortbyid() {
    this.setState({products : toto.sortBy(this.state.products,"decathlon_id")})
  }
  sortbylabel() {
    this.setState({products : toto.sortBy(this.state.products,"title")})
  }
  sortbyprice() {
    this.setState({products : toto.sortBy(this.state.products,"price")})
  }

  render() {
    return (
      <div className="Table">
        <header className="Table-header">
          <h1 className="Table-title"> Tableau Produits !!</h1>
        </header>
        <table>
            <tr>
              <td><button onClick={this.sortbyid.bind(this)}> Decathlon Id </button></td>
              <td><button onClick={this.sortbylabel.bind(this)}> Label </button></td>
              <td><button onClick={this.sortbyprice.bind(this)}> Price </button></td>
            </tr>

          {this.state.products.map(x => Row(x))}
        </table>
      </div>
    );
  }
}

export default Table;
