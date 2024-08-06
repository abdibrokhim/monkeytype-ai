import React from 'react';
import useColors from '../hooks/useColors';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { firebaseConfig } from '../db/firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Footer: React.FC = () => {
  const [showThemeWindow, setShowThemeWindow] = React.useState<boolean>(false);
  const { topic, setTopic, colorCodes, setColorCodes, genColorCodes, loading, appTheme, setAppTheme } = useColors();
  const [themes, setThemes] = React.useState<{ theme: string, colorCodes: string[] }[]>([]);
  const [selectedThemeIdx, setSelectedThemeIdx] = React.useState<number | null>(null);

  const db = getFirestore();

  const fetchThemes = async () => {
    const querySnapshot = await getDocs(collection(db, "themes"));
    const fetchedThemes: { theme: string, colorCodes: string[] }[] = [];
    querySnapshot.forEach((doc) => {
      fetchedThemes.push(doc.data() as { theme: string, colorCodes: string[] });
    });
    setThemes(fetchedThemes);
    console.log("===  ===");
    console.log("fetchedThemes: ", fetchedThemes);
  };

  React.useEffect(() => {
    fetchThemes();
  }, []);
  
  
  React.useEffect(() => {
    console.log("===  ===");
    console.log("appTheme: ", appTheme);
  }, [appTheme]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const handleSubmit = () => {
    setTopic(topic);
    genColorCodes();
  };

  const handleSaveTheme = async () => {
    try {
      await addDoc(collection(db, "themes"), {
        theme: topic,
        colorCodes: colorCodes
      });
      alert('Theme saved successfully!');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error saving theme.');
    } finally {
      fetchThemes();
      setTopic('');
      setColorCodes([]);
    }
  };

  const handleSelectAppTheme = (idx: number) => {
    if (idx === selectedThemeIdx) {
      setSelectedThemeIdx(null);
      setAppTheme([]);
    } else {
      setSelectedThemeIdx(idx);
      setAppTheme(themes[idx].colorCodes);
    }
    console.log('appTheme[0]: ',appTheme[0]);
  }

  const topicField = () => (
    <>
      <div className="flex flex-row gap-2 justify-center items-center">
        <input
          type="text"
          value={topic}
          onChange={handleInputChange}
          placeholder='enter topic...'
          className="w-full px-2 py-1 border rounded focus:outline-none focus:none focus:border-[var(--black-color)]"
        />
        <button
          disabled={!topic}
          className={`px-3 py-1 rounded bg-[var(--gray-200-color)] text-[var(--black-color)] ${
            !topic ? 'cursor-not-allowed' : 'group hover:bg-[var(--black-color)] hover:text-[var(--white-color)]'
          }`}
          onClick={handleSubmit}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );

  React.useEffect(() => {
    if (appTheme && appTheme.length > 0) {
      document.documentElement.style.setProperty('--white-color', appTheme[0]);
      document.documentElement.style.setProperty('--black-color', appTheme[1]);
      document.documentElement.style.setProperty('--gray-200-color', appTheme[2]);
      document.documentElement.style.setProperty('--gray-500-color', appTheme[1]);
      document.documentElement.style.setProperty('--gray-700-color', appTheme[3]);
      document.documentElement.style.setProperty('--green-color', appTheme[3]);
      document.documentElement.style.setProperty('--red-color', appTheme[3]);
      document.documentElement.style.setProperty('--blue-color', appTheme[3]);
    } else {
      document.documentElement.style.setProperty('--white-color', "#ffffff");
      document.documentElement.style.setProperty('--black-color', '#000000');
      document.documentElement.style.setProperty('--gray-200-color', 'rgb(229 231 235)');
      document.documentElement.style.setProperty('--gray-500-color', 'rgb(107 114 128)');
      document.documentElement.style.setProperty('--gray-700-color', 'rgb(55 65 81)');
      document.documentElement.style.setProperty('--green-color', 'rgb(34 197 94)');
      document.documentElement.style.setProperty('--red-color', 'rgb(239 68 68)');
      document.documentElement.style.setProperty('--blue-color', 'rgb(59 130 246)');
    }
  }, [appTheme]);

  return (
    <footer className="relative text-center leading-relaxed text-sm text-gray-500 text-xs">
      <div className="leftright grid grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-[300px] gap-[100px] user-select-none items-start justify-start">
        <div className="left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <a href="mailto:abdibrokhim@gmail.com" className={`textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-envelope mr-2"></i>
            <div className="text">contact</div>
          </a>
          <a href="https://buymeacoffee.com/abdibrokhim/" className={`textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-donate mr-2"></i>
            <div className="text">support</div>
          </a>
          <a href="https://github.com/abdibrokhim/monkeytype-ai/" className={`textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} target="_blank" rel="noreferrer noopener">
            <i className="fas fa-fw fa-code mr-2"></i>
            <div className="text">github</div>
          </a>
          <a href="https://discord.gg/nVtmDUN2sR" className={`textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} target="_blank" rel="noreferrer noopener">
            <i className="fab fa-fw fa-discord mr-2"></i>
            <div className="text">discord</div>
          </a>
          <a href="https://linkedin.com/in/abdibrokhim" className={`textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} target="_blank" rel="noreferrer noopener">
            <i className="fab fa-fw fa-linkedin mr-2"></i>
            <div className="text">linkedin</div>
          </a>
        </div>
        <div className="right grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0">
          <button 
            className={`current-theme textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} data-balloon-pos="left"
            onClick={() => setShowThemeWindow(!showThemeWindow)}
          >
            <i className="fas fa-fw fa-palette mr-2"></i>
            <div className="text">serika light</div>
          </button>
          <a href='https://github.com/abdibrokhim/monkeytype-ai' target="_blank" rel="noreferrer noopener" 
            className={`current-theme textButton flex items-center justify-start lg:justify-start my-1 transition ${
              appTheme && appTheme.length > 0 ? `text-[var(--gray-200-color)]` : 'text-gray-700 hover:text-black'}
            `} >
            <i className="fas fa-fw fa-code-branch mr-2"></i>
            <div className="text">version</div>
            <span id="newVersionIndicator" className="ml-2 bg-[var(--gray-700-color)] text-[var(--white-color)] rounded-full px-2">0.1</span>
          </a>
        </div>
      </div>
      {showThemeWindow && (
        <div className="absolute right-0 top-[-300px] mt-8 w-72 p-4 bg-[var(--white-color)] text-[var(--black-color)] text-xs rounded shadow-md z-50">
          <div>
            {themes.map((theme, index) => (
              <div key={index}>
                <button 
                  className={`flex justify-between items-center px-3 py-1 text-xs group w-full rounded ${
                    selectedThemeIdx === index ? 'bg-[var(--black-color)] text-[var(--white-color)]' : 'hover:bg-[var(--gray-200-color)] hover:text-[var(--black-color)]'}
                  `}
                  onClick={() => handleSelectAppTheme(index)}
                >
                  <span className="font-bold">{theme.theme.toLowerCase()}</span>
                  <div className="flex">
                    {theme.colorCodes.map((color, idx) => (
                      <div key={idx} className="w-5 h-5 rounded-full" style={{ backgroundColor: color, width: '15px', height: '15px', marginLeft: '4px' }}></div>
                    ))}
                  </div>
                </button>
                <div className="mb-2"></div>
              </div>
            ))}
            {colorCodes &&
            <div>   
              {loading 
                ? <span className='flex justify-center items-center mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx={4} cy={12} r={3} fill="currentColor"><animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"></animate></circle><circle cx={12} cy={12} r={3} fill="currentColor"><animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"></animate></circle><circle cx={20} cy={12} r={3} fill="currentColor"><animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"></animate></circle></svg>
                  </span> 
                :
                <div className='flex justify-between items-center mb-2 mt-4'> 
                  <span className="font-bold">{topic.toLowerCase()}</span>
                  <div className="flex">
                    {colorCodes.map((color, idx) => (
                      <div key={idx} className="w-5 h-5 rounded-full" style={{ backgroundColor: color, width: '15px', height: '15px', marginLeft: '4px' }}></div>
                    ))}
                  </div>
                  <button
                    disabled={!topic || colorCodes.length === 0}
                    className={`px-3 py-1 rounded bg-[var(--gray-200-color)] text-[var(--black-color)] ${
                      !topic || colorCodes.length === 0 ? 'cursor-not-allowed' : 'group hover:bg-[var(--black-color)] hover:text-[var(--white-color)]'
                    }`}
                    onClick={handleSaveTheme}
                    >
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>}
              </div>}
            </div>
          {topicField()}
        </div>
      )}
    </footer>
  );
};

export default Footer;
