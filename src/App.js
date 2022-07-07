import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact.js';
import Header from './components/Header.js';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App" style={{backgroundColor:'aliceblue'}}>
      <Header />
      <Contact propsPerson = {contacts[0]}/> 
      <Contact propsPerson = {contacts[1]}/> 
      <Contact propsPerson = {contacts[2]}/> 
      <Contact propsPerson = {contacts[3]}/> 
      <Contact propsPerson = {contacts[4]}/> 
      <Contact propsPerson = {contacts[5]}/> 
      
    </div>
  );
}

export default App;
