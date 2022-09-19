import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'Dr. Mahfuz', song: 'Khali Pata' },
  { name: 'Habib Wahid', song: 'Din Gelo' },
  { name: 'Asif Akbar', song: 'O Priya' },
  { name: 'Hridoy Khan', song: 'Mayabi' },
];
function App() {
  const heros = ['Rubel', 'Bappa', 'Kuber', 'Jashim', 'Salman Shah', 'Razzak'];
  return (
    <div className="App">
      {heros.map((hero) => (
        <Person name={hero}></Person>
      ))}
      {
        singers.map(singer => <Person name = {singer.name} song={singer.song}></Person>)
      }

      {/* <Person name={heros[0]} nayika="Moushumi"></Person>
      <Person name={heros[1]} nayika="Cheka"></Person>
      <Person name={heros[2]} nayika="Kopila"></Person>  */}
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
      <p>{props.song}</p>
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
