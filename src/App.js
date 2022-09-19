import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="Bappa" nayika="Cheka"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <h5>New Component</h5>
      <Friend movie="Singham" phone="8374857"></Friend>
      <Friend movie="Drishyam" phone="9900998"></Friend>
    </div>
  );
}
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
