import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/service";
import { quiz } from "./types/types";
import { questionProps } from "./types/types";


function App() {
  
   let [quiz, setQuiz] = useState<quiz[]>([]);
  let [wright, setWright] = useState("");
 
const QuestionUi: React.FC<questionProps> = ({
  question,
  options,
  handelSubmit,
}) => {
  let [selectedAns, setSelectedAns] = useState("");
  const handelSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };

  function createMarkup(){ 
    return {__html: question}; };

  return (
    <div className='question'>
      <div className='questionBox'>
      <h1 dangerouslySetInnerHTML ={createMarkup()} ></h1>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) =>
          handelSubmit(e, selectedAns)
        }
      >
        {options.map((e: string, ind: number) => {
          return (
            <div className='options' key={ind}>
              <label>
                <input
                  type="radio"
                  name="opt"
                  value={e}
                  onChange={handelSelection}
                  required
                  checked={selectedAns === e}
                />
                {e}
              </label>
            </div>
          );
        })}
          <div className="fun" >
            {selectedAns ==="" ? (" ") : <>{selectedAns===quiz[0].answer ? "Correct" : "Incorrect"}</>}
          </div>
        <input type="submit" value="submit" />
      </form>
      </div>
    </div>
  );
};


  
 
  
  useEffect(() => {
    const fetch = async () => {
      const data = await getQuizDetails();
      // console.log(data)
      setQuiz(data);
    };
    fetch();
  }, []);

  const handelSubmit = (
    e: React.FormEvent<EventTarget>,
    selectedAns: string
  ) => {
    setWright(selectedAns)
  }; 
  if (!quiz.length) {
    return <h1 className="loader">Loading...</h1>;
  }
  return (
    <div>
        <QuestionUi
          question={quiz[0].question}
          options={quiz[0].options}
          handelSubmit={()=>handelSubmit}
        />
    </div>
  );
}

export default App;
