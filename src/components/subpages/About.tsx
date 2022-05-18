import Privacy from "./Privacy";

function About() {
  return (
    <div className="mt-10 w-11/12">
      <p className="text-2xl text-center"> About & Privacy </p>

      <p className="text-xl text-center pt-8 pb-2"> Introduction </p>
      <p className="pt-1">
        No note taking app does exactly what I want, so I built SpeedJots for
        <s>myself</s> everyone.
      </p>
      <p className="pt-1">SpeedJots does one thing and does it well:</p>
      <ul>
        <li className="list-disc ml-12">Rich text editor.</li>
        <li className="list-disc ml-12">Groups to organize Jots.</li>
        <li className="list-disc ml-12">Search Jots by title and content.</li>
        <li className="list-disc ml-12">Browser accessible from any device.</li>
        <li className="list-disc ml-12">Open source.</li>
      </ul>

      <p className="text-xl text-center pt-8 pb-2"> Free? Ya, right. </p>
      <p className="pt-1">
        Currently the costs are so low, I don't mind covering them. So use Speed
        Jots to your heart's conent for free.
      </p>
      <p className="pt-1">If the costs ever grow, the plan is:</p>
      <ol>
        <li className="list-decimal ml-12">Ask for donations.</li>
      </ol>
      <p className="pt-1">If that doesn't work:</p>
      <ol>
        <li className="list-decimal ml-12">Place some Google ads and</li>
        <li className="list-decimal ml-12">
          Offer an ad free subscription for a nominal fee.
        </li>
      </ol>
      <p className="pt-1">
        At the end of the day, even if it begins to cost me too much, you can
        either donate or put up with a couple of ads (and continue to use it for
        "free").
      </p>

      <p className="text-xl text-center pt-8 pb-2"> Contact and Development </p>
      <p className="pt-1">
        To contact me, raise issues, report bugs, request features, click on
        "New Issue" here:{" "}
        <a
          href="https://github.com/dirkdirk/speedjots/issues"
          target="_blank"
          rel="noreferrer"
        >
          Github Issues
        </a>
      </p>
      <p className="pt-1">
        To help with development:
        <a
          href="https://github.com/dirkdirk/speedjots"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>

      <Privacy />
    </div>
  );
}

export default About;
