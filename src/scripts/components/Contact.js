import DataStore from 'flux/stores/DataStore.js'

class Contact extends React.Component {
  render() {

    let page = DataStore.getPageBySlug("contact");
    let acf = page.acf; // Advanced Custom Fields data

    return (
      <div>
        <h2>Contact Component</h2>
        <h1>{page.title.rendered}</h1>
      </div>
    );
  }
}

export default Contact;
