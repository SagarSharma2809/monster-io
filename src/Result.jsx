import './Result.css'


export default function Result({ result }) {


    return (
        <div className="Result">
            {/* {result === 0 && `Tie`} */}
            {result === 1 ? `Mon1 wins!` : `Mon2 wins!`}
        </div>
    )


}