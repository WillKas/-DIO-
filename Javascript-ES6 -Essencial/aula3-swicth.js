const fruit  = 'mamão'

switch (fruit) {
    case 'banaca':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
    case 'melancia':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque');
        break;
}