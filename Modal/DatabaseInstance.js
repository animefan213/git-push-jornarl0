import { openDatabase } from 'react-native-sqlite-storage';
 
 var db = openDatabase({ name: 'Escola.db' });
 
 export default db;