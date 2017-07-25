import DataStore from 'flux/stores/DataStore.js'

class Work extends React.Component {
  render() {

    let page = DataStore.getPageBySlug("work");
    let acf = page.acf; // Advanced Custom Fields data

    return (
      <div>
        <h2>Work Component</h2>
        <h1>{page.title.rendered}</h1>
      </div>
    );
  }

}

export default Work;
