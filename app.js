let teamScores = {
    home: 0,
    away: 0
}
let playerTotal = 0
let playerPairs = 1

function addScore(team, points) {
    teamScores[team] += points

    drawScore()
}

function addPlayer() {
    if (playerTotal % 2 == 0) {
        const scoreboardElement = document.getElementById("scoreboard")
        playerTotal += 1
        teamScores[`player${playerTotal}`] = 0
        scoreboardElement.innerHTML += `                    
        <div id="playerPairs${playerPairs}" class="d-flex justify-content-center">
            <div class="text-center me-5">
                <h1 class="team-size shadow-glow">PLAYER ${playerTotal}</h1>
                <h1 class="score-card score-size shadow-glow" id="player${playerTotal}">00</h1>
            </div>
        </div>`
        addPlayerControls()
    }
    else {
        const customPairElement = document.getElementById(`playerPairs${playerPairs}`)
        playerTotal += 1
        teamScores[`player${playerTotal}`] = 0
        customPairElement.innerHTML += `            
        <div class="text-center">
            <h1 class="team-size shadow-glow">PLAYER ${playerTotal}</h1>
            <h1 class="score-card score-size shadow-glow" id="player${playerTotal}">00</h1>
        </div>
        `
        playerPairs += 1
        addPlayerControls()
    }
}

function addPlayerControls() {
    const topControlElement = document.getElementById("topControlRow")
    const bottomControlElement = document.getElementById("bottomControlRow")

    topControlElement.innerHTML += `
    <button onclick="addScore('player${playerTotal}', 2)" class="shadow-glow-subtle score-button">PLAYER ${playerTotal} +2</button>
    `
    bottomControlElement.innerHTML += `
    <button onclick="addScore('player${playerTotal}', 3)" class="shadow-glow-subtle score-button">PLAYER ${playerTotal} +3</button>
    `
}

function resetScore() {
    let keys = Object.keys(teamScores)
    for (let index = 0; index < keys.length; index++) {
        teamScores[keys[index]] = 0
    }
    drawScore()
}

function drawScore() {
    const homeScoreElement = document.getElementById('homeScore')
    const awayScoreElement = document.getElementById('awayScore')

    homeScoreElement.innerText = formatScore(teamScores.home)
    awayScoreElement.innerText = formatScore(teamScores.away)

    if (playerTotal > 0) {
        for (let index = 1; index <= playerTotal; index++) {
            const playerScoreElement = document.getElementById(`player${index}`)
            playerScoreElement.innerText = formatScore(teamScores[`player${index}`])
        }
    }
}

function formatScore(score) {
    if (score < 10) {
        return '0' + score
    }
    return String(score)
}
