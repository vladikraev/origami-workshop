import React, { Component } from 'react'
import styles from './index.module.css'
import Origam from '../origam'

class Origamis extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  // https://jsonplaceholder.typicode.com/posts

  getOrigamis = async () => {
    const { length } = this.props;
    const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
    const origamis = await promise.json()
    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const { origamis } = this.state

    return origamis.map((origam, index) => {
      return (
        // <Origam key={origam.userId} author={origam.userId}>{origam.body}</Origam>

        <Origam key={origam._id} index={index} author="someone" {...origam} />

      )
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    return (
      <div className={styles["origamis-wrapper"]}>
        {this.renderOrigamis()}
      </div>
    )
  }
}

export default Origamis