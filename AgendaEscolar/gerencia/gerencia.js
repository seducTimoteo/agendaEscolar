import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gerencia = () => {
  const navigation = useNavigation();
  const [evento, setEvento] = useState('');
  const [atividades, setAtividades] = useState('');
  const [agenda, setAgenda] = useState([]);
  const [editando, setEditando] = useState(false);
  const [indiceEditando, setIndiceEditando] = useState(null);

  const salvarDados = () => {
    if (editando) {
      const novaAgenda = [...agenda];
      novaAgenda[indiceEditando] = { evento, atividades };
      setAgenda(novaAgenda);
      setEditando(false);
      setIndiceEditando(null);
    } else {
      const novoEvento = { evento, atividades };
      setAgenda([...agenda, novoEvento]);
    }
    setEvento('');
    setAtividades('');
  };

  const editarEvento = (index) => {
    setEvento(agenda[index].evento);
    setAtividades(agenda[index].atividades);
    setEditando(true);
    setIndiceEditando(index);
  };

  const deletarEvento = (index) => {
    const novaAgenda = [...agenda];
    novaAgenda.splice(index, 1);
    setAgenda(novaAgenda);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./logo.png')}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Gestor Escolar</Text>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Digite o evento"
          value={evento}
          onChangeText={text => setEvento(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite as atividades"
          multiline={true}
          numberOfLines={4}
          value={atividades}
          onChangeText={text => setAtividades(text)}
        />
        <Button title={editando ? 'Atualizar' : 'Salvar'} onPress={salvarDados} />
      </View>
      <FlatList
        data={agenda}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemEvento}>{item.evento}</Text>
            <Text style={styles.itemAtividades}>{item.atividades}</Text>
            <View style={styles.botoes}>
              <Button title="Editar" onPress={() => editarEvento(index)} />
              <Button title="Excluir" onPress={() => deletarEvento(index)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formulario: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  itemEvento: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemAtividades: {
    fontSize: 14,
  },
  imagem: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Gerencia;
