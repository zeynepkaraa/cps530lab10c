
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> How I Installed the Framework</h1>
        <ol>
          <li> First, since I have not used React before, I  had to install the Node.js</li>
          <li> Then, I created my React app by running these commands:
            <p>npx create-react-app my-react-app</p>
            <p>cd my-react-app</p>
            <p>npm start</p>
          </li>
          <li> Lastly, I made changes in App.js and App.css file to create my webpage.</li>
          <li> Since Moon servers do not support the React Framework, I decided to host my page on Github Pages.</li>
          <li> I pushed my app to Github Repository by following tutorial: </li>
          <a href= "https://www.geeksforgeeks.org/deployment-of-react-application-using-github-pages/"> Tutorial</a>
          <li> Then I installed Github Pages package to my React app. </li>
          <li> Next, I added the properties to the package.json file.</li>
          <li> Finally, I pushed the the changes I made to my app to repository and  deploy my application. </li>
        </ol>

        <h1> Challenges I faced</h1>
        <ol>
          <li>I had so many options to choose from so it was hard to decide on the framework.</li>
          <li>First time using another framework, I was unfamiliar with it, it took me quite a while to adjust. </li>
          <li> It was hard to push my app to the repository.</li>
          <li>Configurations for the packages were not clear, I had to review the documentation of the 'gh-pages' React package.</li>
          <li>I was unable to deploy the project to a separate branch for hosting on GitHub Pages at first.</li>
          
          
        </ol>

        
      </header>
    </div>
  );
}

export default App;
