import React from "react";

class DadJoke extends React.Component {
    constructor() {
      super();
  
      this.saveJoke = this.saveJoke.bind(this);
      this.renderJokeElement = this.renderJokeElement.bind(this);
      this.fetchJoke = this.fetchJoke.bind(this);
      this.state = {
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
      }
      console.log('Construtor')
    }
  
    async fetchJoke() {
      this.setState(
        {loading:true},
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        jokeObj: requestObject,
        loading: false,
      })
    }
    )
    }
  
    componentDidMount() {
      this.fetchJoke();
      console.log('componentDidMount')

    }
  
    saveJoke() {
      //Salvando a piada no array de piadas existentes
      this.setState(({storedJokes, jokeObj}) => ({
        storedJokes: [...storedJokes, jokeObj]
      }));
      this.fetchJoke();
    }
  
    renderJokeElement() {
      return (
        <div>
          <p>{this.state.jokeObj.joke}</p>
          <button type="button" onClick={this.saveJoke}>
            Salvar piada!
          </button>
        </div>
      );
    }

    shouldComponentUpdate(){
      console.log('shouldComponentUpdate');
      return(true)
    }

    componentDidUpdate(){
      console.log('componentDidUpdate');
    }
  
    render() {
      console.log('render')

      const { storedJokes, jokeObj, loading} = this.state;
      const loadingElement = <span>Loading...</span>;
      return (
        <div>
          {!loading ? jokeObj.joke: loadingElement}
        <span>
          {
            loading 
            ? loadingElement :
            storedJokes
            .map(({ id, joke }) => (<p key={id}>{joke}</p>))
          }
        </span>

        <button type="button" onClick={this.saveJoke}>
          Salvar Piada!
        </button>
  
        </div>
      );
    }
  }

export default DadJoke