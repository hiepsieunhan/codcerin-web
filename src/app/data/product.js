export const products = {
  "codcerin-d": {
    name: "CODCERIN D",
    description: "CODCERIN D là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các .",
    image: "product1.png",
    detail: {
      description: "CODCERIN D là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
      dosage: [
        {age: 'Adults and children 12 years of age and over', dose: '10 ml every 12 hours, not to exceed 20 ml in 24 hours'},
        {age: 'Children 6 to under 12 years of age', dose: '5 ml every 12 hours, not to exceed 10 ml in 24 hours'},
        {age: 'Children 4 to under 6 years of age', dose: '2.5 ml every 12 hours, not to exceed 5 ml in 24 hours'},
        {age: 'Children under 4 years of age', dose: 'Do not use'}
      ],
      labeling: `<h1><a id="Dillinger_0"></a>Dillinger</h1>
        <p>Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.</p>
        <ul>
        <li>Type some Markdown on the left</li>
        <li>See HTML in the right</li>
        <li>Magic</li>
        </ul>
        <p>You can also:</p>
        <ul>
        <li>Import and save files from GitHub, Dropbox, Google Drive and One Drive</li>
        <li>Drag and drop files into Dillinger</li>
        <li>Export documents as Markdown, HTML and PDF</li>
        </ul>
        <p>Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As <a href="http://daringfireball.net">John Gruber</a> writes on the <a href="http://daringfireball.net/projects/markdown/">Markdown site</a></p>
        <blockquote>
        <p>The overriding design goal for Markdown’s
        formatting syntax is to make it as readable
        as possible. The idea is that a
        Markdown-formatted document should be
        publishable as-is, as plain text, without
        looking like it’s been marked up with tags
        or formatting instructions.</p>
        </blockquote>
        <p>This text you see here is <em>actually</em> written in Markdown! To get a feel for Markdown’s syntax, type some text into the left window and watch the results in the right.</p>
        <h3><a id="Version_25"></a>Version</h3>
        <p>3.2.7</p>
        <h3><a id="Tech_28"></a>Tech</h3>
        <p>Dillinger uses a number of open source projects to work properly:</p>
        <ul>
        <li><a href="http://angularjs.org">AngularJS</a> - HTML enhanced for web apps!</li>
        <li><a href="http://ace.ajax.org">Ace Editor</a> - awesome web-based text editor</li>
        <li><a href="https://github.com/markdown-it/markdown-it">markdown-it</a> - Markdown parser done right. Fast and easy to extend.</li>
        <li><a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> - great UI boilerplate for modern web apps</li>
        <li><a href="http://nodejs.org">node.js</a> - evented I/O for the backend</li>
        <li><a href="http://expressjs.com">Express</a> - fast node.js network app framework <a href="http://twitter.com/tjholowaychuk">@tjholowaychuk</a></li>
        <li><a href="http://gulpjs.com">Gulp</a> - the streaming build system</li>
        <li><a href="https://github.com/madrobby/keymaster">keymaster.js</a> - awesome keyboard handler lib by <a href="http://twitter.com/thomasfuchs">@thomasfuchs</a></li>
        <li><a href="http://jquery.com">jQuery</a> - duh</li>
        </ul>
        <p>And of course Dillinger itself is open source with a <a href="https://github.com/joemccann/dillinger">public repository</a>
        on GitHub.</p>
        <h3><a id="Installation_45"></a>Installation</h3>
        <p>Dillinger requires <a href="https://nodejs.org/">Node.js</a> v4+ to run.</p>
        <p>You need Gulp installed globally:</p>
        <pre><code class="language-sh">$ npm i -g gulp
        </code></pre>
        <pre><code class="language-sh">$ git <span class="hljs-built_in">clone</span> [git-repo-url] dillinger
        $ <span class="hljs-built_in">cd</span> dillinger
        $ npm i <span class="hljs-operator">-d</span>
        $ NODE_ENV=production node app
        </code></pre>
        <h3><a id="Plugins_62"></a>Plugins</h3>
        <p>Dillinger is currently extended with the following plugins</p>
        <ul>
        <li>Dropbox</li>
        <li>Github</li>
        <li>Google Drive</li>
        <li>OneDrive</li>
        </ul>
        <p>Readmes, how to use them in your own application can be found here:</p>
        <ul>
        <li><a href="https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md">plugins/dropbox/README.md</a></li>
        <li><a href="https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md">plugins/github/README.md</a></li>
        <li><a href="https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md">plugins/googledrive/README.md</a></li>
        <li><a href="https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md">plugins/onedrive/README.md</a></li>
        </ul>
        <h3><a id="Development_78"></a>Development</h3>
        <p>Want to contribute? Great!</p>
        <p>Dillinger uses Gulp + Webpack for fast developing.
        Make a change in your file and instantanously see your updates!</p>
        <p>Open your favorite Terminal and run these commands.</p>
        <p>First Tab:</p>
        <pre><code class="language-sh">$ node app
        </code></pre>
        <p>Second Tab:</p>
        <pre><code class="language-sh">$ gulp watch
        </code></pre>
        <p>(optional) Third:</p>
        <pre><code class="language-sh">$ karma start
        </code></pre>
        <h3><a id="Docker_102"></a>Docker</h3>
        <p>Dillinger is very easy to install and deploy in a Docker container.</p>
        <p>By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.</p>
        <pre><code class="language-sh"><span class="hljs-built_in">cd</span> dillinger
        docker build -t &lt;youruser&gt;/dillinger:latest .
        </code></pre>
        <p>This will create the dillinger image and pull in the necessary dependencies. Once done, run the Docker and map the port to whatever you wish on your host. In this example, we simply map port 80 of the host to port 80 of the Docker (or whatever port was exposed in the Dockerfile):</p>
        <pre><code class="language-sh">docker run <span class="hljs-operator">-d</span> -p <span class="hljs-number">80</span>:<span class="hljs-number">80</span> --restart=<span class="hljs-string">"always"</span> &lt;youruser&gt;/dillinger:latest
        </code></pre>
        <p>Verify the deployment by navigating to your server address in your preferred browser.</p>
        <h3><a id="NSolid_and_NGINX_119"></a>N|Solid and NGINX</h3>
        <p>More details coming soon.</p>
        <h4><a id="dockercomposeyml_123"></a>docker-compose.yml</h4>
        <p>Change the path for the nginx conf mounting path to your full path, not mine!</p>
        <h3><a id="Todos_127"></a>Todos</h3>
        <ul>
        <li>Write Tests</li>
        <li>Rethink Github Save</li>
        <li>Add Code Comments</li>
        <li>Add Night Mode</li>
        </ul>
        <h2><a id="License_134"></a>License</h2>
        <p>MIT</p>
        <p><strong>Free Software, Hell Yeah!</strong></p>`
    }
  },
  "codcerin-e": {
    name: "CODCERIN E",
    description: "CODCERIN E là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
    image: "product1.png",
    detail: {
      description: "CODCERIN E là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
    }
  },
  "codcerin-exp": {
    name: "CODCERIN EXP",
    description: "CODCERIN EXP là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
    image: "product1.png",
    detail: {
      description: "CODCERIN EXP là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
    }
  },
  "codcerin-thao-duoc": {
    name: "CODCERIN THAO DUOC",
    description: "CODCERIN THAO DUOC là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
    image: "product1.png",
    detail: {
      description: "CODCERIN THAO DUOC là sự phối hợp tối ưu giữa Codein, Guaifenesin dùng trong trường hợp ho ban ngày giúp điều trị các triệu chứng ho, làm long đờm và thông khí đường hô hấp gặp trong các chứng cảm lạnh hoặc do viêm nhiễm đường hô hấp trên.",
    }
  }
};

export const productNames = ["codcerin-d", "codcerin-e", "codcerin-exp", "codcerin-thao-duoc"];
