import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes'

//<div> span p h1 - acostumado com html
//na web é semantico
//o react native não tem as mesmas tags do html, não tem h1, h2, p
//aqui dentro temos View, e Text, qualquer tipo de container tem o View
//e a tag de text é utilizada para qualquer tipo de texto, paragrafo negrito

//react native não tem semantica, não tem resultado significativo

//não tem className, nem id, nem nada, tem só o style, sempre precisa passar o style e ela vai
//receber um objeto com a estilização

export default function App() {
  return (
    <Routes />
  );
}

//na estilização, onde tem - trocar pela proxima letra em maiusculo, por exemplo
//background-color fica backgroundColor

//não existe herança de estilos, tem que ter uma estilização propria por elemento
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7139c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//});
