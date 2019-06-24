import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import Card from "../../components/cards/CardUI";
import { CardColumns } from "react-bootstrap";

class Employees extends Component {
  render() {
    return (
      <section id="global-indicators">
        <article key="ok" className="main">
          <div>
            <p className="intro">Employees</p>

            <div className="cards-main">
              <CardColumns>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </CardColumns>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
export default Employees;
