//Função construtoras  (FACTORY)
       function Pessoa (customProperties) {
        return {
            name: 'Willian',
            lastname: 'Mateus',
            ...customProperties
        }
    }
    
    const p = Pessoa({name: 'Custom Name', age: 27})
    console.log(p);