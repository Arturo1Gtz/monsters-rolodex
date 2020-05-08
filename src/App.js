import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'

//Extendemos a componente para obtener el metodo state que modificaremos para la App
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //CDM es una promesa fetch que obtiene un .json de los 'users' en este caso mounstruos
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  //Cada vez que el state se actualiza se vuelve a hacer un render
  render(){
    // Por lo que entiendo el render es todo lo que va a construir cada ves que renderice
    // declaro mons y searchF porque si me interesa que se insialice de nuevo una y otra vez
    const {monsters, searchField} = this.state;
    //filtra la lista de monsters con caracteres iguales a los de la searchbox
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    //Si entiendo bien render se vuelve un metodo de la clase app, por lo tanto este return 
    //pertenece al render y es lo que React se ecnargará de llevar al DOM virtual 
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search Monstas' 
          //obtenemos el valor dentro de la caja de busqueda
          handleChange={this.handleChange }
        />
        <CardList monsterss = {filteredMonsters}/>

    </div>
    )
  }
}

export default App;
