class NegociacaoController {

  constructor() {

            let $ = document.querySelector.bind(document);

            this._inputData = $('#data');
            this._inputQuantidade =  $('#quantidade');
            this._inputValor = $('#valor');
  }

  adiciona(event) {

    event.preventDefault();

    let data = new Date(...this._inputData
      .value.split('-')
      .map((item, indice) => item - indice % 2   )
    );

    let dataString = '17-05-2016';

let data2 = new Date(dataString.split('-').reverse().join('/'));
console.log(data2);

     // console.log(dataString); 

}
}