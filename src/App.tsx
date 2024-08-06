import React, { useEffect } from "react";
import "./App.css";
import GeneratedWords from "./components/GeneratedRandomWords";
import RestartButton from "./components/RestartButton";
import Results from "./components/Output";
import UserTypings from "./components/UserType";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import { Analytics } from "@vercel/analytics/react"

import Footer from "./components/Footer";
import Header from "./components/Header";


import ButtonGroup from "./components/ButtonGroup";

const App: React.FC = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped, loading, appTheme } = useEngine();

  return (
    <div className="px-[100px] bg-[var(--white-color)] text-[var(--black-color)]">
    <Analytics />
    <div className="flex flex-col min-h-screen py-[30px]">
      <div className="z-40">
        <Header />
      </div>

      <div className="py-8">
        <ButtonGroup />
      </div>
     
     <div className="py-8 flex-grow">
        <CountdownTimer timeLeft={timeLeft} />
        {loading && <p>Loading...</p>}
        <WordsContainer>
          <GeneratedWords key={words} words={words} />
          <UserTypings
            className="absolute inset-0"
            words={words}
            userInput={typed}
          />
        </WordsContainer>
        <RestartButton
          className="mx-auto mt-10 hover:bg-[var(--black-color)] hover:text-[var(--white-color)] text-[var(--black-color)]"
          onRestart={restart}
        />
        <Results
          className="mt-10"
          state={state}
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
        />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
    </div>
  );
};

const WordsContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative text-2xl max-w leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const CountdownTimer: React.FC<{ timeLeft: number }> = ({ timeLeft }) => {
  return (
    <h2 className="[var(--black-color)] text-md">
      <span className="font-bold">{timeLeft}</span>
    </h2>
  );
};

export default App;
 