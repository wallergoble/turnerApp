import React from 'react';

const About = () =>
    <div className="about-container">
        <h1> Hi!</h1>
        <p>
            {' '}Thanks for taking the time to look at this app I made. I
            appreciate the opportunity to be considered for what I believe to be
            an awesome opportunity. Because of that, I put my all into this app,
            and I believe all in all it is a good effort. It has its strengths
            and weaknesses, which I intend to elaborate on below.
        </p>

        <h2> Design Decisions </h2>
        <p>
            I made a few decisions in the architecture of my app which I feel
            are worth noting.
        </p>
        <p>
            First and foremost were my moves to use both express-generator and
            create-react-app. I generally start with these anyways to get rid of
            some of the heavy-lifting of bootstrapping an app (I'm looking at
            you, webpack), but with the constrained timeframe of development,
            these were crucial to allowing me to focus on the user stories at
            hand.
        </p>
        <p>
            My next notable design decision was the notable absence of redux.
            While I considered using it just to brush up and show off my skills
            with the library, I looked at my app at one point and realized I
            only had to call setState twice in the entire app. Were I to
            complete more of my stretch goals, I don't think I would have gotten
            much higher. Redux's creator has a few blog posts on how not every
            React app needs redux, and I think in this case he would agree that
            the setup and boilerplate required wouldn't be worth the benefits
            gained from the library.
        </p>
        <p>
            I try to favor stateless functional components whenever I don't
            absolutely need to hook into a lifecycle method or use state while
            writing React apps, and this one was no exception. While there are
            performance improvements to be noted when doing this, my driving
            reason for this decision is that it produces the most legible,
            declarative code, which I think is a core value React.
        </p>
        <h2> Accomplishments </h2>
        <p>
            First and foremost, I believe I have adequately solved the problems
            given to me. The prompt gave me a database, and asked me to create
            an application which allowed users to search for a Title, display
            matches for their search, then pull up details from those search
            results. This app does those things to a tee. Along the way, I wrote
            what I feel to be some very clean and utilitarian Javascript, and
            used a good many features of Node and React.
        </p>
        <h4> React Router </h4>
        <p>
            My use of React Router in this app is a point of pride. At my last
            position at Xplorie, we were using a beta version of 3.0 of React
            Router, so I hadn't touched this new version until today, outside of
            reading blog posts about it. It took a while to wrap my head around
            the declarative syntax, and I tried to fight against it, but I feel
            like it worked out really well.
        </p>

        <h2> Areas of Improvement </h2>
        <p>
            In all things, it's nice to not get too prideful, so I'm going to go
            over a few facets of this app I feel could use some improvement.
        </p>
        <h4> API Flair </h4>
        <p>
            While I feel like I did a solid job at making my Node API do what it
            needed to do. I feel like I don't have enough knowledge in the area
            to do things like watch out for scaling issues or generally increase
            efficiency. One of the things I like most about this position is to
            learn more about how to harness the power of Node.
        </p>
        <p>
            Lastly, it's just not very pretty. I'm not great at coming up with
            visual designs ab origino; my strengths lie more in the realms of UX
            critiquing and taking a wireframe and realizing it. I drew out some
            petty wireframes during my planning of this app, but they obviously
            were a little lacking.
        </p>

        <h2> Future Development </h2>
        <p>
            In no particular order, here are some features I wanted to
            implement, but didn't have time to see through in the given
            timeframe:
        </p>
        <ul>
            <li>
                Add search functionality by date, genre, and actor(you can see
                some routes I had planned for this){' '}
            </li>
            <li>Animate route transitions </li>
            <li>Spice up the UI </li>
            <li>Back up state with the HTML5 Local Storage API </li>
            <li>Utilize a CSS Module library </li>
            <li>
                Make the search bar autocomplete(I wanted to focus on this, but
                it seemed counterintuitive to the prompt's requirement to be
                able to choose from a list of search results){' '}
            </li>
            <li>
                Add search functionality at the details page(i.e. click on a
                genre and see movies of that genre)
            </li>
        </ul>

        <h2> Thank You </h2>
        <p>
            Once again, thank you for reading this and looking at my app. I
            sincerely hope to get to talk about it more in the next round and to
            show you why I would be a great asset to your team.
        </p>
    </div>;

export default About;
