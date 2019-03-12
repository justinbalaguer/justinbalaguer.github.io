const API_URL = "https://api.github.com/users/justinbalaguer/repos";

class App extends React.Component {
    state = {
        //Ph News
        phnewsName: undefined,
        phnewsDescription: undefined,
        phnewsLanguage: undefined,
        phnewsHtml_Url: undefined,
        //Ghost File
        ghostName: undefined,
        ghostDescription: undefined,
        ghostLanguage: undefined,
        ghostHtml_Url: undefined,
        //Unity Game
        evadeName: undefined,
        evadeDescription: undefined,
        evadeLanguage: undefined,
        evadeHtml_Url: undefined,
        //Github Repository Fetch
        repoName: undefined,
        repoDescription: undefined,
        repoLanguage: undefined,
        repoHtml_Url: undefined,
        //Arduino Bluetooth Relay
        arduinorelayName: undefined,
        arduinorelayDescription: undefined,
        arduinorelayLanguage: undefined,
        arduinorelayHtml_Url: undefined
      }
  async componentDidMount() {
  const api_call = await fetch(`${API_URL}`);
  const data = await api_call.json();
  //console.log(data);
  this.setState ({
    //Ph News
    phnewsName: data[8].name,
    phnewsDescription: data[8].description,
    phnewsLanguage: data[8].language,
    phnewsHtml_Url: data[8].html_url,
    //Ghost File
    ghostName: data[2].name,
    ghostDescription: data[2].description,
    ghostLanguage: data[2].language,
    ghostHtml_Url: data[2].html_url,
    //Unity Game
    evadeName: data[1].name,
    evadeDescription: data[1].description,
    evadeLanguage: data[1].language,
    evadeHtml_Url: data[1].html_url,
    //Github Repository Fetch
    repoName: data[3].name,
    repoDescription: data[3].description,
    repoLanguage: data[3].language,
    repoHtml_Url: data[3].html_url,
    //Arduino Bluetooth Relay
    arduinorelayName: data[0].name,
    arduinorelayDescription: data[0].description,
    arduinorelayLanguage: data[0].language,
    arduinorelayHtml_Url: data[0].html_url
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
                        <td className='text-center'>{this.state.phnewsName}</td>
                        <td>{this.state.phnewsDescription}</td>
                        <td className='text-center'>{this.state.phnewsLanguage}</td>
                        <td className='text-center'><a href={this.state.phnewsHtml_Url} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://justinbalaguer.github.io/ph-news" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.ghostName}</td>
                        <td>{this.state.ghostDescription}</td>
                        <td className='text-center'>{this.state.ghostLanguage}</td>
                        <td className='text-center'><a href={this.state.ghostHtml_Url} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://www.dropbox.com/s/ahg2i16i1t46jv0/Ghost%20File%20v1.0%20BETA.exe?dl=0" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.evadeName}</td>
                        <td>{this.state.evadeDescription}</td>
                        <td className='text-center'>{this.state.evadeLanguage}</td>
                        <td className='text-center'><a href={this.state.evadeHtml_Url} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://www.dropbox.com/s/2f2403neqnbjwvy/Evade.apk?dl=0" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.repoName}</td>
                        <td>{this.state.repoDescription}</td>
                        <td className='text-center'>{this.state.repoLanguage}</td>
                        <td className='text-center'><a href={this.state.repoHtml_Url} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://justinbalaguer.github.io/github-repo-fetch" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    <tr>
                        <td className='text-center'>{this.state.arduinorelayName}</td>
                        <td>{this.state.arduinorelayDescription}</td>
                        <td className='text-center'>{this.state.arduinorelayLanguage}</td>
                        <td className='text-center'><a href={this.state.arduinorelayHtml_Url} rel="noopener noreferrer" target="_blank">view</a></td>
                        <td className='text-center'><a href="https://github.com/justinbalaguer/arduino-bluetooth-relay" rel="noopener noreferrer" target="_blank">Demo</a></td>
                    </tr>
                    </tbody>
                </table>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));