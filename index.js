const body = document.querySelector('body')

function init() {
    let content = `
    <div class="wrapper">
        <h1 class="h1">RSS Virtual Keyboard</h1>
        <form action="" method="post" class="form">
            <label for="textarea"></label>
            <textarea name="textarea" id="textarea" class="textarea"></textarea>
        </form>
        <div class="keyboard">
            <div class="row">
                <div class="keys">\`</div>
                <div class="keys">1</div>
                <div class="keys">2</div>
                <div class="keys">3</div>
                <div class="keys">4</div>
                <div class="keys">5</div>
                <div class="keys">6</div>
                <div class="keys">7</div>
                <div class="keys">8</div>
                <div class="keys">9</div>
                <div class="keys">0</div>
                <div class="keys">-</div>
                <div class="keys">=</div>
                <div class="keys btn">Backspace</div>
            </div>
            <div class="row">
                <div class="keys btn">Tab</div>
                <div class="keys">q</div>
                <div class="keys">w</div>
                <div class="keys">e</div>
                <div class="keys">r</div>
                <div class="keys">t</div>
                <div class="keys">y</div>
                <div class="keys">u</div>
                <div class="keys">i</div>
                <div class="keys">o</div>
                <div class="keys">p</div>
                <div class="keys">[</div>
                <div class="keys">]</div>
                <div class="keys">\\</div>
                <div class="keys btn">Delete</div>
            </div>
            <div class="row">
                <div class="keys btn">Caps Lock</div>
                <div class="keys">a</div>
                <div class="keys">s</div>
                <div class="keys">d</div>
                <div class="keys">f</div>
                <div class="keys">g</div>
                <div class="keys">h</div>
                <div class="keys">j</div>
                <div class="keys">k</div>
                <div class="keys">l</div>
                <div class="keys">;</div>
                <div class="keys">'</div>
                <div class="keys btn">Enter</div>
            </div>
            <div class="row">
                <div class="keys btn">Shift</div>
                <div class="keys">z</div>
                <div class="keys">x</div>
                <div class="keys">c</div>
                <div class="keys">v</div>
                <div class="keys">b</div>
                <div class="keys">n</div>
                <div class="keys">m</div>
                <div class="keys">,</div>
                <div class="keys">.</div>
                <div class="keys">/</div>
                <div class="keys btn">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-up"></use>
                      </svg>
                </div>
                <div class="keys btn">Shift</div>
            </div>
            <div class="row">
                <div class="keys btn">Ctrl</div>
                <div class="keys btn">Fn</div>
                <div class="keys btn">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#windows"></use>
                      </svg>
                </div>
                <div class="keys btn">Alt</div>
                <div class="keys space">Space</div>
                <div class="keys btn">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-left"></use>
                      </svg>
                </div>
                <div class="keys btn">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-down"></use>
                      </svg>
                </div>
                <div class="keys btn">
                    <svg class="svg">
                        <use xlink:href="./icon/sprite.svg#arrow-right"></use>
                      </svg>
                </div>
                <div class="keys btn">Ctrl</div>
            </div>
        </div>
        <div class="message">
            <p class="message-text">Клавиатура создана в операционной системе Windows</p>
            <p class="message-text">Для переключения языка комбинация: shift + alt</p>
        </div>
    </div>
    `
    body.insertAdjacentHTML('afterbegin', content)
}

init()