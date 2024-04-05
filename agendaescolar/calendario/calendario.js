import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';

const CalendarioScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [items, setItems] = useState({
    
  });

  const addNewItem = () => {
    if (selectedDate && newItemName) {
      const updatedItems = {
        ...items,
        [selectedDate]: [...(items[selectedDate] || []), {name: newItemName}]
      };
      setItems(updatedItems);
      setModalVisible(false);
      setNewItemName('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected=""
        items={items}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setModalVisible(true);
        }}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Select a date: {selectedDate}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter item name"
              value={newItemName}
              onChangeText={setNewItemName}
            />
            <Button
              title="Adicionar"
              onPress={addNewItem}
            />
            <Button
              title="Cancelar"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemText: {
    fontSize: 16
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    elevation: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});

export default CalendarioScreen;