import { useState } from 'react';
import { View, StyleSheet,Text} from 'react-native'
import { Picker } from 'native-base';

interface Class {
  id: number;
  name: string;
}
interface Class1 {
  id: number;
  name: string;
}
interface Class2 {
  id: number;
  name: string;
}
const classesData: Class[] = [
  { id: 1, name: '1º Série-manhã' },
  { id: 2, name: '2º Série-manhã' },
  { id: 3, name: '3º Série-manhã' },
];
const classesData1: Class1[] = [
  { id: 1, name: '1º Série-Tarde' },
  { id: 2, name: '2º Série-Tarde' },
  { id: 3, name: '3º Série-Tarde' },
];
const classesData2: Class2[] = [
  { id: 1, name: '1º Série-Noite' },
  { id: 2, name: '2º Série-Noite' },
  { id: 3, name: '3º Série-Noite' },
];




function Home() {
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  const [selectedClass1Id, setSelectedClass1Id] = useState<number | null>(null);
  const [selectedClass2Id, setSelectedClass2Id] = useState<number | null>(null);

  const handleClassChange = (classId: number) => {
    setSelectedClassId(classId);
  };
  const handleClassChange1 = (class1Id: number) => {
    setSelectedClass1Id(class1Id);
  };
  const handleClassChange2 = (class2Id: number) => {
    setSelectedClass2Id(class2Id);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.mensagem}>Selecione a Turma</Text>
      </View>
      <View style={styles.containerGrid}>
      <View style={styles.button}>
            <Picker
              note
              mode="dropdown"
              style={styles.classItem}
              selectedValue={selectedClassId}
              onValueChange={(itemValue) => handleClassChange(itemValue)}
            >
              <Picker.Item label="1º Turno - Manhã" value={null} />
              {classesData.map((classItem) => (
                <Picker.Item key={classItem.id} label={classItem.name} value={classItem.id} />
              ))}
            </Picker>
          </View>     
          <View style={styles.button}>
          <Picker
            style={styles.classItem}
            selectedValue={selectedClass1Id}
            onValueChange={(itemValue) => handleClassChange1(itemValue)}
          >
            <Picker.Item label="2º Turno - Tarde" value={null} />
            {classesData1.map((classItem) => (
              <Picker.Item key={classItem.id} label={classItem.name} value={classItem.id} />
            ))}
          </Picker>
         
        </View>
        <View style={styles.button}>
          <Picker
            style={styles.classItem}
            selectedValue={selectedClass2Id}
            onValueChange={(itemValue) => handleClassChange2(itemValue)}
          >
            <Picker.Item label="3º Turno - Noite" value={null} />
            {classesData2.map((classItem) => (
              <Picker.Item key={classItem.id} label={classItem.name} value={classItem.id} />
            ))}
          </Picker>
         
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc1c6',

  },
  containerHeader: {
    flex: 0.35,

    height: '30%',
    backgroundColor: '#345c8c',
   

  },
  mensagem: {
    color: "#FFF",
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 130,
    marginLeft: 30
  },
  containerGrid: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  button: {
    width: '70%',
    height: 80,
    backgroundColor: '#fff',
  },
  classItem: {
    width: 300,
    height: 75,
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  selectedClassItem: {
    backgroundColor: '#f0f0f0',
  },
  className: {
    fontSize: 18,
    textAlign: 'justify'
  },



});

export default Home
