import React from "react";
import reactBg from "../assets/React-js.png"
import sa from "../assets/sa.jpg"
import sat from "../assets/sat.jpg"
const style =  `
.article-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.randImage {
	align-self: center;
	outline: 2px solid red;
	max-width: 100%;
	height : auto;

}
`
function article_1() {
	return {
		date: "26 May 2023",
		title: "Why You Should Use React.js For Web Development",
		description:
			"If you are new to React.js, you must be wondering why it is so popular and why you should use it in your applications. If so, then you are in the right place.",
		style: style,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src={reactBg}
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						<h4>Table of Contents</h4>
						<ul>
							<li>A Brief History of React.js</li>
							<li> React is Flexible</li>
							<li> React Has a Great Developer Experience</li>
							<li> React Has Facebook's Support/Resources</li>
							<li> React Also Has Broader Community Support</li>
							<li> React Has Great Performance</li>
							<li> React is Easy to Test</li>
						</ul>
						<h2>A Brief History of React.js</h2>
						<p>
							Facebook created React.js in 2011 for their own use. As you know, Facebook is one of the biggest Social Networking websites in the world today.
							In 2012, Instagram also started using it, which is a subsidiary of Facebook.
							In 2013, Facebook made React.js open-sourced. Initially, the developer community rejected it because it used Markup and JavaScript in a single file. But as more people experimented with it, they started embracing the component-centric approach for separating concerns.
							In 2014, many large companies started using React.js in their production environments.
							In 2015, Facebook open-sourced React Native too. It is a library that allows us to create native mobile apps in Android and iOS using React.js.
							In 2016, with version 15, React.js started using Semantic Versioning. This also helped convey to the developer's community that React was more stable.
							Today, React.js is used by many Fortune 500 companies. Facebook has full-time React development staff. They regularly release bug fixes, enhancements, blog posts, and documentation.
						</p>
						<h2>Why Should You Use React?</h2>
						<p>
							You must be wondering why you should use React.js. After all, as the uses of JavaScript have increased in recent years, we now have multiple options available in the market like <a href="https://angular.io/">Angular</a> and <a href="https://vuejs.org/">Vue.js</a>. So, why React?
							Let's explore six key reasons to use React.js.
						</p>
						<h2>React is Flexible</h2>
						<p>
							React is remarkably flexible. Once you have learned it, you can use it on a vast variety of platforms to build quality user interfaces. React is a library, NOT a framework. Its library approach has allowed React to evolve into such a remarkable tool.
							React was created with a single focus: to create components for web applications. A React component can be anything in your web application like a Button, Text, Label, or Grid.
							But as React's popularity is grown, its ecosystem has also grown to cover various use cases.
							You can generate a static site with React using tools like <a href="https://www.gatsbyjs.com/">Gatsby</a>. You can use React Native to build mobile apps. You can even create Desktop applications using a tool like <a href="https://www.electronjs.org/">Electron</a>, which can run on mac and windows with React.js technology.
							React also supports server rendering of its components using tools like <a href="https://nextjs.org/">Next.js</a>. You can also use React.js to create a virtual reality website and 360 experiences using React VR.
						</p>
						<h2>React Has a Great Developer Experience</h2>
						<p>
							Your team will fall in love with React when they start coding in it. Rapid development and React's small API combined creates a fantastic developer experience.
							React's API is very simple to learn. It has very few concepts to learn. 
							You just need to import the React library. Message is the component that accepts props (input) and returns JSX.
							JSX is a special syntax that looks like HTML, which converts React's API calls and finally renders HTML.
							Traditional frameworks like Angular and Vue power up the HTML. They use JavaScript inside HTML. They have created HTML attributes that give extra capabilities to it.
							The main problem with this approach is that you have to learn those new HTML attributes or always keep looking at the official documentation.
							React uses the opposite approach. It uses HTML (JSX) inside JavaScript. I like this approach because here, you can deal with pure JavaScript and HTML.
							React.js also gives us the create-react-app package, which allows you to start development instantly.
						</p>
						<h2>React Has Facebook's Support/Resources</h2>
						<p>
							React is heavily used in the Facebook app, website, and in Instagram. That's why Facebook is deeply committed to it. They use over 50k React components in their production environment. The top four React contributors on GitHub are full-time Facebook employees.
							Also, the React team maintains a blog that consistently gives you details for each release.
							Because of the deep commitment by Facebook to React in production, when breaking change occur in React, Facebook consistently provides Codemod that automates the change.
							Codemod is the command-line tool that automates changes to your codebase. When a new specification comes into React, Codemod automatically replaces older components with the newer specification.
						</p>
						<h2>React Has Broader Community Support, Too </h2>
						<p>
							Since 2015, React's popularity has grown steadily. It has a massive active community and its GitHub Repository has over 164k Stars. It is one of the Top 5 Repositories on GitHub.
							React's NPM package has millions of weekly downloads as well.
							Over 9K companies reported on Stackshare that they are using React. You can even see Fortune 500 companies.
							Reactiflux is a community specially made for React Developers. Over 110k community members are involved in helping solve and share React-related problems.
							One of the most popular websites among software developers is StackOverflow. You can see that there are over 250k questions asked about React and related libraries.
							In some cases, you don't even need to create your components. There are lots of free and mature component libraries already available online.
							Here are some examples:
							<ul>
								<li>In some cases, you don't even need to create your components. There are lots of free and mature component libraries already available online.Here are some examples:</li>
								<li>Material-UI offers React components that implement Google's Material UI guidelines.</li>
								<li>React-Bootstrap contains React components that make it easy to work with Bootstrap.</li>
								<li>Also, check the Awesome React Components list on GitHub to find more React components.</li>
							</ul>
							There are also mature related projects/libraries that you can use with React :
							<ul>
								<li>If you want routing, then go for React Router. If you want to manage a more complex data system, then use Redux and MobX.</li>
								<li>For automated testing, use Jest, which is also from Facebook.</li>
								<li>For RESTful API calls, use GraphQL.</li>
								<li>For the server-side rendering of React components with node, use Express.js.</li>
							</ul>
							All these libraries and tools are important, because if you are looking to build something in React, you will find tons of help and solutions on the web for everything.
						</p>
						<h2>React Has Great Performance</h2>
						<p>
							The React team realized that JavaScript is fast, but updating the DOM makes it slow. React minimizes DOM changes. And it has figured out the most efficient and intelligent way to update DOM.
							Before React, most frameworks and libraries would update the DOM unintelligently to reflect a new state. This resulted in changes to a significant portion of the page.
							React monitors the values of each component's state with the Virtual DOM. When a component's state changes, React compares the existing DOM state with what the new DOM should look like. After that, it finds the least expensive way to update the DOM.
							This doesn't seem very easy, but React handles it very well behind the scenes. It has multiple benefits like avoiding layout trashing, which is when the browser has to re-calculate the position of everything when the DOM element changes.
							Also, since most applications are being used on mobile devices they need to be highly efficient. So, saving battery and CPU power is very important.
							React's simple programming model allows it to change state automatically when data gets updated. This happens in the memory, so it is speedy.
							React's library size is also tiny. It is less than 6kb (less than 3kb when gzipped). This is significantly smaller than its competitors.
						</p>
						<h2 >React is Easy to Test</h2>
						<p>
							React's design is very user friendly for testing.
							<ul>
								<li>Traditional UI browser testing is a hassle to setup. On the other hand, you require very little or no configuration for testing in React.</li>
								<li>Traditional UI browser requires browsers for testing, but you can test React components quickly and easily using the node command-line.</li>
								<li>Traditional UI browser testing is slow. But command-line testing is fast, and you can run a considerable amount of test suites at a time.</li>
								<li>Traditional UI browser testing is often time consuming and challenging to maintain. React test can be written quickly using tools like Jest & Enzyme.</li>
							</ul>
							There are wide variety of JavaScript testing frameworks available on the web that you can use to test React.js (since it's also a JavaScript library). Some popular testing frameworks are Mocha, Jasmine, Tape, QUnit, and AVA.
						</p>
						<h2>Conclusion</h2>
						<p>
							React is an excellent tool with which to create interactive applications for mobile, web, and other platforms.
							React's popularity and usage are increasing day by day for good reason. As a developer, coding in React makes you better at JavaScript, a language that holds nearly 90% of the web development share today.
						</p>		
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "26 May 2023",
		title: "Top 10 Architectural Patterns for software developpment",
		description: "software architecture is the process of designing the structure and behavior of a software system, which includes making decisions about components, modules, interfaces, and the organization of the system. ",
		style: style,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src={sa}
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						<h1>𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗮𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲</h1>
						<p>is the process of designing the structure and behavior of a software system, which includes making decisions about components, modules, interfaces, and the organization of the system. </p>
						<h1>𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗮𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲 𝗽𝗮𝘁𝘁𝗲𝗿𝗻𝘀</h1>
						<p>are important because they provide reusable solutions to common problems in software design. They capture best practices and proven solutions for designing software systems that are reliable, scalable, maintainable, and extensible.</p>	
						<p>There are many software architecture design patterns to know, but some of the most important ones are:</p>
						<p>𝟭. 𝗟𝗮𝘆𝗲𝗿𝗲𝗱 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: This pattern is based on dividing the application into logical layers, where each layer has a specific responsibility and interacts with the layers above and below it.</p>
						<p>𝟮. 𝗠𝗶𝗰𝗿𝗼𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: This pattern is based on decomposing the application into small, independent services that communicate with each other through well-defined APIs.</p>
						<p>𝟯. 𝗘𝘃𝗲𝗻𝘁-𝗗𝗿𝗶𝘃𝗲𝗻 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: This pattern is based on using events to communicate between different components or services, where events trigger actions or reactions in the system.</p>
						<p>𝟰. 𝗦𝗽𝗮𝗰𝗲-𝗯𝗮𝘀𝗲𝗱 𝗮𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲 (𝗦𝗕𝗔): is a method of designing software that centers the system's structure around the idea of "spaces," which are independent and autonomous units.</p>
						<p>𝟱. 𝗠𝗶𝗰𝗿𝗼𝗸𝗲𝗿𝗻𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: this is an approach where the kernel provides minimal functionality and services are implemented as separate modules outside of the kernel.</p>
						<p>𝟲. 𝗣𝗲𝗲𝗿 𝘁𝗼 𝗣𝗲𝗲𝗿 𝗮𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗮𝗹 𝗽𝗮𝘁𝘁𝗲𝗿𝗻: this is a decentralized model where nodes in a network can act as both clients and servers, allowing for distributed sharing of resources and information without the need for a central authority.</p>
						<p>𝟳. 𝗖𝗹𝗼𝘂𝗱 𝗻𝗮𝘁𝗶𝘃𝗲 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗮𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: this is a pattern where applications are developed and deployed to run on cloud platforms, leveraging cloud services and infrastructure for scalability, reliability, and agility.</p>
						<p>𝟴. 𝗖𝗤𝗥𝗦 (𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗤𝘂𝗲𝗿𝘆 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆 𝗦𝗲𝗴𝗿𝗲𝗴𝗮𝘁𝗶𝗼𝗻): This pattern separates the command and query responsibilities of an application's model, making it easier to scale and optimize the application.</p>
						<p>𝟵. 𝗛𝗲𝘅𝗮𝗴𝗼𝗻𝗮𝗹 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: This pattern is based on separating the application into an inner and outer layer, where the inner layer contains the business logic and the outer layer contains the interfaces with the outside world.</p>
						<p>𝟭𝟬. 𝗖𝗹𝗲𝗮𝗻 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: This pattern emphasizes the separation of concerns and decoupling of components, making it easier to maintain and change an application over time.</p>
					</div>
					<img
						src={sat}
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
