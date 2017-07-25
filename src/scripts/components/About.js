import DataStore from 'flux/stores/DataStore.js'

class About extends React.Component {
  render() {

    let page = DataStore.getPageBySlug("about");
    let acf = page.acf; // Advanced Custom Fields data

    return (
      <div>
        <h2>About Component</h2>
        <h1>{page.title.rendered}</h1>
      </div>
    );
  }

}

export default About;
