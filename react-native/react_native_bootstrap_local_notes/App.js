import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (prevData, value) => {
  try {
    var newArray = [];
    if(prevData.length == 0){
      newArray = [value];
    }else{
      newArray = prevData;
      newArray.push(value);
    }
    console.log(newArray);
    const jsonValue = JSON.stringify(newArray);
    await AsyncStorage.setItem('notes', jsonValue)
  } catch (e) {
    // saving error
    console.log(e);
  }
}

const addData = async (prevData) => {
  try {
    
    const jsonValue = JSON.stringify(prevData);
    await AsyncStorage.setItem('notes', jsonValue)
  } catch (e) {
    // saving error
    console.log(e);
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('notes')
    console.log("val");
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {
    // error reading value
    console.log(e);
  }
}


const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [notes, setnotes] = useState([]);
  const [text, settext] = useState('');

  async function getNotesData()  {
    var data = await getData();
    console.log(data);
    setnotes(data);
  }

  async function addNote()  {
  storeData(notes, text);
  settext('');
  getNotesData();
  }

  async function deleteNote(t)  {
    var index = notes.indexOf(t);
    if(index > -1){
       notes.splice(index, 1);
      await addData(notes);
      await getNotesData();
    }
  }

  useEffect(() => {
    getNotesData();
  }, [])
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Local Tasks App</Text>

          <TextInput 
            placeholder='Enter Task' 
            style={styles.textfield}
            onChangeText={settext}
            value={text}
          />

          <TouchableOpacity onPress={addNote} style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>

        {notes.length == 0 ? <Text style={styles.sectionTitle}>No Notes 😢</Text> : <></>}
        {notes.length !== 0 ?
          <Text style={styles.sectionTitle}> Here are your notes </Text>
          : <></>
        } 

        {notes.map((n, i) => {
          return (
            <View key={i} style={styles.taskCard}>
              <Text style={styles.tasktext}>{n}</Text>
              <TouchableOpacity style={styles.taskButton} onPress={() => {deleteNote(n)}}>
                <Text style={styles.taskButtontext}>Delete</Text>
              </TouchableOpacity>
              </View>
          )
        })}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textfield: {
    fontSize: 18,
    color: '#1c1c1c',
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 5,
    marginTop: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  taskCard : {
    backgroundColor : '#fefefe',
    marginBottom : 12,
    padding : 12,
  },
  tasktext : {
    fontSize : 18,
    color : '#1c1c1c',
    marginBottom : 12,
  },
  taskButton : {
    backgroundColor : '#232323',
    maxWidth : 120,
    textAlign : 'center',
    marginBottom : 12,
    padding : 12,
  },
  taskButtontext : {
    color : '#fff',
   fontSize : 18,
    textAlign : 'center',
    
  },
});

export default App;



