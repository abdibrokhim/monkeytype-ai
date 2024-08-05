import React from "react";
import GeneratedWords from "./components/GeneratedRandomWords";
import RestartButton from "./components/RestartButton";
import Results from "./components/Output";
import UserTypings from "./components/UserType";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TestConfigModal from "./components/TestConfigModal";
import ButtonGroup from "./components/ButtonGroup";

const App: React.FC = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } = useEngine();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="sticky top-0 z-50 bg-white" />
      <Header className="sticky top-16 z-40 bg-white" />
     
      <ButtonGroup />
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords key={words} words={words} />
        {/* User typed characters will be overlayed over the generated words */}
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
      <Footer className="mt-auto bg-white" />
    </div>
  );
};

const WordsContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative text-3xl max-w leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const CountdownTimer: React.FC<{ timeLeft: number }> = ({ timeLeft }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
 