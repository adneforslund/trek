import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skripting</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="wrap" id="gap">
        <div className="left-frame">
          <div>
            <div className="panel-3">
              03<span className="hop">-111968</span>
            </div>
            <div className="panel-4">
              04<span className="hop">-041969</span>
            </div>
            <div className="panel-5">
              05<span className="hop">-1701D</span>
            </div>
            <div className="panel-6">
              06<span className="hop">-071984</span>
            </div>
            <div className="panel-7">
              07<span className="hop">-081940</span>
            </div>
            <div className="panel-8">
              08<span className="hop">-47148</span>
            </div>
            <div className="panel-9">
              09<span className="hop">-081966</span>
            </div>
          </div>
          <div>
            <div className="panel-10">
              10<span className="hop">-31</span>
            </div>
          </div>
        </div>
        <div className="right-frame">
          <div className="bar-panel">
            <div className="bar-6"></div>
            <div className="bar-7"></div>
            <div className="bar-8"></div>
            <div className="bar-9"></div>
            <div className="bar-10"></div>
          </div>
          <div className="corner-bg">
            <div className="corner"></div>
          </div>
          <div className="content">
            <h1>Hello</h1>

            <h2>Welcome to LCARS &#149; classNameic Theme</h2>

            <p>
              Some methods for creating work, such as employing intuition, are
              shared across the disciplines within the applied arts and fine
              art. Mark Getlein, the writer, suggests the principles of design
              are "almost instinctive", "built-in", "natural", and part of "our
              sense of 'rightness'." However, the intended application and
              context of the resulting works will vary greatly. This is not to
              say that production never involves problem-solving or creativity,
              nor that design always involves creativity. Designs are rarely
              perfect and are sometimes repetitive. The imperfection of a design
              may task a production position (e.g. production artist,
              construction worker) with utilizing creativity or problem-solving
              skills to compensate for what was overlooked in the design
              process. Likewise, a design may be a simple repetition (copy) of a
              known preexisting solution, requiring minimal, if any, creativity
              or problem-solving skills from the designer. "Process design" (in
              contrast to the "design process" mentioned above) is the planning
              of routine steps of a process aside from the expected result.
              Processes (in general) are treated as a product of design, not the
              method of design. The term originated with the industrial
              designing of chemical processes. With the increasing complexities
              of the information age, consultants and executives have found the
              term useful to describe the design of business processes as well
              as manufacturing processes.
            </p>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
