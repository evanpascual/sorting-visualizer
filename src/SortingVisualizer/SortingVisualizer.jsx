import React from "react";
import "./SortingVisualizer.css";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(0, 1000));
    }
    this.setState({ array });
  }

  mergeSort() {}
  quickSort() {}
  heapSort() {}
  bubbleSort() {}

  render() {
    const { array } = this.state;
    return (
      <div>
        <div className="array-container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key="index"
              style={{ height: `${value / 2}px` }}
            ></div>
          ))}
        </div>
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort}>Bubble Sort</button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default SortingVisualizer;
