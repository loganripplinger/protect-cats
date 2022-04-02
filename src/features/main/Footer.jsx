import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <h3>FAQ</h3>
      <p>Q: Why is the similarity so different from what I was expecting?</p>
      <p>A: I can think of at least four reasons for this.</p>
      <ol>
        <li>
          Your guess, or the target word, is polysemous, and the meaning that is
          similar is rarely used. This is why "leather" is far from "patent."
          Sometimes one usage is simply more popular (among newspaper reporters,
          which is the corpus): "display" is more often a verb than a noun, and
          its vector reflects this.
        </li>
        <li>
          You capitalized your word. SmartKey and some other keyboards stupidly
          ignore the autocapitalize settings that I have explicitly set in the
          HTML, and there does not seem to be anything I can do about this. I
          added a checkbox to help you avoid this.
        </li>
        <li>
          Your word and the target word belong to different parts of speech.
          Sometimes this matters a lot. Sometimes it matters only a little.
        </li>
        <li>
          By "similarity", we really mean "used in similar contexts". The
          principle was articulated by John Rupert Firth, who wrote, "[Y]ou
          shall know a word by the company it keeps." So, "love" and "hate" may
          seem like opposites, but they will often score similarly. The actual
          opposite of "love" is probably something like "Arizona Diamondbacks",
          or "carburetor".
        </li>
      </ol>
    </div>
  );
}
