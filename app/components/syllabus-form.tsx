"use client";

import { useState } from "react";

export function SyllabusForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full shrink-0 flex-col gap-4 rounded-[10px] bg-canvas p-[26px] lg:w-[430px]"
    >
      <h3 className="text-h4 text-ink">Get the full syllabus</h3>
      <p className="text-body-s text-ink-2">
        See the week-by-week plan, project briefs, and enrollment options.
      </p>
      <label className="flex flex-col gap-2">
        <span className="text-label-m text-ink-2">Work email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-[10px] border border-line-strong bg-surface px-4 py-3.5 text-body-m text-ink outline-none placeholder:text-ink-3 focus:border-cyan"
        />
      </label>
      <button
        type="submit"
        disabled={submitted}
        className="w-full cursor-pointer rounded-full bg-linear-to-r from-violet to-cyan px-7 py-4 text-label-m text-canvas transition hover:brightness-110 disabled:cursor-default disabled:opacity-80"
      >
        {submitted ? "Check your inbox ✓" : "Send me the syllabus"}
      </button>
      <p className="text-caption text-ink-3">
        No spam. One useful email, then you decide.
      </p>
    </form>
  );
}
