import Mon from "./Mon"
import './Ring.css';
import Result from "./Result";

export default function Ring() {

    let speed1 = Math.floor(Math.random() * 70 + 30);
    let attack1 = Math.floor(Math.random() * 70 + 30);
    let defense1 = Math.floor(Math.random() * 70 + 30);

    let speed2 = Math.floor(Math.random() * 70 + 30);
    let attack2 = Math.floor(Math.random() * 70 + 30);
    let defense2 = Math.floor(Math.random() * 70 + 30);

    const stats1 = {
        num: 1,
        speed: speed1,
        attack: attack1,
        defense: defense1
    }

    const stats2 = {
        num: 2,
        speed: speed2,
        attack: attack2,
        defense: defense2
    }

    let winner = 0;

    if (speed1 > speed2 && attack1 > defense2) {
        winner = 1;
    } else if (speed2 > speed1 && attack2 > defense1) {
        winner = 2;


    } else {
        // If neither condition is met, it's a draw or the first entity wins by default
        speed1 + attack1 + defense1 > speed2 + attack2 + defense2 ? winner = 1 : winner = 2
    }

    console.log(winner);



    return (
        <div className="Ring">
            <Mon {...stats1} />
            <Result result={winner} />
            <Mon {...stats2} />
        </div>
    )
}