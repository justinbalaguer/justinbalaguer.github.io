const API_URL = "https://api.github.com/users/justinbalaguer/repos";

class App extends React.Component {
    state = {
        //Ph News
        Name6: undefined,
        Description6: undefined,
        Language6: undefined,
        Html_Url6: undefined,
        //Ghost File
        Name1: undefined,
        Description1: undefined,
        Language1: undefined,
        Html_Url1: undefined,
        //Unity Game
        Name0: undefined,
        Description0: undefined,
        Language0: undefined,
        Html_Url0: undefined,
        //Github Repository Fetch
        Name2: undefined,
        Description2: undefined,
        Language2: undefined,
        Html_Url2: undefined
      }
  async componentDidMount() {
  const api_call = await fetch(`${API_URL}`);
  const data = await api_call.json();
  //console.log(data);
  this.setState ({
    //Ph News
    Name7: data[7].name,
    Description7: data[7].description,
    Language7: data[7].language,
    Html_Url7: data[7].html_url,
    //Ghost File
    Name1: data[1].name,
    Description1: data[1].description,
    Language1: data[1].language,
    Html_Url1: data[1].html_url,
    //Unity Game
    Name0: data[0].name,
    Description0: data[0].description,
    Language0: data[0].language,
    Html_Url0: data[0].html_url,
    //Github Repository Fetch
    Name2: data[2].name,
    Description2: data[2].description,
    Language2: data[2].language,
    Html_Url2: data[2].html_url
  })
}
  render() {
    return (
        <table className='table table-bordered table-hover table-striped' border='1'>
                <tbody>
                    <tr>
                        <th className='text-center' scope='col'>Project Name</th>
                        <th className='text-center' scope='col'>Description</th>
                        <th className='text-center' scope='col'>Language</th>
                        <th className='text-center' scope='col'>Github</th>
                        <th className='text-center' scope='col'>Demo</th>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.Name7}</td>
                        <td>{this.state.Description7}</td>
                        <td className='text-center'>{this.state.Language7}</td>
                        <td className='text-center'><a href={this.state.Html_Url7} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://justinbalaguer.github.io/ph-news" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.Name1}</td>
                        <td>{this.state.Description1}</td>
                        <td className='text-center'>{this.state.Language1}</td>
                        <td className='text-center'><a href={this.state.Html_Url1} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://www.dropbox.com/s/ahg2i16i1t46jv0/Ghost%20File%20v1.0%20BETA.exe?dl=0" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.Name0}</td>
                        <td>{this.state.Description0}</td>
                        <td className='text-center'>{this.state.Language0}</td>
                        <td className='text-center'><a href={this.state.Html_Url0} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://www.dropbox.com/s/2f2403neqnbjwvy/Evade.apk?dl=0" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.Name2}</td>
                        <td>{this.state.Description2}</td>
                        <td className='text-center'>{this.state.Language2}</td>
                        <td className='text-center'><a href={this.state.Html_Url2} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://justinbalaguer.github.io/github-repo-fetch" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    </tbody>
                </table>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));