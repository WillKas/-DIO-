//FETCH ------------USAR ALGUM SERVIDOR FRONT
console.log(fetch()); //retorna Uma promisse

/*fetch('./data.json')  
//com fetch é muito mais simples lidar com promisses, a requisição com a api é muito mais simples
  .then(responseStream =>  {
       console.log(responseStream);
       if (responseStream.status === 200) {
          return responseStream.json()
      } else {
          throw new Error('Request error')
      }
    })
  .then(data => {
        console.log(data);
    })
  .catch(err => {
        console.log('Error: ', err);
    }) */


    //   ES7 - Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345)
    }, 1000)
})


const simpleFunc = async () => { // usando async ja tornou a variavel em uma Promisse
    const data = await asyncTimer() // colocando a palavra await, ele aguardou a promise e a retornou(asyncTimer)
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resSteam => 
        resSteam.json()
    )
//CODIGO ABAIXO EXECUTA AS DUAS PROMISSE EM PARALELO(BASTA APENAS EXECUTAR NO LUGAR DESTA CONT)
  /*const data = await Promisse.all([
      asyncTimer(),
      fetch('/data.json').then(resStream => resStream.json())
  ])*/


    return dataJSON
}

simpleFunc()
  .then( data => {
    console.log(data);
})
  .catch(err => {
      console.log(err);
  })



//PARA MIM É O MELHOR METODO DE LIDAR COM PROMISSE, LEMBREE-SE DISSO!


