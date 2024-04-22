
import { View, StyleSheet, Text, ScrollView, Platform, TouchableOpacity,Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default function Student() {

    return (
        <View style={styles.container}>
            <View style={styles.ContainerHeader}>
                <Text style={styles.text}>Bem-vindo Aluno</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerCards}
                automaticallyAdjustContentInsets
            >
                <TouchableOpacity>
                    <View style={styles.cards}>
                        <Icon name='calendar' size={24} color={'#345c8c'} />

                    </View>
                    <Text style={styles.textcard}>Agenda</Text>
                </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.cards}>
                    <Icon name='information-circle-outline' size={24} color={'#345c8c'} />
                </View >
                <Text style={styles.textcard}>Avisos</Text>
              </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.cards}>
                    <Image style={styles.imagem} source={require('../../../../assets/evento.png')}/>                    
                </View>
                <Text style={styles.textcard}>Eventos</Text>
            </TouchableOpacity>
            </ScrollView>
           <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.container2}

           >
           <View style={styles.containerInfor}>
            <Text style={styles.textHist} >Últimos avisos</Text>
            <View style={styles.inform}>
                <Text style={styles.textInform}>Avisos</Text>
                <View style={styles.cardInvisivel}>
                    <Text>
                    </Text>
                </View>
            </View> 
            <View style={styles.inform}>
                <Text style={styles.textInform}>Avisos</Text>
                <View style={styles.cardInvisivel}>
                    <Text>
                    </Text>
                </View>
            </View>     
            <View style={styles.inform}>
                <Text style={styles.textInform}>Avisos</Text>
                <View style={styles.cardInvisivel}>
                    <Text>
                    </Text>
                </View>
            </View>     
            <View style={styles.inform}>
                <Text style={styles.textInform}>Avisos</Text>
                <View style={styles.cardInvisivel}>
                    <Text >
                    </Text>
                </View>
            </View>          
            </View>
            
           </ScrollView>          
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    ContainerHeader: {
        position: 'absolute',
        width: '100%',
        height: 160,
        flex: 2,
        backgroundColor: '#345c8c',
    },
    containerIcons: {
        flexDirection: 'row',
       
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    Usericon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        marginTop: 5,
        backgroundColor: '#bed2ea',
        opacity: 0.7
    },
    imagem:{
        width: 24,
        height: 24
    },
    notif: {
        marginTop: 5
    },
    text: {
        padding: 20,
        fontSize: 24,
        marginTop: 60,
        fontFamily: 'sans-serif',
        color: '#fff'
    },
    containerCards: {
       position: 'relative',
        flex: 1,
        width: '100%',
        padding: 20,
        height: 120,
        marginTop: 170,
        alignItems: 'center',
        justifyContent: 'center'

    },
    cards: {
        width: 70,
        height: 70,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        })
    },
    textcard: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 12,
        fontWeight: '700',
    },
    container2: {

    },
    containerInfor:{
       position: 'relative',
      alignItems: 'center'
      
    },
    textHist: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30
    },
    inform: {
        backgroundColor: "#ffffff",
        color: '#fff',
        width : '80%',
        height: 80,
        marginBottom: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        })
        
    },
    textInform: {
        color: "#000"
    },
    cardInvisivel: {
       
    }


})