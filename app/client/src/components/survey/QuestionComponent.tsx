import QuestionList from './QuestionList'
import { useState, useEffect } from 'react'

type prop = {
    data: any
}

const QuestionComponent = ({ data }: prop) => {

    const [questions, setQuestions] = useState<any[]>([])
    const border = { border: '0.2em solid #092E3B', background: '#e6e6e6' }

    useEffect(() => {
        setQuestions(QuestionList)
    }, [])

    useEffect(() => {
        const output = questions.map(q => q.c)
        data(output)
    }, [questions])

    const handleClick = (q_index: number, o_index: number, option: string) => {
        const curr_q = questions[q_index]
        let changed_q: any
        curr_q.c === o_index ? changed_q = {...curr_q, c:-1} : changed_q = {...curr_q, c:o_index}
        setQuestions(questions.map((q: any, i: number) => i === q_index ? changed_q : q))
    }

    return (
        <div style={{marginBottom: '3em'}}>
            <div>
                {questions.map((q:any, q_index:number) => 
                    {
                        if (q.a === 1) {
                            return (
                                <div key={q_index}>
                                    <div className="question">{q_index+1}. {q.q}</div>
                                    <div className="option flex">
                                        {q.o.map((option:string, o_index:number) =>
                                                o_index === q.c
                                                    ? <button key={o_index} type="button" className="button" onClick={()=>handleClick(q_index, o_index, option)} style={border}>{option}</button>
                                                    : <button key={o_index} type="button" className="button" onClick={()=>handleClick(q_index, o_index, option)}>{option}</button>
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    }
                )}
            </div>
        </div>
    )
}

export default QuestionComponent