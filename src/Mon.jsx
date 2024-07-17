import './Mon.css';

export default function Mon({ num, speed, attack, defense }) {

    let randomNumber = Math.floor(Math.random() * 151 + 1);

    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`



    let isSpeed = speed > attack && speed > defense;
    let isAttack = attack > speed && attack > defense;
    let isDefense = defense > speed && defense > attack;

    const styles = {
        backgroundColor: isSpeed ? 'lightblue' : (isAttack ? 'lightcoral' : 'lightgreen')
    };


    return (
        <div className='Mon' style={styles}>
            <h2>Monsterr {num}</h2 >
            <img src={url} />

            <p className={`${isSpeed && 'speciality'}`}> Speed: {speed} </p >
            <p className={`${isAttack && 'speciality'}`}> Attack: {attack} </p>
            <p className={`${isDefense && 'speciality'}`}> Defense: {defense} </p>

        </div>
    )

}


