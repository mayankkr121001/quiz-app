

const Question = ({ submitClick, onRadioSelect, data , selectedAnswer}) => {

    return (
        <div>
            <h3 className='text-3xl py-2 font-bold'>Question {data.id}</h3>
            <h3 className='text-xl py-1 font-semibold'>"{data.question}"</h3>

            <div className='flex flex-col gap-2 py-3'>
                {data.options.map((option, index) => (
                    <div>
                        <input onChange={onRadioSelect} type="radio" name="answer" id={index} value={option} checked={selectedAnswer === option} />
                        <label className='pl-2' htmlFor={index}>{option}</label>
                    </div>
                ))
                }
            </div>

            <div className='text-center'>
                <button onClick={submitClick} className='text-xl bg-green-600 w-[200px]  pt-1 pb-2 my-3 rounded tracking-wider active:bg-green-700'>Submit</button>
            </div>

        </div>
    )
}

export default Question