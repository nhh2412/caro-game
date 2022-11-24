const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const App = {
    prevPlayerTurn: 1,
    currentPlayerTurn: 1,
    player1Move: [],
    player2Move: [],
    countWinPlayer1: 0,
    countWinPlayer2: 0,
    turn: function () {
        const _this = this
        // display current player turn
        $('.current-turn span').innerText = `Player ${this.currentPlayerTurn}`
        // move
        $$('td').forEach((tde, key) => {
            tde.onclick = function (e) {
                if (![..._this.player1Move, ..._this.player2Move].includes(key + 1)) {
                    if (_this.currentPlayerTurn == 1) {
                        this.innerText = 'X'
                        _this.currentPlayerTurn = 2
                        _this.player1Move.push(key + 1)
                        _this.turn()
                    } else if (_this.currentPlayerTurn == 2) {
                        this.innerText = 'O'
                        _this.player2Move.push(key + 1)
                        _this.currentPlayerTurn = 1
                        _this.turn()
                    }
                    _this.checkWin()
                }
            }
        })
    },
    checkWin: function () {
        let player1Move = this.player1Move.length
        this.player1Move.sort((a, b) => b - a)
        let h1 = 0
        // horizontal
        for (let i = 0; i < player1Move - 1; i++) {
            if (this.player1Move[i] - this.player1Move[i + 1] === 1) {
                h1++
                if (h1 === 4) {
                    this.countWinPlayer1++
                    $('.player1').innerText = this.countWinPlayer1
                    $('.modal').style.display = 'flex'
                    break
                }
            } else {
                h1 = 0
            }
        }
        // vertical
        for (let i = 0; i < player1Move; i++) {
            if (this.player1Move.find((e) => e === this.player1Move[i] - 27)) {
                if (this.player1Move.find((e) => e === this.player1Move[i] - 27 * 2)) {
                    if (this.player1Move.find((e) => e === this.player1Move[i] - 27 * 3)) {
                        if (this.player1Move.find((e) => e === this.player1Move[i] - 27 * 4)) {
                            this.countWinPlayer1++
                            $('.player1').innerText = this.countWinPlayer1
                            $('.modal').style.display = 'flex'
                            break
                        }
                    }
                }
            }
        }

        for (let i = 0; i < player1Move; i++) {
            if (this.player1Move.find((e) => e === this.player1Move[i] - 28)) {
                if (this.player1Move.find((e) => e === this.player1Move[i] - 28 * 2)) {
                    if (this.player1Move.find((e) => e === this.player1Move[i] - 28 * 3)) {
                        if (this.player1Move.find((e) => e === this.player1Move[i] - 28 * 4)) {
                            this.countWinPlayer1++
                            $('.player1').innerText = this.countWinPlayer1
                            $('.modal').style.display = 'flex'
                            break
                        }
                    }
                }
            }
        }

        for (let i = 0; i < player1Move; i++) {
            if (this.player1Move.find((e) => e === this.player1Move[i] - 26)) {
                if (this.player1Move.find((e) => e === this.player1Move[i] - 26 * 2)) {
                    if (this.player1Move.find((e) => e === this.player1Move[i] - 26 * 3)) {
                        if (this.player1Move.find((e) => e === this.player1Move[i] - 26 * 4)) {
                            this.countWinPlayer1++
                            $('.player1').innerText = this.countWinPlayer1
                            $('.modal').style.display = 'flex'
                            break
                        }
                    }
                }
            }
        }

        let player2Move = this.player2Move.length
        this.player2Move.sort((a, b) => b - a)
        let h2 = 0
        for (let i = 0; i < player2Move - 1; i++) {
            if (this.player2Move[i] - this.player2Move[i + 1] === 1) {
                h2++
                if (h2 === 4) {
                    this.countWinPlayer2++
                    $('.player2').innerText = this.countWinPlayer2
                    $('.modal').style.display = 'flex'
                    break
                }
            } else {
                h2 = 0
            }
        }

        for (let i = 0; i < player2Move; i++) {
            if (this.player2Move.find((e) => e === this.player2Move[i] - 27)) {
                if (this.player2Move.find((e) => e === this.player2Move[i] - 27 * 2)) {
                    if (this.player2Move.find((e) => e === this.player2Move[i] - 27 * 3)) {
                        if (this.player2Move.find((e) => e === this.player2Move[i] - 27 * 4)) {
                            this.countWinPlayer2++
                            $('.player2').innerText = this.countWinPlayer2
                            $('.modal').style.display = 'flex'
                            break
                        }
                    }
                }
            }
        }

        for (let i = 0; i < player2Move; i++) {
            if (this.player2Move.find((e) => e === this.player2Move[i] - 28)) {
                if (this.player2Move.find((e) => e === this.player2Move[i] - 28 * 2)) {
                    if (this.player2Move.find((e) => e === this.player2Move[i] - 28 * 3)) {
                        if (this.player2Move.find((e) => e === this.player2Move[i] - 28 * 4)) {
                            this.countWinPlayer2++
                            $('.player2').innerText = this.countWinPlayer2
                            $('.modal').style.display = 'flex'
                            break
                        }
                    }
                }
            }
        }

        for (let i = 0; i < player2Move; i++) {
            if (this.player2Move.find((e) => e === this.player2Move[i] - 26)) {
                if (this.player2Move.find((e) => e === this.player2Move[i] - 26 * 2)) {
                    if (this.player2Move.find((e) => e === this.player2Move[i] - 26 * 3)) {
                        if (this.player2Move.find((e) => e === this.player2Move[i] - 26 * 4)) {
                            this.countWinPlayer2++
                            $('.player2').innerText = this.countWinPlayer2
                            $('.modal').style.display = 'flex'
                            break
                        }
                    }
                }
            }
        }
    },

    resetRound: function () {
        $('.modal').onclick = () => {
            $('.modal').style.display = 'none'
            this.player1Move = []
            this.player2Move = []
            $$('td').forEach((tde) => {
                tde.innerText = ''
            })
            if (this.prevPlayerTurn === 1) {
                this.prevPlayerTurn = 2
                this.currentPlayerTurn = 2
            } else {
                this.prevPlayerTurn = 1
                this.currentPlayerTurn = 1
            }
        }
    },

    start: function () {
        this.turn()
        this.resetRound()
    },
}

App.start()
