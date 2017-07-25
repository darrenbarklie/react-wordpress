import DataStore from 'flux/stores/DataStore.js'

class Contact extends React.Component {
  render() {

    let allData = DataStore.getAll();
    console.log(allData);

    return (
      <div>
        <h2>Contact Component</h2>
      </div>
    );
  }
}

export default Contact;
