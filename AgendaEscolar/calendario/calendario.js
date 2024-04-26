import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

const CalendarioScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [items, setItems] = useState({});

  const addNewItem = () => {
    if (selectedDate && newItemName) {
      const updatedItems = {
        ...items,
        [selectedDate]: [...(items[selectedDate] || []), { name: newItemName }],
      };
      setItems(updatedItems);
      setModalVisible(false);
      setNewItemName('');
    }
  };

  const deleteItem = (date, index) => {
    const updatedItems = {
      ...items,
      [date]: items[date].filter((item, i) => i !== index),
    };
    setItems(updatedItems);
  };

  const editItem = (date, index, newName) => {
    const updatedItems = {
      ...items,
      [date]: items[date].map((item, i) => (i === index ? { ...item, name: newName } : item)),
    };
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected=""
        items={items}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Button
              title="Editar"
              onPress={() => {
                setModalVisible(true);
                setSelectedDate(selectedDate);
                setNewItemName(item.name);
                deleteItem(selectedDate, items[selectedDate].indexOf(item));
              }}
            />
            <Button
              title="Excluir"
              onPress={() => deleteItem(selectedDate, items[selectedDate].indexOf(item))}
            />
          </TouchableOpacity>
        )}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setModalVisible(true);
        }}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Select a date: {selectedDate}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter item name"
              value={newItemName}
              onChangeText={setNewItemName}
            />
            <Button title="Adicionar" onPress={addNewItem} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default CalendarioScreen;
